export const SEO_CONFIG = {
  // Use the production URL. To switch to a custom domain, update this single value.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://fourfrontlab.vercel.app',
  siteName: 'FourFrontLab',
  title: 'FourFrontLab | Software Development & Digital Solutions',
  description: 'We engineer digital experiences that perform. Scalable architecture, fluid frontend, and measured impact for web and mobile development.',
  logo: '/logo.png', // Assuming /logo.png exists in public
  socialBanner: '/opengraph-image.jpg', // Used for OG/Twitter images
  socials: {
    // Add real social links here if known; otherwise leave empty/undefined
  }
};
