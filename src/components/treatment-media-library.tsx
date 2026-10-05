'use client';

import { useEffect, useRef } from 'react';
import treatmentMedia from '@/config/treatment-media.json';
import { assetPath } from '@/lib/paths';
import { ExpandableImage } from '@/components/expandable-image';

type MediaItem = (typeof treatmentMedia.collections)[number]['items'][number];

function TreatmentVideo({ item }: { item: MediaItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.55 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="technology-video"
      muted
      loop
      playsInline
      controls
      preload="metadata"
      poster={assetPath(item.poster ?? '')}
      aria-label={item.alt}
    >
      <source src={assetPath(item.src)} type="video/mp4" />
      Your browser does not support embedded video.
    </video>
  );
}

export function TreatmentMediaLibrary({ collectionId }: { collectionId: string }) {
  const collection = treatmentMedia.collections.find(
    (item) => item.id === collectionId && item.visible,
  );
  if (!collection) return null;
  const items = collection.items.filter((item) => item.visible).sort((a, b) => a.order - b.order);
  const featured = items.find((item) => item.featured) ?? items[0];
  const cards = items.filter((item) => item.id !== featured?.id);

  return (
    <section className="technology-library" aria-labelledby={`${collection.id}-heading`}>
      <p className="eyebrow">{collection.eyebrow}</p>
      <h2 id={`${collection.id}-heading`}>{collection.title}</h2>
      <p>{collection.introduction}</p>
      {featured ? (
        <article className="technology-featured">
          <div className="technology-featured-media">
            {featured.type === 'video' ? (
              <TreatmentVideo item={featured} />
            ) : (
              <ExpandableImage
                src={assetPath(featured.src)}
                alt={featured.alt}
                label={featured.title}
                sizes="(max-width: 800px) 100vw, 760px"
                objectFit="contain"
              />
            )}
          </div>
          <div>
            <span>{featured.brand}</span>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
          </div>
        </article>
      ) : null}
      <div className="technology-card-grid">
        {cards.map((item) => (
          <article className="technology-card" key={item.id}>
            <div className="technology-card-media">
              {item.type === 'video' ? (
                <TreatmentVideo item={item} />
              ) : (
                <ExpandableImage
                  src={assetPath(item.src)}
                  alt={item.alt}
                  label={item.title}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 340px"
                  objectFit="contain"
                />
              )}
            </div>
            <div className="technology-card-copy">
              <span>{item.brand}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="technology-disclaimer">
        Brand imagery is provided for patient education. The displayed systems do not determine
        suitability or guarantee a particular product; the final recommendation follows an
        individual examination and treatment plan.
      </p>
    </section>
  );
}
