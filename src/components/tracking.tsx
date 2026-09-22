'use client';
import { useEffect } from 'react';
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
// No third-party script or patient data is collected. A consent-aware GTM setup can consume these events.
export function Tracking() {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const a = (event.target as Element).closest<HTMLAnchorElement>('a[data-event]');
      if (!a) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: a.dataset.event,
        link_location: a.dataset.location || 'site',
      });
    };
    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, []);
  return null;
}
