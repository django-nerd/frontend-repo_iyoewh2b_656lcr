import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Kota Pintar Dashboard',
    desc: 'Interactive urban KPI dashboard with map overlays and live data feeds.',
    tags: ['React', 'Mapbox', 'WebSocket'],
    links: { demo: '#', code: '#' },
  },
  {
    title: 'GIS Zoning Explorer',
    desc: 'Parcel-level zoning explorer with satellite basemap, filters, and reports.',
    tags: ['Leaflet', 'PostGIS', 'Express'],
    links: { demo: '#', code: '#' },
  },
  {
    title: 'Transit Accessibility',
    desc: 'Isochrone analysis to evaluate 15-minute access to jobs and services.',
    tags: ['Python', 'OSM', 'QGIS'],
    links: { demo: '#', code: '#' },
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-[#0a0f1a] text-slate-100 min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-10 pb-24">
        <div className="mb-8 flex items-center gap-2">
          <MapPin className="text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl font-semibold">Selected Work</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="aspect-video w-full bg-gradient-to-tr from-cyan-500/20 via-blue-400/10 to-purple-500/20" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.links.demo} className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href={p.links.code} className="inline-flex items-center gap-1 text-slate-300 hover:text-white">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
