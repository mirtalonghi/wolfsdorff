import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleries from '../data/galleries.json';
import GalleryGrid from '../components/GalleryGrid';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState('todas');
  const [lightbox, setLightbox] = useState(null);

  const allImages = galleries.flatMap(g => g.images);
  const current = selectedId === 'todas'
    ? { images: allImages }
    : galleries.find(g => g.id === selectedId);

  const closeLightbox = () => setLightbox(null);
  const prev = (e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, index: lb.index === 0 ? lb.images.length - 1 : lb.index - 1 })); };
  const next = (e) => { e.stopPropagation(); setLightbox(lb => ({ ...lb, index: lb.index === lb.images.length - 1 ? 0 : lb.index + 1 })); };

  return (
    <motion.div
      className="pt-12 pb-24 min-h-screen"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10 p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <motion.img
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              src={lightbox.images[lightbox.index]}
              alt=""
              className="max-w-[88vw] max-h-[88vh] object-contain"
              onClick={e => e.stopPropagation()}
            />

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 p-3 rounded-full text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 p-3 rounded-full text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6">Obras Artísticas</span>
          <h1 className="text-4xl font-serif mb-10 text-stone-900">Colección</h1>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <button
              onClick={() => setSelectedId('todas')}
              className={`text-xs uppercase tracking-widest pb-1.5 transition-all whitespace-nowrap ${
                selectedId === 'todas'
                  ? 'text-stone-900 border-b-2 border-stone-900'
                  : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              Todas
            </button>
            {galleries.map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedId(g.id)}
                className={`text-xs uppercase tracking-widest pb-1.5 transition-all whitespace-nowrap ${
                  selectedId === g.id
                    ? 'text-stone-900 border-b-2 border-stone-900'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {g.name}
              </button>
            ))}
          </div>
        </div>

        <GalleryGrid
          images={current.images}
          galleryKey={selectedId}
          onImageClick={(images, index) => setLightbox({ images, index })}
        />
      </div>
    </motion.div>
  );
};

export default Portfolio;