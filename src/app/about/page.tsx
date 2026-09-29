import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_about_page;
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
import { DoctorCards } from '@/components/content-cards';
import { ClinicGallery } from '@/components/clinic-gallery';
import { seo } from '@/lib/seo';
export const metadata = seo(
  copy['about_our_dental_clinic_in_panaiyur'],
  copy['get_to_know_meta_dental_on'],
  '/about/',
);
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Our clinic', href: '/about/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['about_meta_dental']}
        title={copy['rooted_in_care_right_here_on']}
        description={copy['our_clinic_in_panaiyur_brings_restorative']}
      />
      <section className="section">
        <div className="container">
          <div className="editorial-grid">
            <h2>
              {copy['time_to_listen']}
              <br />
              {copy['space_to_feel_comfortable']}
            </h2>
            <div>
              <p>{copy['a_dental_decision_should_begin_with']}</p>
              <p>{copy['whether_you_are_visiting_for_a']}</p>
            </div>
          </div>
          <ClinicGallery />
        </div>
      </section>
      <section className="section muted-section">
        <div className="container">
          <h2>{copy['your_care_team']}</h2>
          <DoctorCards />
        </div>
      </section>
      <CTA />
    </>
  );
}
