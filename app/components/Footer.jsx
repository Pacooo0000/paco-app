import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 text-center border-t border-zinc-800">
      {/* Online Status */}
      <div className="flex justify-center items-center gap-2 mb-6">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-zinc-400 text-sm font-medium">WE ARE ONLINE</span>
      </div>

      <h2 className="text-white text-3xl font-bold mb-8">Let's Connect</h2>
      
      <div className="flex justify-center gap-12">
        <a href="https://wa.me/96103518831" className="flex flex-col items-center gap-3 text-zinc-400 hover:text-green-500 transition-all hover:scale-110">
          <FaWhatsapp size={40} />
          <span className="font-semibold text-lg">WhatsApp</span>
        </a>
        <a href="https://tiktok.com/@elpacozz" className="flex flex-col items-center gap-3 text-zinc-400 hover:text-pink-500 transition-all hover:scale-110">
          <FaTiktok size={40} />
          <span className="font-semibold text-lg">TikTok</span>
        </a>
      </div>

      <p className="text-zinc-500 mt-12 text-lg font-medium tracking-wide">© 2026 PaCo Prod</p>
    </footer>
  );
}