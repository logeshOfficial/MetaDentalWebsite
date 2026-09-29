import { brand } from '@/config/brand';
import { services } from '@/data/services';
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
  logo: absolute(brand.logo.src),
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
  sameAs: [site.maps, site.instagram],
  areaServed: [
    { '@type': 'Place', name: 'Panaiyur, Chennai' },
    { '@type': 'Place', name: 'East Coast Road, Chennai' },
  ],
  knowsAbout: [
    'General dentistry',
    'Preventive dentistry',
    'Restorative dentistry',
    'Dental implants',
    'Dental crowns and bridges',
    'Dentures',
    'Root canal treatment',
    'Orthodontics and clear aligners',
    'Kids dentistry',
    'Geriatric dentistry',
    'Cosmetic dentistry',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental treatments at META DENTAL',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        url: absolute(`/services/${service.slug}/`),
        provider: { '@id': absolute('/#clinic') },
        areaServed: { '@type': 'Place', name: 'Panaiyur, Chennai' },
      },
    })),
  },
};
