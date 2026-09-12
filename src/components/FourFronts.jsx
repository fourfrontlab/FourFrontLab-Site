'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FourFronts() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        const panels = gsap.utils.toArray('.front-panel');

        // Horizontal scroll pinning
        gsap.to(panels, {
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
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="md:h-screen w-full overflow-hidden bg-[#F0F1F3] flex items-stretch relative border-b border-[#E0E2E5]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#2BA9D1] rounded-full blur-[200px] opacity-[0.05] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />

      <div ref={scrollContainerRef} className="flex flex-col md:flex-row h-auto md:h-full w-full md:w-[400%] relative z-10">

        {/* Panel 1: Frontend */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center py-16 md:py-8 lg:py-24 px-8 md:px-12 lg:px-12 relative gap-8 lg:gap-16 border-b md:border-b-0 md:border-r border-[#E0E2E5]">
          <div className="flex-1 z-10 w-full lg:pl-20 xl:pl-32 lg:pr-8">
            <span className="font-mono text-[#0E5C8C] text-sm mb-6 block tracking-widest">01 // FRONTEND</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-8 font-space text-[#1A1A1A]">Pixel-perfect<br />precision.</h2>
            <p className="text-[#5A5A5A] text-lg lg:text-xl max-w-md font-light">We build fluid, component-driven interfaces that feel alive, using modern frameworks and precise animations.</p>
          </div>
          <div className="flex-1 h-[50vh] min-h-[300px] w-full border border-[#E0E2E5] bg-[#FAFAFA] shadow-sm rounded-sm p-8 flex flex-col gap-4 relative overflow-hidden group">
            <div className="w-full h-8 bg-[#0E5C8C]/5 rounded-sm" />
            <div className="flex gap-4 h-full">
              <div className="w-1/3 h-full bg-[#0E5C8C]/5 rounded-sm" />
              <div className="flex-1 flex flex-col gap-4">
                <div className="w-full h-24 bg-[#0E5C8C]/5 rounded-sm" />
                <div className="w-full flex-1 bg-[#0E5C8C]/5 rounded-sm group-hover:bg-[#2BA9D1]/15 transition-colors duration-500" />
              </div>
            </div>
            {/* Scanline effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2BA9D1]/50 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite]" />
          </div>
        </div>

        {/* Panel 2: Backend */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center py-16 md:py-8 lg:py-24 px-8 md:px-12 lg:px-12 relative gap-8 lg:gap-16 border-b md:border-b-0 md:border-r border-[#E0E2E5]">
          <div className="flex-1 z-10 w-full lg:pl-20 xl:pl-32 lg:pr-8">
            <span className="font-mono text-[#0E5C8C] text-sm mb-6 block tracking-widest">02 // BACKEND</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-8 font-space text-[#1A1A1A]">Invisible<br />power.</h2>
            <p className="text-[#5A5A5A] text-lg lg:text-xl max-w-md font-light">Scalable architecture, secure APIs, and optimized databases that handle heavy logic without breaking a sweat.</p>
          </div>
          <div className="flex-1 h-[50vh] min-h-[300px] w-full border border-[#E0E2E5] bg-[#FAFAFA] shadow-sm rounded-sm p-6 font-mono text-sm text-[#5A5A5A] relative overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 mb-4 border-b border-[#E0E2E5] pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
              <div className="w-3 h-3 rounded-full bg-[#2BA9D1]/50" />
            </div>
            <div className="group-hover:text-[#1A1A1A] transition-colors">
              <p className="text-[#0E5C8C] mb-2">&gt; INIT SERVER</p>
              <p className="opacity-70 break-all">[INFO] Starting production build...</p>
              <p className="opacity-70 break-all">[INFO] Connecting to database cluster (us-east-1)</p>
              <p className="text-[#2BA9D1] my-2 break-all">[SUCCESS] Connection established in 42ms</p>
              <p className="opacity-70 break-all">[INFO] Listening on port 8080</p>
              <p className="animate-pulse mt-4 text-[#0E5C8C]">_</p>
            </div>
          </div>
        </div>

        {/* Panel 3: UX/UI */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center py-16 md:py-8 lg:py-24 px-8 md:px-12 lg:px-12 relative gap-8 lg:gap-16 border-b md:border-b-0 md:border-r border-[#E0E2E5]">
          <div className="flex-1 z-10 w-full lg:pl-20 xl:pl-32 lg:pr-8">
            <span className="font-mono text-[#0E5C8C] text-sm mb-6 block tracking-widest">03 // UX &amp; UI</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-8 font-space text-[#1A1A1A]">Logical<br />flow.</h2>
            <p className="text-[#5A5A5A] text-lg lg:text-xl max-w-md font-light">Design systems that make sense. We prototype interactions that guide users frictionlessly from A to B.</p>
          </div>
          <div className="flex-1 h-[50vh] min-h-[300px] w-full border border-[#E0E2E5] bg-[#FAFAFA] shadow-sm rounded-sm p-8 relative flex items-center justify-center group overflow-hidden">
            <div className="w-48 h-48 border border-dashed border-[#0E5C8C]/30 rounded-full flex items-center justify-center relative group-hover:scale-110 transition-transform duration-700">
              <div className="w-24 h-24 bg-[#2BA9D1]/10 rounded-full blur-xl group-hover:bg-[#2BA9D1]/25 transition-colors duration-700" />
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#0E5C8C] rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
            </div>
          </div>
        </div>

        {/* Panel 4: Strategy/Growth */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center py-16 md:py-8 lg:py-24 px-8 md:px-12 lg:px-12 relative gap-8 lg:gap-16">
          <div className="flex-1 z-10 w-full lg:pl-20 xl:pl-32 lg:pr-8">
            <span className="font-mono text-[#0E5C8C] text-sm mb-6 block tracking-widest">04 // STRATEGY &amp; GROWTH</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-8 font-space text-[#1A1A1A]">Measured<br />impact.</h2>
            <p className="text-[#5A5A5A] text-lg lg:text-xl max-w-md font-light">We don't just ship code. We align technical execution with business objectives to ensure your product actually scales.</p>
          </div>
          <div className="flex-1 h-[50vh] min-h-[300px] w-full border border-[#E0E2E5] bg-[#FAFAFA] shadow-sm rounded-sm p-8 relative flex items-end gap-4 overflow-hidden group">
            {/* Simple bar chart growth animation */}
            <div className="w-1/4 bg-[#0E5C8C]/10 rounded-t-sm h-[30%] group-hover:bg-[#0E5C8C]/20 transition-colors duration-500" />
            <div className="w-1/4 bg-[#0E5C8C]/10 rounded-t-sm h-[50%] group-hover:bg-[#0E5C8C]/30 transition-colors duration-500 delay-100" />
            <div className="w-1/4 bg-[#0E5C8C]/10 rounded-t-sm h-[70%] group-hover:bg-[#0E5C8C]/40 transition-colors duration-500 delay-200" />
            <div className="w-1/4 bg-[#2BA9D1]/20 rounded-t-sm h-[40%] group-hover:h-[90%] group-hover:bg-[#0E5C8C] transition-all duration-700 delay-300 ease-out" />
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
