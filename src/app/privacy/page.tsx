import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_privacy_page;
import { legal } from '@/data/legal';
import { PageIntro, Breadcrumbs } from '@/components/ui';
import { seo } from '@/lib/seo';
const content = legal['privacy'];
export const metadata = seo(content.title, content.description, '/privacy/', false);
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: content.title, href: '/privacy/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['meta_dental']}
        title={content.title}
        description={content.description}
      />
      <section className="section">
        <div className="container narrow prose">
          {content.sections.map(([title, text]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
