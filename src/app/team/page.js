import Founders from '@/components/Founders';

export const metadata = {
  title: 'Team',
  description: 'Meet the four founders behind FourFrontLab.',
};

export default function TeamPage() {
  return (
    <main className="pt-20">
      <Founders />
    </main>
  );
}
