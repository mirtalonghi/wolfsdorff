import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
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
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950">
      <div className="texture-overlay" />

      <nav className="fixed w-full z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/50 transition-all duration-500 dark:bg-stone-950/95 dark:border-stone-800/60">
        <div className="container-custom py-5 flex justify-between items-center gap-4">
          <Link to="/" className="text-xl font-serif tracking-[0.2em] z-50 relative group shrink-0">
            <span className="text-stone-900 dark:text-stone-100">FAIWEL</span>
            <span className="text-stone-500 ml-2 group-hover:text-stone-900 transition-colors dark:text-stone-400 dark:group-hover:text-stone-100">
              WOLFSDORF
            </span>
          </Link>

          <div className="hidden md:flex flex-wrap justify-end items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-widest hover:text-stone-900 transition-all duration-300 link-animated dark:hover:text-stone-100 ${
                  location.pathname === link.path
                    ? 'text-stone-900 font-medium dark:text-stone-100'
                    : 'text-stone-500 dark:text-stone-400'
                }`}
              >
                {t(link.nameKey)}
              </Link>
            ))}
            <div className="flex items-center gap-3 border-l border-stone-200 pl-6 ml-2 dark:border-stone-700">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-md text-stone-600 hover:bg-stone-200/80 hover:text-stone-900 transition-colors dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
                aria-label={theme === 'dark' ? t('theme.useLight') : t('theme.useDark')}
                aria-pressed={theme === 'dark'}
              >
                {theme === 'dark' ? <Sun size={20} strokeWidth={1.75} /> : <Moon size={20} strokeWidth={1.75} />}
              </button>
              <div className="flex items-center gap-1" role="group" aria-label={t('lang.label')}>
                {langs.map(({ code, label }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => i18n.changeLanguage(code)}
                    className={`text-xs uppercase tracking-widest px-2 py-1 rounded transition-colors ${
                      i18n.language === code
                        ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950'
                        : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md text-stone-600 hover:bg-stone-200/80 dark:text-stone-400 dark:hover:bg-stone-800"
              aria-label={theme === 'dark' ? t('theme.useLight') : t('theme.useDark')}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? <Sun size={22} strokeWidth={1.75} /> : <Moon size={22} strokeWidth={1.75} />}
            </button>
            <div className="flex items-center gap-0.5" role="group" aria-label={t('lang.label')}>
              {langs.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => i18n.changeLanguage(code)}
                  className={`text-[10px] uppercase tracking-wider px-1.5 py-1 rounded ${
                    i18n.language === code
                      ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950'
                      : 'text-stone-500 dark:text-stone-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              className="z-50 relative p-2 text-stone-800 dark:text-stone-200"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="fixed top-[68px] left-0 w-full h-[calc(100vh-68px)] bg-stone-50 z-40 flex flex-col justify-start items-center space-y-6 md:hidden pt-8 border-t border-stone-200 dark:bg-stone-950 dark:border-stone-800">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-serif text-stone-800 hover:text-stone-900 transition-colors dark:text-stone-200 dark:hover:text-white"
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

      <footer className="bg-stone-900 text-stone-400 py-16 dark:bg-black dark:border-t dark:border-stone-800">
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
            <p className="mt-6 text-xs text-stone-600 dark:text-stone-500">
              {t('footer.rights', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
