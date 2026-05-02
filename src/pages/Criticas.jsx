import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import CriticaCard from '../components/CriticaCard';
import ImageLightbox from '../components/ImageLightbox';
import { publicaciones, archivoPrensa } from '../data/criticasData';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
};

const Criticas = () => {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState(null);

  const openPublication = (pub) => setLightbox({ images: pub.imagenes, index: 0 });
  const openArchive = (i) => setLightbox({ images: archivoPrensa, index: i });
  const close = () => setLightbox(null);

  return (
    <motion.div
      className="pt-12 pb-24 min-h-screen"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container-custom">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6">
            {t('criticasPage.subtitle')}
          </span>
          <h1 className="text-4xl font-serif mb-8 text-stone-900">{t('criticasPage.title')}</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">{t('criticasPage.intro')}</p>
        </div>

        {/* Publicaciones nombradas */}
        <section className="mb-20">
          <h2 className="text-xs uppercase tracking-[0.25em] text-stone-400 text-center mb-10">
            {t('criticasPage.publicaciones')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {publicaciones.map((pub) => (
              <CriticaCard
                key={pub.id}
                publicacion={pub}
                onClick={() => openPublication(pub)}
              />
            ))}
          </div>
        </section>

        <div className="border-t border-stone-200 my-4" />

        {/* Archivo de prensa */}
        <section className="mt-16">
          <h2 className="text-xs uppercase tracking-[0.25em] text-stone-400 text-center mb-3">
            {t('criticasPage.archivoTitle')}
          </h2>
          <p className="text-sm text-stone-500 text-center mb-10 max-w-lg mx-auto">
            {t('criticasPage.archivoIntro')}
          </p>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {archivoPrensa.map((img, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid mb-3 cursor-pointer group overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                onClick={() => openArchive(i)}
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="w-full h-auto block transition-opacity duration-300 group-hover:opacity-75"
                />
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      <AnimatePresence>
        {lightbox && (
          <ImageLightbox
            images={lightbox.images}
            initialIndex={lightbox.index}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Criticas;
