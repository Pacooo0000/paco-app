'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* 7ot link el video taba3ak hone ba3den */}
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/paco-showreel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 uppercase"
        >
          Your Vision, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-white">
            Cinematic Reality
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl"
        >
          High-end Reels, Dynamic Montage, & Professional Photography.
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <button className="bg-white text-zinc-950 font-bold text-lg px-8 py-4 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            BOOK A SHOOT
          </button>
        </motion.div>
      </div>
    </section>
  );
}