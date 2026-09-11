export default function About() {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-zinc-900 bg-[#0A0A0A]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8 text-white">
            Built by engineers, not account managers.
          </h2>
          <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed mb-6">
            FourFrontLab is a specialized development studio focused entirely on technical excellence. We operate without the bloat of traditional agencies—which means faster iterations, cleaner architecture, and direct access to the founders actually building your product.
          </p>
          <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed">
            From highly scalable backends to fluid frontend experiences, we engineer solutions designed to perform under pressure and scale with your business.
          </p>
        </div>

        {/* Right: Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-zinc-800 bg-[#111] p-6 rounded-sm flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#CCFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-5xl font-bold text-white relative z-10">40+</span>
            <span className="font-mono text-zinc-500 text-xs uppercase relative z-10">Projects Delivered</span>
          </div>
          
          <div className="border border-zinc-800 bg-[#111] p-6 rounded-sm flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#CCFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-5xl font-bold text-white relative z-10">10+</span>
            <span className="font-mono text-zinc-500 text-xs uppercase relative z-10">Years Combined Exp</span>
          </div>
          
          <div className="border border-zinc-800 bg-[#111] p-6 rounded-sm flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#CCFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="text-5xl font-bold text-white relative z-10">&lt;2h</span>
            <span className="font-mono text-zinc-500 text-xs uppercase relative z-10">Avg Response Time</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
