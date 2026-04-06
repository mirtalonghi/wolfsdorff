import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre el Artista', path: '/about' },
    { name: 'Obras', path: '/portfolio' },
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
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-widest hover:text-stone-900 transition-all duration-300 link-animated ${
                  location.pathname === link.path ? 'text-stone-900 font-medium' : 'text-stone-500'
                }`}
              >
                {link.name}
              </Link>
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
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-[68px] left-0 w-full h-[calc(100vh-68px)] bg-stone-50 z-40 flex flex-col justify-start items-center space-y-8 md:hidden pt-12 border-t border-stone-200"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-2xl font-serif text-stone-800 hover:text-stone-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
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
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
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





