import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import LinksPage from './components/LinksPage';
import RedirectSlug from './components/RedirectSlug';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/link" element={<LinksPage />} />
        <Route path="/l/:slug" element={<RedirectSlug />} />
      </Routes>
    </BrowserRouter>
  );
}
