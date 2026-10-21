import Image from 'next/image';
import { brand } from '@/config/brand';
import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_reviews_page;
import { site } from '@/lib/site';
import { assetPath } from '@/lib/paths';
import { seo } from '@/lib/seo';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
import { GoogleReviews } from '@/components/google-reviews';

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

      {/* GoogleReviews fetches live count + rating + reviews from /api/google-reviews
          Falls back to home.ts data if API not configured.
          Auto-rotates every 5 seconds, pauses on hover/focus. */}
      <section className="section" id="reviews">
        <div className="container">
          <figure className="review-smiles-banner">
            <Image
              src={assetPath('/images/reviews/happy-smiles-collage.webp')}
              alt="Collage of smiling adults representing a range of patient experiences"
              width={1600}
              height={600}
              sizes="(max-width: 700px) 100vw, 1240px"
            />
            <figcaption>
              <span>Every smile is different.</span>
              Every experience matters.
            </figcaption>
          </figure>
          <GoogleReviews />
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
              <a className="button" href={site.reviewUrl} target="_blank" rel="noreferrer">
                Review us on Google <span aria-hidden="true">↗</span>
              </a>
              <a className="button secondary" href={site.phoneHref} data-event="phone_click">
                Call {site.phone}
              </a>
            </div>
          </div>
          <figure className="review-feedback-media">
            <Image
              src={brand.images.reception.src}
              alt={brand.images.reception.alt}
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
            />
            <figcaption>
              <span>Visit META DENTAL</span>Panaiyur · ECR · Chennai
            </figcaption>
          </figure>
        </div>
      </section>
      <CTA />
    </>
  );
}
