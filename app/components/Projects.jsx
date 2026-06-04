'use client';
import { motion } from 'framer-motion';


const projects = [
  { id: 1, title: 'Summer Festival Promo', category: 'Event Reels', image: '/images/project1.jpg', videoUrl: '/videos/promo1.mp4' },
  { id: 2, title: 'Urban Streetwear Shoot', category: 'Photography', image: '/images/project2.jpg', videoUrl: '/videos/promo2.mp4' },
  { id: 3, title: 'Artist Music Video', category: 'Montage & VFX', image: '/images/project3.jpg', videoUrl: '/videos/promo3.mp4' },
];

export default function Projects() {
  
  const handleProjectClick = (url) => {
    window.open(url, '_blank'); 
  };

  return (
    <section className="py-20 bg-zinc-950 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-5xl font-extrabold mb-12">FEATURED WORK</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleProjectClick(project.videoUrl)} 
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer"
            >
              <div className="h-60 w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6">
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <button className="mt-4 text-white text-sm bg-zinc-800 px-4 py-2 rounded-full hover:bg-orange-600 transition">
                  Watch Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}