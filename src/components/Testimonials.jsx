'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Working with FourFronts transformed our business. They delivered our MVP in record time without compromising on quality or performance.",
    name: "Sarah Jenkins",
    role: "CEO, TechStart",
  },
  {
    quote: "The direct access to the engineers made all the difference. We avoided the usual back-and-forth and got exactly what we needed, on schedule.",
    name: "Michael Chen",
    role: "Product Manager, Innovate Corp",
  },
  {
    quote: "Their technical expertise is unmatched. The scalable architecture they built for us easily handled our 10x user growth over the last quarter.",
    name: "Elena Rodriguez",
    role: "CTO, DataFlow",
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-card', 
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-padding px-6 md:px-12 bg-[#FAFAF8] border-b border-[#151515]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase">SEC. 07 // CLIENTS</span>
          <h2 className="text-4xl md:text-6xl font-bold font-inter text-[#151515] tracking-tight">
            What clients say.
          </h2>
          <p className="text-[#5C5C5C] text-lg mt-4 font-medium max-w-2xl">
            Don't just take our word for it. Hear from the founders and leaders who have trusted us with their core technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-card bg-[#FAFAF8] p-8 rounded-none border border-[#151515] corner-ticks flex flex-col justify-between hover:border-[#1B3A5C] transition-colors relative">
              <div className="absolute top-4 right-4 text-[#151515]/20 font-mono text-4xl">"</div>
              <p className="text-[#151515] font-mono text-sm leading-relaxed mb-8 italic z-10">
                {testimonial.quote}
              </p>
              <div className="border-t border-[#151515] pt-4">
                <h4 className="font-bold text-[#151515] font-inter uppercase tracking-wide">{testimonial.name}</h4>
                <span className="text-[#5C5C5C] font-mono text-xs uppercase tracking-widest">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
