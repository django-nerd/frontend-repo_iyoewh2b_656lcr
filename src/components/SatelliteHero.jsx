import { useEffect, useMemo, useState } from 'react';

function buildEsriImageryUrl(lat, lng, zoom = 13, width = 1600, height = 900) {
  // Convert center + zoom to an approximate bbox in degrees (rough, but fine for static preview)
  const degPerTile = 360 / Math.pow(2, zoom);
  const span = degPerTile * 2; // show ~2 tiles width
  const minX = lng - span;
  const minY = lat - span / 2;
  const maxX = lng + span;
  const maxY = lat + span / 2;
  const bbox = `${minX},${minY},${maxX},${maxY}`;
  const url = `https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?bbox=${bbox}&bboxSR=4326&imageSR=3857&format=png&transparent=false&size=${width},${height}&f=image`;
  return url;
}

export default function SatelliteHero() {
  const [coords, setCoords] = useState({ lat: -6.1754, lng: 106.8272 }); // Jakarta fallback
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setCoords({ lat: latitude, lng: longitude });
        },
        () => {
          // keep fallback
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    }
  }, []);

  const url = useMemo(() => buildEsriImageryUrl(coords.lat, coords.lng, 13, 1600, 900), [coords]);

  useEffect(() => {
    setImgUrl(url);
  }, [url]);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Muslim Mumtaz
          </h1>
          <p className="mt-2 text-slate-300">Urban & Spatial Planning • GIS • Mapping • Frontend</p>
        </div>
        <div
          className="relative rounded-2xl p-[2px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,215,0,0.9), rgba(255,176,0,0.6), rgba(255,215,0,0.9))',
          }}
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div
              className="h-[40vh] sm:h-[60vh] w-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${imgUrl})`,
                filter: 'saturate(1.1) contrast(1.05)',
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
            <div className="absolute left-4 bottom-4 right-4 flex items-center justify-between">
              <div className="backdrop-blur-sm bg-black/35 border border-white/10 text-slate-100 px-4 py-2 rounded-xl">
                <span className="text-sm">Auto-centered to your location • High-res satellite</span>
              </div>
              <div className="backdrop-blur-sm bg-black/35 border border-white/10 text-slate-200 px-3 py-1.5 rounded-xl text-xs">
                {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
