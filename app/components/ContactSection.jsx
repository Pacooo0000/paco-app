'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 w-full flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
            Let's <span className="text-amber-500">Create</span>
          </h2>
          <p className="text-zinc-400 text-lg">Ready to bring your vision to life? Drop the details below.</p>
        </motion.div>

        <motion.form 
          // ⚠️ BEDEL YOUR_FORM_ID BI EL ID TABA3AK MEN FORMSPREE
          action="https://formspree.io/f/xojbgpgg" 
          method="POST"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-zinc-400 text-sm mb-2 ml-1">Full Name</label>
              <input name="name" type="text" required placeholder="John Doe" className="bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors" />
            </div>
            <div className="flex flex-col">
              <label className="text-zinc-400 text-sm mb-2 ml-1">Email Address</label>
              <input name="email" type="email" required placeholder="john@example.com" className="bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors" />
            </div>
          </div>

          {/* Project Type */}
          <div className="flex flex-col">
            <label className="text-zinc-400 text-sm mb-2 ml-1">Project Type</label>
            <select name="project_type" className="bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer">
              <option value="artist">Artist Promo / Tour Teaser</option>
              <option value="sports">Sports / Basketball Promo</option>
              <option value="tiktok">TikTok / Reels Montage</option>
              <option value="event">Event Coverage</option>
              <option value="photo">Photography Session</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-zinc-400 text-sm mb-2 ml-1">Project Details</label>
            <textarea name="message" rows="4" required placeholder="Tell us about the vibe, location, and what you're looking for..." className="bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"></textarea>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full bg-amber-500 text-zinc-950 font-bold text-lg px-8 py-4 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(245,158,11,0.3)] mt-4">
            SEND REQUEST
          </button>
        </motion.form>

      </div>
    </section>
  );
}