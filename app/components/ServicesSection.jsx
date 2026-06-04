'use client';

import { motion } from 'framer-motion';

const services = [
  { id: 1, title: 'Reels & Montage', icon: '🎬', desc: 'Dynamic editing, seamless transitions, and color grading.' },
  { id: 2, title: 'Photography', icon: '📸', desc: 'High-end portraits and hyper-realistic promotional images.' },
  { id: 3, title: 'Creative Concepts', icon: '💡', desc: 'Brainstorming, scriptwriting, and directing visual ideas.' },
  { id: 4, title: 'Post-Production', icon: '✂️', desc: 'Sound design and visual effects for a cinematic experience.' }
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            What We <span className="text-zinc-500">Do</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15 }} 
              whileHover={{ scale: 1.02 }} 
              className="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group shadow-xl"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                {s.title}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}