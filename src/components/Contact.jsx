import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0a0f1a] py-20 border-t border-slate-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">Let’s Connect</h2>
          <p className="mt-3 text-slate-400">Open for collaboration, research, and spatial technology projects.</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:muslim.mumtaz@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-slate-900 font-medium shadow-[0_0_25px_theme(colors.cyan.500/35%)]"> 
            <Mail className="w-4 h-4" /> Email
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Muslim Mumtaz — Limited Edition Portfolio</p>
      </div>
    </section>
  );
}
