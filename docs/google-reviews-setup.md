# Live Google reviews setup

The website is ready to display live Google Business Profile data. Until credentials are added, it safely shows the existing six review cards and the confirmed count of 212.

## Google account setup

1. Sign in with an owner or manager account for the verified META DENTAL Business Profile.
2. Create a Google Cloud project under an Organization account.
3. Apply for Google Business Profile API access using Google's official form. The profile must be verified and active for at least 60 days, and its website should be current.
4. After approval, enable the Google Business Profile APIs and create an OAuth 2.0 web application.
5. Authorize the `https://www.googleapis.com/auth/business.manage` scope and obtain a long-lived refresh token.
6. Retrieve the Business Profile account ID and location ID through the Account Management and Business Information APIs.

Official starting points:

- https://developers.google.com/my-business/content/prereqs
- https://developers.google.com/my-business/content/basic-setup
- https://developers.google.com/my-business/reference/accountmanagement/rest/v1/accounts/list
- https://developers.google.com/my-business/reference/businessinformation/rest/v1/accounts.locations/list

## Website configuration

Add these server-side environment variables to the production host. Never expose them with a `NEXT_PUBLIC_` prefix and never commit their real values:

```text
GOOGLE_BUSINESS_CLIENT_ID=
GOOGLE_BUSINESS_CLIENT_SECRET=
GOOGLE_BUSINESS_REFRESH_TOKEN=
GOOGLE_BUSINESS_ACCOUNT_ID=
GOOGLE_BUSINESS_LOCATION_ID=
```

Redeploy the website. Open `/api/google-reviews` to confirm it returns the live `rating`, `count`, and `reviews`, then check the homepage.

The server requests all available review pages, keeps the response for one hour, and returns only display fields. The homepage shows six cards at a time and changes the set every 12 seconds. Hovering or focusing the review area pauses rotation. Visitors can pause, resume, or move between sets manually. On phones, one card is visible at a time. “Read all reviews on Google” opens the clinic's existing Google Maps listing.

If Google is temporarily unavailable, the existing cards remain visible. Credentials stay on the server and are never sent to the browser.
