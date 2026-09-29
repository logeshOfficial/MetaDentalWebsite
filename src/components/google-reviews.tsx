'use client';

import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Star } from 'lucide-react';
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { reviews as fallbackReviews } from '@/data/home';
import { site } from '@/lib/site';

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
const PAGE_SIZE = 6;
const ROTATION_MS = 12000;
const subscribeToReducedMotion = (callback: () => void) => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};
const reducedMotionSnapshot = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const serverReducedMotionSnapshot = () => false;

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
    <svg
      className="google-g"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-label="Google"
      role="img"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-3.54 3.71-3.54z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function GoogleReviews() {
  const [feed, setFeed] = useState<ReviewFeed>({
    rating: 4.9,
    count: 212,
    reviews: [...fallbackReviews],
  });
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    reducedMotionSnapshot,
    serverReducedMotionSnapshot,
  );
  const rotationPaused = paused || reducedMotion;
  const pages = Math.max(1, Math.ceil(feed.reviews.length / PAGE_SIZE));

  useEffect(() => {
    fetch('/api/google-reviews')
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data: ReviewFeed) => {
        if (data.reviews?.length) setFeed(data);
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    if (rotationPaused || pages < 2) return;
    const timer = window.setInterval(
      () => setPage((current) => (current + 1) % pages),
      ROTATION_MS,
    );
    return () => window.clearInterval(timer);
  }, [rotationPaused, pages]);

  const visible = useMemo(() => {
    const length = Math.min(PAGE_SIZE, feed.reviews.length);
    return Array.from(
      { length },
      (_, offset) => feed.reviews[(page * PAGE_SIZE + offset) % feed.reviews.length],
    );
  }, [feed.reviews, page]);
  const move = (direction: number) => setPage((current) => (current + direction + pages) % pages);

  return (
    <div className="review-section-inner">
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
      <div
        className="review-cards-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
      >
        <div className="review-cards-scroll" aria-live={rotationPaused ? 'polite' : 'off'}>
          {visible.map((review, index) => (
            <article key={review.id || `${review.name}-${index}`} className="review-card">
              <div className="review-card-top">
                {review.photo ? (
                  <span
                    className="reviewer-photo"
                    aria-hidden="true"
                    style={{ backgroundImage: `url(${review.photo})` }}
                  />
                ) : (
                  <div className="reviewer-avatar" aria-hidden="true">
                    {review.name[0]}
                  </div>
                )}
                <div>
                  <strong className="reviewer-name">{review.name}</strong>
                  <span className="reviewer-location">
                    {review.date
                      ? new Intl.DateTimeFormat('en-IN', {
                          month: 'short',
                          year: 'numeric',
                        }).format(new Date(review.date))
                      : review.location}
                  </span>
                </div>
                <GoogleG />
              </div>
              <StarRow rating={review.rating} />
              <p className="review-text">&ldquo;{review.text}&rdquo;</p>
            </article>
          ))}
        </div>
        <div className="review-controls">
          {pages > 1 && (
            <div className="review-pager">
              <button type="button" onClick={() => move(-1)} aria-label="Previous reviews">
                <ArrowLeft size={17} />
              </button>
              <span>
                {page + 1} / {pages}
              </span>
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? 'Resume review rotation' : 'Pause review rotation'}
              >
                {paused ? <Play size={15} /> : <Pause size={15} />}
              </button>
              <button type="button" onClick={() => move(1)} aria-label="Next reviews">
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
