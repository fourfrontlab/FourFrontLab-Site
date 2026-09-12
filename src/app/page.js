import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

// Components below the fold are loaded asynchronously to reduce initial JS payload.
const FourFronts = dynamic(() => import('@/components/FourFronts'), { ssr: true });
const Stats = dynamic(() => import('@/components/Stats'), { ssr: true });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: true });
const Process = dynamic(() => import('@/components/Process'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });

export default function Home() {
  return (
    <main>
      <Hero />
      <FourFronts />
      <Stats />
      <Portfolio teaser={true} />
      <Process teaser={true} />
      <Testimonials />
      <Contact />
    </main>
  );
}
