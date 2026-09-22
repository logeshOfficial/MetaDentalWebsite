import type { MetadataRoute } from 'next';
import { services, isServiceApproved } from '@/data/services';
import { doctors } from '@/data/doctors';
import { articles } from '@/data/articles';
import { absolute, allowIndexing } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing) return [];
  const paths = [
    '/',
    '/about/',
    '/services/',
    '/doctors/',
    '/contact/',
    '/book-appointment/',
    '/reviews/',
    '/locations/panaiyur/',
    ...doctors.map((d) => '/doctors/' + d.slug + '/'),
    ...services.filter(isServiceApproved).map((s) => '/services/' + s.slug + '/'),
  ];
  const published = articles.filter((a) => a.status === 'published' && a.reviewer && a.reviewedAt);
  if (published.length) paths.push('/blog/', ...published.map((a) => '/blog/' + a.slug + '/'));
  return paths.map((p) => ({ url: absolute(p) }));
}
