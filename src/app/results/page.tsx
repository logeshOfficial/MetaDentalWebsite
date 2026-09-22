import Image from 'next/image';
import { resultCases } from '@/data/results';
import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.app_results_page;
import { seo } from '@/lib/seo';
import { PageIntro, Breadcrumbs, CTA } from '@/components/ui';
export const metadata = seo(
  copy['understanding_dental_treatment_results'],
  copy['learn_what_to_discuss_when_considering'],
  '/results/',
  false,
);
export default function Page() {
  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Treatment results', href: '/results/' }]} />
      </div>
      <PageIntro
        eyebrow={copy['treatment_results']}
        title={copy['every_smile_has_its_own_starting']}
        description={copy['a_treatment_result_depends_on_your']}
      />
      <section className="section">
        <div className="container">
          <div className="results-grid">
            {resultCases.map((item) => (
              <article className="result-case" key={item.title}>
                <h2>{item.title}</h2>
                <div className="result-pair">
                  <figure>
                    <div>
                      <Image
                        src={item.before.src}
                        alt={item.before.alt}
                        fill
                        sizes="(max-width: 700px) 44vw, 270px"
                      />
                    </div>
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure>
                    <div>
                      <Image
                        src={item.after.src}
                        alt={item.after.alt}
                        fill
                        sizes="(max-width: 700px) 44vw, 270px"
                      />
                    </div>
                    <figcaption>After</figcaption>
                  </figure>
                </div>
                <p>{item.note} Individual results vary.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section muted-section">
        <div className="container narrow prose">
          <h2>{copy['look_beyond_a_beforeandafter_photograph']}</h2>
          <p>{copy['when_discussing_a_treatment_ask_what']}</p>
          <h2>{copy['your_consultation_is_personal']}</h2>
          <p>{copy['bring_your_questions_about_appearance_function']}</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
