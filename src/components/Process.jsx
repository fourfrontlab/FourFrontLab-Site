'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery & Architecture",
    desc: "We don't just take orders. We break down your requirements, define the system architecture, and establish a bulletproof roadmap before a single line of code is written."
  },
  {
    num: "02",
    title: "Prototyping & Flow",
    desc: "Low-fidelity wireframes move to high-fidelity interactive prototypes. You see exactly how the application will feel and function in the browser."
  },
  {
    num: "03",
    title: "Engineering",
    desc: "The build phase. Frontend components are crafted in isolation, while the backend is scaled out. Constant integration ensures the two halves perfectly align."
  },
  {
    num: "04",
    title: "Launch & Iterate",
    desc: "Rigorous testing, performance audits, and security checks. After deployment, we monitor analytics and iterate based on real-world usage."
  }
];

export default function Process({ teaser = false }) {
  const containerRef = useRef(null);
  const displaySteps = teaser ? steps.slice(0, 2) : steps;

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".process-header", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Steps animation
      const stepElements = gsap.utils.toArray('.process-step');
      stepElements.forEach((step, i) => {
        gsap.fromTo(step, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [teaser]);

  return (
    <section className="section-padding px-6 lg:px-12 bg-[#F0F1F3] border-b border-[#E0E2E5] relative" ref={containerRef} id="process">
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#E0E2E5] pb-12 gap-6">
          <h2 className="process-header text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-6 md:mb-0 font-space text-[#1A1A1A]">How we build.</h2>
          {teaser ? (
            <Link href="/process" className="process-header inline-flex items-center gap-2 text-[#0E5C8C] hover:text-[#2BA9D1] font-medium transition-colors border-b border-transparent hover:border-[#2BA9D1]">
              View Full Process <ArrowUpRight className="w-4 h-4" />
            </Link>
          ) : (
            <p className="process-header font-mono text-[#5A5A5A] text-sm max-w-sm uppercase tracking-widest leading-relaxed">Our engineering methodology is iterative, transparent, and built for speed.</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 relative">
          
          {/* Abstract animated lines */}
          <div className="absolute inset-0 pointer-events-none -z-10 hidden md:block opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path className="animate-[dash_10s_linear_infinite]" d="M 10 10 L 300 300 M 500 100 L 200 400" stroke="#0E5C8C" strokeWidth="1" strokeDasharray="10 10" fill="none"/>
            </svg>
          </div>

          {displaySteps.map((step, i) => (
            <div key={i} className="process-step group flex flex-col gap-6 p-8 border border-transparent hover:border-[#E0E2E5] hover:bg-[#FAFAFA] rounded-sm transition-all duration-500 hover:-translate-y-1">
              <span className="font-mono text-5xl lg:text-7xl font-bold tracking-tighter text-[#1A1A1A]/15 group-hover:text-[#0E5C8C] transition-colors duration-500">{step.num}</span>
              <h3 className="text-3xl lg:text-4xl font-bold font-space text-[#1A1A1A]">{step.title}</h3>
              <p className="text-[#5A5A5A] text-lg lg:text-xl leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>
    </section>
  );
}
