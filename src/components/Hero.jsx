import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-16 overflow-hidden bg-[#0a0f1a]">{/* flames blue night */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0a0f1a]/60 to-[#0a0f1a] pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[60vw] h-[60vh] rounded-full blur-3xl bg-cyan-500/10 pointer-events-none" />

      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center min-h-[90vh]">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100"
          >
            Muslim Mumtaz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-slate-300 max-w-xl"
          >
            Designing Smarter, Sustainable, and Inclusive Cities.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="mt-6 text-slate-400 max-w-2xl"
          >
            Urban and Regional Planner focused on spatial planning, data-driven analysis, and GIS-powered systems that enable resilient development.
          </motion.p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#portfolio" className="inline-flex items-center px-5 py-2.5 rounded-full bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_30px_theme(colors.cyan.500/40%)] hover:shadow-[0_0_50px_theme(colors.cyan.500/60%)] transition-all">
              View Portfolio
            </a>
            <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-full border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10 transition-colors">
              Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
