'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// Hayda array fiyo projects hemmyin. Ba3den fiyak tghayyer el suwar w el titrat.
const projects = [
  { id: 1, title: 'Summer Festival Promo', category: 'Event Reels', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Urban Streetwear Shoot', category: 'Photography', image: 'https://images.unsplash.com/photo-1618245318763-a15156d6b23c?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Artist Music Video', category: 'Montage & VFX', image: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Luxury Car Commercial', category: 'Cinematic Reel', image: 'https://images.unsplash.com/photo-1503376760367-11544a737877?q=80&w=800&auto=format&fit=crop' },
];

export default function PortfolioSection() {
  const carouselRef = useRef(null);

  return (
    <section className="py-24 bg-zinc-950 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          className="mb-12 flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-wide">
              Featured <span className="text-amber-500">Work</span>
            </h2>
            <p className="text-zinc-400 text-lg">Swipe to explore our latest projects.</p>
          </div>
        </motion.div>

        {/* Horizontal Scroll Carousel */}
        <motion.div 
          ref={carouselRef}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" // Btesma7 lal client yes7ab bl 3ared
            dragConstraints={{ right: 0, left: -1000 }} // 7doud el sa7eb la yamin w shmel (fiyne nzabbet el left 7asab 3adad el suwar)
            className="flex gap-6"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-[400px] h-[500px] relative rounded-3xl overflow-hidden group"
              >
                {/* Background Image */}
                import Image from 'next/image'; // 1. Zid heda el import

// ... b2alb el map taba3 projects:
<Image 
  src={project.image} 
  alt={project.title}
  fill
  className="object-cover transition-transform duration-700 group-hover:scale-110"
  sizes="(max-width: 768px) 100vw, 400px"
/>
                
                {/* Dark Overlay 3al soura */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Text li byotla3 3al sora */}
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-amber-500 text-sm font-bold tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  
                  {/* Play Button Icon (mbayyen bas bel hover) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 flex items-center gap-2 text-white">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center pl-1">
                      ▶
                    </div>
                    <span className="text-sm font-medium">Watch Now</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}