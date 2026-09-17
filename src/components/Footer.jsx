import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="border-t border-[#151515] bg-[#FAFAF8] py-12 px-6 lg:px-12 relative">
      <div className="absolute top-0 left-0 w-2 h-2 border-r border-b border-[#151515]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-l border-b border-[#151515]"></div>
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/FourFrontLab - Logo.webp" alt="FourFrontLab Logo" width={20} height={20} />
            <span className="text-lg font-bold tracking-tight text-[#151515] font-inter">FourFrontLab.</span>
          </Link>
          <span className="font-mono text-[#5C5C5C] text-xs uppercase">
            © {new Date().getFullYear()} FourFrontLab. All rights reserved.
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6">
          <Link href="/work" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors dimension-line pb-1">Work</Link>
          <Link href="/process" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors dimension-line pb-1">Process</Link>
          <Link href="/team" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors dimension-line pb-1">Team</Link>
          <Link href="/contact" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors dimension-line pb-1">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          <a href="https://x.com/FourFrontLab" target="_blank" rel="noopener noreferrer" className="text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors cursor-pointer" aria-label="X (Twitter)">
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a href="https://github.com/fourfrontlab" target="_blank" rel="noopener noreferrer" className="text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors cursor-pointer" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/company/fourfrontlab/" target="_blank" rel="noopener noreferrer" className="text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors cursor-pointer" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
