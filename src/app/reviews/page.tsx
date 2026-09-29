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
              <span className="badge-count">128+ Google Reviews</span>
            </div>
          </div>
          <ReviewCards />
        </div>
      </section>
      <section className="section muted-section">
        <div className="container narrow prose">
          <h2>{copy['your_feedback_matters']}</h2>
          <p>{copy['if_you_have_visited_the_clinic']}</p>
          <p>{copy['for_questions_about_your_own_treatment']}</p>
          <a href={site.phoneHref} data-event="phone_click">
            {site.phone}
          </a>
        </div>
      </section>
      <CTA />
    </>
  );
}
