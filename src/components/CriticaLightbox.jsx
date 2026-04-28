import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CriticaLightbox = ({ images, index, onClose, onPrev, onNext }) => {
  const [zoom, setZoom] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Resetear posición y zoom al cambiar imagen
  useEffect(() => {
    setZoom(false);
    x.set(0);
    y.set(0);
  }, [index]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (!zoom && e.key === 'ArrowLeft') onPrev();
      if (!zoom && e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext, zoom]);

  const toggleZoom = () => {
    if (zoom) {
      // Animar de vuelta al centro antes de hacer zoom out
      animate(x, 0, { duration: 0.3, ease: 'easeOut' });
      animate(y, 0, { duration: 0.3, ease: 'easeOut' });
      setZoom(false);
    } else {
      setZoom(true);
    }
  };

  const navigate = (fn) => {
    setZoom(false);
    x.set(0);
    y.set(0);
    fn();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-stone-950/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10"
        aria-label="Cerrar"
      >
        <X size={22} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            src={images[index]}
            alt=""
            draggable={false}
            className={`max-h-[88vh] max-w-[88vw] object-contain select-none ${zoom ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
            style={{ x, y }}
            animate={{ scale: zoom ? 3 : 1 }}
            transition={{ duration: 0.35 }}
            drag={zoom}
            dragElastic={0.05}
            dragConstraints={{ left: -1200, right: 1200, top: -800, bottom: 800 }}
            onTap={toggleZoom}
          />

          {/* Botón zoom */}
          <button
            className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); toggleZoom(); }}
            title={zoom ? 'Alejar' : 'Acercar'}
          >
            {zoom ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            )}
          </button>
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(onPrev); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(onNext); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight size={28} />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-[0.2em] z-10">
            {index + 1} / {images.length}
          </p>
        </>
      )}
    </motion.div>
  );
};

export default CriticaLightbox;
