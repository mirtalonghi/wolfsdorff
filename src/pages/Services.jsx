import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ImageLightbox from '../components/ImageLightbox';

import legado01 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.52.54.jpeg';
import legado02 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.52.55.jpeg';
import legado03 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.52.56.jpeg';
import legado04 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.52.57 (1).jpeg';
import legado05 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.52.57.jpeg';
import legado06 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.52.58 (1).jpeg';
import legado07 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.52.58 (2).jpeg';
import legado08 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.52.58.jpeg';
import legado09 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.52.59.jpeg';
import legado10 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.00 (1).jpeg';
import legado11 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.00.jpeg';
import legado12 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.02 (1).jpeg';
import legado13 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.02 (2).jpeg';
import legado14 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.02.jpeg';
import legado15 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.03 (1).jpeg';
import legado16 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.03.jpeg';
import legado17 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.04 (1).jpeg';
import legado18 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.04 (2).jpeg';
import legado19 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.04 (3).jpeg';
import legado20 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.04.jpeg';
import legado21 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.06 (1).jpeg';
import legado22 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.06 (2).jpeg';
import legado23 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.06.jpeg';
import legado24 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.07 (1).jpeg';
import legado25 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.07.jpeg';
import legado26 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.08 (1).jpeg';
import legado27 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.08 (2).jpeg';
import legado28 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.08.jpeg';
import legado29 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.09 (1).jpeg';
import legado30 from '../assets/images/legado/WhatsApp Image 2026-05-02 at 19.53.09.jpeg';

const images = [
  legado01,
  legado02,
  legado03,
  legado04,
  legado05,
  legado06,
  legado07,
  legado08,
  legado09,
  legado10,
  legado11,
  legado12,
  legado13,
  legado14,
  legado15,
  legado16,
  legado17,
  legado18,
  legado19,
  legado20,
  legado21,
  legado22,
  legado23,
  legado24,
  legado25,
  legado26,
  legado27,
  legado28,
  legado29,
  legado30,
];

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: 'easeIn' },
  },
};

const Services = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <motion.div
      className="pt-12 pb-24 min-h-screen"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">
            <span className="block mb-3">{t('services.title')}</span>
            <span className="block">{t('services.tagline')}</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">{t('services.intro')}</p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.03 }}
              className="break-inside-avoid mb-3 cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={t('services.imageAlt', { n: index + 1 })}
                className="w-full block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <ImageLightbox
            images={images}
            initialIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Services;
