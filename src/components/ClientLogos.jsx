'use client';
export default function ClientLogos() {
  const logos = [
    "ACME Corp", "GlobalTech", "Nexus Industries", "Vanguard", "Starlight Media", "Quantum", "Pioneer", "Horizon"
  ];
  
  // Duplicate for smooth seamless scrolling
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-b border-zinc-200 bg-[#FAFAF9] overflow-hidden flex flex-col items-center">
      <div className="mb-8 opacity-50">
        <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">Trusted by innovative teams worldwide</span>
      </div>
      <div className="relative flex overflow-x-hidden w-full max-w-full">
        {/* Left/Right fading gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAF9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAF9] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-[marquee_40s_linear_infinite] flex whitespace-nowrap items-center">
          {allLogos.map((logo, i) => (
            <span key={i} className="mx-8 lg:mx-16 text-2xl lg:text-3xl font-bold tracking-tight text-zinc-200 select-none">
              {logo}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}
