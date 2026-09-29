'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gallery from '@/config/gallery.json';

const photos = gallery.photos.filter((photo) => photo.visible);

export function ClinicGallery() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const photo = photos[active];

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function move(direction: number) {
    setActive((current) => (current + direction + photos.length) % photos.length);
  }

  function close() {
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus();
  }

  if (!photos.length) return null;

  return (
    <div className="photo-gallery" role="region" aria-label={gallery.label}>
      <div className="photo-gallery-intro">
        <p>{gallery.hint}</p>
        <span>{String(photos.length).padStart(2, '0')} photographs</span>
      </div>
      <div className="photo-mosaic">
        {photos.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={`photo-tile${item.featured ? ' photo-tile-featured' : ''}`}
            aria-label={`View photo: ${item.caption}`}
            aria-haspopup="dialog"
            onClick={(event) => {
              trigger.current = event.currentTarget;
              setActive(index);
              setOpen(true);
              dialog.current?.showModal();
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 40vw"
              style={{ objectPosition: item.position }}
            />
            <span className="photo-tile-caption">
              <small>{item.category}</small>
              <strong>{item.caption}</strong>
            </span>
            <span className="photo-expand">
              <Expand size={18} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="photo-lightbox"
        aria-label={gallery.label}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => {
          setOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            move(1);
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        {open && (
          <div className="photo-viewer">
            <div className="photo-viewer-top">
              <span>{gallery.label}</span>
              <button type="button" autoFocus onClick={close} aria-label="Close photo viewer">
                <X aria-hidden="true" />
              </button>
            </div>
            <div
              className="photo-viewer-image"
              onTouchStart={(event) => {
                touchStart.current = event.touches[0].clientX;
              }}
              onTouchEnd={(event) => {
                if (touchStart.current !== null) {
                  const distance = event.changedTouches[0].clientX - touchStart.current;
                  if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
                }
                touchStart.current = null;
              }}
            >
              <Image
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="photo-viewer-bottom">
              <button
                type="button"
                onClick={() => move(-1)}
                disabled={photos.length < 2}
                aria-label="Previous photo"
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <div aria-live="polite" aria-atomic="true">
                <strong>{photo.caption}</strong>
                <span>
                  {active + 1} / {photos.length} · {photo.category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => move(1)}
                disabled={photos.length < 2}
                aria-label="Next photo"
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
