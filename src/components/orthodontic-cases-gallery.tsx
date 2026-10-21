import { ExpandableImage } from '@/components/expandable-image';
import { orthodonticCases } from '@/config/orthodontic-cases';

export function OrthodonticCasesGallery() {
  return (
    <section className="orthodontic-cases" aria-labelledby="orthodontic-cases-heading">
      <p className="eyebrow">PATIENT STORIES · ORTHODONTICS</p>
      <h2 id="orthodontic-cases-heading">Individual cases, thoughtfully documented.</h2>
      <p className="orthodontic-cases-intro">
        A selection of intraoral photographs from different orthodontic patient cases, supplied by
        META DENTAL. Each treatment plan and outcome is individual; these images cannot predict
        another patient’s result.
      </p>
      <div className="orthodontic-cases-grid">
        {orthodonticCases.map((item, index) => (
          <article className="orthodontic-case-card" key={item.id}>
            <ExpandableImage
              className="orthodontic-case-image"
              src={item.src}
              alt={item.alt}
              label={`${item.label} · orthodontic clinical photographs`}
              sizes="(max-width: 700px) 92vw, (max-width: 1000px) 45vw, 520px"
              objectFit="contain"
              aspectRatio="27 / 40"
            />
            <div className="orthodontic-case-caption">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item.label}</p>
              <small>Orthodontic clinical photographs</small>
            </div>
          </article>
        ))}
      </div>
      <p className="orthodontic-cases-note">
        Photographs are shared for patient education. Treatment suitability and results vary and
        should be discussed with an orthodontist after an individual assessment.
      </p>
    </section>
  );
}
