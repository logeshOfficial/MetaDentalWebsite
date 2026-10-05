import Image from 'next/image';
import { zirconiaCrownPhotos } from '@/config/zirconia-crowns';

export function ZirconiaCrownsGallery() {
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
        {zirconiaCrownPhotos.map((photo) => (
          <figure className="zirconia-gallery-card" key={photo.src}>
            <div className="zirconia-gallery-image">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 600px) 100vw, 360px"
                style={{ objectPosition: photo.position }}
              />
            </div>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="technology-disclaimer">
        Images are provided for patient education. Your dentist will explain which restoration is
        suitable for your clinical needs; appearance and treatment outcomes vary.
      </p>
    </section>
  );
}
