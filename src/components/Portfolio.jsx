'use client';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Hanaz Official",
    slug: "hanaz-official",
    client: "E-Commerce",
    stack: ["React", "Supabase", "Tailwind", "Stripe"],
    outcome: "Increased admin workflow efficiency by 40%.",
    image: "/projects/hanaz_main.webp",
  },
  {
    title: "RoamEase",
    slug: "roamease",
    client: "Travel Tech",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    outcome: "Processed $2M+ in frictionless bookings.",
    image: "/projects/roamease_main.webp",
  },
  {
    title: "EduTrack",
    slug: "edutrack",
    client: "EdTech",
    stack: ["Vue", "Express", "MongoDB", "WebSockets"],
    outcome: "Real-time analytics for 10k+ active students.",
    image: "/projects/edutrack_main.webp",
  }
];

export default function Portfolio({ teaser = false }) {
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
    <section ref={containerRef} className="section-padding px-6 lg:px-12 bg-[#F0F1F3] border-b border-[#E0E2E5]" id="work">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="portfolio-header text-5xl lg:text-7xl font-bold tracking-tighter leading-none font-space text-[#1A1A1A]">Deployments</h2>
          {teaser && (
            <Link href="/work" className="portfolio-header inline-flex items-center gap-2 text-[#0E5C8C] hover:text-[#2BA9D1] font-medium transition-colors border-b border-transparent hover:border-[#2BA9D1]">
              View All Work <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {(teaser ? projects.slice(0, 2) : projects).map((project, i) => (
            <Link
              key={i}
              href={`/work/${project.slug}`}
              className="portfolio-card group relative w-full flex flex-col lg:flex-row gap-8 lg:gap-16 border border-[#E0E2E5] bg-[#FAFAFA] p-6 lg:p-10 rounded-sm hover:border-[#0E5C8C]/40 hover:-translate-y-1 transition-all duration-500 shadow-sm"
            >
              {/* Image / Mockup Area */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-sm relative aspect-[4/3] bg-[#E8EAF0] border border-[#E0E2E5] group-hover:border-[#0E5C8C]/30 transition-colors">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500" />
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-[#0E5C8C]/05 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Content Area */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[#0E5C8C] text-xs uppercase tracking-widest bg-[#0E5C8C]/8 px-4 py-2 rounded-sm border border-[#0E5C8C]/20 group-hover:border-[#0E5C8C]/40 transition-colors">
                    {project.client}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#0E5C8C]/8 text-[#0E5C8C] flex items-center justify-center group-hover:bg-[#0E5C8C] group-hover:text-white transition-colors duration-300 border border-[#0E5C8C]/20">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 font-space text-[#1A1A1A] group-hover:text-[#0E5C8C] transition-colors">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, j) => (
                    <span key={j} className="text-xs font-mono text-[#5A5A5A] bg-[#E8EAF0] px-3 py-1.5 rounded-sm border border-[#E0E2E5]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-[#E0E2E5] group-hover:border-[#0E5C8C]/20 transition-colors">
                  <span className="block text-[#5A5A5A] font-mono text-xs uppercase mb-2 tracking-widest">Outcome</span>
                  <span className="font-inter text-[#1A1A1A] text-lg lg:text-xl font-light leading-relaxed">{project.outcome}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
