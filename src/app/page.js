import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
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
      <ClientLogos />
      <FourFronts />
      <About />
      <Portfolio />
      <Process />
      <Founders />
      <Contact />
    </main>
  );
}
