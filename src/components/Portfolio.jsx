'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Hanaz Official",
    desc: "E-commerce Admin Dashboard built with React & Supabase.",
    color: "from-blue-500/10 to-transparent",
    glow: "rgba(96, 165, 250, 0.2)"
  },
  {
    title: "RoamEase",
    desc: "A frictionless Travel Platform for the modern nomad.",
    color: "from-purple-500/10 to-transparent",
    glow: "rgba(167, 139, 250, 0.2)"
  },
  {
    title: "EduTrack",
    desc: "Real-time Student Performance System.",
    color: "from-indigo-500/10 to-transparent",
    glow: "rgba(99, 102, 241, 0.2)"
  }
];

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden w-full">
        
        <div className="absolute top-24 text-center z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white neon-text-blue">Deployment Logs</h2>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[60vh] flex items-center justify-center mt-20">
          {projects.map((project, index) => {
            // Stagger card entries based on scroll progress
            const start = index * 0.25;
            const end = start + 0.3;
            
            // Floating upward and decelerating
            const y = useTransform(scrollYProgress, [start, end], [800, 0]);
            const opacity = useTransform(scrollYProgress, [start, end - 0.1, end], [0, 1, 1]);
            const scale = useTransform(scrollYProgress, [start, end], [0.85, 1]);
            
            // Push previous cards back as new ones arrive
            const pushBackStart = end;
            const pushBackEnd = end + 0.25;
            const finalScale = useTransform(scrollYProgress, [pushBackStart, pushBackEnd], [1, 0.9 - (projects.length - index) * 0.05]);
            const finalY = useTransform(scrollYProgress, [pushBackStart, pushBackEnd], [0, -30 * (projects.length - index)]);
            
            return (
              <motion.div
                key={project.title}
                style={{ 
                  y: scrollYProgress.get() > pushBackStart ? finalY : y,
                  opacity,
                  scale: scrollYProgress.get() > pushBackStart ? finalScale : scale,
                  zIndex: projects.length - index 
                }}
                className={`absolute w-full p-12 glass-card bg-gradient-to-br ${project.color} border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-10`}
                initial={{ boxShadow: `0 0 0px ${project.glow}` }}
                whileHover={{ boxShadow: `0 30px 60px ${project.glow}` }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">{project.desc}</p>
                </div>
                <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 group backdrop-blur-md">
                  <span className="font-semibold tracking-wide">Initialize</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
