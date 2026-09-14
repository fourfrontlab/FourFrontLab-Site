import { SEO_CONFIG } from '@/lib/seo-config';

export default function sitemap() {
  const baseUrl = SEO_CONFIG.siteUrl;

  const routes = [
    '',
    '/contact',
    '/pricing',
    '/process',
    '/team',
    '/work',
    '/work/hanaz-official',
    '/work/roamease',
    '/work/edutrack',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route === '' ? '/' : route}`,
  }));
}
