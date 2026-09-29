import { LegacyFragments } from '@/components/legacy-fragments';

import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_layout;
import type { CSSProperties } from 'react';
import { brand } from '@/config/brand';
import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site-shell';
import { Tracking } from '@/components/tracking';
import { JsonLd } from '@/components/json-ld';
import { clinicSchema } from '@/lib/seo';
import { site, absolute, allowIndexing } from '@/lib/site';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'META DENTAL | Dentist in ECR, Panaiyur', template: '%s | ' + site.name },
  description:
    'META DENTAL in Panaiyur on ECR, Chennai offers general, preventive, restorative, cosmetic and orthodontic dental care by appointment.',
  robots: { index: allowIndexing, follow: true },
  icons: { icon: brand.logo.src, shortcut: brand.logo.src, apple: brand.logo.src },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body
        style={
          {
            '--font-body': brand.font.body,
            '--font-heading': brand.font.heading,
            '--ink': brand.colors.ink,
            '--muted': brand.colors.muted,
            '--primary': brand.colors.primary,
            '--primary-hover': brand.colors.primaryHover,
            '--surface': brand.colors.surface,
            '--background': brand.colors.background,
            '--border': brand.colors.border,
            '--accent': brand.colors.accent,
            '--on-primary': brand.colors.onPrimary,
            '--on-primary-muted': brand.colors.onPrimaryMuted,
            '--accent-on-primary': brand.colors.accentOnPrimary,
            '--footer-muted': brand.colors.footerMuted,
          } as CSSProperties
        }
      >
        <a href="#main" className="skip-link">
          {copy['skip_to_content']}
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Tracking />
        <LegacyFragments />
        <JsonLd data={clinicSchema} />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': absolute('/#website'),
            name: site.name,
            url: site.url,
            publisher: { '@id': absolute('/#clinic') },
          }}
        />
      </body>
    </html>
  );
}
