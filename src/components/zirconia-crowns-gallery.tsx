'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { zirconiaCrownPhotos } from '@/config/zirconia-crowns';

export function ZirconiaCrownsGallery() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const photo = zirconiaCrownPhotos[active];

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function move(direction: number) {
    setActive((current) => (current + direction + zirconiaCrownPhotos.length) % zirconiaCrownPhotos.length);
  }

  function close() {
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus();
  }

  return (
    <section className="zirconia-gallery" aria-labelledby="zirconia-gallery-heading">
      <p className="eyebrow">Dental crowns &amp; bridges</p>
      <h2 id="zirconia-gallery-heading">Our Premium Zirconia Crowns</h2>
      <p className="zirconia-gallery-intro">
        Explore zirconia crown and bridge work available for discussion at META DENTAL. The
        material, shade and restoration design are selected after examining the tooth, supporting
        structures and bite.
      </p>
      <div className="zirconia-gallery-grid">
        {zirconiaCrownPhotos.map((item, index) => (
          <button type="button" className="zirconia-gallery-card" key={item.src}
            aria-label={`Open photo: ${item.caption}`} aria-haspopup="dialog"
            onClick={(event) => {
              trigger.current = event.currentTarget;
              setActive(index);
              setOpen(true);
              dialog.current?.showModal();
            }}>
            <span className="zirconia-gallery-image">
              <Image
                className="zirconia-gallery-backdrop"
                src={item.src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 600px) 100vw, 360px"
                style={{ objectPosition: item.position }}
              />
              <Image
                className="zirconia-gallery-photo"
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 600px) 100vw, 360px"
                style={{ objectPosition: item.position }}
              />
              <span className="zirconia-gallery-expand" aria-hidden="true"><Expand size={18} /></span>
            </span>
            <span className="zirconia-gallery-caption">{item.caption}</span>
          </button>
        ))}
      </div>
      <p className="technology-disclaimer">
        Images are provided for patient education. Your dentist will explain which restoration is
        suitable for your clinical needs; appearance and treatment outcomes vary.
      </p>
      <dialog ref={dialog} className="photo-lightbox" aria-label="Premium zirconia crown gallery"
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClose={() => setOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') move(1);
          if (event.key === 'ArrowLeft') move(-1);
        }}>
        {open && (
          <div className="photo-viewer">
            <div className="photo-viewer-top">
              <span>Our Premium Zirconia Crowns</span>
              <button type="button" autoFocus onClick={close} aria-label="Close photo viewer"><X aria-hidden="true" /></button>
            </div>
            <div className="photo-viewer-image"
              onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
              onTouchEnd={(event) => {
                if (touchStart.current !== null) {
                  const distance = event.changedTouches[0].clientX - touchStart.current;
                  if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
                }
                touchStart.current = null;
              }}>
              <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="100vw" style={{ objectFit: 'contain' }} />
            </div>
            <div className="photo-viewer-bottom">
              <button type="button" onClick={() => move(-1)} aria-label="Previous photo"><ArrowLeft aria-hidden="true" /></button>
              <div aria-live="polite" aria-atomic="true"><strong>{photo.caption}</strong><span>{active + 1} / {zirconiaCrownPhotos.length}</span></div>
              <button type="button" onClick={() => move(1)} aria-label="Next photo"><ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
