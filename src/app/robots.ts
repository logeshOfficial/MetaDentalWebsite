import type { MetadataRoute } from 'next';
import { absolute, allowIndexing } from '@/lib/site';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(allowIndexing ? { sitemap: absolute('/sitemap.xml') } : {}),
  };
}
