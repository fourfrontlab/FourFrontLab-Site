'use client';
import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  return (
    <section className="section-padding px-6 md:px-12 bg-[#FAFAF8] border-b border-[#151515] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-8 items-start md:items-center justify-between">
        
        <div className="md:w-1/3">
          <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase">SEC. 02 // ARCHITECTURE</span>
          <h2 className="text-3xl md:text-5xl font-bold font-inter text-[#151515] tracking-tight mb-4 dimension-line inline-block pb-2">
            Built by engineers, not account managers.
          </h2>
          <p className="text-[#5C5C5C] text-lg mt-4">
            We skip the middleman. When you work with us, you speak directly to the architects building your product.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 w-full">
          <div className="flex flex-col border-l border-[#1B3A5C] pl-6 relative">
            <div className="absolute top-0 -left-1 w-2 h-px bg-[#1B3A5C]"></div>
            <div className="flex items-baseline text-[#151515] font-mono font-bold text-5xl md:text-6xl lg:text-7xl">
              <span data-target="40" className="stat-counter will-change-transform">40</span>
              <span className="text-[#1B3A5C]">+</span>
            </div>
            <span className="text-[#5C5C5C] font-mono tracking-widest text-xs mt-2 uppercase">Projects Delivered</span>
          </div>

          <div className="flex flex-col border-l border-[#1B3A5C] pl-6 relative">
            <div className="absolute top-0 -left-1 w-2 h-px bg-[#1B3A5C]"></div>
            <div className="flex items-baseline text-[#151515] font-mono font-bold text-5xl md:text-6xl lg:text-7xl">
              <span data-target="10" className="stat-counter will-change-transform">10</span>
              <span className="text-[#1B3A5C]">+</span>
            </div>
            <span className="text-[#5C5C5C] font-mono tracking-widest text-xs mt-2 uppercase">Years Combined Exp</span>
          </div>

          <div className="flex flex-col border-l border-[#1B3A5C] pl-6 relative">
            <div className="absolute top-0 -left-1 w-2 h-px bg-[#1B3A5C]"></div>
            <div className="flex items-baseline text-[#151515] font-mono font-bold text-5xl md:text-6xl lg:text-7xl">
              <span data-target="99" className="stat-counter will-change-transform">99</span>
              <span className="text-[#1B3A5C]">%</span>
            </div>
            <span className="text-[#5C5C5C] font-mono tracking-widest text-xs mt-2 uppercase">Client Retention</span>
          </div>

          <div className="flex flex-col border-l border-[#1B3A5C] pl-6 relative">
            <div className="absolute top-0 -left-1 w-2 h-px bg-[#1B3A5C]"></div>
            <div className="flex items-baseline text-[#151515] font-mono font-bold text-5xl md:text-6xl lg:text-7xl">
              <span className="text-[#1B3A5C] mr-1">&lt;</span>
              <span data-target="2" className="stat-counter will-change-transform">2</span>
              <span className="text-3xl md:text-4xl ml-1 text-[#151515]">h</span>
            </div>
            <span className="text-[#5C5C5C] font-mono tracking-widest text-xs mt-2 uppercase">Avg Response Time</span>
          </div>
        </div>

      </div>
    </section>
  );
}
