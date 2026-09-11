export default function Founders() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8">The Engineers.</h2>
          <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed mb-6">
            FourFrontLab isn't a massive agency with layers of account managers. We are two senior engineers who love building the web.
          </p>
          <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed">
            When you work with us, you work directly with the developers writing your code. We prioritize performance, clean architecture, and delivering actual business value over unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="w-full aspect-square bg-zinc-900 rounded-sm mb-6 overflow-hidden relative border border-zinc-800">
               {/* Abstract placeholder for founder 1 */}
               <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-2">Muhammad Taha</h3>
            <span className="font-mono text-[#CCFF00] text-xs uppercase block mb-4">Co-Founder / Engineer</span>
            <div className="flex gap-4">
              <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">Github</a>
              <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">LinkedIn</a>
            </div>
          </div>
          
          <div className="group cursor-pointer translate-y-12">
            <div className="w-full aspect-square bg-zinc-900 rounded-sm mb-6 overflow-hidden relative border border-zinc-800">
               {/* Abstract placeholder for founder 2 */}
               <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-2">Abdul Haseeb</h3>
            <span className="font-mono text-[#CCFF00] text-xs uppercase block mb-4">Co-Founder / Engineer</span>
            <div className="flex gap-4">
              <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">Github</a>
              <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">LinkedIn</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
