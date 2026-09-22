import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_services_page;
import { services, categories } from '@/data/services';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
import { ServiceCards } from '@/components/content-cards';
import { seo } from '@/lib/seo';
export const metadata = seo(
  copy['dental_treatments_in_ecr_chennai'],
  copy['explore_dental_implants_aligners_root_canal'],
  '/services/',
);
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Treatments', href: '/services/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['dental_treatments']}
        title={copy['care_shaped_around_your_smile']}
        description={copy['explore_your_options_understand_what_to']}
      />
      <section className="section">
        <div className="container">
          {categories.map((category) => (
            <section className="category-section" key={category}>
              <h2>{category}</h2>
              <ServiceCards items={services.filter((s) => s.category === category)} />
            </section>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
