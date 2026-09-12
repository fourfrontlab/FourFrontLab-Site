'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState('idle');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitted');
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <section className="section-padding px-6 lg:px-12 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden" id="contact" ref={containerRef}>
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#C6FF00] rounded-full blur-[200px] opacity-[0.03] pointer-events-none -translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left: Heading & Direct Contact */}
        <div className="flex flex-col justify-center">
          <h2 className="contact-element text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-10 font-space text-white">Let's build.</h2>
          <p className="contact-element text-[#A0A0A0] text-xl lg:text-2xl leading-relaxed mb-12 max-w-md font-light">
            Ready to scale your digital presence? Fill out the form or drop us an email to get started. We aim to respond within 2 hours.
          </p>

          <div className="contact-element flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a
              href="mailto:fourfrontlab@gmail.com"
              className="group flex items-center gap-4 bg-[#141414] shadow-sm text-white px-8 py-5 rounded-sm font-medium text-lg border border-white/10 hover:border-[#C6FF00] hover:text-[#C6FF00] transition-colors"
            >
              <span>Email Us Directly</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form UI */}
        <div className="contact-element bg-[#141414] shadow-sm p-8 lg:p-12 border border-white/10 rounded-sm">
          {formState === 'submitted' ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
              <div className="w-16 h-16 bg-[#C6FF00]/10 text-[#C6FF00] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-space text-white mb-2">Message Sent</h3>
              <p className="text-[#A0A0A0]">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-[#A0A0A0] uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="bg-white/5 border border-white/10 shadow-sm rounded-sm p-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-[#A0A0A0] uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="bg-white/5 border border-white/10 shadow-sm rounded-sm p-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="type" className="text-sm font-mono text-[#A0A0A0] uppercase tracking-widest">Project Type</label>
                <select 
                  id="type"
                  className="bg-white/5 border border-white/10 shadow-sm rounded-sm p-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">Select an option</option>
                  <option value="frontend" className="text-black">Frontend</option>
                  <option value="backend" className="text-black">Backend</option>
                  <option value="fullstack" className="text-black">Fullstack / End-to-End</option>
                  <option value="design" className="text-black">UI/UX Design</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-[#A0A0A0] uppercase tracking-widest">Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="bg-white/5 border border-white/10 shadow-sm rounded-sm p-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="mt-4 bg-[#141414] border border-white/10 text-white px-8 py-4 rounded-sm font-medium text-lg hover:bg-[#C6FF00] hover:text-black hover:border-[#C6FF00] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
