import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function RedirectSlug() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem('mumtaz-links');
      const list = raw ? JSON.parse(raw) : [];
      const found = list.find((l) => l.slug === slug);
      if (found) {
        const updated = list.map((l) => (l.slug === slug ? { ...l, clicks: (l.clicks || 0) + 1 } : l));
        localStorage.setItem('mumtaz-links', JSON.stringify(updated));
        window.location.replace(found.url);
      } else {
        navigate('/', { replace: true });
      }
    } catch {
      navigate('/', { replace: true });
    }
  }, [slug, navigate]);

  return null;
}
