'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal logo
      gsap.fromTo(logoRef.current, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      // Protect against double-execution in strict mode
      if (textRef.current.classList.contains('splitted')) return;
      textRef.current.classList.add('splitted');

      const originalText = textRef.current.innerText;
      const words = originalText.trim().split(/\s+/);
      textRef.current.innerHTML = '';
      
      words.forEach(word => {
        const span = document.createElement('span');
        span.style.display = 'inline-block';
        span.style.overflow = 'hidden';
        span.style.verticalAlign = 'top';
        
        const innerSpan = document.createElement('span');
        innerSpan.innerText = word;
        innerSpan.style.display = 'inline-block';
        innerSpan.classList.add('reveal-word');
        innerSpan.style.transform = 'translateY(100%)';
        
        span.appendChild(innerSpan);
        textRef.current.appendChild(span);
        textRef.current.appendChild(document.createTextNode(' '));
      });

      gsap.to('.reveal-word', { 
          y: '0%', 
          duration: 1.2, 
          stagger: 0.05, 
          ease: "power4.out", 
          delay: 0.5 
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col px-6 md:px-12 relative border-b border-zinc-900 pt-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#CCFF00] rounded-full blur-[150px] opacity-[0.03] pointer-events-none -translate-y-1/2" />

      {/* Brand Name / Logo Mark at the very top */}
      <div ref={logoRef} className="w-full max-w-7xl mx-auto flex items-center gap-4 mb-auto relative z-10">
        <div className="w-8 h-8 bg-[#CCFF00] rounded-sm shadow-[0_0_15px_rgba(204,255,0,0.3)]" />
        <span className="text-3xl md:text-4xl font-bold tracking-tighter text-white">FourFrontLab.</span>
      </div>

      <div className="max-w-7xl w-full mx-auto mb-auto pt-24 pb-32 relative z-10">
        <h1
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.95] mb-12 font-inter text-white"
        >
          We engineer digital experiences that perform.
        </h1>
        
        <div className="flex gap-4 items-center opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards] mb-12">
          <div className="w-16 h-[2px] bg-[#CCFF00]" />
          <span className="font-mono text-sm tracking-widest uppercase text-zinc-400">
            Four Founders. Four Fronts.
          </span>
        </div>

        <div className="opacity-0 animate-[fadeIn_1s_ease-out_1.8s_forwards]">
          <a href="#contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-sm font-medium text-lg hover:bg-[#CCFF00] transition-colors group">
            <span>Let's Build Something</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Subtle Background Graphic */}
      <div className="absolute top-1/2 right-[-100px] lg:right-12 -translate-y-1/2 opacity-30 pointer-events-none hidden md:flex items-center justify-center w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]">
        <div className="absolute inset-0 border border-dashed border-zinc-700 rounded-full animate-[spin_40s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#CCFF00] rounded-full shadow-[0_0_20px_#CCFF00] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute inset-16 lg:inset-32 border border-zinc-800 rounded-full animate-[spin_20s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl" />
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
