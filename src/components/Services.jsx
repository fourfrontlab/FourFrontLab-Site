'use client';
import { motion } from 'framer-motion';
import { Code2, Server, Layout } from 'lucide-react';

const stack = ["Python", "C++", "Java", "Next.js", "React", "Node.js", "SQLite", "Supabase", "ChromaDB"];

export default function Services() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white neon-text-purple">Core Offerings</h2>
          <p className="text-slate-400 text-lg">Architecting robust solutions across the entire stack.</p>
        </motion.div>

        {/* Asymmetric Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {/* Box 1: Wide */}
          <motion.div 
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="glass-card p-10 md:col-span-2 flex flex-col justify-between min-h-[320px] group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Code2 className="w-12 h-12 text-blue-400 mb-6 relative z-10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-3">Custom Web Development</h3>
              <p className="text-slate-400 text-lg leading-relaxed">Next-generation frontend experiences built with React and Framer Motion, optimized for extreme performance and deep-space aesthetics.</p>
            </div>
          </motion.div>

          {/* Box 2: Tall/Square */}
          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass-card p-10 md:col-span-1 flex flex-col justify-between min-h-[320px] group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Server className="w-12 h-12 text-purple-400 mb-6 relative z-10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-3">Scalable Backends</h3>
              <p className="text-slate-400 text-lg leading-relaxed">High-throughput microservices engineered for infinite global scale.</p>
            </div>
          </motion.div>

          {/* Box 3: Full Width */}
          <motion.div 
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="glass-card p-10 md:col-span-3 flex flex-col items-center text-center min-h-[280px] justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-50" />
            <Layout className="w-12 h-12 text-blue-300 mb-4 relative z-10" />
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">UI/UX Prototyping</h3>
            <p className="text-slate-300 max-w-3xl text-lg relative z-10">From wireframes to bioluminescent, highly interactive prototypes that simulate the final product feel with zero-gravity continuous motion.</p>
          </motion.div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="overflow-hidden whitespace-nowrap relative w-full flex items-center py-12 glass border-x-0 border-y-white/10 shadow-[0_0_30px_rgba(96,165,250,0.1)]">
        <div className="absolute left-0 w-40 h-full bg-gradient-to-r from-[#030308] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-40 h-full bg-gradient-to-l from-[#030308] to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-20 items-center w-max"
        >
          {/* Doubled for seamless loop */}
          {[...stack, ...stack].map((tech, idx) => (
            <span key={idx} className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400 hover:from-blue-400 hover:to-purple-400 transition-all duration-300 cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
