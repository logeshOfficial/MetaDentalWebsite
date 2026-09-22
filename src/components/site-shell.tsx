import { MobileMenu } from './mobile-menu';
import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.components_site_shell;
import { brand, navigation, footerNavigation, labels } from '@/config/brand';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Phone, CalendarDays, MessageCircle, MapPin } from 'lucide-react';
import { site } from '@/lib/site';
const nav = navigation.map((item) => [item.label, item.href]);
export function BookButton({
  label = labels.book,
  className = 'button',
  location = 'site',
}: {
  label?: string;
  className?: string;
  location?: string;
}) {
  return (
    <a
      className={className}
      href={site.booking}
      data-event="myslothub_click"
      data-location={location}
    >
      {label}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
export function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container flex items-center justify-between gap-4">
          <span className="flex items-center gap-2">
            <MapPin size={14} aria-hidden="true" />
            {copy['panaiyur_ecr_chennai']}
          </span>
          <a href={site.phoneHref} data-event="phone_click">
            {site.phone}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" aria-label={copy['meta_dental_home']} className="brand">
            <Image
              src={brand.logo.src}
              alt=""
              width={brand.logo.width}
              height={brand.logo.height}
              unoptimized
            />
            <span>
              {site.name}
              <small>{site.tagline.toUpperCase()}</small>
            </span>
          </Link>
          <nav aria-label={copy['main_navigation']} className="desktop-nav">
            {nav.map(([label, url]) => (
              <Link key={url} href={url}>
                {label}
              </Link>
            ))}
          </nav>
          <BookButton label={copy['book_a_visit']} className="button header-book" />
          <MobileMenu />
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <>
      <footer>
        <div className="container footer-grid">
          <div>
            <Link href="/" className="footer-brand" aria-label={copy['meta_dental_home']}>
              <Image
                src={brand.logo.src}
                alt=""
                width={brand.logo.width}
                height={brand.logo.height}
                unoptimized
              />
              <span>
                {site.name}
                <small>{site.tagline.toUpperCase()}</small>
              </span>
            </Link>
            <p>
              {copy['advanced_dental_care']}
              <br />
              {copy['right_here_on_ecr']}
            </p>
            <p>{site.address}</p>
            <a href={site.phoneHref} data-event="phone_click">
              {site.phone}
            </a>
            <a
              className="social-link"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="META DENTAL on Instagram"
            >
              <Image src="/icons/instagram.svg" alt="" width={20} height={20} unoptimized />{' '}
              Instagram
            </a>
          </div>
          <div>
            <h2>{copy['explore']}</h2>
            {footerNavigation
              .map((item) => [item.label, item.href])
              .map(([label, url]) => (
                <Link key={url} href={url}>
                  {label}
                </Link>
              ))}
          </div>
          <div>
            <h2>{copy['plan_your_visit']}</h2>
            <p>
              {site.hours}
              <br />
              {site.sunday}
            </p>
            <Link href="/contact/">{copy['contact_directions']}</Link>
            <Link href="/locations/panaiyur/">{copy['our_panaiyur_location']}</Link>
            <Link href="/book-appointment/">{copy['appointment_options']}</Link>
            <a href={site.email.startsWith('mailto:') ? site.email : 'mailto:' + site.email}>
              {site.email}
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            {copy['text']}
            {new Date().getFullYear()} {site.name}
          </span>
          <div>
            <Link href="/privacy/">{copy['privacy']}</Link>
            <Link href="/terms/">{copy['terms']}</Link>
            <Link href="/medical-disclaimer/">{copy['medical_information']}</Link>
          </div>
        </div>
      </footer>
      <nav className="mobile-actions" aria-label={copy['quick_appointment_actions']}>
        <a href={site.phoneHref} data-event="phone_click">
          <Phone size={18} aria-hidden="true" />
          {copy['call']}
        </a>
        <a href={site.whatsapp} data-event="whatsapp_click">
          <MessageCircle size={18} aria-hidden="true" />
          {copy['whatsapp']}
        </a>
        <a href={site.booking} data-event="myslothub_click">
          <CalendarDays size={18} aria-hidden="true" />
          {copy['book']}
        </a>
      </nav>
    </>
  );
}
