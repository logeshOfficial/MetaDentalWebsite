import { assetPath } from '@/lib/paths';

// Edit the brand here; layouts read these values automatically.
export const brand = {
  monogram: 'M',
  logo: {
    src: assetPath('/brand/meta-dental-logo.svg'),
    alt: 'META DENTAL tooth and implant logo',
    width: 64,
    height: 64,
  },
  font: {
    body: 'Manrope Variable, Arial, sans-serif',
    heading: 'Manrope Variable, Arial, sans-serif',
  },
  colors: {
    ink: '#153d39',
    muted: '#526964',
    primary: '#095b53',
    primaryHover: '#06483f',
    surface: '#f3f8f6',
    background: '#ffffff',
    border: '#dbe6e1',
    accent: '#b39550',
    onPrimary: '#ffffff',
    onPrimaryMuted: '#e0eeea',
    accentOnPrimary: '#d7c898',
    footerMuted: '#c0d4ce',
  },
  images: {
    hero: { src: assetPath('/images/clinic.jpg'), alt: 'Treatment room at META DENTAL, Panaiyur' },
    reception: { src: assetPath('/images/reception.jpg'), alt: 'Reception at META DENTAL' },
    treatment: { src: assetPath('/images/treatment.jpg'), alt: 'Dental treatment suite at META DENTAL' },
    exterior: { src: assetPath('/images/exterior.jpg'), alt: 'META DENTAL entrance on East Coast Road' },
    clinicalCare: {
      src: assetPath('/images/treatment.jpg'),
      alt: 'META DENTAL clinical treatment room prepared for patient care',
    },
  },
};
export const navigation = [
  { label: 'Treatments', href: '/services/' },
  { label: 'Our doctors', href: '/doctors/' },
  { label: 'Our clinic', href: '/about/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerNavigation = [
  { label: 'About the clinic', href: '/about/' },
  { label: 'Meet our doctors', href: '/doctors/' },
  { label: 'Treatments', href: '/services/' },
  { label: 'Patient reviews', href: '/reviews/' },
  { label: 'Treatment results', href: '/results/' },
  { label: 'Dental guides', href: '/blog/' },
];
export const labels = { book: 'Book an appointment' };
