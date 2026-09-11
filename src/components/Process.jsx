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
    const stepElements = gsap.utils.toArray('.process-step');
    
    stepElements.forEach((step) => {
      gsap.fromTo(step, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-900" ref={containerRef} id="process">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-900 pb-12">
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-4 md:mb-0">How we build.</h2>
        <p className="font-mono text-zinc-500 text-sm max-w-sm uppercase">Our engineering methodology is iterative, transparent, and built for speed.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {steps.map((step, i) => (
          <div key={i} className="process-step flex flex-col gap-6">
            <span className="font-mono text-5xl lg:text-7xl text-zinc-800 font-bold">{step.num}</span>
            <h3 className="text-2xl lg:text-3xl font-medium text-white">{step.title}</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
