import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.components_content_cards;
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Smile, ShieldCheck, Heart, CirclePlus, Gem } from 'lucide-react';
import { services, type Service } from '@/data/services';
import { doctors } from '@/data/doctors';
const icons = [Gem, Smile, CirclePlus, Sparkles, Heart, ShieldCheck];
export function ServiceCards({ items = services }: { items?: Service[] }) {
  return (
    <div className="service-grid">
      {items.map((s, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Link className="service-card" href={'/services/' + s.slug + '/'} key={s.slug}>
            <span className="service-icon">
              <Icon size={27} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="service-category">{s.category}</span>
            <h3>{s.name}</h3>
            <p>{s.summary}</p>
            <span className="card-link">
              {copy['explore_treatment']}
              <ArrowUpRight size={18} aria-hidden="true" />
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
