export default function Founders() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-900">
      <div className="mb-24 max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8">The Four Fronts.</h2>
        <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed mb-6">
          FourFrontLab isn't a massive agency with layers of account managers. We are four dedicated partners, each commanding a specific technical front.
        </p>
        <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed">
          When you work with us, you work directly with the experts building your product. We prioritize performance, clean architecture, and delivering actual business value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Founder 1 */}
        <div className="group cursor-pointer">
          <div className="w-full aspect-[4/5] bg-zinc-900 rounded-sm mb-6 overflow-hidden relative border border-zinc-800">
             <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700" />
          </div>
          <h3 className="text-2xl font-medium text-white mb-2">Muhammad Taha Nadeem</h3>
          <span className="font-mono text-[#CCFF00] text-xs uppercase block mb-4">Frontend / Engineering</span>
          <div className="flex gap-4">
            <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">Github</a>
            <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">LinkedIn</a>
          </div>
        </div>
        
        {/* Founder 2 */}
        <div className="group cursor-pointer lg:translate-y-8">
          <div className="w-full aspect-[4/5] bg-zinc-900 rounded-sm mb-6 overflow-hidden relative border border-zinc-800">
             <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700" />
          </div>
          <h3 className="text-2xl font-medium text-white mb-2">Abdul Haseeb</h3>
          <span className="font-mono text-[#CCFF00] text-xs uppercase block mb-4">Backend / Architecture</span>
          <div className="flex gap-4">
            <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">Github</a>
            <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">LinkedIn</a>
          </div>
        </div>

        {/* Founder 3 */}
        <div className="group cursor-pointer lg:translate-y-16">
          <div className="w-full aspect-[4/5] bg-zinc-900 rounded-sm mb-6 overflow-hidden relative border border-zinc-800">
             <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700" />
          </div>
          <h3 className="text-2xl font-medium text-white mb-2">Syed Haseeb Badshah</h3>
          <span className="font-mono text-[#CCFF00] text-xs uppercase block mb-4">UX/UI / Design System</span>
          <div className="flex gap-4">
            <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">Dribbble</a>
            <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">LinkedIn</a>
          </div>
        </div>

        {/* Founder 4 */}
        <div className="group cursor-pointer lg:translate-y-24">
          <div className="w-full aspect-[4/5] bg-zinc-900 rounded-sm mb-6 overflow-hidden relative border border-zinc-800">
             <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-700" />
          </div>
          <h3 className="text-2xl font-medium text-white mb-2">Mustafa Arfat</h3>
          <span className="font-mono text-[#CCFF00] text-xs uppercase block mb-4">Strategy / Growth</span>
          <div className="flex gap-4">
            <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">Twitter</a>
            <a href="#" className="font-mono text-zinc-500 hover:text-white transition-colors text-sm uppercase">LinkedIn</a>
          </div>
        </div>

      </div>
    </section>
  );
}
