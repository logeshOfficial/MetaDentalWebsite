'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { heroClinicInteriors } from '@/config/hero-clinic-interiors';

type HeroClinicCarouselProps = {
  caption: string;
  note: string;
};

export function HeroClinicCarousel({ caption, note }: HeroClinicCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || heroClinicInteriors.length < 2) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroClinicInteriors.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="hero-image"
      role="region"
      aria-label="META DENTAL clinic interior slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {heroClinicInteriors.map((photo, index) => (
        <Image
          className={`hero-slide${index === active ? ' is-active' : ''}`}
          key={photo.src}
          src={photo.src}
          alt={index === active ? photo.alt : ''}
          fill
          priority={index === 0}
          sizes="(max-width: 800px) 100vw, 50vw"
          style={{ objectPosition: photo.position }}
        />
      ))}
      <div className="image-caption">
        <span>{caption}</span>
        <p>{note}</p>
      </div>
      <div className="image-index" aria-hidden="true">
        MD / {String(active + 1).padStart(2, '0')}
      </div>
      <div className="hero-slide-dots" aria-label="Clinic interior slideshow controls">
        {heroClinicInteriors.map((photo, index) => (
          <button
            type="button"
            key={photo.src}
            className={index === active ? 'is-active' : ''}
            onClick={() => setActive(index)}
            aria-label={`Show clinic interior ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
