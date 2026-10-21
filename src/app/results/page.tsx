import Image from 'next/image';
import { resultCases } from '@/data/results';
import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_results_page;
import { seo } from '@/lib/seo';
import { assetPath } from '@/lib/paths';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
import { ExpandableImage } from '@/components/expandable-image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
      <section className="section results-section">
        <div className="container">
          <div className="results-grid">
            {resultCases.map((item) => (
              <article className="result-case" key={item.id}>
                <p className="result-category">{item.category}</p>
                <h2>{item.title}</h2>
                <p className="result-summary">{item.summary}</p>
                <div
                  className={`result-pair${item.images.length === 1 ? ' result-single' : ''}${item.stageLabels ? ' result-composite' : ''}`}
                >
                  {item.images.map((image) => (
                    <figure key={image.src}>
                      {item.stageLabels ? (
                        <div className="result-composite-media">
                          <ExpandableImage
                            className="result-composite-trigger"
                            src={image.src}
                            alt={image.alt}
                            label={`${item.title} · ${item.stageLabels.join(' · ')}`}
                            sizes="(max-width: 700px) 90vw, 380px"
                            objectFit="contain"
                          />
                          <div className="result-stage-labels" aria-hidden="true">
                            {item.stageLabels.map((stage, stageIndex) => (
                              <span
                                key={stage}
                                style={{ top: `calc(${(stageIndex / item.stageLabels!.length) * 100}% + 12px)` }}
                              >
                                {stage}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes={item.images.length === 1 ? '(max-width: 700px) 90vw, 380px' : '(max-width: 700px) 44vw, 270px'}
                            style={{ objectPosition: image.position ?? '50% 50%' }}
                          />
                        </div>
                      )}
                      <figcaption>{image.label}</figcaption>
                    </figure>
                  ))}
                </div>
                <Link className="button secondary result-treatment-link" href={item.treatmentHref}>
                  View treatment details <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <p>{item.note} Individual results vary.</p>
              </article>
            ))}
          </div>
          <div className="button-row results-all-treatments">
            <Link className="button" href="/services/">
              Explore all treatments <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section muted-section results-guidance">
        <div className="container results-guidance-grid">
          <figure className="results-guidance-media">
            <Image
              src={assetPath('/images/gallery/dental-consultation.jpg')}
              alt="META DENTAL clinician providing chairside care in the Panaiyur clinic"
              fill
              sizes="(max-width: 700px) 90vw, 520px"
            />
            <figcaption>
              <span>CARE WITH CONTEXT</span>
              Clinical photographs support a conversation with your dentist.
            </figcaption>
          </figure>
          <div className="results-guidance-copy">
            <p className="eyebrow">UNDERSTANDING YOUR CARE</p>
            <div className="results-guidance-item">
              <h2>{copy['look_beyond_a_beforeandafter_photograph']}</h2>
              <p>{copy['when_discussing_a_treatment_ask_what']}</p>
            </div>
            <div className="results-guidance-item">
              <h2>{copy['your_consultation_is_personal']}</h2>
              <p>{copy['bring_your_questions_about_appearance_function']}</p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
