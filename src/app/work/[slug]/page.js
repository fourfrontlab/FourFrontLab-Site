import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const projectsData = {
  'hanaz-official': {
    title: "Hanaz Official",
    client: "E-Commerce",
    stack: ["React", "Supabase", "Tailwind", "Stripe"],
    outcome: "Increased admin workflow efficiency by 40%.",
    image: "/projects/hanaz_main.webp",
    images: [
      "/projects/hanaz_modal.webp",
      "/projects/hanaz_main.webp"
    ],
    description: "Hanaz Official is a premium fashion e-commerce storefront. The new dashboard allows administrators to seamlessly manage products, track monthly sales, and monitor active orders in real-time, drastically reducing the time spent on manual entry.",
    problem: "The client was relying on disparate systems to manage their inventory, orders, and customer data, leading to a 30% error rate in order fulfillment and wasted manual hours.",
    solution: "We built a centralized administrative dashboard integrated directly with their custom React storefront. Using Supabase for real-time database updates and Stripe for seamless payment processing, we created a single source of truth for the business."
  },
  'roamease': {
    title: "RoamEase",
    client: "Travel Tech",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    outcome: "Processed $2M+ in frictionless bookings.",
    image: "/projects/roamease_main.webp",
    images: [
      "/projects/roamease_modal.webp",
      "/projects/roamease_main.webp"
    ],
    description: "RoamEase simplifies the travel experience by offering frictionless bookings and highly detailed, day-by-day itineraries. Users can seamlessly track flight gates, check-in times, and hotel confirmations in one centralized, sleek interface.",
    problem: "Travelers were frustrated with juggling multiple apps for flights, hotels, and itineraries, leading to high drop-off rates during the booking process.",
    solution: "We architected a unified Next.js platform that aggregates travel data in real-time. By leveraging a high-performance Node.js backend and Redis caching, we ensured that flight updates and booking confirmations are delivered instantly to the user's dashboard."
  },
  'edutrack': {
    title: "EduTrack",
    client: "EdTech",
    stack: ["Vue", "Express", "MongoDB", "WebSockets"],
    outcome: "Real-time analytics for 10k+ active students.",
    image: "/projects/edutrack_main.webp",
    images: [
      "/projects/edutrack_modal.webp",
      "/projects/edutrack_main.webp"
    ],
    description: "EduTrack empowers educators with real-time analytics and predictive models for student engagement. The platform identifies at-risk students through detailed performance metrics, radar charts for skills, and real-time activity heatmaps.",
    problem: "Educators lacked visibility into real-time student performance and engagement, making it difficult to intervene before students fell significantly behind.",
    solution: "We developed a Vue.js frontend with complex charting capabilities and integrated WebSockets for live data streaming. The MongoDB backend was optimized to handle high-frequency event logging from thousands of concurrent student sessions."
  }
};

export function generateStaticParams() {
  return [
    { slug: 'hanaz-official' },
    { slug: 'roamease' },
    { slug: 'edutrack' }
  ];
}

export function generateMetadata({ params }) {
  const project = projectsData[params.slug];
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }) {
  const project = projectsData[params.slug];

  if (!project) {
    return (
      <main className="min-h-screen pt-32 px-6 flex flex-col items-center text-center bg-[#F0F1F3]">
        <h1 className="text-4xl font-bold font-space text-[#1A1A1A] mb-4">Project Not Found</h1>
        <Link href="/work" className="text-[#0E5C8C] hover:underline">Return to Work</Link>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-24 min-h-screen bg-[#F0F1F3]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <Link href="/work" className="inline-flex items-center gap-2 text-[#5A5A5A] hover:text-[#0E5C8C] mb-12 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Deployments
        </Link>
        
        <div className="mb-12">
          <span className="font-mono text-[#0E5C8C] text-xs uppercase tracking-widest bg-[#0E5C8C]/8 px-4 py-2 rounded-sm border border-[#0E5C8C]/20 inline-block mb-6">
            {project.client}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-space tracking-tight text-[#1A1A1A] mb-8">
            {project.title}
          </h1>
          <p className="text-[#5A5A5A] text-xl md:text-2xl font-light leading-relaxed mb-12 border-l-2 border-[#0E5C8C] pl-6">
            {project.description}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20">
        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#E8EAF0] border border-[#E0E2E5]">
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 1400px) 100vw, 1400px" className="object-cover" priority />
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 pb-20 border-b border-[#E0E2E5]">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold font-space text-[#1A1A1A] mb-6">The Problem</h2>
            <p className="text-[#5A5A5A] text-lg leading-relaxed mb-12">
              {project.problem}
            </p>
            
            <h2 className="text-3xl font-bold font-space text-[#1A1A1A] mb-6">The Solution</h2>
            <p className="text-[#5A5A5A] text-lg leading-relaxed">
              {project.solution}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-sm border border-[#E0E2E5] shadow-sm h-fit">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#5A5A5A] mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-[#5A5A5A] bg-[#F0F1F3] px-3 py-1.5 rounded-sm border border-[#E0E2E5]">
                  {tech}
                </span>
              ))}
            </div>
            
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#5A5A5A] mb-4">Outcome</h3>
            <p className="font-medium text-[#1A1A1A] text-lg">
              {project.outcome}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#E8EAF0] border border-[#E0E2E5]">
              <Image src={img} alt={`${project.title} view ${i+1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
