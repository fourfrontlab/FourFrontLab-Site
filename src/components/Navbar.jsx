import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#151515]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/FourFrontLab - Logo.webp" alt="FourFrontLab Logo" width={24} height={24} className="group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold font-inter tracking-tight text-[#151515]">FourFrontLab.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors">Home</Link>
          <Link href="/work" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors">Work</Link>
          <Link href="/process" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors">Process</Link>
          <Link href="/pricing" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors">Pricing</Link>
          <Link href="/team" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors">Team</Link>
          <Link href="/contact" className="text-sm font-mono tracking-widest uppercase text-[#5C5C5C] hover:text-[#1B3A5C] transition-colors">Contact</Link>
        </div>

        <Link href="/contact" className="bg-[#FAFAF8] border border-[#151515] text-[#151515] px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#151515] hover:text-[#FAFAF8] transition-all corner-ticks whitespace-nowrap">
          Start a Project
        </Link>
      </div>
    </nav>
  );
}
