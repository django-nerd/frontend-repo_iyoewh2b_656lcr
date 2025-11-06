import { BadgeCheck } from 'lucide-react';

const experiences = [
  'Detailed Spatial Plan (RDTR) assistance and analysis',
  'Community Service (KKN) – participatory mapping & local development',
  'Academic research on spatial statistics and urban morphology'
];

const skills = [
  'ArcGIS', 'QGIS', 'AutoCAD', 'React', 'Tailwind', 'Firebase', 'PostGIS', 'Leaflet'
];

export default function ExperienceSkills() {
  return (
    <section className="relative bg-[#0b1220] py-20 border-t border-slate-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Experience & Skills</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            {experiences.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                <BadgeCheck className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 items-start">
            {skills.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-slate-200 hover:border-cyan-500/40">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
