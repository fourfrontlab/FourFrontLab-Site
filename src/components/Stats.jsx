'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      countersRef.current.forEach((counter) => {
        if (!counter) return;
        const target = parseFloat(counter.getAttribute('data-target'));
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          onUpdate: () => {
            counter.textContent = Math.floor(obj.val);
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !countersRef.current.includes(el)) {
      countersRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="section-padding px-6 md:px-12 bg-[#F0F1F3] border-b border-[#E0E2E5] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-8 items-start md:items-center justify-between">
        
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-5xl font-bold font-space text-[#1A1A1A] tracking-tight mb-4">
            Built by engineers, not account managers.
          </h2>
          <p className="text-[#5A5A5A] text-lg">
            We skip the middleman. When you work with us, you speak directly to the architects building your product.
          </p>
        </div>

        <div className="md:w-2/3 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-around w-full">
          <div className="flex flex-col border-l-2 border-[#0E5C8C]/40 pl-6">
            <div className="flex items-baseline text-[#1A1A1A] font-space font-bold text-5xl md:text-7xl">
              <span ref={addToRefs} data-target="40">0</span>
              <span className="text-[#0E5C8C]">+</span>
            </div>
            <span className="text-[#5A5A5A] font-mono tracking-widest text-sm mt-2 uppercase">Projects Delivered</span>
          </div>

          <div className="flex flex-col border-l-2 border-[#0E5C8C]/40 pl-6">
            <div className="flex items-baseline text-[#1A1A1A] font-space font-bold text-5xl md:text-7xl">
              <span ref={addToRefs} data-target="10">0</span>
              <span className="text-[#0E5C8C]">+</span>
            </div>
            <span className="text-[#5A5A5A] font-mono tracking-widest text-sm mt-2 uppercase">Years Combined Exp</span>
          </div>

          <div className="flex flex-col border-l-2 border-[#0E5C8C]/40 pl-6">
            <div className="flex items-baseline text-[#1A1A1A] font-space font-bold text-5xl md:text-7xl">
              <span className="text-[#2BA9D1] mr-1">&lt;</span>
              <span ref={addToRefs} data-target="2">0</span>
              <span className="text-3xl md:text-4xl ml-1 text-[#1A1A1A]">h</span>
            </div>
            <span className="text-[#5A5A5A] font-mono tracking-widest text-sm mt-2 uppercase">Avg Response Time</span>
          </div>
        </div>

      </div>
    </section>
  );
}
