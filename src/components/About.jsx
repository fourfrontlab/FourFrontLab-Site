'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".about-element", 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-40 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-200 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#8DBF00] rounded-full blur-[200px] opacity-[0.03] pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Text Content */}
        <div>
          <h2 className="about-element text-5xl lg:text-7xl font-medium tracking-tighter leading-none mb-10 text-zinc-900">
            Built by engineers, not account managers.
          </h2>
          <p className="about-element text-zinc-600 text-xl lg:text-2xl leading-relaxed mb-6 font-light">
            FourFrontLab is a specialized development studio focused entirely on technical excellence. We operate without the bloat of traditional agencies—which means faster iterations, cleaner architecture, and direct access to the founders actually building your product.
          </p>
          <p className="about-element text-zinc-600 text-xl lg:text-2xl leading-relaxed font-light">
            From highly scalable backends to fluid frontend experiences, we engineer solutions designed to perform under pressure and scale with your business.
          </p>
        </div>

        {/* Right: Stats & Visual */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
          
          {/* Decorative visual element in the background of stats */}
          <div className="about-element absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-sm -z-10 border border-zinc-200 flex items-center justify-center overflow-hidden shadow-sm">
             <div className="w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#8DBF00]/20 to-transparent absolute top-1/3 -rotate-12" />
             <div className="w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#8DBF00]/20 to-transparent absolute bottom-1/3 -rotate-12" />
             <div className="w-[1px] h-[150%] bg-gradient-to-b from-transparent via-[#8DBF00]/10 to-transparent absolute left-1/3 rotate-12" />
          </div>

          <div className="about-element border border-zinc-200 bg-white/80 backdrop-blur-sm shadow-sm p-8 rounded-sm flex flex-col gap-3 relative overflow-hidden group hover:scale-[1.02] hover:border-[#8DBF00]/50 transition-all duration-300 cursor-default">
            <span className="text-6xl font-bold text-[#8DBF00] relative z-10 font-mono tracking-tighter">40<span className="text-zinc-900">+</span></span>
            <span className="font-mono text-zinc-500 text-xs uppercase relative z-10 tracking-widest">Projects Delivered</span>
          </div>
          
          <div className="about-element border border-zinc-200 bg-white/80 backdrop-blur-sm shadow-sm p-8 rounded-sm flex flex-col gap-3 relative overflow-hidden group hover:scale-[1.02] hover:border-[#8DBF00]/50 transition-all duration-300 cursor-default sm:translate-y-8">
            <span className="text-6xl font-bold text-[#8DBF00] relative z-10 font-mono tracking-tighter">10<span className="text-zinc-900">+</span></span>
            <span className="font-mono text-zinc-500 text-xs uppercase relative z-10 tracking-widest">Years Combined Exp</span>
          </div>
          
          <div className="about-element border border-zinc-200 bg-white/80 backdrop-blur-sm shadow-sm p-8 rounded-sm flex flex-col gap-3 relative overflow-hidden group hover:scale-[1.02] hover:border-[#8DBF00]/50 transition-all duration-300 cursor-default sm:translate-y-16">
            <span className="text-6xl font-bold text-zinc-900 relative z-10 font-mono tracking-tighter">&lt;2<span className="text-[#8DBF00]">h</span></span>
            <span className="font-mono text-zinc-500 text-xs uppercase relative z-10 tracking-widest">Avg Response Time</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
