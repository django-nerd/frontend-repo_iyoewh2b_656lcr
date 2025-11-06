import { Map, Layers, BarChart3, Boxes } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Urban Growth Map',
    tag: 'Interactive Map',
    icon: Map,
    desc: 'Web-based map for visualizing urban expansion and suitability analysis using GIS layers.'
  },
  {
    title: 'Spatial Accessibility Model',
    tag: 'Spatial Model',
    icon: Layers,
    desc: 'Network-based analysis to evaluate accessibility of public facilities and transit nodes.'
  },
  {
    title: 'Regional Development Dashboard',
    tag: 'Analytics',
    icon: BarChart3,
    desc: 'KPI dashboard integrating demographic, environmental, and infrastructure datasets.'
  },
  {
    title: 'Zoning and Land Use Concept',
    tag: 'Design',
    icon: Boxes,
    desc: 'Conceptual zoning and land-use visualization with scenario-based planning.'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-[#0a0f1a] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Portfolio</h2>
          <span className="text-sm text-slate-400">Selected works</span>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, tag, icon: Icon, desc }) => (
            <article key={title} className="group relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-900/20 backdrop-blur-md p-5 overflow-hidden hover:border-cyan-500/40 transition-colors">
              <div className="absolute inset-px rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 0 1px rgba(94,234,212,0.05), inset 0 1px 0 rgba(255,255,255,0.03)' }} />
              <div className="flex items-center justify-between">
                <span className="text-xs text-cyan-300/80 tracking-wide uppercase">{tag}</span>
                <Icon className="w-5 h-5 text-cyan-300" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-100">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
              <button className="mt-4 inline-flex text-cyan-200 hover:text-cyan-100 text-sm">View details →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
