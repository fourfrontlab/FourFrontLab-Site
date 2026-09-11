'use client';
import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Hanaz Official",
    client: "E-Commerce",
    stack: ["React", "Supabase", "Tailwind", "Stripe"],
    outcome: "Increased admin workflow efficiency by 40%.",
    image: "/projects/hanaz_main.jpg",
    modalImage: "/projects/hanaz_modal.jpg",
    description: "Hanaz Official is a premium fashion e-commerce storefront. The new dashboard allows administrators to seamlessly manage products, track monthly sales, and monitor active orders in real-time, drastically reducing the time spent on manual entry."
  },
  {
    title: "RoamEase",
    client: "Travel Tech",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    outcome: "Processed $2M+ in frictionless bookings.",
    image: "/projects/roamease_main.jpg",
    modalImage: "/projects/roamease_modal.jpg",
    description: "RoamEase simplifies the travel experience by offering frictionless bookings and highly detailed, day-by-day itineraries. Users can seamlessly track flight gates, check-in times, and hotel confirmations in one centralized, sleek interface."
  },
  {
    title: "EduTrack",
    client: "EdTech",
    stack: ["Vue", "Express", "MongoDB", "WebSockets"],
    outcome: "Real-time analytics for 10k+ active students.",
    image: "/projects/edutrack_main.jpg",
    modalImage: "/projects/edutrack_modal.jpg",
    description: "EduTrack empowers educators with real-time analytics and predictive models for student engagement. The platform identifies at-risk students through detailed performance metrics, radar charts for skills, and real-time activity heatmaps."
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".portfolio-header", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Cards staggered animation
      const cards = gsap.utils.toArray('.portfolio-card');
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="py-32 md:py-40 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-200 bg-[#FAFAF9]" id="work">
        <div className="mb-20">
          <h2 className="portfolio-header text-5xl lg:text-7xl font-medium tracking-tighter leading-none text-zinc-900">Deployments</h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((project, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedProject(project)}
              className="portfolio-card group relative w-full flex flex-col lg:flex-row gap-8 lg:gap-16 border border-zinc-200 bg-white p-6 lg:p-10 rounded-sm hover:border-zinc-400 hover:scale-[1.01] transition-all duration-500 cursor-pointer shadow-sm"
            >
              
              {/* Image / Mockup Area */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-sm relative aspect-[4/3] bg-zinc-100 border border-zinc-200 group-hover:border-zinc-300 transition-colors">
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                   style={{ backgroundImage: `url(${project.image})` }}
                 />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                 {/* Subtle glow overlay on hover */}
                 <div className="absolute inset-0 bg-[#8DBF00]/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 pointer-events-none" />
              </div>
              
              {/* Content Area */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[#8DBF00] text-xs uppercase tracking-widest bg-zinc-100 px-4 py-2 rounded-sm border border-zinc-200 group-hover:border-[#8DBF00]/30 transition-colors">
                    {project.client}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center group-hover:bg-[#8DBF00] group-hover:text-white transition-colors duration-300 shadow-sm border border-zinc-200">
                      <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-4xl lg:text-6xl font-medium tracking-tighter leading-none mb-6 text-zinc-900 group-hover:text-[#8DBF00] transition-colors">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, j) => (
                     <span key={j} className="text-xs font-mono text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-sm border border-zinc-200">
                       {tech}
                     </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-zinc-200 group-hover:border-zinc-300 transition-colors">
                  <span className="block text-zinc-500 font-mono text-xs uppercase mb-2 tracking-widest">Outcome</span>
                  <span className="font-inter text-zinc-900 text-lg lg:text-xl font-light leading-relaxed">{project.outcome}</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-zinc-900/60 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
          <div className="bg-white border border-zinc-200 rounded-sm w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl relative animate-[fadeIn_0.3s_ease-out]" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white hover:bg-[#8DBF00] text-zinc-900 hover:text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full relative aspect-video bg-zinc-100 border-b border-zinc-200">
              <img src={selectedProject.modalImage} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex justify-between items-start mb-6">
                <span className="font-mono text-[#8DBF00] text-xs uppercase tracking-widest bg-zinc-100 px-4 py-2 rounded-sm border border-zinc-200">
                  {selectedProject.client}
                </span>
              </div>
              <h3 className="text-4xl lg:text-6xl font-medium tracking-tighter leading-none mb-6 text-zinc-900">{selectedProject.title}</h3>
              <p className="text-zinc-600 text-lg lg:text-xl mb-8 max-w-3xl leading-relaxed font-light">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-200 pt-8">
                <div>
                  <span className="block text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, j) => (
                       <span key={j} className="text-xs font-mono text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-sm border border-zinc-200">
                         {tech}
                       </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">Outcome</span>
                  <span className="font-inter text-zinc-900 text-xl font-medium leading-relaxed">{selectedProject.outcome}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
