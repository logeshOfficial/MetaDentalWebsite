'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Star, MapPin } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { reviews } from '@/data/home';
import type { Article } from '@/data/articles';
import { site } from '@/lib/site';

/* ─────────────────────────────────────────────
   EXTERIOR SLIDESHOW
   Starts at exterior.jpg (always exists).
   exterior-1/2/3.jpg join the rotation when you
   drop those files into public/images/.
   ───────────────────────────────────────────── */
const ALL_SLIDES = [
  { src: '/images/exterior.jpg',   alt: 'META DENTAL clinic entrance on East Coast Road, Panaiyur' },
  { src: '/images/exterior-1.jpg', alt: 'META DENTAL — signboard and ramp, Panaiyur' },
  { src: '/images/exterior-2.jpg', alt: 'META DENTAL — top-down view of signboard and glass frontage' },
  { src: '/images/exterior-3.jpg', alt: 'META DENTAL — street level view with Invisalign Provider board' },
];

export function ExteriorSlideshow() {
  const [live,   setLive]   = useState<number[]>([0]);
  const [cur,    setCur]    = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleLoad  = (idx: number) =>
    setLive((p) => p.includes(idx) ? p : [...p, idx].sort((a, b) => a - b));
  const handleError = (idx: number) =>
    setLive((p) => p.filter((i) => i !== idx));

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCur((c) => {
        if (live.length <= 1) return c;
        const pos = live.indexOf(c);
        return live[(pos + 1) % live.length];
      });
    }, 2500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, live]);

  const goTo = (idx: number) => {
    setCur(idx);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  return (
    <div
      className="exterior-slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="META DENTAL clinic exterior photos"
      role="region"
    >
      {ALL_SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`exterior-slide${i === cur ? ' exterior-slide--active' : ''}`}
          aria-hidden={i !== cur}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 800px) 100vw, 55vw"
            onLoad={() => handleLoad(i)}
            onError={() => handleError(i)}
          />
        </div>
      ))}

      <div className="exterior-badge">
        <MapPin size={13} aria-hidden="true" />
        <span>1/130, East Coast Road, Panaiyur</span>
      </div>

      {live.length > 1 && (
        <div className="exterior-dots" role="tablist" aria-label="Slide indicators">
          {live.map((slideIdx, dotIdx) => (
            <button
              key={slideIdx}
              role="tab"
              aria-selected={slideIdx === cur}
              aria-label={`Exterior photo ${dotIdx + 1}`}
              className={`exterior-dot${slideIdx === cur ? ' exterior-dot--active' : ''}`}
              onClick={() => goTo(slideIdx)}
            />
          ))}
        </div>
      )}

      {live.length > 1 && (
        <div className="exterior-progress" aria-hidden="true">
          <div
            key={`${cur}-${paused}`}
            className={`exterior-progress-bar${!paused ? ' exterior-progress-bar--running' : ''}`}
          />
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CLINIC GALLERY – slideshow left, 3 thumbs right
   ───────────────────────────────────────────── */
const THUMB_IMAGES = [
  { src: '/images/reception.jpg', alt: 'Reception area at META DENTAL' },
  { src: '/images/treatment.jpg', alt: 'Dental treatment suite at META DENTAL' },
  { src: '/images/clinic.jpg',    alt: 'Treatment room at META DENTAL Panaiyur' },
];

export function ClinicGallery() {
  return (
    <div className="clinic-gallery">
      <ExteriorSlideshow />
      <div className="gallery-thumbs">
        {THUMB_IMAGES.map((img) => (
          <div key={img.src} className="gallery-thumb">
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 800px) 90vw, 22vw" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   REVIEW BADGE
   Single source of truth — update site.ts only.
   { rating: 4.9, count: 200 }
   ───────────────────────────────────────────── */
export function ReviewBadge({ size = 'normal' }: { size?: 'normal' | 'large' }) {
  const displayRating = site.reviews.rating ?? 4.9;
  const displayCount  = site.reviews.count  ?? 200;
  return (
    <div className={`review-rating-badge review-rating-badge--${size}`}>
      <span className="badge-score">{displayRating.toFixed(1)}</span>
      <div className="badge-stars">
        <span className="star-row badge-star-row" aria-label={`${displayRating} stars`}>
          {'★★★★★'}
        </span>
        <span className="badge-count">{displayCount}+ Google Reviews</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GOOGLE REVIEW CARDS
   Shows 3 at once, rotates 1 card every 5 s
   ───────────────────────────────────────────── */
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

export function ReviewCards() {
  const total   = reviews.length;   // 6 total
  const visible = 3;                // cards shown at once
  const [offset, setOffset] = useState(0);
  const [fading, setFading]  = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setOffset((o) => (o + 1) % total);
        setFading(false);
      }, 350);
    }, 5000);
    return () => clearInterval(id);
  }, [total]);

  const shown = Array.from({ length: visible }, (_, i) => reviews[(offset + i) % total]);

  return (
    <div className="review-cards-wrap">
      {/* Badge uses site.ts — update count there only */}
      <ReviewBadge />

      <div className={`review-cards-scroll${fading ? ' review-cards--fading' : ''}`}>
        {shown.map((r, i) => (
          <article key={`${offset}-${i}`} className="review-card">
            <div className="review-card-top">
              <div className="reviewer-avatar" aria-hidden="true">{r.name[0]}</div>
              <div>
                <strong className="reviewer-name">{r.name}</strong>
                <span className="reviewer-location">{r.location}</span>
              </div>
              <GoogleG />
            </div>
            <StarRow rating={r.rating} />
            <p className="review-text">&ldquo;{r.text}&rdquo;</p>
          </article>
        ))}
      </div>

      {/* Dot indicators — show which 3 of 6 are visible */}
      <div className="review-progress-dots" aria-hidden="true">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`review-progress-dot${
              i >= offset && i < offset + visible ? ' review-progress-dot--active' : ''
            }`}
          />
        ))}
      </div>

      <div className="review-cta-row">
        <a
          href={site.maps}
          className="button secondary"
          target="_blank"
          rel="noreferrer"
          data-event="google_reviews_click"
        >
          Read all reviews on Google
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BLOG ARTICLE CARDS
   ───────────────────────────────────────────── */
export function BlogCards({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;
  return (
    <div className="blog-cards-grid">
      {articles.map((a) => (
        <Link key={a.slug} href={`/blog/${a.slug}/`} className="blog-card">
          {a.coverImage ? (
            <div className="blog-card-image">
              <Image src={a.coverImage} alt={a.title} fill sizes="(max-width: 800px) 90vw, 380px" />
            </div>
          ) : (
            <div className="blog-card-image blog-card-image--placeholder">
              <span aria-hidden="true">✦</span>
            </div>
          )}
          <div className="blog-card-body">
            <span className="blog-card-tag">{a.category}</span>
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <span className="card-link">
              Read guide <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
