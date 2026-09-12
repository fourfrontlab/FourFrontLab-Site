import Hero from '@/components/Hero';
import FourFronts from '@/components/FourFronts';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Founders from '@/components/Founders';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <FourFronts />
      <Stats />
      <Portfolio />
      <Process />
      <Founders />
      <Contact />
    </main>
  );
}
