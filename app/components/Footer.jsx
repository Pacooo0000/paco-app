export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-10 text-center">
      <h2 className="text-white text-2xl font-bold mb-6">Let's Connect</h2>
      <div className="flex justify-center gap-8">
        <a href="https://wa.me/96103518831" className="text-zinc-400 hover:text-green-500 transition">WhatsApp</a>
        <a href="https://tiktok.com/@elpacozz" className="text-zinc-400 hover:text-pink-500 transition">TikTok</a>
      </div>
      <p className="text-zinc-600 mt-8">© 2026 PaCo Prod</p>
    </footer>
  );
}