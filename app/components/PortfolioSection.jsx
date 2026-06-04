'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

// يمكنك تغيير الروابط هنا إلى مسارات ملفاتك المحلية أو روابط Cloudinary كما اتفقنا
const projects = [
  { id: 1, title: 'Summer Festival Promo', category: 'Event Reels', image: '/images/project1.jpg', videoUrl: '/videos/promo1.mp4' },
  { id: 2, title: 'Urban Streetwear Shoot', category: 'Photography', image: '/images/project2.jpg', videoUrl: '/videos/promo2.mp4' },
  { id: 3, title: 'Artist Music Video', category: 'Montage & VFX', image: '/images/project3.jpg', videoUrl: '/videos/promo3.mp4' },
  { id: 4, title: 'Luxury Car Commercial', category: 'Cinematic Reel', image: '/images/project4.jpg', videoUrl: '/videos/promo4.mp4' },
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
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-wide">
            Featured <span className="text-amber-500">Work</span>
          </h2>
          <p className="text-zinc-400 text-lg">Swipe to explore our latest projects.</p>
        </motion.div>

        {/* Horizontal Scroll Carousel */}
        <motion.div 
          ref={carouselRef}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -1000 }} 
            className="flex gap-6"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => window.open(project.videoUrl, '_blank')}
                className="min-w-[300px] md:min-w-[400px] h-[500px] relative rounded-3xl overflow-hidden group cursor-pointer"
              >
                {/* Background Image */}
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Project Info */}
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-amber-500 text-sm font-bold tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  
                  {/* Watch Now Button */}
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