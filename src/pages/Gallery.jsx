import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageLightbox from '../components/ImageLightbox';

import img100 from '../assets/images/Exposiciones/100.jpg';
import img102 from '../assets/images/Exposiciones/102.jpg';
import img103 from '../assets/images/Exposiciones/103.jpg';
import img107 from '../assets/images/Exposiciones/107.jpg';
import img200 from '../assets/images/Exposiciones/200.jpg';
import img201 from '../assets/images/Exposiciones/201.jpg';
import img202 from '../assets/images/Exposiciones/202.jpg';
import img203 from '../assets/images/Exposiciones/203.jpg';
import img204 from '../assets/images/Exposiciones/204.jpg';
import img205 from '../assets/images/Exposiciones/205.jpg';
import img206 from '../assets/images/Exposiciones/206.jpg';
import img207 from '../assets/images/Exposiciones/207.jpg';
import img208 from '../assets/images/Exposiciones/208.jpg';
import img209 from '../assets/images/Exposiciones/209.jpg';
import img210 from '../assets/images/Exposiciones/210.jpg';
import img211 from '../assets/images/Exposiciones/211.jpg';
import img212 from '../assets/images/Exposiciones/212.jpg';
import img213 from '../assets/images/Exposiciones/213.jpg';
import img3b from '../assets/images/Exposiciones/3b.jpg';
import img5b from '../assets/images/Exposiciones/5b.jpg';
import img6b from '../assets/images/Exposiciones/6b.jpg';
import img8c from '../assets/images/Exposiciones/8c.jpg';
import imgExpo1 from '../assets/images/Exposiciones/EXPO1.jpg';
import imgExpo3 from '../assets/images/Exposiciones/EXPO3.jpg';
import imgExpo4 from '../assets/images/Exposiciones/EXPO4.jpg';
import imgFaiwelEscultora from '../assets/images/Exposiciones/FAIWEL-con-escultora-Patricia-Rodriguez-y-Aida-Caller-con-la-escultura-en-honor-de-Laura-Caller.JPG';
import imgFaiwelFrutos from '../assets/images/Exposiciones/Faiwel-con-los-artistas-de-la-exposicion-Frutos-del-Sueño.JPG';
import imgFaiwelPatricia from '../assets/images/Exposiciones/Faiwel-con-Patricia-Rodriguez-Mejia.JPG';
import imgFaiwelPatriciaEscultura from '../assets/images/Exposiciones/Faiwel-y-Patricia-Rodriguez-Mejia-con-una-de-sus-esculturas.jpg';
import imgFelipe from '../assets/images/Exposiciones/Felipe-album-13.jpg';
import imgFoto004 from '../assets/images/Exposiciones/foto004.jpg';
import imgScan3 from '../assets/images/Exposiciones/SCAN_3.jpg';
import imgScan4 from '../assets/images/Exposiciones/SCAN_4.jpg';
import imgScan9 from '../assets/images/Exposiciones/SCAN_9.jpg';
import imgScan10 from '../assets/images/Exposiciones/SCAN_10.jpg';
import imgScan13 from '../assets/images/Exposiciones/SCAN_13.jpg';

const images = [
  imgExpo1,
  imgExpo3,
  imgExpo4,
  img3b,
  img5b,
  img6b,
  img8c,
  imgFoto004,
  imgScan3,
  imgScan4,
  imgScan9,
  imgScan10,
  imgScan13,
  imgFelipe,
  imgFaiwelPatricia,
  imgFaiwelPatriciaEscultura,
  imgFaiwelEscultora,
  imgFaiwelFrutos,
  img100,
  img102,
  img103,
  img107,
  img200,
  img201,
  img202,
  img203,
  img204,
  img205,
  img206,
  img207,
  img208,
  img209,
  img210,
  img211,
  img212,
  img213,
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

const Gallery = () => {
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
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6">Exposiciones</span>
          <h1 className="text-4xl font-serif mb-8 text-stone-900">Galería</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Un recorrido fotográfico por las exposiciones de Faiwel Wolfsdorf a lo largo de su trayectoria artística.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.04 }}
              className="break-inside-avoid mb-3 cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={`Exposición ${index + 1}`}
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

export default Gallery;
