import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_blog_slug_page;
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';
import { seo } from '@/lib/seo';
import { absolute } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((article) => article.slug === slug);
  const clinicallyReviewed = Boolean(a?.status === 'published' && a.reviewer && a.reviewedAt);
  return a ? seo(a.title, a.description, '/blog/' + slug + '/', clinicallyReviewed) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((article) => article.slug === slug);
  if (!a) notFound();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Dental guides', href: '/blog/' },
            { name: a.title, href: '/blog/' + slug + '/' },
          ]}
        />
      </div>
      <PageIntro eyebrow={a.category} title={a.title} description={a.description} />
      <section className="section">
        <article className="container narrow prose blog-article">
          {a.coverImage ? (
            <figure className="blog-article-cover">
              <Image
                src={a.coverImage}
                alt={a.coverAlt ?? a.title}
                fill
                sizes="(max-width: 900px) 100vw, 800px"
                priority
              />
            </figure>
          ) : null}
          {a.reviewer && a.reviewedAt ? (
            <p>
              {copy['reviewed_by']}
              {a.reviewer} {copy['text']}
              {a.reviewedAt}
            </p>
          ) : (
            <p className="medical-note">
              Preview guide awaiting clinical review. General information only; it does not replace
              an individual dental assessment.
            </p>
          )}
          {a.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <div className="blog-article-next-step">
            <h2>Discuss your own needs with a dentist</h2>
            <p>
              These guides provide general information. A consultation is needed before a dentist
              can recommend treatment for you.
            </p>
            <Link className="button" href={'/services/' + a.service + '/'}>
              {copy['explore_related_treatment']}
            </Link>
          </div>
        </article>
      </section>
      <CTA />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: a.title,
          description: a.description,
          url: absolute('/blog/' + slug + '/'),
          author: { '@type': 'Organization', name: 'META DENTAL' },
          ...(a.reviewedAt ? { dateModified: a.reviewedAt } : {}),
          ...(a.reviewer ? { reviewedBy: { '@type': 'Person', name: a.reviewer } } : {}),
          publisher: { '@id': absolute('/#clinic') },
        }}
      />
    </>
  );
}
