import { useEffect, useMemo, useState } from 'react';
import { Copy, Plus, Trash2, QrCode, BarChart3, ExternalLink } from 'lucide-react';

function generateId() {
  return Math.random().toString(36).slice(2, 8);
}

function toShort(slug) {
  return `${window.location.origin}/l/${slug}`;
}

function QR({ value }) {
  // Lightweight QR via Google Chart API
  const url = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(value)}`;
  return <img src={url} alt="QR" className="w-24 h-24 rounded-md border border-slate-800" />;
}

export default function MumtazLink() {
  const [links, setLinks] = useState(() => {
    try {
      const raw = localStorage.getItem('mumtaz-links');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [url, setUrl] = useState('');
  const [slug, setSlug] = useState('');

  useEffect(() => {
    localStorage.setItem('mumtaz-links', JSON.stringify(links));
  }, [links]);

  const stats = useMemo(() => {
    const total = links.length;
    const clicks = links.reduce((a, b) => a + (b.clicks || 0), 0);
    return { total, clicks };
  }, [links]);

  function addLink() {
    const s = slug.trim() || generateId();
    if (!/^https?:\/\//i.test(url)) return alert('Please enter a valid URL starting with http/https');
    if (links.some(l => l.slug === s)) return alert('Slug already exists');
    setLinks([{ slug: s, url, clicks: 0, createdAt: Date.now() }, ...links]);
    setUrl('');
    setSlug('');
  }

  function remove(sl) {
    setLinks(links.filter(l => l.slug !== sl));
  }

  function simulateClick(sl) {
    setLinks(links.map(l => l.slug === sl ? { ...l, clicks: (l.clicks || 0) + 1 } : l));
  }

  return (
    <div className="min-h-screen bg-[#080e19] text-slate-200 pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">MumtazLink</h1>
          <div className="text-sm text-cyan-300/80">Personal short links, QR codes, simple stats</div>
        </div>

        <div className="mt-6 grid md:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur p-5">
            <h2 className="font-semibold text-slate-100">Create new link</h2>
            <div className="mt-3 grid sm:grid-cols-[1fr_200px_120px] gap-3">
              <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://target-url" className="px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800 outline-none text-slate-200 placeholder:text-slate-500" />
              <input value={slug} onChange={e=>setSlug(e.target.value.toLowerCase().replace(/\s+/g,'-'))} placeholder="custom-slug (optional)" className="px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800 outline-none text-slate-200 placeholder:text-slate-500" />
              <button onClick={addLink} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-900 font-medium hover:shadow-[0_0_30px_theme(colors.cyan.500/40%)]">
                <Plus className="w-4 h-4"/> Create
              </button>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-slate-400">
                  <tr className="text-left">
                    <th className="py-2">Short</th>
                    <th className="py-2">Destination</th>
                    <th className="py-2">QR</th>
                    <th className="py-2">Clicks</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {links.map(l => (
                    <tr key={l.slug} className="border-t border-slate-800">
                      <td className="py-3 align-middle">
                        <div className="flex items-center gap-2">
                          <a className="text-cyan-300 hover:text-cyan-200" href={toShort(l.slug)} target="_blank" rel="noreferrer" onClick={()=>simulateClick(l.slug)}>
                            {toShort(l.slug)}
                          </a>
                          <button onClick={() => navigator.clipboard.writeText(toShort(l.slug))} className="text-slate-400 hover:text-slate-200">
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                      <td className="py-3 align-middle max-w-[300px] truncate">
                        <a href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-100">
                          {l.url} <ExternalLink className="w-3 h-3"/>
                        </a>
                      </td>
                      <td className="py-3 align-middle"><QR value={toShort(l.slug)} /></td>
                      <td className="py-3 align-middle">{l.clicks || 0}</td>
                      <td className="py-3 align-middle text-right">
                        <button onClick={() => remove(l.slug)} className="text-rose-400 hover:text-rose-300">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {links.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-6 text-center text-slate-500">No links yet. Create your first short link above.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur p-5">
            <h3 className="font-semibold text-slate-100 flex items-center gap-2"><BarChart3 className="w-4 h-4 text-cyan-300"/> Stats</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <p className="text-slate-400 text-xs">Total Links</p>
                <p className="text-2xl font-semibold text-slate-100">{stats.total}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <p className="text-slate-400 text-xs">Total Clicks</p>
                <p className="text-2xl font-semibold text-slate-100">{stats.clicks}</p>
              </div>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Short links are stored locally in your browser. For production use with analytics, integrate the backend later.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
