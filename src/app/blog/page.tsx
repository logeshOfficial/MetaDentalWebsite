import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_blog_page;
import Link from 'next/link';
import { articles } from '@/data/articles';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
import { seo } from '@/lib/seo';
const published = articles.filter((a) => a.status === 'published' && a.reviewer && a.reviewedAt);
export const metadata = seo(
  copy['dental_guides_patient_information'],
  copy['explore_patient_information_from_meta_dental'],
  '/blog/',
  published.length > 0,
);
export default function Page() {
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
        <div className="container narrow prose">
          {published.length ? (
            published.map((a) => (
              <article key={a.slug}>
                <p className="eyebrow">{a.category}</p>
                <h2>
                  <Link href={'/blog/' + a.slug + '/'}>{a.title}</Link>
                </h2>
                <p>{a.description}</p>
              </article>
            ))
          ) : (
            <>
              <h2>{copy['start_with_the_care_youre_considering']}</h2>
              <p>{copy['our_treatment_pages_explain_what_to']}</p>
              <Link className="button" href="/services/">
                {copy['explore_treatment_information']}
              </Link>
            </>
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}
