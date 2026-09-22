import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_contact_page;
import { PageIntro, Breadcrumbs, VisitCard, CTA } from '@/components/ui';
import { site } from '@/lib/site';
import { seo } from '@/lib/seo';
export const metadata = seo(
  copy['contact_directions_panaiyur_ecr'],
  copy['find_meta_dental_at_1130_east'],
  '/contact/',
);
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['contact_directions']}
        title={copy['were_closer_than_you_think']}
        description={copy['find_us_on_east_coast_road']}
      />
      <section className="section" id="contact">
        <div className="container article-layout">
          <div className="prose">
            <h2>{copy['talk_to_the_clinic']}</h2>
            <p>
              <a href={site.phoneHref} data-event="phone_click">
                {site.phone}
              </a>
              <br />
              <a
                href={'tel:' + site.secondaryPhone.replace(/[^+0-9]/g, '')}
                data-event="phone_click"
              >
                {site.secondaryPhone}
              </a>
            </p>
            <p>
              <a href={'mailto:' + site.email}>{site.email}</a>
            </p>
            <a className="button secondary" href={site.whatsapp} data-event="whatsapp_click">
              {copy['send_a_whatsapp_enquiry']}
            </a>
            <h2>{copy['plan_your_route']}</h2>
            <address>{site.address}</address>
            <p>{copy['the_clinic_is_in_panaiyur_patients']}</p>
            <a className="button" href={site.maps} data-event="directions_click">
              {copy['open_location_in_google_maps']}
            </a>
            <h2>{copy['before_travelling']}</h2>
            <p>{copy['confirm_your_appointment_first_please_call']}</p>
            <h2>{copy['urgent_concerns']}</h2>
            <p>{copy['call_for_availability_if_you_have']}</p>
          </div>
          <VisitCard />
        </div>
      </section>
      <CTA />
    </>
  );
}
