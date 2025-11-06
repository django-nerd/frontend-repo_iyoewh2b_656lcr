import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ExperienceSkills from './components/ExperienceSkills';
import Contact from './components/Contact';
import MumtazLink from './components/MumtazLink';

export default function App() {
  useEffect(() => {
    const handleRoute = () => {
      const { pathname } = window.location;
      // Simple client-side router for /link and /l/:slug
      if (pathname === '/link') {
        document.getElementById('root-landing')?.classList.add('hidden');
        document.getElementById('root-links')?.classList.remove('hidden');
      } else if (pathname.startsWith('/l/')) {
        const slug = pathname.split('/').pop();
        try {
          const raw = localStorage.getItem('mumtaz-links');
          const list = raw ? JSON.parse(raw) : [];
          const found = list.find((l) => l.slug === slug);
          if (found) {
            // increment click count and redirect
            const updated = list.map((l) => (l.slug === slug ? { ...l, clicks: (l.clicks || 0) + 1 } : l));
            localStorage.setItem('mumtaz-links', JSON.stringify(updated));
            window.location.replace(found.url);
          }
        } catch {}
      } else {
        document.getElementById('root-landing')?.classList.remove('hidden');
        document.getElementById('root-links')?.classList.add('hidden');
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  return (
    <div className="bg-[#0a0f1a] text-slate-100">
      <div id="root-landing">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <ExperienceSkills />
        <Contact />
      </div>

      <div id="root-links" className="hidden">
        <Navbar />
        <MumtazLink />
      </div>
    </div>
  );
}
