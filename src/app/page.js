import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import { Send } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <Hero />
      <Services />
      <Portfolio />
      
      {/* Floating Minimalist Footer Section */}
      <footer className="relative z-10 glass border-x-0 border-b-0 border-t-white/10 pt-24 pb-12 mt-32 overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-black text-white mb-3 neon-text-blue tracking-tight">FourFrontLab</h2>
            <p className="text-slate-400 mb-8 text-lg">Pioneering the next dimension of digital experiences.</p>
            <div className="text-sm text-slate-500 flex items-center gap-2">
              <span className="tracking-widest uppercase text-xs">Founders:</span>
              <span className="text-slate-300 font-semibold text-base neon-text-purple">Muhammad Taha & Abdul Haseeb</span>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-start md:items-end w-full">
            <h3 className="text-xl font-bold text-white mb-6">Initialize Project Inquiry</h3>
            <div className="relative flex items-center w-full max-w-lg group">
              <input 
                type="email" 
                placeholder="Enter email sequence..." 
                className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-5 pl-8 pr-20 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all shadow-[inset_0_2px_15px_rgba(0,0,0,0.3)] text-lg"
              />
              <button className="absolute right-2 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full transition-all shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40">
                <Send className="w-5 h-5 translate-x-[-1px] translate-y-[1px]" />
              </button>
            </div>
          </div>

        </div>
        
        <div className="mt-24 text-center text-slate-600 text-sm flex flex-col items-center gap-2">
          <div className="w-12 h-1 bg-white/10 rounded-full mb-4" />
          <p className="tracking-widest uppercase text-xs">© {new Date().getFullYear()} FourFrontLab. All systems operational.</p>
        </div>
      </footer>
    </main>
  );
}
