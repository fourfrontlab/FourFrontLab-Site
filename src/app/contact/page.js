import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with us to start your next project.',
};

export default function ContactPage() {
  return (
    <main className="pt-20 bg-[#F0F1F3] min-h-screen">
      <Contact />
      <div className="section-padding px-6 md:px-12 pb-24">
        <FAQ />
      </div>
    </main>
  );
}
