import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { SEO_CONFIG } from "@/lib/seo-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: {
    default: SEO_CONFIG.title,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },
  description: SEO_CONFIG.description,
  keywords: ["software development", "web development", "mobile application development", "custom software"],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/icon.jpg",
  },
  openGraph: {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: SEO_CONFIG.socialBanner,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.title,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.socialBanner],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SEO_CONFIG.siteName,
    "url": SEO_CONFIG.siteUrl,
    "logo": `${SEO_CONFIG.siteUrl}${SEO_CONFIG.logo}`,
    "description": SEO_CONFIG.description,
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} antialiased`} suppressHydrationWarning={true}>
      <head>
        <meta name="google-site-verification" content="sYR99Z5ryt4CEIvEblASNnf3MQ-_uImraol1piBUBms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAFAF8] text-[#5C5C5C] selection:bg-[#1B3A5C] selection:text-white font-inter blueprint-grid" suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
