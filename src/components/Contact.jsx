'use client';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-4xl">
        <h2 className="text-6xl lg:text-8xl font-medium tracking-tighter mb-12">Let's build.</h2>

        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <a
            href="mailto:fourfrontlab@gmail.com"
            className="group flex items-center gap-4 bg-[#CCFF00] text-black px-8 py-5 rounded-sm font-medium text-lg hover:bg-white transition-colors"
          >
            <span>Initialize Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <span className="font-mono text-zinc-500 text-sm uppercase">Or drop us a line at fourfrontlab@gmail.com</span>
        </div>
      </div>

      <div className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-mono text-zinc-500 text-xs uppercase">© {new Date().getFullYear()} FourFrontLab.</span>
        <div className="flex gap-6">
          <a href="https://x.com/FourFrontLab" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
             <FaXTwitter className="w-5 h-5" />
          </a>
          <a href="https://github.com/fourfrontlab" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
             <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/company/fourfrontlab/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
             <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
