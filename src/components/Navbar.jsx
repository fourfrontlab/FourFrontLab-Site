import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#F0F1F3]/95 backdrop-blur-md border-b border-[#E0E2E5]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/FourFrontLab - Logo.webp" alt="FourFrontLab Logo" width={24} height={24} className="group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold font-space tracking-tight text-[#1A1A1A]">FourFrontLab.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#work" className="text-sm font-medium text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors">Work</Link>
          <Link href="#process" className="text-sm font-medium text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors">Process</Link>
          <Link href="#team" className="text-sm font-medium text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors">Team</Link>
          <Link href="#contact" className="text-sm font-medium text-[#5A5A5A] hover:text-[#0E5C8C] transition-colors">Contact</Link>
        </div>

        <Link href="#contact" className="bg-[#0E5C8C] border border-[#0E5C8C] text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-[#2BA9D1] hover:border-[#2BA9D1] transition-all">
          Start a Project
        </Link>
      </div>
    </nav>
  );
}
