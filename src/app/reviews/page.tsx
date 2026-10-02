import Image from 'next/image';
import { brand } from '@/config/brand';
import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_reviews_page;
import { site } from '@/lib/site';
import { seo } from '@/lib/seo';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
import { ReviewCards } from '@/components/showcase';
export const metadata = seo(
  copy['patient_reviews_experiences'],
  copy['explore_meta_dental_patient_experiences_on'],
  '/reviews/',
);
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Patient reviews', href: '/reviews/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['patient_experiences']}
        title={copy['every_patient_has_a_story']}
        description={copy['read_independent_patient_experiences_on_our']}
      >
        <div className="button-row">
          <a className="button" href={site.maps} target="_blank" rel="noreferrer">
            {copy['read_reviews_on_google']}
          </a>
        </div>
      </PageIntro>
      <section className="section">
        <div className="container">
          <div className="review-rating-badge" style={{ marginBottom: '40px' }}>
            <span className="badge-score">4.9</span>
            <div className="badge-stars">
              <span className="star-row" aria-label="5 stars">
                {'★★★★★'}
              </span>
              <span className="badge-count">200+ Google Reviews</span>
            </div>
          </div>
          <ReviewCards />
        </div>
      </section>
      <section className="section muted-section review-feedback-section">
        <div className="container review-feedback-grid">
          <div className="review-feedback-copy">
            <p className="eyebrow">Share your experience</p>
            <h2>{copy['your_feedback_matters']}</h2>
            <p>{copy['if_you_have_visited_the_clinic']}</p>
            <div className="review-feedback-note">
              <strong>Need help with your treatment?</strong>
              <p>{copy['for_questions_about_your_own_treatment']}</p>
            </div>
            <div className="button-row review-feedback-actions">
              <a className="button" href={site.maps} target="_blank" rel="noreferrer">
                Review us on Google <span aria-hidden="true">↗</span>
              </a>
              <a className="button secondary" href={site.phoneHref} data-event="phone_click">
                Call {site.phone}
              </a>
            </div>
          </div>
          <figure className="review-feedback-media">
            <Image src={brand.images.reception.src} alt={brand.images.reception.alt} fill sizes="(max-width: 900px) 100vw, 46vw" />
            <figcaption><span>Visit META DENTAL</span>Panaiyur · ECR · Chennai</figcaption>
          </figure>
        </div>
      </section>
      <CTA />
    </>
  );
}
