import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-6 h-6 bg-[#C6FF00] rounded-sm group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold font-space tracking-tight text-white">FourFrontLab.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#work" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">Work</Link>
          <Link href="#process" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">Process</Link>
          <Link href="#team" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">Team</Link>
          <Link href="#contact" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">Contact</Link>
        </div>

        <Link href="#contact" className="bg-[#141414] border border-white/10 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-[#C6FF00] hover:text-black hover:border-[#C6FF00] transition-all">
          Start a Project
        </Link>
      </div>
    </nav>
  );
}
