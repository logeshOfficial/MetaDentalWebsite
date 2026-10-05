'use client';

import Image from 'next/image';
import { Expand, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type ExpandableImageProps = {
  src: string;
  alt: string;
  label?: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
};

export function ExpandableImage({
  src,
  alt,
  label,
  sizes,
  className = '',
  imageClassName,
  aspectRatio,
  objectFit = 'cover',
  objectPosition,
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function close() {
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus();
  }

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={`expandable-image ${className}`.trim()}
        style={aspectRatio ? { aspectRatio } : undefined}
        aria-label={`Open full image: ${label ?? alt}`}
        aria-haspopup="dialog"
        onClick={() => {
          setOpen(true);
          dialog.current?.showModal();
        }}
      >
        <Image
          className={imageClassName}
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          style={{ objectFit, objectPosition }}
        />
        <span className="expandable-image-icon" aria-hidden="true"><Expand size={18} /></span>
      </button>
      <dialog
        ref={dialog}
        className="photo-lightbox"
        aria-label={label ?? alt}
        onCancel={(event) => { event.preventDefault(); close(); }}
        onClose={() => setOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) close(); }}
      >
        {open && (
          <div className="photo-viewer">
            <div className="photo-viewer-top">
              <span>{label ?? alt}</span>
              <button type="button" autoFocus onClick={close} aria-label="Close image viewer"><X aria-hidden="true" /></button>
            </div>
            <div className="photo-viewer-image">
              <Image src={src} alt={alt} fill sizes="100vw" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
