import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_doctors_page;
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
import { DoctorCards } from '@/components/content-cards';
import { seo } from '@/lib/seo';
export const metadata = seo(
  copy['meet_our_dentists_in_panaiyur_ecr'],
  copy['meet_dr_imran_and_dr_amrin'],
  '/doctors/',
);
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Our doctors', href: '/doctors/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['your_care_team']}
        title={copy['good_dentistry_begins_with_people']}
        description={copy['meet_the_clinicians_behind_your_care']}
      />
      <section className="section">
        <div className="container">
          <DoctorCards />
        </div>
      </section>
      <CTA />
    </>
  );
}
