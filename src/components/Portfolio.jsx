'use client';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import hanazImg from '../../public/projects/hanaz_main.webp';
import roameaseImg from '../../public/projects/roamease_main.webp';
import edutrackImg from '../../public/projects/edutrack_main.webp';
import nexusImg from '../../public/projects/nexus_main.jpg';

const projects = [
  {
    title: "Hanaz Official",
    slug: "hanaz-official",
    client: "E-Commerce",
    stack: ["React", "Supabase", "Tailwind", "Stripe"],
    outcome: "Increased admin workflow efficiency by 40%.",
    image: hanazImg,
  },
  {
    title: "RoamEase",
    slug: "roamease",
    client: "Travel Tech",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    outcome: "Processed $2M+ in frictionless bookings.",
    image: roameaseImg,
  },
  {
    title: "EduTrack",
    slug: "edutrack",
    client: "EdTech",
    stack: ["Vue", "Express", "MongoDB", "WebSockets"],
    outcome: "Real-time analytics for 10k+ active students.",
    image: edutrackImg,
  },
  {
    title: "Nexus AI",
    slug: "nexus-ai",
    client: "FinTech",
    stack: ["React", "Python", "FastAPI", "PostgreSQL"],
    outcome: "Automated risk assessment for 50k+ transactions.",
    image: nexusImg,
  }
];

export default function Portfolio({ teaser = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".portfolio-header",
        { opacity: 0, y: 30, willChange: "transform, opacity" },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "willChange",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Cards batch entrance animations
      gsap.fromTo('.portfolio-card',
        { opacity: 0, y: 50, willChange: "transform, opacity" },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "willChange",
          scrollTrigger: {
            trigger: ".portfolio-list",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-padding px-6 lg:px-12 bg-[#FAFAF8] border-b border-[#151515]" id="work">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#151515] pb-6 relative">
          <div className="absolute left-0 bottom-[-4px] w-[1px] h-[7px] bg-[#151515]"></div>
          <div className="absolute right-0 bottom-[-4px] w-[1px] h-[7px] bg-[#151515]"></div>
          
          <div>
            <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase">SEC. 03 // OUTPUT</span>
            <h2 className="portfolio-header text-5xl lg:text-7xl font-bold tracking-tighter leading-none font-inter text-[#151515]">Deployments</h2>
          </div>
          {teaser && (
            <Link href="/work" className="portfolio-header inline-flex items-center gap-2 text-[#1B3A5C] hover:text-[#D14E1F] font-mono text-sm uppercase tracking-widest transition-colors dimension-line pb-1">
              View All Work <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="portfolio-list flex flex-col gap-16 lg:gap-24">
          {projects.map((project, i) => (
            <div key={i} className="portfolio-card w-full">
              <Link
                href={`/work/${project.slug}`}
                className="corner-ticks group relative w-full flex flex-col lg:flex-row gap-6 lg:gap-16 border border-[#151515] bg-[#FAFAF8] p-5 sm:p-6 lg:p-10 hover:border-[#1B3A5C] hover:-translate-y-1 transition-transform transition-colors duration-500 shadow-sm"
              >
                <div className="hidden sm:block absolute top-0 right-0 border-l border-b border-[#151515] px-4 py-1 bg-[#FAFAF8] z-10 group-hover:border-[#1B3A5C] transition-colors">
                  <span className="font-mono text-xs text-[#151515] tracking-widest">PROJECT &mdash; 0{i + 1}</span>
                </div>

                {/* Image / Mockup Area */}
                <div className="w-full lg:w-1/2 overflow-hidden relative aspect-video lg:aspect-[4/3] bg-[#E5E5E0] border border-[#151515] group-hover:border-[#1B3A5C] transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholder="blur"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-500" />
                  {/* Blue overlay on hover */}
                  <div className="absolute inset-0 bg-[#1B3A5C]/10 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-2 left-2 w-2 h-2 border border-[#151515] group-hover:border-[#1B3A5C] bg-[#FAFAF8] z-10"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 border border-[#151515] group-hover:border-[#1B3A5C] bg-[#FAFAF8] z-10"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border border-[#151515] group-hover:border-[#1B3A5C] bg-[#FAFAF8] z-10"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border border-[#151515] group-hover:border-[#1B3A5C] bg-[#FAFAF8] z-10"></div>
                </div>

                {/* Content Area */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center pt-4 lg:pt-0">
                  <div className="flex justify-between items-start mb-4 lg:mb-6">
                    <span className="font-mono text-[#1B3A5C] text-[10px] sm:text-xs uppercase tracking-widest border-b border-[#1B3A5C] pb-1">
                      {project.client}
                    </span>
                    <div className="w-10 h-10 border border-[#151515] text-[#151515] flex items-center justify-center group-hover:bg-[#1B3A5C] group-hover:text-white group-hover:border-[#1B3A5C] transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter leading-none mb-4 lg:mb-6 font-inter text-[#151515] group-hover:text-[#1B3A5C] transition-colors">{project.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
                    {project.stack.map((tech, j) => (
                      <span key={j} className="text-[10px] sm:text-xs font-mono text-[#151515] border border-[#151515] px-2 py-1 sm:px-3 sm:py-1.5 bg-[#FAFAF8]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-[#151515] group-hover:border-[#1B3A5C] transition-colors relative">
                    <div className="absolute top-[-4px] left-0 w-[1px] h-[7px] bg-[#151515] group-hover:bg-[#1B3A5C] transition-colors"></div>
                    <span className="block text-[#5C5C5C] font-mono text-[10px] sm:text-xs uppercase mb-1 sm:mb-2 tracking-widest">Outcome</span>
                    <span className="font-inter text-[#151515] text-base sm:text-lg lg:text-xl font-medium leading-relaxed">{project.outcome}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
