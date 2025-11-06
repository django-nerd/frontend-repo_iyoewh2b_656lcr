import { useEffect, useState } from 'react';
import { Sparkles, Link as LinkIcon } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-slate-800/60' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-black tracking-widest text-slate-100 text-lg">
          <div className="relative">
            <span className="[letter-spacing:0.2em] text-slate-200">MUMTAZ</span>
            <span className="absolute -inset-0.5 blur-sm bg-cyan-400/20 rounded-md" aria-hidden />
          </div>
          <Sparkles className="w-4 h-4 text-cyan-300" />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
          <a href="#portfolio" className="hover:text-cyan-300 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          <a href="/link" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-medium">
            <LinkIcon className="w-4 h-4" />
            MumtazLink
          </a>
        </nav>
        <a href="#contact" className="md:hidden inline-flex items-center px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-200 text-sm">
          Contact
        </a>
      </div>
    </header>
  );
}
