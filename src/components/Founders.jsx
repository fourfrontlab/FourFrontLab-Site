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
    <section className="section-padding px-6 lg:px-12 bg-[#F0F1F3] border-b border-[#E0E2E5] overflow-hidden" id="team" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 max-w-3xl">
          <h2 className="founder-header text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-10 font-space text-[#1A1A1A]">The Four Fronts.</h2>
          <p className="founder-header text-[#5A5A5A] text-xl lg:text-2xl leading-relaxed mb-6 font-light">
            FourFrontLab isn't a massive agency with layers of account managers. We are four dedicated partners, each commanding a specific technical front.
          </p>
          <p className="founder-header text-[#5A5A5A] text-xl lg:text-2xl leading-relaxed font-light">
            When you work with us, you work directly with the experts building your product. We prioritize performance, clean architecture, and delivering actual business value.
          </p>
        </div>

        <div className="founders-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Founder 1 */}
          <div className="founder-card group cursor-pointer">
            <div className="w-full aspect-[4/5] bg-[#E8EAF0] rounded-sm mb-6 overflow-hidden relative border border-[#E0E2E5] shadow-sm">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0E5C8C]/5 to-[#2BA9D1]/10 group-hover:scale-105 transition-transform duration-700" />
               {/* Blue tint on hover */}
               <div className="absolute inset-0 bg-[#0E5C8C]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <h3 className="text-2xl font-bold font-space text-[#1A1A1A] mb-2 group-hover:text-[#0E5C8C] transition-colors">Muhammad Taha Nadeem</h3>
            <span className="font-mono text-[#2BA9D1] text-xs uppercase tracking-widest block mb-4">Frontend / Engineering</span>
            <div className="flex gap-4">
              <a href="https://github.com/MTahaNadeem" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -ml-3">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mtahanadeem/" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Founder 2 */}
          <div className="founder-card group cursor-pointer lg:translate-y-8">
            <div className="w-full aspect-[4/5] bg-[#E8EAF0] rounded-sm mb-6 overflow-hidden relative border border-[#E0E2E5] shadow-sm">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0E5C8C]/5 to-[#2BA9D1]/10 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-[#0E5C8C]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <h3 className="text-2xl font-bold font-space text-[#1A1A1A] mb-2 group-hover:text-[#0E5C8C] transition-colors">Abdul Haseeb</h3>
            <span className="font-mono text-[#2BA9D1] text-xs uppercase tracking-widest block mb-4">Backend / Architecture</span>
            <div className="flex gap-4">
              <a href="https://github.com/haseeb786-code" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -ml-3">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-haseeb-4a2925340/" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Founder 3 */}
          <div className="founder-card group cursor-pointer lg:translate-y-16">
            <div className="w-full aspect-[4/5] bg-[#E8EAF0] rounded-sm mb-6 overflow-hidden relative border border-[#E0E2E5] shadow-sm">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0E5C8C]/5 to-[#2BA9D1]/10 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-[#0E5C8C]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <h3 className="text-2xl font-bold font-space text-[#1A1A1A] mb-2 group-hover:text-[#0E5C8C] transition-colors">Syed Haseeb Badshah</h3>
            <span className="font-mono text-[#2BA9D1] text-xs uppercase tracking-widest block mb-4">UX/UI / Design System</span>
            <div className="flex gap-4">
              <a href="https://github.com/syed-haseeb-badshah" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -ml-3">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/syed-haseeb-badshah/" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Founder 4 */}
          <div className="founder-card group cursor-pointer lg:translate-y-24">
            <div className="w-full aspect-[4/5] bg-[#E8EAF0] rounded-sm mb-6 overflow-hidden relative border border-[#E0E2E5] shadow-sm">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0E5C8C]/5 to-[#2BA9D1]/10 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-[#0E5C8C]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <h3 className="text-2xl font-bold font-space text-[#1A1A1A] mb-2 group-hover:text-[#0E5C8C] transition-colors">Mustafa Arfat</h3>
            <span className="font-mono text-[#2BA9D1] text-xs uppercase tracking-widest block mb-4">Strategy / Growth</span>
            <div className="flex gap-4">
              <a href="https://github.com/cust40078-sudo" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -ml-3">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/raja-mustafa-030749422/" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
