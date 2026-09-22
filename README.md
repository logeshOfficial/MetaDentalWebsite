# META DENTAL website

Independent Next.js App Router project. No clinic-management repository, database, account, or code is shared.

## Run locally

Requires Node.js 22 or newer. From this project folder:

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Production: npm run build, then npm run start. Use npm run lint, npm run typecheck and npm test for verification. Browser tests use installed Microsoft Edge. A project-local lockfile fixes dependency versions.

## Make changes without editing layouts

| What to change | File |
|---|---|
| Logo, clinic photographs, colors, body/heading fonts, main navigation | src/config/brand.ts |
| Business name, address, phone, email, hours, MySlotHub link | src/lib/site.ts |
| Interface wording, section headings, static-page copy | src/config/copy.ts |
| Homepage content, featured services, questions | src/data/home.ts |
| Treatments, FAQs, related services, review status | src/data/services.ts |
| Doctor photographs, education and areas of practice | src/data/doctors.ts |
| Booking-card text | src/data/booking.ts |
| Article drafts and editorial approval | src/data/articles.ts |
| Privacy, terms and medical information | src/data/legal.ts |

Put replacement assets in public/images, then update the relevant config path. Use clinic-owned photographs with suitable consent. No API keys are needed for the existing MySlotHub, WhatsApp, call and directions links. All online booking buttons use https://www.myslothub.com/metadental.

The default typography is locally hosted Manrope Variable with Arial fallback. Theme values are applied as CSS variables. Changing to another locally hosted font also requires adding its font package/import in globals.css. Structural styles remain in globals.css; content is independent of those styles.

## Publication safeguards

ENABLE_INDEXING defaults to false. All rendered pages emit noindex,follow and the sitemap is empty until explicitly enabled. Robots remains crawlable so search engines can read noindex. This does not make a staging site private: use hosting access controls for private review.

Treatment pages additionally require clinicalReview.status=approved before becoming indexable. Complete the named clinician and ISO review date fields when approval is recorded. Articles require status=published plus reviewer and reviewedAt; drafts are not routed, linked or included in the sitemap. Never attribute a review that has not happened.

Review figures are null centrally because the old website and conversation disagree. No fabricated rating, testimonial, patient count, result image or AggregateRating markup is used. Results and legal pages remain noindex. The empty blog hub remains noindex until a reviewed article is published.

## Deployment

1. Copy .env.example to .env.local for local overrides. Keep secrets out of NEXT_PUBLIC variables.
2. Confirm the production origin, business facts, privacy policy and clinical copy with the clinic.
3. Set ENABLE_INDEXING=true only for the approved production deployment. Rebuild after changing build-time configuration.
4. Deploy as a Next.js Node application (npm ci, npm run build, npm run start), or use a Next.js-compatible managed host. Local scripts bind to localhost; self-hosters can use npx next start --hostname 0.0.0.0 behind a secured HTTPS reverse proxy.
5. Configure HTTPS at the host. Preserve the domain and existing root URL; see docs/launch.md for migration and Search Console checks.

No hosting deployment, domain change, Google profile change or patient-system connection is performed by this project.

