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
      
      // Animate SVG paths in panels on scrub
      panels.forEach((panel) => {
        gsap.fromTo(panel.querySelectorAll('.schematic-path'),
          { strokeDashoffset: 500, strokeDasharray: 500 },
          { 
            strokeDashoffset: 0, 
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: gsap.getById("scrollTween"), // Not defined, fallback to simple scrollTrigger or let CSS handle it
              start: "left center",
              end: "right center",
              scrub: true
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="md:h-screen w-full overflow-hidden bg-[#FAFAF8] flex items-stretch relative border-b border-[#151515]">
      
      <div ref={scrollContainerRef} className="flex flex-col md:flex-row h-auto md:h-full w-full md:w-[200%] shrink-0 relative z-10">

        {/* Panel 1: Frontend */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col justify-between py-12 md:py-16 px-8 md:px-12 relative gap-8 border-b md:border-b-0 md:border-r border-[#151515]">
          <div className="w-full pt-8 shrink-0">
            <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase border-b border-[#1B3A5C] pb-1 w-max">FIG. 01 // FRONTEND</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 font-inter text-[#151515]">Pixel-perfect<br />precision.</h2>
            <p className="text-[#5C5C5C] text-lg lg:text-xl max-w-md font-medium">We build fluid, component-driven interfaces that feel alive, using modern frameworks and precise animations.</p>
          </div>
          <div className="w-[90%] md:w-full md:max-w-[640px] h-auto aspect-[420/380] md:aspect-auto md:flex-1 md:min-h-[300px] md:max-h-[580px] mx-auto border border-[#151515] bg-[#FAFAF8] p-[24px] flex items-center justify-center relative overflow-hidden group corner-ticks">
            
            <svg viewBox="0 0 300 200" className="w-full h-full" fill="none">
              <path d="M10 10 H290 V190 H10 Z" stroke="#E5E5E0" strokeWidth="1" strokeDasharray="2 2" />
              {/* Browser frame */}
              <path className="schematic-path" d="M30 30 H270 V170 H30 Z" stroke="#151515" strokeWidth="1.5" />
              <path className="schematic-path" d="M30 45 H270" stroke="#151515" strokeWidth="1.5" />
              <circle cx="45" cy="37.5" r="2" fill="#151515" />
              <circle cx="55" cy="37.5" r="2" fill="#151515" />
              <circle cx="65" cy="37.5" r="2" fill="#151515" />
              
              {/* Layout boxes */}
              <path className="schematic-path" d="M40 55 H80 V160 H40 Z" stroke="#1B3A5C" strokeWidth="1" />
              <path className="schematic-path" d="M90 55 H260 V100 H90 Z" stroke="#1B3A5C" strokeWidth="1" />
              <path className="schematic-path" d="M90 110 H170 V160 H90 Z" stroke="#1B3A5C" strokeWidth="1" />
              <path className="schematic-path" d="M180 110 H260 V160 H180 Z" stroke="#1B3A5C" strokeWidth="1" />

              {/* Leader lines & labels */}
              <path className="schematic-path" d="M175 77 V15 H190" stroke="#D14E1F" strokeWidth="1" />
              <circle cx="175" cy="77" r="2" fill="#D14E1F" />
              <text x="195" y="18" fill="#151515" fontSize="8" fontFamily="monospace">HERO_COMPONENT</text>
              
              <path className="schematic-path" d="M60 107 H15 V150 H20" stroke="#D14E1F" strokeWidth="1" />
              <circle cx="60" cy="107" r="2" fill="#D14E1F" />
              <text x="25" y="153" fill="#151515" fontSize="8" fontFamily="monospace">NAV</text>
            </svg>

          </div>
        </div>

        {/* Panel 2: Backend */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col justify-between py-12 md:py-16 px-8 md:px-12 relative gap-8 border-b md:border-b-0 md:border-r border-[#151515]">
          <div className="w-full pt-8 shrink-0">
            <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase border-b border-[#1B3A5C] pb-1 w-max">FIG. 02 // BACKEND</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 font-inter text-[#151515]">Invisible<br />power.</h2>
            <p className="text-[#5C5C5C] text-lg lg:text-xl max-w-md font-medium">Scalable architecture, secure APIs, and optimized databases that handle heavy logic without breaking a sweat.</p>
          </div>
          <div className="w-[90%] md:w-full md:max-w-[640px] h-auto aspect-[420/380] md:aspect-auto md:flex-1 md:min-h-[300px] md:max-h-[580px] mx-auto border border-[#151515] bg-[#FAFAF8] p-[24px] flex items-center justify-center relative overflow-hidden group corner-ticks">
            
            <svg viewBox="0 0 300 200" className="w-full h-full" fill="none">
              <path d="M10 10 H290 V190 H10 Z" stroke="#E5E5E0" strokeWidth="1" strokeDasharray="2 2" />
              
              {/* Load Balancer */}
              <polygon className="schematic-path" points="150,30 180,50 150,70 120,50" stroke="#151515" strokeWidth="1.5" />
              <text x="142" y="53" fill="#151515" fontSize="8" fontFamily="monospace">LB</text>

              {/* Servers */}
              <path className="schematic-path" d="M70 100 H110 V140 H70 Z" stroke="#1B3A5C" strokeWidth="1" />
              <path className="schematic-path" d="M130 100 H170 V140 H130 Z" stroke="#1B3A5C" strokeWidth="1" />
              <path className="schematic-path" d="M190 100 H230 V140 H190 Z" stroke="#1B3A5C" strokeWidth="1" />
              
              <path className="schematic-path" d="M80 110 H100 M80 120 H100 M80 130 H100" stroke="#1B3A5C" strokeWidth="1" />
              <path className="schematic-path" d="M140 110 H160 M140 120 H160 M140 130 H160" stroke="#1B3A5C" strokeWidth="1" />
              <path className="schematic-path" d="M200 110 H220 M200 120 H220 M200 130 H220" stroke="#1B3A5C" strokeWidth="1" />

              {/* Connections */}
              <path className="schematic-path" d="M135 60 L90 100" stroke="#151515" strokeWidth="1" strokeDasharray="2 2" />
              <path className="schematic-path" d="M150 70 L150 100" stroke="#151515" strokeWidth="1" strokeDasharray="2 2" />
              <path className="schematic-path" d="M165 60 L210 100" stroke="#151515" strokeWidth="1" strokeDasharray="2 2" />

              {/* Database */}
              <path className="schematic-path" d="M150 160 C180 160 180 170 180 170 V190 C180 190 180 200 150 200 C120 200 120 190 120 190 V170 C120 170 120 160 150 160 Z" stroke="#151515" strokeWidth="1.5" />
              <path className="schematic-path" d="M120 170 C120 170 150 180 180 170" stroke="#151515" strokeWidth="1.5" />
              
              <path className="schematic-path" d="M150 140 V160" stroke="#151515" strokeWidth="1" />

              {/* Leader lines */}
              <path className="schematic-path" d="M220 120 H260 V70 H270" stroke="#D14E1F" strokeWidth="1" />
              <circle cx="220" cy="120" r="2" fill="#D14E1F" />
              <text x="240" y="65" fill="#151515" fontSize="8" fontFamily="monospace">API_NODES</text>

              <path className="schematic-path" d="M175 185 H260 V170 H270" stroke="#D14E1F" strokeWidth="1" />
              <circle cx="175" cy="185" r="2" fill="#D14E1F" />
              <text x="250" y="165" fill="#151515" fontSize="8" fontFamily="monospace">POSTGRES_DB</text>
            </svg>

          </div>
        </div>

        {/* Panel 3: UX/UI */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col justify-between py-12 md:py-16 px-8 md:px-12 relative gap-8 border-b md:border-b-0 md:border-r border-[#151515]">
          <div className="w-full pt-8 shrink-0">
            <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase border-b border-[#1B3A5C] pb-1 w-max">FIG. 03 // UX &amp; UI</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 font-inter text-[#151515]">Logical<br />flow.</h2>
            <p className="text-[#5C5C5C] text-lg lg:text-xl max-w-md font-medium">Design systems that make sense. We prototype interactions that guide users frictionlessly from A to B.</p>
          </div>
          <div className="w-[90%] md:w-full md:max-w-[640px] h-auto aspect-[420/380] md:aspect-auto md:flex-1 md:min-h-[300px] md:max-h-[580px] mx-auto border border-[#151515] bg-[#FAFAF8] p-[24px] flex items-center justify-center relative overflow-hidden group corner-ticks">
            
            <svg viewBox="0 0 300 200" className="w-full h-full" fill="none">
              <path d="M10 10 H290 V190 H10 Z" stroke="#E5E5E0" strokeWidth="1" strokeDasharray="2 2" />
              
              {/* Flowchart nodes */}
              <rect className="schematic-path" x="40" y="40" width="60" height="30" rx="15" stroke="#151515" strokeWidth="1.5" />
              <text x="52" y="58" fill="#151515" fontSize="8" fontFamily="monospace">START</text>

              <rect className="schematic-path" x="40" y="100" width="60" height="40" stroke="#1B3A5C" strokeWidth="1" />
              <text x="50" y="123" fill="#1B3A5C" fontSize="8" fontFamily="monospace">VIEW_ITEM</text>

              <polygon className="schematic-path" points="170,100 200,120 170,140 140,120" stroke="#151515" strokeWidth="1.5" />
              <text x="160" y="123" fill="#151515" fontSize="8" fontFamily="monospace">AUTH?</text>

              <rect className="schematic-path" x="140" y="40" width="60" height="30" stroke="#1B3A5C" strokeWidth="1" />
              <text x="155" y="58" fill="#1B3A5C" fontSize="8" fontFamily="monospace">LOGIN</text>

              <rect className="schematic-path" x="230" y="105" width="50" height="30" rx="15" stroke="#151515" strokeWidth="1.5" />
              <text x="245" y="123" fill="#151515" fontSize="8" fontFamily="monospace">BUY</text>

              {/* Flow arrows */}
              <path className="schematic-path" d="M70 70 V100" stroke="#151515" strokeWidth="1" markerEnd="url(#arrow)" />
              <path className="schematic-path" d="M100 120 H140" stroke="#151515" strokeWidth="1" markerEnd="url(#arrow)" />
              
              <path className="schematic-path" d="M170 100 V70" stroke="#151515" strokeWidth="1" markerEnd="url(#arrow)" />
              <text x="175" y="90" fill="#151515" fontSize="8" fontFamily="monospace">NO</text>
              
              <path className="schematic-path" d="M200 120 H230" stroke="#151515" strokeWidth="1" markerEnd="url(#arrow)" />
              <text x="205" y="115" fill="#151515" fontSize="8" fontFamily="monospace">YES</text>

              {/* Leader lines */}
              <path className="schematic-path" d="M185 130 V170 H220" stroke="#D14E1F" strokeWidth="1" />
              <circle cx="185" cy="130" r="2" fill="#D14E1F" />
              <text x="225" y="173" fill="#151515" fontSize="8" fontFamily="monospace">DECISION_NODE</text>

              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#151515" />
                </marker>
              </defs>
            </svg>

          </div>
        </div>

        {/* Panel 4: Strategy/Growth */}
        <div className="front-panel w-full md:w-1/4 h-auto md:h-full min-h-[70vh] flex flex-col justify-between py-12 md:py-16 px-8 md:px-12 relative gap-8">
          <div className="w-full pt-8 shrink-0">
            <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase border-b border-[#1B3A5C] pb-1 w-max">FIG. 04 // STRATEGY &amp; GROWTH</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6 font-inter text-[#151515]">Measured<br />impact.</h2>
            <p className="text-[#5C5C5C] text-lg lg:text-xl max-w-md font-medium">We don&apos;t just ship code. We align technical execution with business objectives to ensure your product actually scales.</p>
          </div>
          <div className="w-[90%] md:w-full md:max-w-[640px] h-auto aspect-[420/380] md:aspect-auto md:flex-1 md:min-h-[300px] md:max-h-[580px] mx-auto border border-[#151515] bg-[#FAFAF8] p-[24px] flex items-center justify-center relative overflow-hidden group corner-ticks">
            
            <svg viewBox="0 0 300 200" className="w-full h-full" fill="none">
              <path d="M10 10 H290 V190 H10 Z" stroke="#E5E5E0" strokeWidth="1" strokeDasharray="2 2" />
              
              {/* Axes */}
              <path className="schematic-path" d="M40 20 V160 H280" stroke="#151515" strokeWidth="1.5" />
              
              {/* Grid lines */}
              <path className="schematic-path" d="M40 125 H280 M40 90 H280 M40 55 H280" stroke="#E5E5E0" strokeWidth="1" strokeDasharray="2 2" />

              {/* Line graph */}
              <path className="schematic-path" d="M40 140 L90 130 L140 100 L190 110 L240 60 L280 40" stroke="#1B3A5C" strokeWidth="2" />
              
              {/* Data points */}
              <circle cx="90" cy="130" r="3" fill="#FAFAF8" stroke="#1B3A5C" strokeWidth="1.5" />
              <circle cx="140" cy="100" r="3" fill="#FAFAF8" stroke="#1B3A5C" strokeWidth="1.5" />
              <circle cx="190" cy="110" r="3" fill="#FAFAF8" stroke="#1B3A5C" strokeWidth="1.5" />
              <circle cx="240" cy="60" r="3" fill="#FAFAF8" stroke="#1B3A5C" strokeWidth="1.5" />
              <circle cx="280" cy="40" r="3" fill="#FAFAF8" stroke="#1B3A5C" strokeWidth="1.5" />

              {/* Bar charts behind */}
              <rect className="schematic-path" x="75" y="140" width="30" height="20" fill="#E5E5E0" opacity="0.5" />
              <rect className="schematic-path" x="125" y="110" width="30" height="50" fill="#E5E5E0" opacity="0.5" />
              <rect className="schematic-path" x="175" y="120" width="30" height="40" fill="#E5E5E0" opacity="0.5" />
              <rect className="schematic-path" x="225" y="70" width="30" height="90" fill="#E5E5E0" opacity="0.5" />

              {/* Leader line */}
              <path className="schematic-path" d="M240 60 V20 H180" stroke="#D14E1F" strokeWidth="1" />
              <text x="145" y="23" fill="#151515" fontSize="8" fontFamily="monospace">INFLECTION</text>

              {/* Y axis labels */}
              <text x="15" y="163" fill="#151515" fontSize="8" fontFamily="monospace">0</text>
              <text x="15" y="58" fill="#151515" fontSize="8" fontFamily="monospace">100</text>
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
}
