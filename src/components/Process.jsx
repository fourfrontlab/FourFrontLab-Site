'use client';
import { useEffect, useRef } from 'react';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

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
  const displaySteps = teaser ? steps.slice(0, 2) : steps;

  return (
    <section className="section-padding px-6 lg:px-12 bg-[#FAFAF8] border-b border-[#151515] relative" id="process">
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#151515] pb-12 gap-6 relative">
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#151515]"></div>
          
          <div>
            <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase">SEC. 03 // PROCESS</span>
            <h2 className="process-header text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-6 md:mb-0 font-inter text-[#151515]">How we build.</h2>
          </div>
          {teaser ? (
            <Link href="/process" className="process-header inline-flex items-center gap-2 text-[#151515] hover:text-[#1B3A5C] font-mono tracking-widest uppercase text-sm font-bold transition-colors border-b border-[#151515] hover:border-[#1B3A5C] pb-1">
              View Full Process <ArrowUpRight className="w-4 h-4" />
            </Link>
          ) : (
            <p className="process-header font-mono text-[#5C5C5C] text-sm max-w-sm uppercase tracking-widest leading-relaxed">Our engineering methodology is iterative, transparent, and built for speed.</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 relative">
          
          {/* Schematic connections */}
          <div className="absolute inset-0 pointer-events-none -z-10 hidden md:block opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path className="schematic-path" d="M 100 50 L 300 50 V 200 L 500 200" stroke="#151515" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
              <circle cx="100" cy="50" r="3" fill="#FAFAF8" stroke="#151515" strokeWidth="1" />
              <circle cx="500" cy="200" r="3" fill="#FAFAF8" stroke="#151515" strokeWidth="1" />
            </svg>
          </div>

          {displaySteps.map((step, i) => (
            <div key={i} className="process-step group flex flex-col gap-6 p-8 border border-[#151515] bg-[#FAFAF8] corner-ticks hover:border-[#1B3A5C] transition-colors duration-500">
              <span className="font-mono text-5xl lg:text-7xl font-bold tracking-tighter text-[#151515]/20 group-hover:text-[#1B3A5C]/40 transition-colors duration-500">{step.num}</span>
              <h3 className="text-3xl lg:text-4xl font-bold font-inter text-[#151515] dimension-line pb-4">{step.title}</h3>
              <p className="text-[#5C5C5C] text-lg lg:text-xl leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
