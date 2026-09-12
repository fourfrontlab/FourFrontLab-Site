import Portfolio from '@/components/Portfolio';

export const metadata = {
  title: 'Work',
  description: 'View our past deployments and case studies.',
};

export default function WorkPage() {
  return (
    <main className="pt-20">
      <Portfolio />
    </main>
  );
}
