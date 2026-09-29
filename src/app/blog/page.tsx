import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_blog_page;
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/articles';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
import { BlogCards } from '@/components/showcase';
import { seo } from '@/lib/seo';
const published = articles.filter((a) => a.status === 'published' && a.reviewer && a.reviewedAt);
const draftsAsPreview = articles; // show all in card layout (remove when going live with published only)
export const metadata = seo(
  copy['dental_guides_patient_information'],
  copy['explore_patient_information_from_meta_dental'],
  '/blog/',
  published.length > 0,
);
export default function Page() {
  const displayArticles = published.length ? published : draftsAsPreview;
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Dental guides', href: '/blog/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['the_dental_notebook']}
        title={copy['a_little_knowledge_more_confidence']}
        description={copy['clear_answers_can_make_dental_decisions']}
      />
      <section className="section">
        <div className="container">
          {displayArticles.length ? (
            <>
              <BlogCards articles={displayArticles} />
              {!published.length && (
                <p className="blog-draft-notice">
                  Articles are in review — full guides coming soon.
                </p>
              )}
            </>
          ) : (
            <div className="narrow prose">
              <h2>{copy['start_with_the_care_youre_considering']}</h2>
              <p>{copy['our_treatment_pages_explain_what_to']}</p>
              <Link className="button" href="/services/">
                {copy['explore_treatment_information']}
              </Link>
            </div>
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}
