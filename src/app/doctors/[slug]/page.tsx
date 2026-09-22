import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_doctors_slug_page;
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { doctors } from '@/data/doctors';
import { services } from '@/data/services';
import { seo } from '@/lib/seo';
import { absolute } from '@/lib/site';
import { Breadcrumbs, CTA } from '@/components/ui';
import { BookButton } from '@/components/site-shell';
import { ServiceCards } from '@/components/content-cards';
import { JsonLd } from '@/components/json-ld';
export const dynamicParams = false;
export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = doctors.find((d) => d.slug === slug);
  return d ? seo(d.name + ' | ' + d.role, d.bio, '/doctors/' + slug + '/') : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = doctors.find((d) => d.slug === slug);
  if (!d) notFound();
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Our doctors', href: '/doctors/' },
            { name: d.name, href: '/doctors/' + slug + '/' },
          ]}
        />
        <section className="profile-grid section">
          <div className="profile-image">
            <Image src={d.image} alt={d.name} fill priority sizes="(max-width:800px) 90vw, 40vw" />
          </div>
          <div>
            <p className="eyebrow">{d.role}</p>
            <h1>{d.name}</h1>
            <p className="lead">{d.intro}</p>
            <p>{d.bio}</p>
            <h2>{copy['qualifications_education']}</h2>
            <p>
              {d.qualification}
              <br />
              {d.education}
            </p>
            <h2>{copy['areas_of_practice']}</h2>
            <ul className="interest-list">
              {d.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <BookButton label={copy['arrange_a_consultation']} />
          </div>
        </section>
      </div>
      <section className="section muted-section">
        <div className="container">
          <h2>{copy['explore_related_treatments']}</h2>
          <ServiceCards
            items={services.filter((s) => (d.services as readonly string[]).includes(s.slug))}
          />
        </div>
      </section>
      <CTA />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': absolute('/doctors/' + slug + '/#person'),
          name: d.name,
          jobTitle: d.role,
          description: d.bio,
          image: absolute(d.image),
          url: absolute('/doctors/' + slug + '/'),
          worksFor: { '@id': absolute('/#clinic') },
          alumniOf: { '@type': 'EducationalOrganization', name: d.education },
          hasCredential: { '@type': 'EducationalOccupationalCredential', name: d.qualification },
        }}
      />
    </>
  );
}
