'use client';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto bg-[#0A0A0A] border-b border-zinc-900" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Heading & Direct Contact */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-8 text-white">Let's build.</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-md">
            Ready to scale your digital presence? Fill out the form or drop us an email to get started. We aim to respond within 2 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a
              href="mailto:fourfrontlab@gmail.com"
              className="group flex items-center gap-4 bg-zinc-900 text-white px-8 py-5 rounded-sm font-medium text-lg border border-zinc-800 hover:border-[#CCFF00] hover:text-[#CCFF00] transition-colors"
            >
              <span>Email Us Directly</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form UI */}
        <div className="bg-[#111] p-8 lg:p-12 border border-zinc-800 rounded-sm">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-mono text-zinc-400 uppercase">Name</label>
              <input 
                type="text" 
                id="name"
                className="bg-black border border-zinc-800 rounded-sm p-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-mono text-zinc-400 uppercase">Email</label>
              <input 
                type="email" 
                id="email"
                className="bg-black border border-zinc-800 rounded-sm p-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors"
                placeholder="john@company.com"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-zinc-400 uppercase">Message</label>
              <textarea 
                id="message"
                rows="4"
                className="bg-black border border-zinc-800 rounded-sm p-4 text-white focus:outline-none focus:border-[#CCFF00] transition-colors resize-none"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="mt-4 bg-[#CCFF00] text-black px-8 py-4 rounded-sm font-medium text-lg hover:bg-white transition-colors flex items-center justify-center gap-3 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
