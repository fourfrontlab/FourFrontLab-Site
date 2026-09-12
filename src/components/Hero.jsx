'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.reveal-word', {
        y: '0%',
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headline = "We engineer digital experiences that perform.";
  const words = headline.split(' ');

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-[#F0F1F3]">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#2BA9D1] rounded-full blur-[200px] opacity-[0.07] pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10 pt-20">
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.95] mb-12 font-space text-[#1A1A1A] max-w-5xl">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-top">
              <span className="reveal-word inline-block translate-y-[100%]">
                {word}{i !== words.length - 1 ? '\u00A0' : ''}
              </span>
            </span>
          ))}
        </h1>

        <div className="flex gap-4 items-center opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards] mb-12">
          <div className="w-16 h-[2px] bg-[#0E5C8C]" />
          <span className="font-mono text-sm tracking-widest uppercase text-[#5A5A5A]">
            Four Founders. Four Fronts.
          </span>
        </div>

        <div className="opacity-0 animate-[fadeIn_1s_ease-out_1.3s_forwards]">
          <Link href="#contact" className="inline-flex items-center gap-3 bg-[#0E5C8C] border border-[#0E5C8C] text-white px-8 py-4 rounded-sm font-medium text-lg hover:bg-[#2BA9D1] hover:border-[#2BA9D1] transition-all group">
            <span>Let&apos;s Build Something</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Subtle Background Graphic */}
      <div className="absolute top-1/2 right-[-100px] lg:right-12 -translate-y-1/2 opacity-30 pointer-events-none hidden md:flex items-center justify-center w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]">
        <div className="absolute inset-0 border border-dashed border-[#0E5C8C]/30 rounded-full animate-[spin_40s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#0E5C8C] rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute inset-16 lg:inset-32 border border-[#2BA9D1]/20 rounded-full animate-[spin_20s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#2BA9D1] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
