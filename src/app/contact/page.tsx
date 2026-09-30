import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_contact_page;
import { PageIntro, Breadcrumbs, VisitCard, CTA } from '@/components/ui';
import { absolute, site } from '@/lib/site';
import { seo } from '@/lib/seo';
import { GoogleMap } from '@/components/google-map';
import { JsonLd } from '@/components/json-ld';
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
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
        <div className="container article-layout contact-layout">
          <div className="contact-main">
            <section aria-labelledby="clinic-contact-heading">
              <p className="eyebrow">Choose the easiest way to reach us</p>
              <h2 id="clinic-contact-heading">{copy['talk_to_the_clinic']}</h2>
              <p className="contact-lead">
                Contact META DENTAL in Panaiyur for appointments, treatment questions and clinic
                availability.
              </p>
              <div className="contact-action-grid">
                <article className="contact-action-card">
                  <span className="contact-action-icon">
                    <Phone size={21} aria-hidden="true" />
                  </span>
                  <h3>Call the clinic</h3>
                  <p>Speak with our team about appointments and availability.</p>
                  <div className="contact-action-links">
                    <a href={site.phoneHref} data-event="phone_click">
                      {site.phone}
                    </a>
                    <a
                      href={'tel:' + site.secondaryPhone.replace(/[^+0-9]/g, '')}
                      data-event="phone_click"
                    >
                      {site.secondaryPhone}
                    </a>
                  </div>
                </article>
                <article className="contact-action-card">
                  <span className="contact-action-icon">
                    <MessageCircle size={21} aria-hidden="true" />
                  </span>
                  <h3>Send a WhatsApp</h3>
                  <p>Share your preferred visit date and what you would like help with.</p>
                  <a className="contact-action-link" href={site.whatsapp} data-event="whatsapp_click">
                    Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
                <article className="contact-action-card">
                  <span className="contact-action-icon">
                    <Mail size={21} aria-hidden="true" />
                  </span>
                  <h3>Email the clinic</h3>
                  <p>For non-urgent questions and information before your appointment.</p>
                  <a className="contact-action-link" href={'mailto:' + site.email}>
                    Send an email <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              </div>
            </section>

            <section className="contact-route" aria-labelledby="route-heading">
              <div className="contact-route-heading">
                <div>
                  <p className="eyebrow">Dentist in Panaiyur, ECR</p>
                  <h2 id="route-heading">{copy['plan_your_route']}</h2>
                </div>
                <a
                  className="button"
                  href={site.maps}
                  target="_blank"
                  rel="noreferrer"
                  data-event="directions_click"
                >
                  {copy['open_location_in_google_maps']}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="contact-address">
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <address>{site.address}</address>
                  <p>{copy['the_clinic_is_in_panaiyur_patients']}</p>
                </div>
              </div>
              <GoogleMap className="contact-map" />
            </section>

            <div className="contact-note-grid">
              <section>
                <Clock size={20} aria-hidden="true" />
                <div>
                  <h2>{copy['before_travelling']}</h2>
                  <p>{copy['confirm_your_appointment_first_please_call']}</p>
                </div>
              </section>
              <section>
                <Phone size={20} aria-hidden="true" />
                <div>
                  <h2>{copy['urgent_concerns']}</h2>
                  <p>{copy['call_for_availability_if_you_have']}</p>
                </div>
              </section>
            </div>
          </div>
          <VisitCard />
        </div>
      </section>
      <CTA />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          '@id': absolute('/contact/#page'),
          name: 'Contact META DENTAL in Panaiyur, ECR',
          description:
            'Call, WhatsApp, email or get directions to META DENTAL in Panaiyur on East Coast Road, Chennai.',
          url: absolute('/contact/'),
          mainEntity: { '@id': absolute('/#clinic') },
        }}
      />
    </>
  );
}
