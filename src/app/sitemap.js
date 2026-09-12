import { SEO_CONFIG } from '@/lib/seo-config';

export default function sitemap() {
  return [
    {
      url: SEO_CONFIG.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
