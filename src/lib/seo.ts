import { brand } from '@/config/brand';
import type { Metadata } from 'next';
import { absolute, allowIndexing, site } from './site';
export function seo(title: string, description: string, pathname: string, index = true): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absolute(pathname) },
    robots: { index: allowIndexing && index, follow: true },
    openGraph: {
      title,
      description,
      url: absolute(pathname),
      siteName: site.name,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: { card: 'summary', title, description },
  };
}
export const clinicSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': absolute('/#clinic'),
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: absolute(brand.images.hero.src),
  address: { '@type': 'PostalAddress', ...site.postalAddress },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: site.openingHours.days,
      opens: site.openingHours.opens,
      closes: site.openingHours.closes,
    },
  ],
  hasMap: site.maps,
};
