'use client';
import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Founders() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".founder-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Founders staggered animation
      gsap.fromTo(".founder-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founders-grid",
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding px-6 lg:px-12 bg-[#FAFAF8] border-b border-[#151515] overflow-hidden" id="team" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 max-w-3xl">
          <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase border-b border-[#1B3A5C] pb-1 w-max">SEC. 05 // TEAM</span>
          <h2 className="founder-header text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-10 font-inter text-[#151515]">The Four Fronts.</h2>
          <p className="founder-header text-[#5C5C5C] text-xl lg:text-2xl leading-relaxed mb-6 font-medium">
            FourFrontLab isn&apos;t a massive agency with layers of account managers. We are four dedicated partners, each commanding a specific technical front.
          </p>
          <p className="founder-header text-[#5C5C5C] text-xl lg:text-2xl leading-relaxed font-medium">
            When you work with us, you work directly with the experts building your product. We prioritize performance, clean architecture, and delivering actual business value.
          </p>
        </div>

        <div className="founders-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Founder 1 */}
          <div className="founder-card group cursor-pointer border border-[#151515] p-4 corner-ticks bg-[#FAFAF8] hover:border-[#1B3A5C] transition-colors">
            <div className="w-full aspect-[4/5] bg-[#E5E5E0] rounded-none mb-6 overflow-hidden relative border border-[#151515] shadow-none group-hover:border-[#1B3A5C] transition-colors">
              {/* Blueprint overlay on hover */}
              <div className="absolute inset-0 bg-[#1B3A5C]/10 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-700" />
            </div>
            <h3 className="text-2xl font-bold font-inter text-[#151515] mb-2 group-hover:text-[#1B3A5C] transition-colors dimension-line pb-2 inline-block">M. Taha Nadeem</h3>
            <span className="font-mono text-[#151515] text-xs uppercase tracking-widest block mb-4 mt-2">Frontend / Engineering</span>
            <div className="flex gap-4">
              <a href="https://github.com/MTahaNadeem" target="_blank" rel="noopener noreferrer" className="text-[#151515] hover:text-[#1B3A5C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -ml-3">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mtahanadeem/" target="_blank" rel="noopener noreferrer" className="text-[#151515] hover:text-[#1B3A5C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="founder-card group cursor-pointer border border-[#151515] p-4 corner-ticks bg-[#FAFAF8] hover:border-[#1B3A5C] transition-colors lg:translate-y-8">
            <div className="w-full aspect-[4/5] bg-[#E5E5E0] rounded-none mb-6 overflow-hidden relative border border-[#151515] shadow-none group-hover:border-[#1B3A5C] transition-colors">
              <div className="absolute inset-0 bg-[#1B3A5C]/10 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-700" />
            </div>
            <h3 className="text-2xl font-bold font-inter text-[#151515] mb-2 group-hover:text-[#1B3A5C] transition-colors dimension-line pb-2 inline-block">Abdul Haseeb</h3>
            <span className="font-mono text-[#151515] text-xs uppercase tracking-widest block mb-4 mt-2">Backend / Architecture</span>
            <div className="flex gap-4">
              <a href="https://github.com/haseeb786-code" target="_blank" rel="noopener noreferrer" className="text-[#151515] hover:text-[#1B3A5C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -ml-3">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-haseeb-4a2925340/" target="_blank" rel="noopener noreferrer" className="text-[#151515] hover:text-[#1B3A5C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Founder 3 */}
          <div className="founder-card group cursor-pointer border border-[#151515] p-4 corner-ticks bg-[#FAFAF8] hover:border-[#1B3A5C] transition-colors lg:translate-y-16">
            <div className="w-full aspect-[4/5] bg-[#E5E5E0] rounded-none mb-6 overflow-hidden relative border border-[#151515] shadow-none group-hover:border-[#1B3A5C] transition-colors">
              <div className="absolute inset-0 bg-[#1B3A5C]/10 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-700" />
            </div>
            <h3 className="text-2xl font-bold font-inter text-[#151515] mb-2 group-hover:text-[#1B3A5C] transition-colors dimension-line pb-2 inline-block">Syed Haseeb Badshah</h3>
            <span className="font-mono text-[#151515] text-xs uppercase tracking-widest block mb-4 mt-2">UX/UI / Design System</span>
            <div className="flex gap-4">
              <a href="https://github.com/syed-haseeb-badshah" target="_blank" rel="noopener noreferrer" className="text-[#151515] hover:text-[#1B3A5C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -ml-3">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/syed-haseeb-badshah/" target="_blank" rel="noopener noreferrer" className="text-[#151515] hover:text-[#1B3A5C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Founder 4 */}
          <div className="founder-card group cursor-pointer border border-[#151515] p-4 corner-ticks bg-[#FAFAF8] hover:border-[#1B3A5C] transition-colors lg:translate-y-24">
            <div className="w-full aspect-[4/5] bg-[#E5E5E0] rounded-none mb-6 overflow-hidden relative border border-[#151515] shadow-none group-hover:border-[#1B3A5C] transition-colors">
              <div className="absolute inset-0 bg-[#1B3A5C]/10 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-700" />
            </div>
            <h3 className="text-2xl font-bold font-inter text-[#151515] mb-2 group-hover:text-[#1B3A5C] transition-colors dimension-line pb-2 inline-block">Mustafa Arfat</h3>
            <span className="font-mono text-[#151515] text-xs uppercase tracking-widest block mb-4 mt-2">Strategy / Growth</span>
            <div className="flex gap-4">
              <a href="https://github.com/cust40078-sudo" target="_blank" rel="noopener noreferrer" className="text-[#151515] hover:text-[#1B3A5C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -ml-3">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/raja-mustafa-030749422/" target="_blank" rel="noopener noreferrer" className="text-[#151515] hover:text-[#1B3A5C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
