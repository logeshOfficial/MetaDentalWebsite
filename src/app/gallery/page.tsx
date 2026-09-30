import { Breadcrumbs, CTA, PageIntro } from '@/components/ui';
import { ClinicGallery } from '@/components/clinic-gallery';
import { seo } from '@/lib/seo';

export const metadata = seo(
  'Dental Clinic Gallery in Panaiyur, ECR',
  'Explore photos of META DENTAL in Panaiyur, Chennai, including our clinic entrance, dental care spaces and team at work.',
  '/gallery/',
);

export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Gallery', href: '/gallery/' }]} />
      </div>
      <PageIntro
        eyebrow="Inside META DENTAL"
        title="A closer look at our clinic."
        description="Explore our Panaiyur clinic, meet the people behind your care and see the spaces prepared for your visit."
      />
      <section className="section" aria-labelledby="clinic-gallery-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our clinic in pictures</p>
              <h2 id="clinic-gallery-heading">Welcome to META DENTAL.</h2>
            </div>
            <p>
              Select any photograph to view it in the full-screen gallery. The collection can be
              expanded as new clinic photographs become available.
            </p>
          </div>
          <ClinicGallery />
        </div>
      </section>
      <CTA />
    </>
  );
}
