'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FourFronts() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia(sectionRef);
    
    mm.add("(min-width: 768px)", () => {
      const panels = gsap.utils.toArray('.front-panel');

      // Horizontal scroll pinning
      gsap.to(panels, {
        xPercent: -200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1,
          end: () => "+=" + (scrollContainerRef.current.offsetWidth / 2)
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="md:h-screen w-full overflow-hidden bg-[#F0F1F3] flex items-stretch relative border-b border-[#E0E2E5]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(43,169,209,0.05)_0%,transparent_70%)] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />

      <div ref={scrollContainerRef} className="flex flex-col md:flex-row h-auto md:h-full w-full md:w-[200%] shrink-0 relative z-10">

        {/* Panel 1: Frontend */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col justify-between py-12 md:py-16 px-8 md:px-12 relative gap-8 border-b md:border-b-0 md:border-r border-[#E0E2E5] will-change-transform">
          <div className="w-full pt-8 shrink-0">
            <span className="font-mono text-[#0E5C8C] text-sm mb-4 block tracking-widest">01 // FRONTEND</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 font-space text-[#1A1A1A]">Pixel-perfect<br />precision.</h2>
            <p className="text-[#5A5A5A] text-lg lg:text-xl max-w-md font-light">We build fluid, component-driven interfaces that feel alive, using modern frameworks and precise animations.</p>
          </div>
          <div className="w-[90%] md:w-full md:max-w-[640px] h-auto aspect-[420/380] md:aspect-auto md:flex-1 md:min-h-[300px] md:max-h-[580px] mx-auto border border-[#E0E2E5] bg-[#FAFAFA] shadow-sm rounded-sm p-[24px] flex flex-col relative overflow-hidden group">
            {/* Top Bar */}
            <div className="w-full h-[10%] min-h-[24px] max-h-[32px] border-b border-[#E0E2E5] flex items-center px-2 gap-2 mb-3 md:mb-4 shrink-0">
              <div className="w-2 h-2 rounded-full bg-red-400/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
              <div className="w-2 h-2 rounded-full bg-green-400/50" />
              <div className="ml-4 w-24 h-2 bg-[#E0E2E5] rounded-full" />
            </div>
            
            <div className="flex gap-4 flex-1 min-h-0">
              {/* Sidebar */}
              <div className="w-1/4 h-full flex flex-col gap-2 md:gap-3 border-r border-[#E0E2E5] pr-2 md:pr-4 shrink-0">
                <div className="w-full h-2 md:h-3 bg-[#0E5C8C]/20 rounded-full shrink-0" />
                <div className="w-3/4 h-2 md:h-3 bg-[#E0E2E5] rounded-full shrink-0" />
                <div className="w-5/6 h-2 md:h-3 bg-[#E0E2E5] rounded-full shrink-0" />
                <div className="w-2/3 h-2 md:h-3 bg-[#E0E2E5] rounded-full shrink-0" />
              </div>
              
              {/* Main Content */}
              <div className="flex-1 flex flex-col gap-3 md:gap-4 min-h-0">
                {/* Stats row */}
                <div className="flex gap-2 md:gap-4 shrink-0 h-[25%] max-h-[64px]">
                  <div className="flex-1 h-full bg-white border border-[#E0E2E5] rounded-sm p-2 flex flex-col justify-between group-hover:border-[#0E5C8C]/30 transition-colors">
                    <div className="w-8 h-1.5 md:h-2 bg-[#E0E2E5] rounded-full" />
                    <div className="w-[60%] h-2 md:h-4 bg-[#0E5C8C]/80 rounded-full group-hover:w-[80%] transition-all duration-700" />
                  </div>
                  <div className="flex-1 h-full bg-white border border-[#E0E2E5] rounded-sm p-2 flex flex-col justify-between group-hover:border-[#2BA9D1]/30 transition-colors delay-100">
                    <div className="w-8 h-1.5 md:h-2 bg-[#E0E2E5] rounded-full" />
                    <div className="w-[70%] h-2 md:h-4 bg-[#2BA9D1]/80 rounded-full group-hover:w-[90%] transition-all duration-700 delay-100" />
                  </div>
                </div>
                
                {/* Large card */}
                <div className="w-full flex-1 bg-white border border-[#E0E2E5] rounded-sm p-3 md:p-4 relative overflow-hidden min-h-0">
                  <div className="w-24 h-2 md:h-3 bg-[#E0E2E5] rounded-full mb-4 md:mb-6 shrink-0" />
                  {/* Mock graph lines */}
                  <div className="absolute bottom-0 left-0 w-full h-[60%] flex items-end gap-1 px-4 opacity-50 pb-2 md:pb-4">
                    <div className="flex-1 bg-gradient-to-t from-[#0E5C8C]/40 to-transparent rounded-t-sm h-[20%] group-hover:h-[40%] transition-all duration-700 delay-75" />
                    <div className="flex-1 bg-gradient-to-t from-[#0E5C8C]/40 to-transparent rounded-t-sm h-[30%] group-hover:h-[70%] transition-all duration-700 delay-100" />
                    <div className="flex-1 bg-gradient-to-t from-[#0E5C8C]/40 to-transparent rounded-t-sm h-[15%] group-hover:h-[45%] transition-all duration-700 delay-150" />
                    <div className="flex-1 bg-gradient-to-t from-[#0E5C8C]/40 to-transparent rounded-t-sm h-[40%] group-hover:h-[90%] transition-all duration-700 delay-200" />
                    <div className="flex-1 bg-gradient-to-t from-[#0E5C8C]/40 to-transparent rounded-t-sm h-[25%] group-hover:h-[65%] transition-all duration-700 delay-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 2: Backend */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col justify-between py-12 md:py-16 px-8 md:px-12 relative gap-8 border-b md:border-b-0 md:border-r border-[#E0E2E5] will-change-transform">
          <div className="w-full pt-8 shrink-0">
            <span className="font-mono text-[#0E5C8C] text-sm mb-4 block tracking-widest">02 // BACKEND</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 font-space text-[#1A1A1A]">Invisible<br />power.</h2>
            <p className="text-[#5A5A5A] text-lg lg:text-xl max-w-md font-light">Scalable architecture, secure APIs, and optimized databases that handle heavy logic without breaking a sweat.</p>
          </div>
          <div className="w-[90%] md:w-full md:max-w-[640px] h-auto aspect-[420/380] md:aspect-auto md:flex-1 md:min-h-[300px] md:max-h-[580px] mx-auto border border-[#E0E2E5] bg-[#FAFAFA] shadow-sm rounded-sm p-[24px] font-mono text-xs md:text-sm text-[#5A5A5A] relative overflow-hidden flex flex-col group">
            <div className="flex items-center gap-2 mb-3 md:mb-4 border-b border-[#E0E2E5] pb-3 md:pb-4 shrink-0">
              <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-400/50" />
              <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-400/50" />
              <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#2BA9D1]/50" />
            </div>
            <div className="group-hover:text-[#1A1A1A] transition-colors flex-1 overflow-hidden flex flex-col justify-start">
              <p className="text-[#0E5C8C] mb-2 truncate">&gt; INIT SERVER</p>
              <p className="opacity-70 truncate">[INFO] Starting production build...</p>
              <p className="opacity-70 truncate">[INFO] Connecting to database cluster (us-east-1)</p>
              <p className="text-[#2BA9D1] my-1 md:my-2 truncate">[SUCCESS] Connection established in 42ms</p>
              <p className="opacity-70 truncate">[INFO] Listening on port 8080</p>
              <p className="animate-pulse mt-2 md:mt-4 text-[#0E5C8C]">_</p>
            </div>
          </div>
        </div>

        {/* Panel 3: UX/UI */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col justify-between py-12 md:py-16 px-8 md:px-12 relative gap-8 border-b md:border-b-0 md:border-r border-[#E0E2E5] will-change-transform">
          <div className="w-full pt-8 shrink-0">
            <span className="font-mono text-[#0E5C8C] text-sm mb-4 block tracking-widest">03 // UX &amp; UI</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 font-space text-[#1A1A1A]">Logical<br />flow.</h2>
            <p className="text-[#5A5A5A] text-lg lg:text-xl max-w-md font-light">Design systems that make sense. We prototype interactions that guide users frictionlessly from A to B.</p>
          </div>
          <div className="w-[90%] md:w-full md:max-w-[640px] h-auto aspect-[420/380] md:aspect-auto md:flex-1 md:min-h-[300px] md:max-h-[580px] mx-auto border border-[#E0E2E5] bg-[#FAFAFA] shadow-sm rounded-sm p-[24px] relative flex items-center justify-center group overflow-hidden">
            {/* Phone outline */}
            <div className="h-[90%] w-auto aspect-[160/320] max-h-[300px] bg-white border-[4px] md:border-[6px] border-[#1A1A1A] rounded-2xl md:rounded-3xl p-2 md:p-3 shadow-sm relative flex flex-col gap-1.5 md:gap-2 group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-700">
              {/* Notch */}
              <div className="w-[30%] h-2 md:h-3 bg-[#1A1A1A] rounded-b-lg mx-auto absolute top-0 left-1/2 -translate-x-1/2" />
              
              {/* UI Elements */}
              <div className="w-full h-[15%] min-h-[20px] bg-[#0E5C8C]/10 rounded-md md:rounded-lg mt-2 md:mt-3 shrink-0" />
              <div className="w-3/4 h-1.5 md:h-2 bg-[#E0E2E5] rounded-full shrink-0" />
              <div className="w-1/2 h-1.5 md:h-2 bg-[#E0E2E5] rounded-full mb-1 shrink-0" />
              
              <div className="flex gap-1.5 md:gap-2 flex-1 min-h-0">
                <div className="w-1/2 h-full bg-[#2BA9D1]/10 rounded-md md:rounded-lg group-hover:bg-[#2BA9D1]/20 transition-colors" />
                <div className="w-1/2 h-full bg-[#2BA9D1]/10 rounded-md md:rounded-lg" />
              </div>

              {/* CTA Button */}
              <div className="w-full h-[12%] min-h-[20px] bg-[#0E5C8C] rounded-full mt-auto relative overflow-hidden group-hover:scale-[0.98] transition-transform shrink-0">
                 <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out delay-500" />
              </div>
            </div>

            {/* Mock Cursor */}
            <div className="absolute bottom-12 right-12 w-6 h-6 z-20 opacity-0 group-hover:opacity-100 group-hover:-translate-x-16 group-hover:-translate-y-24 transition-all duration-1000 ease-out delay-200">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-md">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="white" />
              </svg>
              {/* Click ripple */}
              <div className="absolute top-0 left-0 w-full h-full border border-[#0E5C8C] rounded-full scale-0 group-hover:animate-[ping_1s_cubic-bezier(0,0,0.2,1)_1s_forwards]" />
            </div>
          </div>
        </div>

        {/* Panel 4: Strategy/Growth */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col justify-between py-12 md:py-16 px-8 md:px-12 relative gap-8 will-change-transform">
          <div className="w-full pt-8 shrink-0">
            <span className="font-mono text-[#0E5C8C] text-sm mb-4 block tracking-widest">04 // STRATEGY &amp; GROWTH</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 font-space text-[#1A1A1A]">Measured<br />impact.</h2>
            <p className="text-[#5A5A5A] text-lg lg:text-xl max-w-md font-light">We don&apos;t just ship code. We align technical execution with business objectives to ensure your product actually scales.</p>
          </div>
          <div className="w-[90%] md:w-full md:max-w-[640px] h-auto aspect-[420/380] md:aspect-auto md:flex-1 md:min-h-[300px] md:max-h-[580px] mx-auto border border-[#E0E2E5] bg-[#FAFAFA] shadow-sm rounded-sm p-[24px] relative flex flex-col overflow-hidden group">
            {/* Chart Header */}
            <div className="flex justify-between items-center mb-4 md:mb-6 shrink-0">
              <div>
                <div className="text-[10px] md:text-xs font-mono text-[#5A5A5A] uppercase tracking-widest mb-1">Growth Metrics</div>
                <div className="text-xl md:text-2xl font-bold font-space text-[#1A1A1A] group-hover:text-[#0E5C8C] transition-colors">+248%</div>
              </div>
              <div className="px-2 md:px-3 py-1 bg-green-100 text-green-700 text-[10px] md:text-xs font-bold rounded-full animate-pulse">LIVE</div>
            </div>
            
            {/* Chart Area */}
            <div className="flex-1 min-h-0 relative border-l border-b border-[#E0E2E5] flex items-end justify-between pt-4 md:pt-8 pb-0 px-1 md:px-2 gap-1 md:gap-2">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pb-0 pointer-events-none opacity-20">
                <div className="w-full border-b border-dashed border-[#E0E2E5]" />
                <div className="w-full border-b border-dashed border-[#E0E2E5]" />
                <div className="w-full border-b border-dashed border-[#E0E2E5]" />
                <div className="w-full border-b border-[#E0E2E5]" />
              </div>

              {/* Bars */}
              <div className="w-full bg-[#0E5C8C]/10 rounded-t-sm h-[20%] group-hover:h-[35%] transition-all duration-700 relative group-hover:bg-[#0E5C8C]/20" />
              <div className="w-full bg-[#0E5C8C]/10 rounded-t-sm h-[30%] group-hover:h-[45%] transition-all duration-700 delay-75 relative group-hover:bg-[#0E5C8C]/20" />
              <div className="w-full bg-[#0E5C8C]/10 rounded-t-sm h-[25%] group-hover:h-[60%] transition-all duration-700 delay-150 relative group-hover:bg-[#0E5C8C]/20" />
              <div className="w-full bg-[#2BA9D1]/20 rounded-t-sm h-[40%] group-hover:h-[85%] transition-all duration-1000 delay-300 relative group-hover:bg-[#2BA9D1]/40">
                {/* Floating tool tip on last bar */}
                <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[8px] md:text-[10px] font-mono px-1.5 md:px-2 py-0.5 md:py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-1000 whitespace-nowrap z-10">
                  Target Hit
                </div>
              </div>
            </div>
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
