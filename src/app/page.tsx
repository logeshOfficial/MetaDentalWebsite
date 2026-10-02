import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_page;
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Clock, MessageCircle } from 'lucide-react';
import { brand } from '@/config/brand';
import { home } from '@/data/home';
import { services } from '@/data/services';
import { site } from '@/lib/site';
import { assetPath } from '@/lib/paths';
import { seo } from '@/lib/seo';
import { BookButton } from '@/components/site-shell';
import { ServiceCards, DoctorCards } from '@/components/content-cards';
import { FAQ, CTA } from '@/components/ui';
import { GoogleReviews } from '@/components/google-reviews';
import { ClinicGallery } from '@/components/clinic-gallery';
export const metadata = seo(
  copy['dentist_in_ecr_chennai_meta_dental'],
  copy['meet_your_dentists_at_meta_dental'],
  '/',
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{home.eyebrow}</p>
            <h1>
              {home.title}
              <br />
              <span>{home.titleAccent}</span>
            </h1>
            <p className="hero-description">{home.description}</p>
            <div className="button-row">
              <BookButton location="home-hero" />
              <Link href="/services/" className="button secondary">
                {copy['explore_treatments']}
              </Link>
            </div>
            <div className="hero-contact">
              <span className="round-icon">
                <MessageCircle size={19} aria-hidden="true" />
              </span>
              <div>
                {copy['have_a_question_before_you_visit']}
                <br />
                <a href={site.whatsapp} data-event="whatsapp_click">
                  {copy['lets_talk_on_whatsapp']}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src={brand.images.hero.src}
              alt={brand.images.hero.alt}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div className="image-caption">
              <span>{home.heroCaption}</span>
              <p>{home.heroNote}</p>
            </div>
            <div className="image-index" aria-hidden="true">
              {copy['md_01']}
            </div>
          </div>
        </div>
      </section>
      <section className="quick-info">
        <div className="container quick-info-grid">
          <div>
            <MapPin aria-hidden="true" size={23} />
            <span>
              <strong>{copy['your_dentist_on_ecr']}</strong>
              <small>{copy['panaiyur_chennai']}</small>
            </span>
          </div>
          <div>
            <Clock aria-hidden="true" size={23} />
            <span>
              <strong>{site.hours}</strong>
              <small>{site.sunday}</small>
            </span>
          </div>
          <div>
            <MessageCircle aria-hidden="true" size={23} />
            <span>
              <strong>{copy['here_to_listen']}</strong>
              <a href={site.phoneHref} data-event="phone_click">
                {site.phone}
              </a>
            </span>
          </div>
        </div>
      </section>
      <section className="implant-home-feature" aria-labelledby="home-implant-title">
        <div className="container implant-home-grid">
          <div className="implant-home-copy">
            <p className="eyebrow">Implant systems at META DENTAL</p>
            <h2 id="home-implant-title">A closer look at implant systems.</h2>
            <p>
              Implant treatment combines the implant body, connecting components and the final
              restoration. Explore established systems and learn how your dentist plans the right
              option around your oral health and treatment needs.
            </p>
            <Link className="text-link" href="/services/dental-implants/">
              Explore dental implants
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <Link
            className="implant-home-image"
            href="/services/dental-implants/#implant-systems-heading"
            aria-label="Open the META DENTAL implant systems library"
          >
            <Image
              src={assetPath('/images/gallery/implant-systems.webp')}
              alt="Illustrated overview of established dental implant systems and components"
              fill
              sizes="(max-width: 800px) 100vw, 56vw"
            />
          </Link>
        </div>
      </section>
      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{copy['care_for_every_kind_of_smile']}</p>
              <h2>{home.treatmentsHeading}</h2>
            </div>
            <p>{home.treatmentsCopy}</p>
          </div>
          <ServiceCards
            items={home.featured.map((slug) => services.find((s) => s.slug === slug)!)}
          />
          <div className="center mt-10">
            <Link className="text-link" href="/services/">
              {copy['discover_all_treatments']}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="care-section">
        <div className="container care-grid">
          <div>
            <p className="eyebrow">{copy['the_meta_dental_approach']}</p>
            <h2>
              {copy['expertise_you_can_trust']}
              <br />
              {copy['care_you_can_feel']}
            </h2>
            <Link href="/about/" className="text-link">
              {copy['get_to_know_our_clinic']}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="values-list">
            {home.values.map((v, i) => (
              <article key={v.title}>
                <span>
                  {copy['0']}
                  {i + 1}
                </span>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="doctors">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{copy['people_behind_your_care']}</p>
              <h2>{copy['meet_your_dentists']}</h2>
            </div>
            <p>{copy['get_to_know_the_people_who']}</p>
          </div>
          <DoctorCards />
        </div>
      </section>
      <section className="clinic-section" id="gallery">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{copy['right_here_in_your_neighbourhood']}</p>
              <h2>
                {copy['make_yourself']}
                <br />
                {copy['at_home']}
              </h2>
            </div>
            <p>{copy['a_dental_visit_starts_long_before']}</p>
          </div>
          <ClinicGallery />
          <div className="clinic-address-row">
            <address>{site.address}</address>
            <a href={site.maps} className="text-link" data-event="directions_click">
              {copy['find_your_way_here']}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="section" id="reviews">
        <div className="container">
          <GoogleReviews />
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">{copy['a_little_clarity_before_you_visit']}</p>
            <h2>
              {copy['your_questions']}
              <br />
              {copy['answered']}
            </h2>
            <Link href="/contact/" className="text-link">
              {copy['ask_us_a_question']}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <FAQ items={home.faqs} />
        </div>
      </section>
      <CTA />
    </>
  );
}
