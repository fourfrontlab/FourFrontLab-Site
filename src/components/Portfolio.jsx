'use client';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Hanaz Official",
    client: "E-Commerce",
    stack: ["React", "Supabase", "Tailwind", "Stripe"],
    outcome: "Increased admin workflow efficiency by 40%.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "RoamEase",
    client: "Travel Tech",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    outcome: "Processed $2M+ in frictionless bookings.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "EduTrack",
    client: "EdTech",
    stack: ["Vue", "Express", "MongoDB", "WebSockets"],
    outcome: "Real-time analytics for 10k+ active students.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function Portfolio() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-900 bg-[#0A0A0A]" id="work">
      <div className="mb-20">
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white">Deployments</h2>
      </div>

      <div className="flex flex-col gap-16 lg:gap-24">
        {projects.map((project, i) => (
          <div key={i} className="group relative w-full flex flex-col lg:flex-row gap-8 lg:gap-16 border border-zinc-900 bg-[#111] p-6 lg:p-10 rounded-sm hover:border-zinc-700 transition-colors">
            
            {/* Image / Mockup Area */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-sm relative aspect-[4/3] bg-zinc-900">
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                 style={{ backgroundImage: `url(${project.image})` }}
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Content Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[#CCFF00] text-sm bg-black px-4 py-2 rounded-sm border border-zinc-800">
                  {project.client}
                </span>
                <div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center group-hover:bg-[#CCFF00] group-hover:text-black transition-colors duration-300 cursor-pointer">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-4xl lg:text-6xl font-medium tracking-tight mb-6 text-white group-hover:text-[#CCFF00] transition-colors">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech, j) => (
                   <span key={j} className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-sm border border-zinc-800">
                     {tech}
                   </span>
                ))}
              </div>
              
              <div className="mt-auto pt-6 border-t border-zinc-900">
                <span className="block text-zinc-500 font-mono text-xs uppercase mb-2">Outcome</span>
                <span className="font-inter text-white text-lg">{project.outcome}</span>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
