import { orthodonticOptions } from '@/config/orthodontic-options';
import { ExpandableImage } from '@/components/expandable-image';

export function OrthodonticOptionsGallery({ group }: { group: 'braces' | 'aligners' }) {
  const options = orthodonticOptions.filter((option) => option.group === group);
  const isAligners = group === 'aligners';

  return (
    <section className="orthodontic-options" aria-labelledby="orthodontic-options-heading">
      <p className="eyebrow">Orthodontic treatment options</p>
      <h2 id="orthodontic-options-heading">
        {isAligners ? 'Explore Invisalign and clear aligners' : 'Explore fixed braces'}
      </h2>
      <p className="orthodontic-options-intro">
        Compare the {isAligners ? 'aligner' : 'braces'} options available for discussion at META
        DENTAL.
        Your examination determines which option is appropriate for your teeth and bite.
      </p>
      <div className="orthodontic-options-grid">
        {options.map((option, index) => (
          <article className="orthodontic-option-card" key={option.id}>
            <div className={`orthodontic-option-media${option.images.length > 1 ? ' is-pair' : ''}`}>
              {option.images.map((image) => (
                <ExpandableImage
                  className="orthodontic-option-image"
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  label={`${option.name}: ${image.alt}`}
                  sizes="(max-width: 700px) 50vw, 270px"
                />
              ))}
            </div>
            <div className="orthodontic-option-copy">
              <span className="orthodontic-option-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{option.name}</h3>
              <p>{option.description}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="technology-disclaimer">
        Images are for patient education. Treatment choice, duration and results vary and require an
        individual orthodontic assessment.
      </p>
    </section>
  );
}
