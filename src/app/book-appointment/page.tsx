import { bookingCopy } from '@/data/booking';
import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_book_appointment_page;
import { CalendarDays, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';
import { seo } from '@/lib/seo';
import { PageIntro, Breadcrumbs } from '@/components/ui';
export const metadata = seo(
  copy['book_a_dental_appointment_in_panaiyur'],
  copy['book_meta_dental_through_our_clinicspecific'],
  '/book-appointment/',
);
export default function Page() {
  const options = [
    {
      icon: CalendarDays,
      title: bookingCopy.online.title,
      copy: bookingCopy.online.description,
      label: bookingCopy.online.label,
      href: site.booking,
      event: 'myslothub_click',
    },
    {
      icon: Phone,
      title: bookingCopy.phone.title,
      copy: bookingCopy.phone.description,
      label: site.phone,
      href: site.phoneHref,
      event: 'phone_click',
    },
    {
      icon: MessageCircle,
      title: bookingCopy.whatsapp.title,
      copy: bookingCopy.whatsapp.description,
      label: bookingCopy.whatsapp.label,
      href: site.whatsapp,
      event: 'whatsapp_click',
    },
  ];
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Book an appointment', href: '/book-appointment/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['your_next_visit']}
        title={copy['lets_find_a_time_for_your']}
        description={copy['choose_the_way_you_would_like']}
      />
      <section className="section">
        <div className="container">
          <div className="booking-grid">
            {options.map((o) => (
              <article className="booking-card" key={o.title}>
                <o.icon aria-hidden="true" size={30} />
                <h2>{o.title}</h2>
                <p>{o.copy}</p>
                <a
                  className="text-link"
                  href={o.href}
                  data-event={o.event}
                  data-location="booking-page"
                >
                  {o.label}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <div className="booking-details">
            <h2>{copy['your_visit_at_a_glance']}</h2>
            <p>{site.address}</p>
            <p>
              {site.hours} {copy['text']}
              {site.sunday}
            </p>
            <p>{copy['bring_relevant_dental_records_and_details']}</p>
          </div>
        </div>
      </section>
    </>
  );
}
