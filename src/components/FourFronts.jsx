'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FourFronts() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.front-panel');
    
    // Horizontal scroll pinning
    let scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + scrollContainerRef.current.offsetWidth
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full overflow-hidden bg-[#0A0A0A] flex items-center border-b border-zinc-900">
      <div ref={scrollContainerRef} className="flex h-full w-[400vw]">
        
        {/* Panel 1: Frontend */}
        <div className="front-panel w-screen h-full flex flex-col md:flex-row items-center justify-center p-8 lg:p-24 border-r border-zinc-900 relative">
          <div className="flex-1 z-10 w-full pr-8">
            <span className="font-mono text-[#CCFF00] text-sm mb-6 block">01 // FRONTEND</span>
            <h2 className="text-4xl lg:text-7xl font-medium tracking-tight mb-8">Pixel-perfect<br/>precision.</h2>
            <p className="text-zinc-400 text-lg lg:text-xl max-w-md">We build fluid, component-driven interfaces that feel alive, using modern frameworks and precise animations.</p>
          </div>
          <div className="flex-1 h-[50vh] w-full border border-zinc-800 bg-[#111] rounded-sm p-8 flex flex-col gap-4 relative overflow-hidden group">
            <div className="w-full h-8 bg-zinc-800/50 rounded-sm" />
            <div className="flex gap-4 h-full">
               <div className="w-1/3 h-full bg-zinc-800/50 rounded-sm" />
               <div className="flex-1 flex flex-col gap-4">
                  <div className="w-full h-24 bg-zinc-800/50 rounded-sm" />
                  <div className="w-full flex-1 bg-zinc-800/50 rounded-sm group-hover:bg-[#CCFF00]/10 transition-colors duration-500" />
               </div>
            </div>
            {/* Simple CSS scanline effect for mockup interaction */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#CCFF00]/30 shadow-[0_0_10px_#CCFF00] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite]" />
          </div>
        </div>

        {/* Panel 2: Backend */}
        <div className="front-panel w-screen h-full flex flex-col md:flex-row items-center justify-center p-8 lg:p-24 border-r border-zinc-900 relative">
          <div className="flex-1 z-10 w-full pr-8">
            <span className="font-mono text-[#CCFF00] text-sm mb-6 block">02 // BACKEND</span>
            <h2 className="text-4xl lg:text-7xl font-medium tracking-tight mb-8">Invisible<br/>power.</h2>
            <p className="text-zinc-400 text-lg lg:text-xl max-w-md">Scalable architecture, secure APIs, and optimized databases that handle heavy logic without breaking a sweat.</p>
          </div>
          <div className="flex-1 h-[50vh] w-full border border-zinc-800 bg-black rounded-sm p-6 font-mono text-sm text-zinc-500 relative overflow-hidden flex flex-col">
             <div className="flex items-center gap-2 mb-4 border-b border-zinc-900 pb-4">
               <div className="w-3 h-3 rounded-full bg-red-500/30" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
               <div className="w-3 h-3 rounded-full bg-green-500/30" />
             </div>
             <div className="group-hover:text-zinc-300 transition-colors">
               <p className="text-[#CCFF00] mb-2">&gt; INIT SERVER</p>
               <p className="opacity-50">[INFO] Starting production build...</p>
               <p className="opacity-50">[INFO] Connecting to database cluster (us-east-1)</p>
               <p className="text-green-500/80 my-2">[SUCCESS] Connection established in 42ms</p>
               <p className="opacity-50">[INFO] Listening on port 8080</p>
               <p className="animate-pulse mt-4">_</p>
             </div>
          </div>
        </div>

        {/* Panel 3: UX/UI */}
        <div className="front-panel w-screen h-full flex flex-col md:flex-row items-center justify-center p-8 lg:p-24 border-r border-zinc-900 relative">
          <div className="flex-1 z-10 w-full pr-8">
            <span className="font-mono text-[#CCFF00] text-sm mb-6 block">03 // UX & UI</span>
            <h2 className="text-4xl lg:text-7xl font-medium tracking-tight mb-8">Logical<br/>flow.</h2>
            <p className="text-zinc-400 text-lg lg:text-xl max-w-md">Design systems that make sense. We prototype interactions that guide users frictionlessly from A to B.</p>
          </div>
          <div className="flex-1 h-[50vh] w-full border border-zinc-800 bg-[#111] rounded-sm p-8 relative flex items-center justify-center group overflow-hidden">
             <div className="w-48 h-48 border border-dashed border-zinc-600 rounded-full flex items-center justify-center relative group-hover:scale-110 transition-transform duration-700">
               <div className="w-24 h-24 bg-[#CCFF00]/5 rounded-full blur-xl group-hover:bg-[#CCFF00]/20 transition-colors duration-700" />
               <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#CCFF00] rounded-full shadow-[0_0_15px_#CCFF00] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
             </div>
          </div>
        </div>

        {/* Panel 4: What's Next */}
        <div className="front-panel w-screen h-full flex flex-col md:flex-row items-center justify-center p-8 lg:p-24 relative">
          <div className="flex-1 z-10 w-full pr-8">
            <span className="font-mono text-[#CCFF00] text-sm mb-6 block">04 // WHAT'S NEXT</span>
            <h2 className="text-4xl lg:text-7xl font-medium tracking-tight mb-8">Future<br/>tooling.</h2>
            <p className="text-zinc-400 text-lg lg:text-xl max-w-md">Exploring the bleeding edge. AI workflows, spatial computing, and next-gen integration frameworks.</p>
          </div>
          <div className="flex-1 h-[50vh] w-full border border-zinc-800 bg-black rounded-sm p-8 relative flex items-center justify-center overflow-hidden">
             <div className="absolute w-[150%] h-[150%] border-[1px] border-zinc-900 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute w-[100%] h-[100%] border-[1px] border-zinc-800 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             <div className="absolute w-16 h-16 bg-zinc-800 rounded-sm rotate-45 mix-blend-difference group-hover:bg-[#CCFF00] transition-colors duration-700" />
          </div>
        </div>

      </div>
      <style jsx>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}
