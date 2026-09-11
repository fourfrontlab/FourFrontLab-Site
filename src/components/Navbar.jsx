import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-6 h-6 bg-[#CCFF00] rounded-sm group-hover:scale-110 transition-transform" />
          <span className="text-xl font-bold tracking-tight text-white">FourFrontLab.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Work</Link>
          <Link href="#process" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Process</Link>
          <Link href="#team" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Team</Link>
          <Link href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contact</Link>
        </div>

        <Link href="#contact" className="bg-white text-black px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-[#CCFF00] transition-colors">
          Start a Project
        </Link>
      </div>
    </nav>
  );
}
