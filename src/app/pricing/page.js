import PricingTiers from '@/components/PricingTiers';

export const metadata = {
  title: 'Pricing',
  description: 'Simple, scalable engagements tailored for your scope.',
};

export default function PricingPage() {
  return (
    <main className="pt-20 bg-[#F0F1F3] min-h-screen">
      <PricingTiers />
    </main>
  );
}
