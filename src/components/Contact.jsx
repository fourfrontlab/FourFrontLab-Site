'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitted');
    setTimeout(() => setFormState('idle'), 3000);
  };

  return (
    <section className="section-padding px-6 lg:px-12 bg-[#FAFAF8] border-b border-[#151515] relative overflow-hidden" id="contact">
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left: Heading & Direct Contact */}
        <div className="flex flex-col justify-center relative">
          {/* Schematic marks */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#151515] opacity-30"></div>
          
          <span className="contact-element font-mono text-[#1B3A5C] text-sm mb-4 block tracking-widest uppercase border-b border-[#1B3A5C] pb-1 w-max">SEC. 09 // CONTACT</span>
          <h2 className="contact-element text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none mb-10 font-inter text-[#151515]">Let&apos;s build.</h2>
          <p className="contact-element text-[#5C5C5C] text-xl lg:text-2xl leading-relaxed mb-12 max-w-md font-medium">
            Ready to scale your digital presence? Fill out the form or drop us an email to get started. We aim to respond within 2 hours.
          </p>

          <div className="contact-element flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a
              href="mailto:fourfrontlab@gmail.com"
              className="group flex items-center gap-4 bg-[#FAFAF8] text-[#151515] px-8 py-5 rounded-none font-bold font-mono tracking-widest uppercase text-sm border border-[#151515] hover:border-[#1B3A5C] hover:text-[#1B3A5C] transition-colors corner-ticks"
            >
              <span>Email Us Directly</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form UI */}
        <div className="contact-element bg-[#FAFAF8] p-8 lg:p-12 border border-[#151515] rounded-none corner-ticks relative">
          {formState === 'submitted' ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
              <div className="w-16 h-16 bg-[#151515] text-[#FAFAF8] flex items-center justify-center mb-6 corner-ticks">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-inter text-[#151515] mb-2">Message Sent</h3>
              <p className="text-[#5C5C5C] font-mono text-sm uppercase tracking-widest">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="name" className="text-sm font-mono text-[#5C5C5C] uppercase tracking-widest bg-[#FAFAF8] px-1 w-max absolute -top-3 left-3">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="bg-transparent border border-[#151515] rounded-none p-4 text-[#151515] placeholder-[#151515]/30 focus:outline-none focus:border-[#1B3A5C] transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2 relative mt-4">
                <label htmlFor="email" className="text-sm font-mono text-[#5C5C5C] uppercase tracking-widest bg-[#FAFAF8] px-1 w-max absolute -top-3 left-3">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="bg-transparent border border-[#151515] rounded-none p-4 text-[#151515] placeholder-[#151515]/30 focus:outline-none focus:border-[#1B3A5C] transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 relative mt-4">
                <label htmlFor="type" className="text-sm font-mono text-[#5C5C5C] uppercase tracking-widest bg-[#FAFAF8] px-1 w-max absolute -top-3 left-3">Project Type</label>
                <select 
                  id="type"
                  className="bg-transparent border border-[#151515] rounded-none p-4 text-[#151515] focus:outline-none focus:border-[#1B3A5C] transition-colors appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-[#151515]/30">Select an option</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="fullstack">Fullstack / End-to-End</option>
                  <option value="design">UI/UX Design</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="font-mono text-[#151515]">↓</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 relative mt-4">
                <label htmlFor="message" className="text-sm font-mono text-[#5C5C5C] uppercase tracking-widest bg-[#FAFAF8] px-1 w-max absolute -top-3 left-3">Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="bg-transparent border border-[#151515] rounded-none p-4 text-[#151515] placeholder-[#151515]/30 focus:outline-none focus:border-[#1B3A5C] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="mt-6 bg-[#151515] border border-[#151515] text-[#FAFAF8] px-8 py-4 rounded-none font-mono font-bold uppercase tracking-widest text-sm hover:bg-[#1B3A5C] hover:border-[#1B3A5C] transition-all flex items-center justify-center gap-3 group corner-ticks"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
