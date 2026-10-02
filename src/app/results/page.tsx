import Image from 'next/image';
import { resultCases } from '@/data/results';
import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_results_page;
import { seo } from '@/lib/seo';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
export const metadata = seo(
  'Clinical Case Gallery',
  'View consented clinical case photographs from META DENTAL in Panaiyur, including implant, cosmetic and aligner cases.',
  '/results/',
  false,
);
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Clinical case gallery', href: '/results/' }]} />
      </div>
      <PageIntro
        eyebrow="CLINICAL CASE GALLERY"
        title="Clinical care, documented with context."
        description="Explore consented clinical photographs supplied by META DENTAL. Each case is individual, and photographs alone cannot determine which treatment is suitable for you."
      />
      <section className="section">
        <div className="container">
          <div className="results-grid">
            {resultCases.map((item) => (
              <article className="result-case" key={item.id}>
                <p className="result-category">{item.category}</p>
                <h2>{item.title}</h2>
                <p className="result-summary">{item.summary}</p>
                <div className={`result-pair${item.images.length === 1 ? ' result-single' : ''}`}>
                  {item.images.map((image) => (
                    <figure key={image.src}>
                      <div>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes={item.images.length === 1 ? '(max-width: 700px) 90vw, 380px' : '(max-width: 700px) 44vw, 270px'}
                          style={{ objectPosition: image.position ?? '50% 50%' }}
                        />
                      </div>
                      <figcaption>{image.label}</figcaption>
                    </figure>
                  ))}
                </div>
                <p>{item.note} Individual results vary.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section muted-section">
        <div className="container narrow prose">
          <h2>{copy['look_beyond_a_beforeandafter_photograph']}</h2>
          <p>{copy['when_discussing_a_treatment_ask_what']}</p>
          <h2>{copy['your_consultation_is_personal']}</h2>
          <p>{copy['bring_your_questions_about_appearance_function']}</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
