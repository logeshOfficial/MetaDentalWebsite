import { NextResponse } from 'next/server';

type GoogleReview = {
  reviewId: string;
  reviewer?: { displayName?: string; profilePhotoUrl?: string };
  starRating?: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE';
  comment?: string;
  createTime?: string;
};

type GoogleReviewPage = {
  reviews?: GoogleReview[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
};

const stars = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 } as const;
let cache: { expires: number; value: unknown } | undefined;

async function accessToken() {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_BUSINESS_CLIENT_ID!,
      client_secret: process.env.GOOGLE_BUSINESS_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_BUSINESS_REFRESH_TOKEN!,
      grant_type: 'refresh_token',
    }),
    cache: 'no-store',
  });
  if (!response.ok) throw new Error('Google authorization failed');
  return ((await response.json()) as { access_token: string }).access_token;
}

async function loadReviews() {
  if (cache && cache.expires > Date.now()) return cache.value;
  const token = await accessToken();
  const parent = `accounts/${process.env.GOOGLE_BUSINESS_ACCOUNT_ID}/locations/${process.env.GOOGLE_BUSINESS_LOCATION_ID}`;
  const reviews: GoogleReview[] = [];
  let nextPageToken = '';
  let rating = 0;
  let count = 0;

  do {
    const query = new URLSearchParams({ pageSize: '50', orderBy: 'updateTime desc' });
    if (nextPageToken) query.set('pageToken', nextPageToken);
    const response = await fetch(
      `https://mybusiness.googleapis.com/v4/${parent}/reviews?${query}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      },
    );
    if (!response.ok) throw new Error('Google reviews request failed');
    const page = (await response.json()) as GoogleReviewPage;
    reviews.push(...(page.reviews ?? []));
    rating = page.averageRating ?? rating;
    count = page.totalReviewCount ?? count;
    nextPageToken = page.nextPageToken ?? '';
  } while (nextPageToken);

  const value = {
    rating,
    count,
    updatedAt: new Date().toISOString(),
    reviews: reviews
      .filter((review) => review.comment?.trim())
      .map((review) => ({
        id: review.reviewId,
        name: review.reviewer?.displayName || 'Google user',
        photo: review.reviewer?.profilePhotoUrl || null,
        rating: review.starRating ? stars[review.starRating] : 0,
        text: review.comment!.trim(),
        date: review.createTime || null,
      })),
  };
  cache = { value, expires: Date.now() + 60 * 60 * 1000 };
  return value;
}

export async function GET() {
  const required = [
    process.env.GOOGLE_BUSINESS_CLIENT_ID,
    process.env.GOOGLE_BUSINESS_CLIENT_SECRET,
    process.env.GOOGLE_BUSINESS_REFRESH_TOKEN,
    process.env.GOOGLE_BUSINESS_ACCOUNT_ID,
    process.env.GOOGLE_BUSINESS_LOCATION_ID,
  ];
  if (required.some((value) => !value)) {
    return NextResponse.json({ configured: false }, { status: 503 });
  }
  try {
    return NextResponse.json(await loadReviews(), {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  } catch {
    return NextResponse.json({ error: 'Reviews are temporarily unavailable' }, { status: 502 });
  }
}
