import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const githubPagesBasePath = isGithubPages ? '/MetaDentalWebsite' : '';

const config: NextConfig = {
  ...(isGithubPages ? { output: 'export' as const } : {}),
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath || undefined,
  poweredByHeader: false,
  trailingSlash: true,
  images: { formats: ['image/avif', 'image/webp'], unoptimized: isGithubPages },
  ...(isGithubPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/:path*',
              headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'X-Frame-Options', value: 'DENY' },
                {
                  key: 'Permissions-Policy',
                  value: 'camera=(), microphone=(), geolocation=()',
                },
              ],
            },
          ];
        },
      }),
};
export default config;
