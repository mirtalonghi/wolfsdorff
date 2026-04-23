import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsGalleryOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre el Artista', path: '/about' },
    { name: 'Obras', path: '/portfolio' },
    { name: 'Galería', hasSubmenu: true, submenu: [
      { name: 'Colección', path: '/portfolio' },
      { name: 'Exposiciones', path: '/gallery' },
    ]},
    { name: 'Legado', path: '/legacy' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Texture overlay */}
      <div className="texture-overlay" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/50 transition-all duration-500">
        <div className="container-custom py-5 flex justify-between items-center">
          <Link to="/" className="text-xl font-serif tracking-[0.2em] z-50 relative group">
            <span className="text-stone-900">FAIWEL</span>
            <span className="text-stone-500 ml-2 group-hover:text-stone-900 transition-colors">WOLFSDORF</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              link.hasSubmenu ? (
                <div key={link.name} className="relative group">
                  <button
                    className={`text-xs uppercase tracking-widest hover:text-stone-900 transition-all duration-300 link-animated flex items-center gap-1 ${location.pathname === '/gallery' || location.pathname === '/portfolio' ? 'text-stone-900 font-medium' : 'text-stone-500'
                      }`}
                    onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  >
                    {link.name}
                    <ChevronDown size={12} className={`transition-transform ${isGalleryOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Dropdown Submenu */}
                  <div className={`absolute top-full left-0 mt-2 bg-white border border-stone-200 shadow-lg py-2 min-w-[160px] transition-all duration-300 ${isGalleryOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`block px-4 py-2 text-xs uppercase tracking-widest hover:text-stone-900 hover:bg-stone-50 transition-all ${location.pathname === subItem.path ? 'text-stone-900 font-medium' : 'text-stone-500'
                          }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest hover:text-stone-900 transition-all duration-300 link-animated ${location.pathname === link.path ? 'text-stone-900 font-medium' : 'text-stone-500'
                    }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed top-[68px] left-0 w-full h-[calc(100vh-68px)] bg-stone-50 z-40 flex flex-col justify-start items-center space-y-6 md:hidden pt-8 border-t border-stone-200">
              {navLinks.map((link) => (
                link.hasSubmenu ? (
                  <div key={link.name} className="text-center">
                    <button
                      onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                      className="text-2xl font-serif text-stone-800 hover:text-stone-900 transition-colors flex items-center gap-2"
                    >
                      {link.name}
                      <ChevronDown size={16} className={`transition-transform ${isGalleryOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Mobile Submenu */}
                    <div className={`mt-4 space-y-3 overflow-hidden transition-all duration-300 ${isGalleryOpen ? 'max-h-40' : 'max-h-0'}`}>
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-lg font-serif text-stone-600 hover:text-stone-900 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-serif text-stone-800 hover:text-stone-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <div key={location.pathname}>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 mt-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Faiwel Wolfsdorf</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              El inconsciente traza mapas que la razón desconoce. Un legado de surrealismo, color y humanidad.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.15em] mb-6">Enlaces</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Colección</Link></li>
              <li><Link to="/legacy" className="hover:text-white transition-colors">Adquisición</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Biografía</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.15em] mb-6">Síguenos</h4>
            <div className="flex space-x-4">

            </div>
            <p className="mt-6 text-xs text-stone-600">
              © {new Date().getFullYear()} Legado Faiwel Wolfsdorf. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;





