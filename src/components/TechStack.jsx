'use client';
import { useEffect, useRef } from 'react';

const technologies = [
  "React", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "AWS", "TypeScript", "Redis"
];

export default function TechStack() {

  return (
    <section className="py-16 px-6 md:px-12 bg-[#FAFAF8] border-b border-[#151515] overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <span className="font-mono text-[#5C5C5C] text-xs mb-8 block tracking-widest uppercase text-center border-b border-[#151515] pb-1 w-max">
          Technologies We Use
        </span>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, i) => (
            <div key={i} className="tech-item px-4 py-2 border border-[#151515] bg-white text-[#151515] font-mono font-medium text-sm md:text-base hover:bg-[#1B3A5C] hover:text-white hover:border-[#1B3A5C] transition-colors cursor-default shadow-sm">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
