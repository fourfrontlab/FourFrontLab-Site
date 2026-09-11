'use client';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Hanaz Official",
    client: "E-Commerce",
    stack: "React / Supabase / Tailwind",
    outcome: "Increased admin workflow efficiency by 40%.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "RoamEase",
    client: "Travel Tech",
    stack: "Next.js / Node / PostgreSQL",
    outcome: "Processed $2M+ in frictionless bookings.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "EduTrack",
    client: "EdTech",
    stack: "Vue / Express / MongoDB",
    outcome: "Real-time analytics for 10k+ active students.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function Portfolio() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-900">
      <div className="mb-20">
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Deployments</h2>
      </div>

      <div className="flex flex-col gap-12 lg:gap-24">
        {projects.map((project, i) => (
          <div key={i} className="group relative w-full h-[60vh] lg:h-[80vh] overflow-hidden rounded-sm bg-zinc-900 cursor-pointer">
            {/* Background Image placeholder with Unsplash */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-30 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[#CCFF00] text-sm bg-black/80 px-4 py-2 rounded-sm border border-zinc-800">
                  {project.client}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#CCFF00] text-black flex items-center justify-center opacity-0 -translate-x-4 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              
              <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl lg:text-7xl font-medium tracking-tight mb-4 text-white drop-shadow-lg">{project.title}</h3>
                
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                   <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-16 mt-6 pt-6 border-t border-white/20">
                     <div>
                       <span className="block text-zinc-300 font-mono text-xs uppercase mb-2">Stack</span>
                       <span className="font-mono text-sm text-white">{project.stack}</span>
                     </div>
                     <div>
                       <span className="block text-zinc-300 font-mono text-xs uppercase mb-2">Outcome</span>
                       <span className="font-inter text-white text-lg">{project.outcome}</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
