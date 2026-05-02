import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const navLinks = [
    { nameKey: 'nav.home', path: '/' },
    { nameKey: 'nav.about', path: '/about' },
    { nameKey: 'nav.portfolio', path: '/portfolio' },
    { nameKey: 'nav.gallery', path: '/gallery' },
    { nameKey: 'nav.criticas', path: '/criticas' },
    { nameKey: 'nav.legacy', path: '/legacy' },
    { nameKey: 'nav.contact', path: '/contact' },
  ];

  const langs = [
    { code: 'es', label: t('lang.es') },
    { code: 'en', label: t('lang.en') },
    { code: 'pt', label: t('lang.pt') },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <div className="texture-overlay" />

      <nav className="fixed w-full z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/50 transition-all duration-500">
        <div className="container-custom py-5 flex justify-between items-center gap-4">
          <Link to="/" className="text-xl font-serif tracking-[0.2em] z-50 relative group shrink-0">
            <span className="text-stone-900">FAIWEL</span>
            <span className="text-stone-500 ml-2 group-hover:text-stone-900 transition-colors">WOLFSDORF</span>
          </Link>

          <div className="hidden md:flex flex-wrap justify-end items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-widest hover:text-stone-900 transition-all duration-300 link-animated ${
                  location.pathname === link.path ? 'text-stone-900 font-medium' : 'text-stone-500'
                }`}
              >
                {t(link.nameKey)}
              </Link>
            ))}
            <div
              className="flex items-center gap-1 border-l border-stone-200 pl-6 ml-2"
              role="group"
              aria-label={t('lang.label')}
            >
              {langs.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => i18n.changeLanguage(code)}
                  className={`text-xs uppercase tracking-widest px-2 py-1 rounded transition-colors ${
                    i18n.language === code
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="flex items-center gap-0.5" role="group" aria-label={t('lang.label')}>
              {langs.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => i18n.changeLanguage(code)}
                  className={`text-[10px] uppercase tracking-wider px-1.5 py-1 rounded ${
                    i18n.language === code ? 'bg-stone-900 text-white' : 'text-stone-500'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              className="z-50 relative p-2"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="fixed top-[68px] left-0 w-full h-[calc(100vh-68px)] bg-stone-50 z-40 flex flex-col justify-start items-center space-y-6 md:hidden pt-8 border-t border-stone-200">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-serif text-stone-800 hover:text-stone-900 transition-colors"
                  >
                    {t(link.nameKey)}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow pt-20">
        <div key={location.pathname}>{children}</div>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Faiwel Wolfsdorf</h3>
            <p className="text-sm leading-relaxed max-w-xs">{t('footer.tagline')}</p>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.15em] mb-6">{t('footer.links')}</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`hover:text-white transition-colors ${
                      location.pathname === link.path ? 'text-white' : ''
                    }`}
                  >
                    {t(link.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.15em] mb-6">{t('footer.contact')}</h4>
            <a
              href="mailto:faiwelwolfsdorf@gmail.com"
              className="text-sm hover:text-white transition-colors"
            >
              faiwelwolfsdorf@gmail.com
            </a>
            <p className="mt-6 text-xs text-stone-600">
              {t('footer.rights', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
