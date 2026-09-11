'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Continuous Slow-Motion Floating Abstract Shapes */}
      <motion.div 
        animate={{ y: [0, -40, 0], rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full blur-[120px]"
      />

      <div className="z-10 text-center max-w-5xl px-6 flex flex-col items-center">
        {/* Zero-gravity header floating physics */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-200 neon-text-blue mb-6 leading-tight"
          >
            Engineering the Future of Digital.
          </motion.h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl"
        >
          FourFrontLab pioneers scalable backends and immersive interfaces to elevate your digital presence into the zero-gravity era.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, textShadow: "0px 0px 12px rgb(255,255,255)" }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="glass px-10 py-5 rounded-full text-lg font-bold text-white neon-glow hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
        >
          Initiate Project
        </motion.button>
      </div>
    </section>
  );
}
