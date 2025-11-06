import Navbar from './Navbar';
import SatelliteHero from './SatelliteHero';
import About from './About';
import ExperienceSkills from './ExperienceSkills';
import Contact from './Contact';

export default function HomePage() {
  return (
    <div className="bg-[#0a0f1a] text-slate-100 min-h-screen">
      <Navbar />
      <SatelliteHero />
      <About />
      <ExperienceSkills />
      <Contact />
    </div>
  );
}
