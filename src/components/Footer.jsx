import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="border-t border-[#E0E2E5] bg-[#F0F1F3] py-12 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/FourFrontLab - Logo.webp" alt="FourFrontLab Logo" width={20} height={20} />
            <span className="text-lg font-bold tracking-tight text-[#1A1A1A] font-space">FourFrontLab.</span>
          </Link>
          <span className="font-mono text-[#5A5A5A] text-xs uppercase">
            © {new Date().getFullYear()} FourFrontLab. All rights reserved.
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6">
          <Link href="#work" className="text-sm font-medium text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors">Work</Link>
          <Link href="#process" className="text-sm font-medium text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors">Process</Link>
          <Link href="#team" className="text-sm font-medium text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors">Team</Link>
          <Link href="#contact" className="text-sm font-medium text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          <a href="https://x.com/FourFrontLab" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors cursor-pointer" aria-label="X (Twitter)">
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a href="https://github.com/fourfrontlab" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors cursor-pointer" aria-label="GitHub">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/company/fourfrontlab/" target="_blank" rel="noopener noreferrer" className="text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors cursor-pointer" aria-label="LinkedIn">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
