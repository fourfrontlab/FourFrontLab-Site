import { SEO_CONFIG } from '@/lib/seo-config';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SEO_CONFIG.siteUrl}/sitemap.xml`,
  };
}
