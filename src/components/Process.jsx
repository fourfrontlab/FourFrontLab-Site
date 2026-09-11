'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

export default function Process() {
  const containerRef = useRef(null);

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
  }, []);

  return (
    <section className="py-32 md:py-40 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-200 relative" ref={containerRef} id="process">
      
      <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-200 pb-12">
        <h2 className="process-header text-5xl lg:text-7xl font-medium tracking-tighter leading-none mb-6 md:mb-0 text-zinc-900">How we build.</h2>
        <p className="process-header font-mono text-zinc-500 text-sm max-w-sm uppercase tracking-widest leading-relaxed">Our engineering methodology is iterative, transparent, and built for speed.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 relative z-10">
        
        {/* Abstract animated lines in the background to break up text */}
        <div className="absolute inset-0 pointer-events-none -z-10 hidden md:block opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path className="animate-[dash_10s_linear_infinite]" d="M 10 10 L 300 300 M 500 100 L 200 400" stroke="#8DBF00" strokeWidth="1" strokeDasharray="10 10" fill="none" opacity="0.5"/>
          </svg>
        </div>

        {steps.map((step, i) => (
          <div key={i} className="process-step group flex flex-col gap-6 p-8 border border-transparent hover:border-zinc-200 hover:bg-zinc-50/80 rounded-sm transition-all duration-500 hover:scale-[1.01]">
            <span className="font-mono text-5xl lg:text-7xl font-bold tracking-tighter text-zinc-200 group-hover:text-[#8DBF00] transition-colors duration-500">{step.num}</span>
            <h3 className="text-3xl lg:text-4xl font-medium text-zinc-900">{step.title}</h3>
            <p className="text-zinc-600 text-lg lg:text-xl leading-relaxed font-light">{step.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>
    </section>
  );
}
