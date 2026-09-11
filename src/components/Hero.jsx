'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Custom manual word split instead of premium SplitText plugin
    const words = textRef.current.innerText.split(' ');
    textRef.current.innerHTML = '';
    words.forEach(word => {
      const span = document.createElement('span');
      span.innerText = word + ' ';
      span.style.display = 'inline-block';
      span.style.overflow = 'hidden';
      
      const innerSpan = document.createElement('span');
      innerSpan.innerText = word + ' ';
      innerSpan.style.display = 'inline-block';
      innerSpan.classList.add('reveal-word');
      innerSpan.style.transform = 'translateY(100%)';
      
      span.appendChild(innerSpan);
      textRef.current.appendChild(span);
    });

    gsap.to('.reveal-word', { 
        y: '0%', 
        duration: 1.2, 
        stagger: 0.05, 
        ease: "power4.out", 
        delay: 0.5 
    });
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex items-center justify-center px-6 md:px-12 relative border-b border-zinc-900">
      <div className="max-w-7xl w-full">
        <h1 
          ref={textRef} 
          className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[1.05] mb-12 font-inter text-[#EBEBEB]"
        >
          We engineer digital experiences that perform.
        </h1>
        <div className="flex gap-4 items-center opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
          <div className="w-16 h-[1px] bg-[#CCFF00]" />
          <span className="font-mono text-sm tracking-widest uppercase text-zinc-500">
            FourFrontLab Studio
          </span>
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
