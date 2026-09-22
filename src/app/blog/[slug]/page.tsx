import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_blog_slug_page;
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '@/data/articles';
import { seo } from '@/lib/seo';
import { absolute } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
const published = articles.filter((a) => a.status === 'published' && a.reviewer && a.reviewedAt);
export const dynamicParams = false;
export function generateStaticParams() {
  return published.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = published.find((a) => a.slug === slug);
  return a ? seo(a.title, a.description, '/blog/' + slug + '/') : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = published.find((a) => a.slug === slug);
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
        <article className="container narrow prose">
          <p>
            {copy['reviewed_by']}
            {a.reviewer} {copy['text']}
            {a.reviewedAt}
          </p>
          {a.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.text}</p>
            </section>
          ))}
          <Link href={'/services/' + a.service + '/'}>{copy['explore_related_treatment']}</Link>
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
          dateModified: a.reviewedAt,
          author: { '@type': 'Organization', name: 'META DENTAL' },
          reviewedBy: { '@type': 'Person', name: a.reviewer },
          publisher: { '@id': absolute('/#clinic') },
        }}
      />
    </>
  );
}
