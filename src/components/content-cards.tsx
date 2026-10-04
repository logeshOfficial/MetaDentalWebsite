import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.components_content_cards;
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { services, type Service } from '@/data/services';
import { doctors } from '@/data/doctors';
import serviceImages from '@/config/service-images.json';
import { assetPath } from '@/lib/paths';

const imageMap = serviceImages as Record<string, { src: string; alt: string; position: string }>;

type DoctorCredential = (typeof doctors)[number]['credentials'][number];

export function DoctorCredentialMarks({ credentials }: { credentials: readonly DoctorCredential[] }) {
  return (
    <div className="doctor-credentials" aria-label="Professional credentials">
      {credentials.map((credential) => (
        <a
          className="doctor-credential"
          href={credential.website}
          target="_blank"
          rel="noreferrer"
          key={credential.name}
          title={credential.name}
        >
          <span className="doctor-credential-logo">
            <Image src={credential.logo} alt={credential.logoAlt} fill sizes="120px" />
          </span>
          <span><strong>{credential.shortLabel}</strong><small>{credential.issuer}</small></span>
        </a>
      ))}
    </div>
  );
}
export function ServiceCards({ items = services }: { items?: Service[] }) {
  return (
    <div className="service-grid">
      {items.map((s) => {
        const media = imageMap[s.slug] ?? {
          src: '/images/treatment.jpg',
          alt: 'Treatment room at META DENTAL',
          position: '50% 50%',
        };
        return (
          <Link className="service-card" href={'/services/' + s.slug + '/'} key={s.slug}>
            <span className="service-card-media">
              <Image
                src={assetPath(media.src)}
                alt={media.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 390px"
                style={{ objectPosition: media.position }}
              />
              <span className="service-card-overlay">
                <span className="service-category">{s.category}</span>
                <strong>{s.name}</strong>
              </span>
            </span>
            <span className="service-card-content">
              <span className="service-card-summary">{s.summary}</span>
              <span className="card-link">
                {copy['explore_treatment']}
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function DoctorCards() {
  return (
    <div className="doctor-grid">
      {doctors.map((d) => (
        <article className="doctor-card" key={d.slug}>
          <div className="doctor-image">
            <Image src={d.image} alt={d.name} fill sizes="(max-width: 700px) 90vw, 40vw" />
          </div>
          <div className="doctor-copy">
            <p className="eyebrow">{d.role}</p>
            <h3>
              <Link href={'/doctors/' + d.slug + '/'}>{d.name}</Link>
            </h3>
            <DoctorCredentialMarks credentials={d.credentials} />
            <p>{d.qualification}</p>
            <Link className="text-link" href={'/doctors/' + d.slug + '/'}>
              {copy['meet_your_doctor']}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
