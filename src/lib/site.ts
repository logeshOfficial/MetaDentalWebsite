export const site = {
  name: 'META DENTAL',
  tagline: 'Advanced Dental Care',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://metadental.in').replace(/\/$/, ''),
  phone: '+91 90944 65709',
  phoneHref: 'tel:+919094465709',
  secondaryPhone: '+91 90255 06758',
  email: 'metadentalecr@gmail.com',
  address: '1/130, East Coast Road, Panaiyur, Chennai, Tamil Nadu 600119',
  postalAddress: {
    streetAddress: '1/130, East Coast Road, Panaiyur',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600119',
    addressCountry: 'IN',
  },
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '21:00',
  },
  hours: 'Monday–Saturday, 9:00 AM–9:00 PM',
  sunday: 'Sunday by appointment',
  booking: process.env.NEXT_PUBLIC_MYSLOTHUB_URL || 'https://www.myslothub.com/metadental',
  whatsapp:
    'https://wa.me/919094465709?text=Hello%20META%20DENTAL%2C%20I%20would%20like%20to%20request%20an%20appointment.',
  maps: 'https://www.google.com/maps?cid=13745415562818724992',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2944201399837!2d80.24270407454533!3d12.888780216689725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b936b74c761%3A0xbec186a0c7efa480!2sMETA%20DENTAL!5e0!3m2!1sen!2sin!4v1790751861477!5m2!1sen!2sin',
  instagram: 'https://www.instagram.com/metadentalecr/',
  reviews: {
    rating: null as number | null,
    count: null as number | null,
    verifiedAt: null as string | null,
  },
};
export const allowIndexing = process.env.ENABLE_INDEXING === 'true';
export const absolute = (pathname: string) => {
  if (/^https?:\/\//.test(pathname)) return pathname;
  const base = new URL(`${site.url}/`);
  const normalized = pathname.replace(/^\/+/, '');
  const basePath = base.pathname.replace(/^\/+|\/+$/g, '');
  if (basePath && (normalized === basePath || normalized.startsWith(`${basePath}/`))) {
    return new URL(`/${normalized}`, base.origin).toString();
  }
  return new URL(normalized, base).toString();
};
