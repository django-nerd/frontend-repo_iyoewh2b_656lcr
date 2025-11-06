export default function About() {
  return (
    <section id="about" className="relative bg-[#0b1220] border-t border-slate-800/50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I am a student and aspiring Urban and Regional Planner specializing in spatial planning, GIS, and data-driven solutions. My passion lies in designing inclusive, resilient, and sustainable cities through smart technologies and interdisciplinary collaboration.
            </p>
            <p className="mt-4 text-slate-400">
              I work with geospatial analysis, interactive mapping, and system design to deliver actionable insights for policy and urban design. I am particularly interested in innovative tools that bridge planning, engineering, and civic technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Spatial Planning',
              'GIS & Remote Sensing',
              'Spatial Modeling',
              'Data Visualization',
              'Dashboarding',
              'Urban Design Systems',
            ].map((item) => (
              <div key={item} className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:border-cyan-500/40 transition-colors">
                <p className="text-slate-200 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
