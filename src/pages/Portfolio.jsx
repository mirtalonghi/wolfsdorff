import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import galleries from '../data/galleries.json';
import GalleryGrid from '../components/GalleryGrid';
import ImageLightbox from '../components/ImageLightbox';

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
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState('todas');
  const [lightbox, setLightbox] = useState(null);

  const allImages = galleries.flatMap(g => g.images);
  const current = selectedId === 'todas'
    ? { images: allImages }
    : galleries.find(g => g.id === selectedId);

  const closeLightbox = () => setLightbox(null);

  return (
    <motion.div
      className="pt-12 pb-24 min-h-screen"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AnimatePresence>
        {lightbox && (
          <ImageLightbox
            images={lightbox.images}
            initialIndex={lightbox.index}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>

      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 block mb-6">
            {t('portfolio.subtitle')}
          </span>
          <h1 className="text-4xl font-serif mb-10 text-stone-900 dark:text-stone-100">{t('portfolio.title')}</h1>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <button
              onClick={() => setSelectedId('todas')}
              className={`text-xs uppercase tracking-widest pb-1.5 transition-all whitespace-nowrap ${
                selectedId === 'todas'
                  ? 'text-stone-900 border-b-2 border-stone-900 dark:text-stone-100 dark:border-stone-100'
                  : 'text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300'
              }`}
            >
              {t('portfolio.all')}
            </button>
            {galleries.map(g => (
              <button
                key={g.id}
                onClick={() => setSelectedId(g.id)}
                className={`text-xs uppercase tracking-widest pb-1.5 transition-all whitespace-nowrap ${
                  selectedId === g.id
                    ? 'text-stone-900 border-b-2 border-stone-900 dark:text-stone-100 dark:border-stone-100'
                    : 'text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300'
                }`}
              >
                {t(`portfolio.categories.${g.id}`)}
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