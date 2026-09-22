# Customization guide

You do not need to change page layouts to update brand assets and content.

## Brand and typography

Edit src/config/brand.ts. Change primary and primaryHover for buttons and branded sections. Change background, surface, ink and muted for page and text colors. Accent is used sparingly for dividers and focus. On-primary colors control text on branded surfaces. Body and heading fonts are separate settings; the default font is the locally hosted Manrope Variable. Any replacement font must also be installed/imported in src/app/globals.css. The favicon reads the monogram and colors from this same config.

## Logo and photographs

The approved clinic mark is stored at public/brand/meta-dental-logo.svg. It was traced directly from the clinic's existing high-resolution logo, which matches the Instagram profile mark. The same configured SVG is used in the header, footer and app icon. Add future photographs under public/images and update their paths in the relevant data file. Doctor portrait paths are next to their biography in src/data/doctors.ts. Use adequately sized images and verify crops on a phone. No stock images or generated dentist photos are included.

## Text and links

Business details and booking URL: src/lib/site.ts. Main and footer navigation: src/config/brand.ts. Page and interface copy: src/config/copy.ts. Homepage sections: src/data/home.ts. Treatment, doctor and article records each have their own file in src/data. Booking-card text is in src/data/booking.ts. Keep internal URL slugs stable where possible.

For a future business relocation, update both human-readable address/hours and the adjacent structured address/hours in site.ts; check location-specific editorial copy as well.

## Publish reviewed content

For each treatment, set clinicalReview.status to approved only after review, and enter reviewer and reviewedAt (YYYY-MM-DD). To publish a blog entry, record its reviewer and reviewedAt and change status to published. Update related links as appropriate. Rebuild after configuration changes. The global ENABLE_INDEXING switch remains off until production is ready.
