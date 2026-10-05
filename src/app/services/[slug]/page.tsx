import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_services_slug_page;
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services, isServiceApproved } from '@/data/services';
import { doctors } from '@/data/doctors';
import { seo } from '@/lib/seo';
import { absolute } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';
import { brand } from '@/config/brand';
import { PageIntro, Breadcrumbs, VisitCard, FAQ, CTA } from '@/components/ui';
import { DoctorCredentialMarks, ServiceCards } from '@/components/content-cards';
import { TreatmentMediaLibrary } from '@/components/treatment-media-library';
import { OrthodonticOptionsGallery } from '@/components/orthodontic-options-gallery';
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) return {};
  return seo(
    s.name + ' in ECR, Chennai',
    s.summary,
    '/services/' + s.slug + '/',
    isServiceApproved(s),
  );
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  const doctor = doctors.find((d) => d.slug === s.doctor);
  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Treatments', href: '/services/' },
            { name: s.name, href: '/services/' + s.slug + '/' },
          ]}
        />
      </div>
      <PageIntro
        eyebrow={s.category + ' · ECR, CHENNAI'}
        title={s.name + ' in ECR, Chennai'}
        description={s.summary}
      />
      <section className="section">
        <div className="container article-layout">
          <article className="prose">
            <p className="lead">{s.headline}</p>
            <h2>{copy['understanding_your_options']}</h2>
            <p>{s.overview}</p>
            <h2>{copy['is_this_the_right_care_for']}</h2>
            <p>{s.suitability}</p>
            <h2>{copy['what_to_expect']}</h2>
            <p>{s.process}</p>
            <h2>{copy['things_to_consider']}</h2>
            <p>{s.risks}</p>
            <h2>{copy['care_beyond_the_appointment']}</h2>
            <p>{s.aftercare}</p>
            {(s.slug === 'dental-implants' || s.slug === 'wisdom-tooth-extraction') && (
              <figure className="clinical-care-image">
                <Image
                  src={brand.images.clinicalCare.src}
                  alt={brand.images.clinicalCare.alt}
                  width={1200}
                  height={800}
                />
                <figcaption>
                  Our clinical treatment room in Panaiyur. Any surgical procedure is recommended
                  only after an individual assessment.
                </figcaption>
              </figure>
            )}
            {s.slug === 'dental-implants' && (
              <TreatmentMediaLibrary collectionId="implant-systems" />
            )}
            {s.slug === 'braces-orthodontics' && <OrthodonticOptionsGallery />}
            <div className="doctor-callout">
              {doctor && (
                <Image
                  className="doctor-callout-image"
                  src={doctor.image}
                  alt={doctor.name}
                  width={88}
                  height={88}
                />
              )}
              <h2>{doctor ? 'Meet your specialist' : 'Start with a dental assessment'}</h2>
              {doctor ? (
                <>
                  <Link className="text-link" href={'/doctors/' + doctor.slug + '/'}>
                    {doctor.name}
                  </Link>
                  <DoctorCredentialMarks credentials={doctor.credentials} />
                  <p>{doctor.qualification}</p>
                </>
              ) : (
                <p>
                  {copy['your_assessment_determines_the_appropriate_clinician']}
                  <Link href="/doctors/">{copy['meet_our_dentists']}</Link>
                </p>
              )}
            </div>
            <h2>{copy['common_questions']}</h2>
            <FAQ items={s.faqs} />
            <p className="medical-note">
              {copy['general_information_only_treatment_suitability_risks']}
              <Link href="/medical-disclaimer/">{copy['about_our_medical_information']}</Link>
            </p>
            {isServiceApproved(s) && (
              <p className="medical-note">
                {copy['reviewed_by']}
                {s.clinicalReview.reviewer} {copy['text']}
                {s.clinicalReview.reviewedAt}
              </p>
            )}
          </article>
          <VisitCard />
        </div>
      </section>
      <section className="section muted-section">
        <div className="container">
          <p className="eyebrow">{copy['connected_care']}</p>
          <h2>{copy['related_treatments']}</h2>
          <ServiceCards items={services.filter((item) => s.related.includes(item.slug))} />
        </div>
      </section>
      <CTA />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': absolute('/services/' + s.slug + '/#page'),
              name: s.name + ' in ECR, Chennai',
              description: s.summary,
              url: absolute('/services/' + s.slug + '/'),
              about: { '@id': absolute('/services/' + s.slug + '/#service') },
              isPartOf: { '@id': absolute('/#website') },
            },
            {
              '@type': 'Service',
              '@id': absolute('/services/' + s.slug + '/#service'),
              name: s.name,
              serviceType: s.name,
              description: s.summary,
              url: absolute('/services/' + s.slug + '/'),
              provider: { '@id': absolute('/#clinic') },
              areaServed: { '@type': 'Place', name: 'Panaiyur, ECR, Chennai' },
            },
            {
              '@type': 'FAQPage',
              mainEntity: s.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ],
        }}
      />
    </>
  );
}
