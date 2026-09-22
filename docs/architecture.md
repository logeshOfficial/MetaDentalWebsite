# Architecture and SEO map

Next.js App Router; TypeScript strict mode; Tailwind CSS 4; server-rendered/static pages; locally hosted font. The only global client script listens for conversion clicks. No map iframe, tracking library or booking iframe is loaded before interaction.

## Routes and intent

- / — dentist ECR; dental clinic Panaiyur; East Coast Road Chennai
- /services/ — treatment discovery and category navigation
- /services/dental-implants/ — dental implants ECR, implant dentist ECR
- /services/invisible-aligners/ — invisible aligners, Invisalign ECR
- /services/braces-orthodontics/ — orthodontist and braces ECR
- /services/root-canal-treatment/ — root canal treatment ECR
- /services/cosmetic-dentistry/ — cosmetic dentist ECR
- /services/smile-designing/ — smile designing ECR
- /services/teeth-whitening/ — teeth whitening ECR
- /services/crowns-bridges/ — crowns and bridges ECR
- /services/dentures/ — dentures ECR
- /services/wisdom-tooth-extraction/ — wisdom tooth extraction ECR
- /services/kids-dentistry/ — children’s dental care ECR (no invented pediatric specialist)
- /services/gum-treatment/ — gum treatment ECR
- /services/laser-dentistry/ — laser dentistry ECR
- /services/dental-cleaning/ — cleaning and check-ups Panaiyur
- /services/emergency-dentist/ — urgent dental appointments ECR (not a 24-hour service)
- /doctors/ and two individual profiles — real people, qualifications and related services
- /about/ — clinic, photographs and care approach
- /contact/, /book-appointment/ — calls, WhatsApp, exact clinic booking URL and directions
- /locations/panaiyur/ — actual clinic location; nearby areas mentioned without fake branches
- /reviews/ — link to live independent reviews; no stale numbers
- /results/ — expectations and consultation; no unverified patient photos
- /blog/ and /blog/[slug]/ — scalable editorial hub; three drafts excluded pending review
- /privacy/, /terms/, /medical-disclaimer/ — editable policy templates pending owner review

## Linking and structured data

Global navigation → services/doctors/clinic/contact. Homepage → six main services and doctor profiles. Service → related treatments, relevant doctor and booking. Doctor → practice-related services. Reviewed article → related service. Footer → supporting routes. No orphan public pages.

Dentist entity uses a stable /#clinic ID. WebSite references the clinic. Doctor Person entities link through worksFor. BreadcrumbList is generated from visible breadcrumbs. Service WebPage and reviewed BlogPosting describe visible content. No unverifiable coordinates, fake ratings or speculative FAQ rich-result claims.

Canonical, Open Graph and X metadata are generated per page. Sitemap includes only approved/indexable routes and uses the configured origin. Drafts remain excluded. Next Image supplies responsive sizing and local image optimisation.

