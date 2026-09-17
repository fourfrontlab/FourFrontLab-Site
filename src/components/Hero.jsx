'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // SVG path line drawing animation
      gsap.fromTo(".schematic-path",
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        { strokeDashoffset: 0, duration: 2, ease: "power2.out", stagger: 0.1, delay: 0.5 }
      );
      
      gsap.fromTo(".schematic-label",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out", stagger: 0.1, delay: 1.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headline = "We engineer digital experiences that perform.";
  const words = headline.split(' ');

  return (
    <section ref={containerRef} className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-[#FAFAF8] border-b border-[#151515]">
      <div className="max-w-[1400px] w-full mx-auto relative z-10 pt-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-3/5">
          <div className="mb-6 font-mono text-[#1B3A5C] text-sm tracking-widest uppercase flex items-center gap-4">
            <span className="w-8 h-px bg-[#1B3A5C]"></span>
            FIG. 01 &mdash; ARCHITECTURE
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] mb-12 font-inter text-[#151515] max-w-5xl">
            {words.map((word, i) => (
              <span key={i} className="inline-block align-top">
                {word}{i !== words.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h1>

          <div className="flex flex-col gap-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards] mb-12">
            {/* Capacity Badge */}
            <div className="inline-flex items-center gap-3 self-start bg-[#FAFAF8] border border-[#151515] px-4 py-2 relative corner-ticks group transition-colors">
              <div className="w-2 h-2 border border-[#1B3A5C] animate-pulse"></div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#151515]">
                Currently accepting 2 new projects
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#FAFAF8] border border-[#151515] text-[#151515] px-8 py-4 font-mono font-bold text-sm tracking-widest uppercase hover:bg-[#151515] hover:text-white transition-all group corner-ticks">
              <span>Initialize Project</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Schematic Illustration */}
        <div className="w-full lg:w-2/5 h-full relative opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
          <svg viewBox="0 0 500 500" className="w-full h-auto" fill="none">
            {/* Grid base */}
            <path d="M50 50 H450 V450 H50 Z" stroke="#E5E5E0" strokeWidth="1" />
            <path d="M100 50 V450 M150 50 V450 M200 50 V450 M250 50 V450 M300 50 V450 M350 50 V450 M400 50 V450" stroke="#E5E5E0" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M50 100 H450 M50 150 H450 M50 200 H450 M50 250 H450 M50 300 H450 M50 350 H450 M50 400 H450" stroke="#E5E5E0" strokeWidth="1" strokeDasharray="4 4" />

            {/* Wireframe lines */}
            <path className="schematic-path" d="M100 100 H400 V350 H100 Z" stroke="#151515" strokeWidth="2" />
            <path className="schematic-path" d="M100 150 H400" stroke="#151515" strokeWidth="2" />
            
            {/* Elements inside wireframe */}
            <path className="schematic-path" d="M120 125 H200" stroke="#1B3A5C" strokeWidth="2" />
            <circle className="schematic-path" cx="370" cy="125" r="10" stroke="#1B3A5C" strokeWidth="2" />
            
            {/* Data blocks */}
            <path className="schematic-path" d="M120 180 H240 V300 H120 Z" stroke="#1B3A5C" strokeWidth="1.5" />
            <path className="schematic-path" d="M260 180 H380 V230 H260 Z" stroke="#1B3A5C" strokeWidth="1.5" />
            <path className="schematic-path" d="M260 250 H380 V300 H260 Z" stroke="#1B3A5C" strokeWidth="1.5" />

            {/* Connections & Leader lines */}
            <path className="schematic-path" d="M400 205 H450 V80 H470" stroke="#D14E1F" strokeWidth="1" />
            <circle className="schematic-path" cx="400" cy="205" r="3" fill="#D14E1F" />
            
            <path className="schematic-path" d="M180 350 V420 H220" stroke="#D14E1F" strokeWidth="1" />
            <circle className="schematic-path" cx="180" cy="350" r="3" fill="#D14E1F" />

            {/* Annotations */}
            <text className="schematic-label" x="475" y="83" fill="#151515" fontSize="12" fontFamily="monospace" letterSpacing="1">API_GATEWAY</text>
            <text className="schematic-label" x="230" y="423" fill="#151515" fontSize="12" fontFamily="monospace" letterSpacing="1">RENDER_TREE</text>
            
            {/* Dimensions */}
            <path className="schematic-path" d="M100 60 H400" stroke="#1B3A5C" strokeWidth="1" />
            <path className="schematic-path" d="M100 55 V65 M400 55 V65" stroke="#1B3A5C" strokeWidth="1" />
            <text className="schematic-label" x="235" y="55" fill="#1B3A5C" fontSize="10" fontFamily="monospace">1440px</text>

            {/* Registration marks */}
            <path d="M45 45 H55 V55 M445 45 H455 V55 M45 445 H55 V455 M445 445 H455 V455" stroke="#151515" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
