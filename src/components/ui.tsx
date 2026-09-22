import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.components_ui;
import Link from 'next/link';
import { ArrowUpRight, MapPin, Clock, Phone } from 'lucide-react';
import { JsonLd } from './json-ld';
import { absolute, site } from '@/lib/site';
import { BookButton } from './site-shell';
export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: 'Home', href: '/' }, ...items];
  return (
    <>
      <nav className="breadcrumbs" aria-label={copy['breadcrumb']}>
        <ol>
          {all.map((item, i) => (
            <li key={item.href}>
              {i < all.length - 1 ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: all.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: absolute(item.href),
          })),
        }}
      />
    </>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="intro-copy">{description}</p>
        {children}
      </div>
    </section>
  );
}
export function FAQ({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <span aria-hidden="true">{copy['text']}</span>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
export function VisitCard() {
  return (
    <aside className="visit-card">
      <p className="eyebrow">{copy['lets_talk_about_your_smile']}</p>
      <h2>{copy['your_next_step_starts_with_a']}</h2>
      <p>{copy['tell_us_whats_on_your_mind']}</p>
      <BookButton />
      <ul>
        <li>
          <MapPin size={18} aria-hidden="true" />
          <span>{site.address}</span>
        </li>
        <li>
          <Clock size={18} aria-hidden="true" />
          <span>
            {site.hours}
            <br />
            {site.sunday}
          </span>
        </li>
        <li>
          <Phone size={18} aria-hidden="true" />
          <a href={site.phoneHref} data-event="phone_click">
            {site.phone}
          </a>
        </li>
      </ul>
      <a href={site.maps} data-event="directions_click" className="text-link">
        {copy['get_directions']}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </aside>
  );
}
export function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">{copy['good_care_begins_with_a_conversation']}</p>
          <h2>{copy['lets_take_care_of_your_smile']}</h2>
          <p>{copy['visit_meta_dental_in_panaiyur_on']}</p>
        </div>
        <BookButton />
      </div>
    </section>
  );
}
