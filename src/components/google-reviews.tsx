'use client';

import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Star } from 'lucide-react';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { reviews as fallbackReviews } from '@/data/home';
import { site } from '@/lib/site';

/* ─────────────────────────────────────────────────────────────────────────
   GoogleReviews
   - Fetches live data from /api/google-reviews (Places API)
   - Shows 3 cards at a time in a fixed-height grid
   - Rotates ONE card every 5 s (carousel-style advance by 1)
   - All cards same height — long text is clamped with "..."
   - Pauses on hover / focus / reduced-motion preference
   ───────────────────────────────────────────────────────────────────────── */

const VISIBLE   = 3;      // cards shown at once
const ROTATION_MS = 5000; // ms between auto-advances

type Review = {
  id?: string;
  name: string;
  photo?: string | null;
  rating: number;
  text: string;
  date?: string | null;
  location?: string;
};
type ReviewFeed = { rating: number; count: number; reviews: Review[] };

/* reduced-motion hook */
const subscribeToReducedMotion = (cb: () => void) => {
  const m = window.matchMedia('(prefers-reduced-motion: reduce)');
  m.addEventListener('change', cb);
  return () => m.removeEventListener('change', cb);
};
const rmSnapshot       = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const rmServerSnapshot = () => false;

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="star-row" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill={i < rating ? 'currentColor' : 'none'} aria-hidden="true" />
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg className="google-g" width="18" height="18" viewBox="0 0 24 24" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function ReviewCard({ review, fading }: { review: Review; fading: boolean }) {
  const [expanded, setExpanded] = useState(false);

  const dateLabel = review.date
    ? new Intl.DateTimeFormat('en-IN', { month: 'short', year: 'numeric' }).format(new Date(review.date))
    : review.location ?? '';

  return (
    <article className={`review-card${fading ? ' review-card--out' : ''}`}>
      <div className="review-card-top">
        {review.photo ? (
          <span
            className="reviewer-photo"
            aria-hidden="true"
            style={{ backgroundImage: `url(${review.photo})` }}
          />
        ) : (
          <div className="reviewer-avatar" aria-hidden="true">{review.name[0]}</div>
        )}
        <div className="reviewer-info">
          <strong className="reviewer-name">{review.name}</strong>
          <span className="reviewer-location">{dateLabel}</span>
        </div>
        <GoogleG />
      </div>

      <StarRow rating={review.rating} />

      {/* Text: clamped by default, fully visible when expanded */}
      <p className={`review-text${expanded ? ' review-text--expanded' : ''}`}>
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Only show toggle if text is long enough to be clamped */}
      {review.text.length > 180 && (
        <button
          className="review-read-more"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>
      )}
    </article>
  );
}

export function GoogleReviews() {
  const [feed, setFeed] = useState<ReviewFeed>({
    rating:  4.9,
    count:   217,
    reviews: [...fallbackReviews],
  });
  const [offset, setOffset] = useState(0);   // start index into reviews array
  const [fading, setFading]  = useState(false);
  const [paused, setPaused]  = useState(false);

  const reducedMotion  = useSyncExternalStore(subscribeToReducedMotion, rmSnapshot, rmServerSnapshot);
  const rotationPaused = paused || reducedMotion;
  const total          = feed.reviews.length;

  /* fetch live data */
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_STATIC_DEMO === 'true') return;
    fetch('/api/google-reviews')
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data: ReviewFeed) => { if (data.reviews?.length) setFeed(data); })
      .catch(() => undefined);
  }, []);

  /* advance by 1 with a brief fade */
  const advance = (dir: 1 | -1 = 1) => {
    setFading(true);
    setTimeout(() => {
      setOffset((o) => (o + dir + total) % total);
      setFading(false);
    }, 280);
  };

  /* auto-rotate */
  useEffect(() => {
    if (rotationPaused || total <= VISIBLE) return;
    const id = window.setInterval(() => advance(1), ROTATION_MS);
    return () => window.clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotationPaused, total]);

  /* pick VISIBLE cards wrapping around the array */
  const visible = Array.from({ length: Math.min(VISIBLE, total) }, (_, i) =>
    feed.reviews[(offset + i) % total],
  );

  return (
    <div className="review-section-inner">
      {/* ── Left: heading + badge ── */}
      <div className="review-section-intro">
        <p className="eyebrow">Patient perspectives</p>
        <h2>Hear it from our patients.</h2>
        <p>Recent patient experiences shared on our Google Business Profile.</p>
        <div className="review-rating-badge">
          <span className="badge-score">{feed.rating.toFixed(1)}</span>
          <div className="badge-stars">
            <StarRow rating={Math.round(feed.rating)} />
            <span className="badge-count">{feed.count} Google Reviews</span>
          </div>
        </div>
      </div>

      {/* ── Right: rotating cards ── */}
      <div
        className="review-cards-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }}
      >
        {/* 3-column fixed-height grid */}
        <div className="review-cards-scroll" aria-live={rotationPaused ? 'polite' : 'off'}>
          {visible.map((review, i) => (
            <ReviewCard
              key={`${offset}-${i}`}
              review={review}
              fading={fading}
            />
          ))}
        </div>

        {/* Page counter instead of 200+ dots */}
        {total > VISIBLE && (
          <div className="review-counter" aria-live="polite" aria-atomic="true">
            <span className="review-counter-bar">
              <span
                className="review-counter-fill"
                style={{ width: `${((offset + 1) / total) * 100}%` }}
              />
            </span>
            <span className="review-counter-label">
              {offset + 1} – {Math.min(offset + VISIBLE, total)} of {total} reviews
            </span>
          </div>
        )}

        {/* Controls row */}
        <div className="review-controls">
          {total > VISIBLE && (
            <div className="review-pager">
              <button type="button" onClick={() => advance(-1)} aria-label="Previous review">
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => setPaused((v) => !v)}
                aria-label={paused ? 'Resume rotation' : 'Pause rotation'}
              >
                {paused ? <Play size={15} /> : <Pause size={15} />}
              </button>
              <button type="button" onClick={() => advance(1)} aria-label="Next review">
                <ArrowRight size={17} />
              </button>
            </div>
          )}
          <a
            href={site.maps}
            className="button secondary"
            target="_blank"
            rel="noreferrer"
            data-event="google_reviews_click"
          >
            Read all reviews on Google <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
