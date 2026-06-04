'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-zinc-950">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">PACO<span className="text-amber-500">PROD</span></h1>
        <p className="text-zinc-400 mt-4 text-xl">Cinematic Visuals & Content Creation</p>
      </motion.div>
<motion.div 
  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(245,158,11,0.2)" }}
  className="relative rounded-2xl overflow-hidden cursor-pointer"
>
  {/* Project Image */}
</motion.div>


    </section>
  );
}