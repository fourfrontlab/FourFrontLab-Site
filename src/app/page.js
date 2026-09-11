import Hero from '@/components/Hero';
import FourFronts from '@/components/FourFronts';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Founders from '@/components/Founders';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <FourFronts />
      <About />
      <Portfolio />
      <Process />
      <Founders />
      <Contact />
    </main>
  );
}
