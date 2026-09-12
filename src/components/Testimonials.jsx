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
    <section ref={containerRef} className="section-padding px-6 md:px-12 bg-[#F0F1F3] border-b border-[#E0E2E5]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-space text-[#1A1A1A] tracking-tight">
            What clients say.
          </h2>
          <p className="text-[#5A5A5A] text-lg mt-4 font-inter max-w-2xl">
            Don't just take our word for it. Hear from the founders and leaders who have trusted us with their core technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-card bg-white p-8 rounded-md shadow-sm border border-[#E0E2E5] flex flex-col justify-between hover:border-[#0E5C8C]/30 transition-colors">
              <p className="text-[#1A1A1A] font-inter text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="h-1 w-8 bg-[#0E5C8C] mb-4"></div>
                <h4 className="font-bold text-[#1A1A1A]">{testimonial.name}</h4>
                <span className="text-[#5A5A5A] text-sm">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
