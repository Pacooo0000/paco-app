'use client';

const projects = [
  { id: 1, title: 'Summer Festival Promo', category: 'Event Reels', image: '/images/project1.jpg' },
  { id: 2, title: 'Urban Streetwear Shoot', category: 'Photography', image: '/images/project2.jpg' },
  { id: 3, title: 'Artist Music Video', category: 'Montage & VFX', image: '/images/project3.jpg' },
  { id: 4, title: 'Luxury Car Commercial', category: 'Cinematic Reel', image: '/images/project4.jpg' },
];

export default function Projects() {
  return (
    <section className="bg-zinc-950 py-20 px-4">
      <h2 className="text-white text-4xl font-bold text-center mb-12">MY WORKS</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-xl border border-zinc-800">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
              <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              <p className="text-zinc-300 text-lg">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}