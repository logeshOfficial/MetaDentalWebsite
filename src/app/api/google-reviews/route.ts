import { NextResponse } from 'next/server';

/* ─────────────────────────────────────────────────────────────────────────
   Two fetch strategies, tried in order:

   1. Google Business Profile API (full reviews, all pages)
      Requires: GOOGLE_BUSINESS_CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN,
                ACCOUNT_ID, LOCATION_ID
      Apply at: https://developers.google.com/my-business/content/prereqs

   2. Google Places API — New  (rating + count + up to 5 reviews)
      Requires: GOOGLE_PLACES_API_KEY only
      Enable at: Google Cloud Console → APIs & Services → Library
                 Search "Places API (New)" → Enable
      Get key  : APIs & Services → Credentials → Create API Key
                 Restrict to: Places API (New), HTTP referrers: metadental.in/*

   If neither is configured the route returns 503 and the component
   silently shows the fallback cards from home.ts.
   ───────────────────────────────────────────────────────────────────────── */

/* ── Types ── */
type ReviewOut = {
  id?: string;
  name: string;
  photo?: string | null;
  rating: number;
  text: string;
  date?: string | null;
  location?: string;
};
type FeedOut = {
  rating: number;
  count: number;
  updatedAt: string;
  reviews: ReviewOut[];
};

/* ── Simple in-memory cache (1 h) ── */
let cache: { expires: number; value: FeedOut } | undefined;

/* ═══════════════════════════════════════════════════════════════════════════
   STRATEGY 1 — Google Business Profile API (OAuth2, full reviews)
   ═══════════════════════════════════════════════════════════════════════════ */
type GBPReview = {
  reviewId: string;
  reviewer?: { displayName?: string; profilePhotoUrl?: string };
  starRating?: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE';
  comment?: string;
  createTime?: string;
};
type GBPPage = {
  reviews?: GBPReview[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
};
const starMap = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 } as const;

async function gbpAccessToken(): Promise<string> {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id:     process.env.GOOGLE_BUSINESS_CLIENT_ID!,
      client_secret: process.env.GOOGLE_BUSINESS_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_BUSINESS_REFRESH_TOKEN!,
      grant_type:    'refresh_token',
    }),
    cache: 'no-store',
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GBP auth failed: ${res.status} ${body}`);
  }
  return ((await res.json()) as { access_token: string }).access_token;
}

async function fetchGBP(): Promise<FeedOut> {
  const token  = await gbpAccessToken();
  const parent = `accounts/${process.env.GOOGLE_BUSINESS_ACCOUNT_ID}/locations/${process.env.GOOGLE_BUSINESS_LOCATION_ID}`;
  const raw: GBPReview[] = [];
  let nextPageToken = '';
  let rating = 0;
  let count  = 0;

  do {
    const q = new URLSearchParams({ pageSize: '50', orderBy: 'updateTime desc' });
    if (nextPageToken) q.set('pageToken', nextPageToken);
    const res = await fetch(
      `https://mybusiness.googleapis.com/v4/${parent}/reviews?${q}`,
      { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' },
    );
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`GBP reviews failed: ${res.status} ${body}`);
    }
    const page = (await res.json()) as GBPPage;
    raw.push(...(page.reviews ?? []));
    rating         = page.averageRating    ?? rating;
    count          = page.totalReviewCount ?? count;
    nextPageToken  = page.nextPageToken    ?? '';
  } while (nextPageToken);

  return {
    rating,
    count,
    updatedAt: new Date().toISOString(),
    reviews: raw
      .filter((r) => r.comment?.trim())
      .map((r) => ({
        id:     r.reviewId,
        name:   r.reviewer?.displayName  || 'Google user',
        photo:  r.reviewer?.profilePhotoUrl || null,
        rating: r.starRating ? starMap[r.starRating] : 5,
        text:   r.comment!.trim(),
        date:   r.createTime || null,
      })),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   STRATEGY 2 — Places API (New) — simple key, works immediately
   Returns rating + count + up to 5 recent reviews
   ═══════════════════════════════════════════════════════════════════════════ */
type PlaceReview = {
  name: string;
  rating: number;
  text?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string };
  publishTime?: string;
};
type PlaceResult = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlaceReview[];
};

async function fetchPlaces(): Promise<FeedOut> {
  const key     = process.env.GOOGLE_PLACES_API_KEY!;
  const placeId = process.env.GOOGLE_PLACE_ID!;
  const fields  = 'rating,userRatingCount,reviews';

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}?reviews_sort=newest`,
    {
      headers: {
        'X-Goog-Api-Key':   key,
        'X-Goog-FieldMask': fields,
      },
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Places API ${res.status}: ${body}`);
  }
  const place = (await res.json()) as PlaceResult;

  return {
    rating:    place.rating          ?? 4.9,
    count:     place.userRatingCount ?? 217,
    updatedAt: new Date().toISOString(),
    reviews: (place.reviews ?? [])
      .filter((r) => r.text?.text?.trim())
      .map((r, i) => ({
        id:     `place-${i}`,
        name:   r.authorAttribution?.displayName || 'Google user',
        photo:  r.authorAttribution?.photoUri    || null,
        rating: r.rating ?? 5,
        text:   r.text!.text!.trim(),
        date:   r.publishTime || null,
      })),
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   ROUTE HANDLER — tries GBP first, falls back to Places
   ═══════════════════════════════════════════════════════════════════════════ */
export async function GET(request: Request) {
  // Allow cache-busting via ?nocache=1 for debugging
  const url = new URL(request.url);
  if (url.searchParams.get('nocache') === '1') cache = undefined;

  // Return cached response if still fresh
  if (cache && cache.expires > Date.now()) {
    return NextResponse.json(cache.value, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  }

  const hasGBP = [
    process.env.GOOGLE_BUSINESS_CLIENT_ID,
    process.env.GOOGLE_BUSINESS_CLIENT_SECRET,
    process.env.GOOGLE_BUSINESS_REFRESH_TOKEN,
    process.env.GOOGLE_BUSINESS_ACCOUNT_ID,
    process.env.GOOGLE_BUSINESS_LOCATION_ID,
  ].every(Boolean);

  const hasPlaces = Boolean(
    process.env.GOOGLE_PLACES_API_KEY && process.env.GOOGLE_PLACE_ID,
  );

  if (!hasGBP && !hasPlaces) {
    return NextResponse.json({ configured: false }, { status: 503 });
  }

  try {
    const value = hasGBP ? await fetchGBP() : await fetchPlaces();
    cache = { value, expires: Date.now() + 60 * 60 * 1000 };
    return NextResponse.json(value, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch (err) {
    // If GBP failed and Places is configured, try that as fallback
    if (hasGBP && hasPlaces) {
      try {
        const value = await fetchPlaces();
        cache = { value, expires: Date.now() + 60 * 60 * 1000 };
        return NextResponse.json(value, {
          headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
        });
      } catch { /* fall through */ }
    }
    const message = err instanceof Error ? err.message : String(err);
    console.error('[google-reviews]', message);
    // Return the error detail so we can debug
    return NextResponse.json(
      { error: 'Reviews temporarily unavailable', detail: message },
      { status: 502 },
    );
  }
}
