import { site } from '@/lib/site';

export function GoogleMap({ className = '' }: { className?: string }) {
  return (
    <div className={`google-map ${className}`.trim()}>
      <iframe
        src={site.mapsEmbed}
        title="META DENTAL location on Google Maps"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
