import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "FourFrontLab — Web Development Studio",
  description: "We engineer digital experiences that perform. Scalable architecture, fluid frontend, and measured impact.",
  icons: {
    icon: "/icon.jpg",
  },
  openGraph: {
    title: "FourFrontLab — Web Development Studio",
    description: "We engineer digital experiences that perform.",
    images: ["/opengraph-image.jpg"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} antialiased`} suppressHydrationWarning={true}>
      <body className="min-h-screen bg-[#0A0A0A] text-[#A0A0A0] selection:bg-[#C6FF00] selection:text-black font-inter" suppressHydrationWarning={true}>
        <div className="fixed inset-0 bg-noise z-[9999] pointer-events-none mix-blend-overlay opacity-30"></div>
        <Navbar />
        <LenisProvider>
          {children}
        </LenisProvider>
        <Footer />
      </body>
    </html>
  );
}
