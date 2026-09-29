import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_locations_panaiyur_page;
import Link from 'next/link';
import { site } from '@/lib/site';
import { seo } from '@/lib/seo';
import { PageIntro, Breadcrumbs, VisitCard } from '@/components/ui';
export const metadata = seo(
  copy['dental_clinic_in_panaiyur_on_ecr'],
  copy['visit_meta_dental_in_panaiyur_chennai'],
  '/locations/panaiyur/',
);
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Panaiyur clinic', href: '/locations/panaiyur/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['one_clinic_panaiyur_chennai']}
        title={copy['your_dental_clinic_on_east_coast']}
        description={copy['meta_dental_is_located_in_panaiyur']}
      />
      <section className="section">
        <div className="container article-layout">
          <div className="prose">
            <h2>{copy['find_the_clinic']}</h2>
            <address>{site.address}</address>
            <p>
              {copy['use_our']}
              <a href={site.maps} data-event="directions_click">
                {copy['google_maps_listing']}
              </a>{' '}
              {copy['for_directions_from_your_location_travel']}
            </p>
            <h2>{copy['visiting_from_nearby_neighbourhoods']}</h2>
            <p>{copy['if_you_are_travelling_from_uthandi']}</p>
            <h2>Dental care available in Panaiyur</h2>
            <p>
              Start with a{' '}
              <Link href="/services/general-dentistry/">general dental consultation</Link> for a
              check-up, tooth concern or questions about preventive care. Treatment options at the
              clinic include{' '}
              <Link href="/services/root-canal-treatment/">root canal treatment</Link>,{' '}
              <Link href="/services/crowns-bridges/">dental crowns and bridges</Link>,{' '}
              <Link href="/services/dental-implants/">dental implants</Link> and{' '}
              <Link href="/services/dentures/">complete or partial dentures</Link>, depending on an
              individual assessment.
            </p>
            <p>
              Orthodontic consultations cover{' '}
              <Link href="/services/braces-orthodontics/">braces</Link> and{' '}
              <Link href="/services/invisible-aligners/">clear aligners, including Invisalign</Link>
              . Families can also explore{' '}
              <Link href="/services/kids-dentistry/">kids’ dentistry</Link>,{' '}
              <Link href="/services/dental-cleaning/">preventive check-ups</Link> and{' '}
              <Link href="/services/geriatric-dentistry/">dental care for older adults</Link>.
            </p>
            <h2>{copy['make_the_most_of_your_visit']}</h2>
            <p>{copy['call_ahead_for_access_and_parking']}</p>
            <p>
              <Link href="/services/">{copy['explore_treatments']}</Link> {copy['or']}
              <Link href="/doctors/">{copy['meet_your_dentists']}</Link>{' '}
              {copy['before_arranging_your_appointment']}
            </p>
          </div>
          <VisitCard />
        </div>
      </section>
    </>
  );
}
