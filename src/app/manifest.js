import { SEO_CONFIG } from '@/lib/seo-config';

export default function manifest() {
  return {
    name: SEO_CONFIG.siteName,
    short_name: 'FourFront',
    description: SEO_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F0F1F3',
    theme_color: '#0E5C8C',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      }
    ],
  };
}
