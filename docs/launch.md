# Launch, migration and measurement

## URL migration

The observed current site is a single page at /. Preserve /. Existing root fragments #services, #doctors, #reviews and #contact should stay useful. The rebuilt homepage retains the first three and routes old #contact/#booking/#results fragments through the legacy fragment helper. URL fragments never reach the server and cannot be handled by HTTP redirects.

Before replacing production, obtain a full crawl and Search Console/top backlink URL export. Do not redirect unknown pages to the homepage. Add verified retired paths to next.config.ts redirects using the nearest equivalent. No speculative blanket redirects are installed. Keep query parameters and valuable existing paths when applicable.

## Required launch checks

1. Confirm all business facts, legal/privacy copy and image permissions with clinic owner.
2. Clinician reviews treatment text; enter reviewer/date and approve each service. Publish articles only after review.
3. Verify MySlotHub clinic, phone, WhatsApp and directions on a real device.
4. Select production origin, enable indexing for production only, rebuild and run checks.
5. Verify generated sitemap includes every approved service and excludes drafts. Check noindex is removed only where intended.
6. Confirm HTTPS, canonical redirects and security headers with the real host.
7. Run Google Rich Results Test and Schema.org validator against the deployed URLs. Local JSON parsing alone is not Google validation.
8. Add Search Console verification, submit sitemap, inspect important URLs, monitor indexing and crawl errors.
9. Measure Lighthouse/PageSpeed on the deployed site and monitor real-user LCP, INP and CLS. Local testing does not establish field Core Web Vitals.
10. Maintain Google Business Profile NAP, treatment information and honest review collection independently of the website. No ranking is guaranteed.

## Analytics events

The client listener pushes only event name and placement to window.dataLayer. It does not transmit names, phones, messages, clinical details, query strings or form contents. No GA4/GTM script is enabled by default.

- myslothub_click: an outbound booking-link click, not a confirmed appointment.
- phone_click: call-link click.
- whatsapp_click: WhatsApp-link click.
- directions_click: map-link click.
- appointment_start: reserve for a measurable booking-start interaction in MySlotHub.
- appointment_complete: implement only with a verified cross-domain integration or booking callback; never infer completion from a click.
- contact_form_submit: not emitted because this build has no patient-data form.

Add consent-aware GA4/GTM only after the account, consent requirements and privacy wording are approved. Cross-domain completion measurement needs cooperation from MySlotHub; it is not silently simulated.

