'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#C6FF00] rounded-full blur-[150px] opacity-[0.03] pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10 pt-20">
        <h1
          ref={textRef}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.95] mb-12 font-space text-white max-w-5xl"
        >
          We engineer digital experiences that perform.
        </h1>

        <div className="flex gap-4 items-center opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards] mb-12">
          <div className="w-16 h-[2px] bg-[#C6FF00]" />
          <span className="font-mono text-sm tracking-widest uppercase text-[#A0A0A0]">
            Four Founders. Four Fronts.
          </span>
        </div>

        <div className="opacity-0 animate-[fadeIn_1s_ease-out_1.3s_forwards]">
          <Link href="#contact" className="inline-flex items-center gap-3 bg-[#141414] border border-white/10 text-white px-8 py-4 rounded-sm font-medium text-lg hover:bg-[#C6FF00] hover:text-black hover:border-[#C6FF00] transition-all group">
            <span>Let's Build Something</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Subtle Background Graphic */}
      <div className="absolute top-1/2 right-[-100px] lg:right-12 -translate-y-1/2 opacity-20 pointer-events-none hidden md:flex items-center justify-center w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]">
        <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_40s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#C6FF00] rounded-full shadow-[0_2px_10px_rgba(198,255,0,0.3)] -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute inset-16 lg:inset-32 border border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
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
