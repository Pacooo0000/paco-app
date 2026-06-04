'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-zinc-950/50 backdrop-blur-md"
    >
      <div className="text-2xl font-bold text-white tracking-tighter">PACO<span className="text-amber-500">PROD</span></div>
      <div className="flex gap-6 text-zinc-300">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
}