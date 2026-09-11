'use client';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".contact-element", 
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 md:py-40 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-200 relative overflow-hidden" id="contact" ref={containerRef}>
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#8DBF00] rounded-full blur-[200px] opacity-[0.03] pointer-events-none -translate-y-1/2 -translate-x-1/4" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left: Heading & Direct Contact */}
        <div className="flex flex-col justify-center">
          <h2 className="contact-element text-5xl lg:text-7xl font-medium tracking-tighter leading-none mb-10 text-zinc-900">Let's build.</h2>
          <p className="contact-element text-zinc-600 text-xl lg:text-2xl leading-relaxed mb-12 max-w-md font-light">
            Ready to scale your digital presence? Fill out the form or drop us an email to get started. We aim to respond within 2 hours.
          </p>

          <div className="contact-element flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a
              href="mailto:fourfrontlab@gmail.com"
              className="group flex items-center gap-4 bg-white shadow-sm text-zinc-900 px-8 py-5 rounded-sm font-medium text-lg border border-zinc-200 hover:border-[#8DBF00] hover:text-[#8DBF00] transition-colors"
            >
              <span>Email Us Directly</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form UI */}
        <div className="contact-element bg-white/80 shadow-sm backdrop-blur-sm p-8 lg:p-12 border border-zinc-200 rounded-sm">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                id="name"
                className="bg-white border border-zinc-300 shadow-sm rounded-sm p-4 text-zinc-900 focus:outline-none focus:border-[#8DBF00] transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                id="email"
                className="bg-white border border-zinc-300 shadow-sm rounded-sm p-4 text-zinc-900 focus:outline-none focus:border-[#8DBF00] transition-colors"
                placeholder="john@company.com"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Message</label>
              <textarea 
                id="message"
                rows="4"
                className="bg-white border border-zinc-300 shadow-sm rounded-sm p-4 text-zinc-900 focus:outline-none focus:border-[#8DBF00] transition-colors resize-none"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="mt-4 bg-[#8DBF00] text-white px-8 py-4 rounded-sm font-medium text-lg hover:bg-zinc-900 transition-colors flex items-center justify-center gap-3 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
