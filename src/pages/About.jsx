import React, { useState, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import CarouselCard from '../components/CarouselCard';
import ImageLightbox from '../components/ImageLightbox';
import portrait from '../assets/images/Papá-solo/Biografia - Felipe wolfsdorf.jpg';
import backgroundMusic from '../assets/17-Johann-Sebastian-Bach-Air-On-The-G-String-1723.mp3';
// Taller images
import tallerImg1 from '../assets/images/Taller/12.jpg';
import tallerImg2 from '../assets/images/Taller/Faiwel-y-Patty-15Oct2008.JPG';
import tallerImg3 from '../assets/images/Taller/foto003.jpg';
import tallerImg4 from '../assets/images/Taller/Taller-Patty.jpg';
import tallerImg5 from '../assets/images/Taller/Taller-Pattyalbum-06.jpg';
// ElArconDeLosRecuerdos images (001.jpg–024.jpg, orden alfabético)
import arconImg01 from '../assets/images/ElArconDeLosRecuerdos/001.jpg';
import arconImg02 from '../assets/images/ElArconDeLosRecuerdos/002.jpg';
import arconImg03 from '../assets/images/ElArconDeLosRecuerdos/003.jpg';
import arconImg04 from '../assets/images/ElArconDeLosRecuerdos/004.jpg';
import arconImg05 from '../assets/images/ElArconDeLosRecuerdos/005.jpg';
import arconImg06 from '../assets/images/ElArconDeLosRecuerdos/006.jpg';
import arconImg07 from '../assets/images/ElArconDeLosRecuerdos/007.jpg';
import arconImg08 from '../assets/images/ElArconDeLosRecuerdos/008.jpg';
import arconImg09 from '../assets/images/ElArconDeLosRecuerdos/009.jpg';
import arconImg10 from '../assets/images/ElArconDeLosRecuerdos/010.jpg';
import arconImg11 from '../assets/images/ElArconDeLosRecuerdos/011.jpg';
import arconImg12 from '../assets/images/ElArconDeLosRecuerdos/012.jpg';
import arconImg13 from '../assets/images/ElArconDeLosRecuerdos/013.jpg';
import arconImg14 from '../assets/images/ElArconDeLosRecuerdos/014.jpg';
import arconImg15 from '../assets/images/ElArconDeLosRecuerdos/015.jpg';
import arconImg16 from '../assets/images/ElArconDeLosRecuerdos/016.jpg';
import arconImg17 from '../assets/images/ElArconDeLosRecuerdos/017.jpg';
import arconImg18 from '../assets/images/ElArconDeLosRecuerdos/018.jpg';
import arconImg19 from '../assets/images/ElArconDeLosRecuerdos/019.jpg';
import arconImg20 from '../assets/images/ElArconDeLosRecuerdos/020.jpg';
import arconImg21 from '../assets/images/ElArconDeLosRecuerdos/021.jpg';
import arconImg22 from '../assets/images/ElArconDeLosRecuerdos/022.jpg';
import arconImg23 from '../assets/images/ElArconDeLosRecuerdos/023.jpg';
import arconImg24 from '../assets/images/ElArconDeLosRecuerdos/024.jpg';
// Con-alumnos-y-amigos images
import ca1 from '../assets/images/Con-alumnos-y-amigos/13.jpg';
import ca2 from '../assets/images/Con-alumnos-y-amigos/14.jpg';
import ca3 from '../assets/images/Con-alumnos-y-amigos/17.jpg';
import ca4 from '../assets/images/Con-alumnos-y-amigos/18.jpg';
import ca5 from '../assets/images/Con-alumnos-y-amigos/19.jpg';
import ca6 from '../assets/images/Con-alumnos-y-amigos/1b.jpg';
import ca7 from '../assets/images/Con-alumnos-y-amigos/21.jpg';
import ca8 from '../assets/images/Con-alumnos-y-amigos/26.jpg';
import ca9 from '../assets/images/Con-alumnos-y-amigos/27.jpg';
import ca10 from '../assets/images/Con-alumnos-y-amigos/2b.jpg';
import ca11 from '../assets/images/Con-alumnos-y-amigos/3.jpg';
import ca12 from '../assets/images/Con-alumnos-y-amigos/35.jpg';
import ca13 from '../assets/images/Con-alumnos-y-amigos/4.jpg';
import ca14 from '../assets/images/Con-alumnos-y-amigos/40.jpg';
import ca15 from '../assets/images/Con-alumnos-y-amigos/42.jpg';
import ca16 from '../assets/images/Con-alumnos-y-amigos/43.jpg';
import ca17 from '../assets/images/Con-alumnos-y-amigos/44.jpg';
import ca18 from '../assets/images/Con-alumnos-y-amigos/46.jpg';
import ca19 from '../assets/images/Con-alumnos-y-amigos/5.jpg';
import ca20 from '../assets/images/Con-alumnos-y-amigos/8b.jpg';
import ca21 from '../assets/images/Con-alumnos-y-amigos/9b.jpg';
import ca22 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-21AGO2008.jpg';
import ca23 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-23JUL2009-1.jpg';
import ca24 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-23JUL2009-2.jpg';
import ca25 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-23JUL2009-3.jpg';
import ca26 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-23JUL2009-5.jpg';
import ca27 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-23JUL2009-6.jpg';
import ca28 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-con-Eleana-Sara-Patty-Rinske-Delia-2.JPG';
import ca29 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-con-Eleana-Sara-Patty-Rinske-Delia-3.JPG';
import ca30 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-con-Eleana-Sara-Patty-Rinske-Delia.JPG';
import ca31 from '../assets/images/Con-alumnos-y-amigos/Faiwel-con-Patricia-Rodriguez-Mejia-y-Sara-Sterental.JPG';
import ca32 from '../assets/images/Con-alumnos-y-amigos/Faiwel-con-su-hija-Noemi-Patty-Cubas-y-Patty-Rodriguez-Mejia.JPG';
import ca33 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-Vico-Doig-Bert-Engelhard.JPG';
import ca34 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-Vico-Doig-Sara-Sterental.jpg';
import ca35 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-Doris-Sumar.JPG';
import ca36 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-Patricia-Rodriguez-Mejia.JPG';
import ca37 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-Patty-1992-2.JPG';
import ca38 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-Patty-1992.jpg';
import ca39 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-Patty-2003-3.JPG';
import ca40 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-Patty-2003.JPG';
import ca41 from '../assets/images/Con-alumnos-y-amigos/Faiwel-y-Patty-27Abr2010-2.JPG';
import ca42 from '../assets/images/Con-alumnos-y-amigos/Faiwel-y-Patty-27Abr2010.JPG';
import ca43 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-su-nena-Patty-Cubas-2.JPG';
import ca44 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-su-nena-Patty-Cubas-3.JPG';
import ca45 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-su-nena-Patty-Cubas-4.JPG';
import ca46 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-su-nena-Patty-Cubas-5.JPG';
import ca47 from '../assets/images/Con-alumnos-y-amigos/FAIWEL-y-su-nena-Patty-Cubas.JPG';
import ca48 from '../assets/images/Con-alumnos-y-amigos/foto001.jpg';
import ca49 from '../assets/images/Con-alumnos-y-amigos/foto005.jpg';
import ca50 from '../assets/images/Con-alumnos-y-amigos/foto006.jpg';
import ca51 from '../assets/images/Con-alumnos-y-amigos/P1000867.jpeg';
import ca52 from '../assets/images/Con-alumnos-y-amigos/P1000958.jpeg';
import ca53 from '../assets/images/Con-alumnos-y-amigos/SCAN_1.jpg';
import ca54 from '../assets/images/Con-alumnos-y-amigos/SCAN_11.jpg';
import ca55 from '../assets/images/Con-alumnos-y-amigos/SCAN_12.jpg';
import ca56 from '../assets/images/Con-alumnos-y-amigos/SCAN_5.jpg';
import ca57 from '../assets/images/Con-alumnos-y-amigos/SCAN_6.jpg';
import ca58 from '../assets/images/Con-alumnos-y-amigos/SCAN_7.jpg';
// Familiares images
import fam1 from '../assets/images/Familiares/Faiwel-Wolfsdorf-con-su-hija-Noemi-W..JPG';
import fam2 from '../assets/images/Familiares/Faiwel-Wolfsdorf-con-su-hija-Noemi.JPG';
import fam3 from '../assets/images/Familiares/P1000861.jpeg';
import fam4 from '../assets/images/Familiares/P1000862.jpeg';
import fam5 from '../assets/images/Familiares/P1000863.jpeg';
import fam6 from '../assets/images/Familiares/P1000864.jpeg';
import fam7 from '../assets/images/Familiares/P1000865.jpeg';
import fam8 from '../assets/images/Familiares/SCAN_8.jpg';

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

const arconImages = [
  arconImg01, arconImg02, arconImg03, arconImg04, arconImg05,
  arconImg06, arconImg07, arconImg08, arconImg09, arconImg10,
  arconImg11, arconImg12, arconImg13, arconImg14, arconImg15,
  arconImg16, arconImg17, arconImg18, arconImg19, arconImg20,
  arconImg21, arconImg22, arconImg23, arconImg24,
];

const tallerImages = [tallerImg1, tallerImg2, tallerImg3, tallerImg4, tallerImg5];

const fotosCotidianasImages = [
  ca1, ca2, ca3, ca4, ca5, ca6, ca7, ca8, ca9, ca10,
  ca11, ca12, ca13, ca14, ca15, ca16, ca17, ca18, ca19, ca20,
  ca21, ca22, ca23, ca24, ca25, ca26, ca27, ca28, ca29, ca30,
  ca31, ca32, ca33, ca34, ca35, ca36, ca37, ca38, ca39, ca40,
  ca41, ca42, ca43, ca44, ca45, ca46, ca47, ca48, ca49, ca50,
  ca51, ca52, ca53, ca54, ca55, ca56, ca57, ca58,
  fam1, fam2, fam3, fam4, fam5, fam6, fam7, fam8
];

const vidaTallerAlumnosImages = [...tallerImages, ...fotosCotidianasImages];

const About = () => {
  const { t } = useTranslation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState(arconImages);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="pt-12 pb-24"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {showModal && (
          <ImageLightbox
            images={modalImages}
            initialIndex={0}
            onClose={() => setShowModal(false)}
            dots
          />
        )}
      </AnimatePresence>

      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white p-4 rounded-full shadow-lg hover:bg-stone-700 transition-colors dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-300"
        title={isPlaying ? t('about.musicPause') : t('about.musicPlay')}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
        )}
      </button>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Biografía — ancho completo, diseño editorial */}
          <section
            className="about-bio-panel relative mb-16 overflow-hidden rounded-sm px-5 py-12 sm:px-8 md:px-10 lg:mb-24 lg:rounded-md lg:px-12 lg:py-16"
            aria-labelledby="about-bio-heading"
          >
            <div
              className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-1/4 -translate-y-1/4 rounded-full bg-stone-200/40 blur-3xl dark:bg-stone-600/20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 -translate-x-1/4 translate-y-1/4 rounded-full bg-amber-100/25 blur-3xl"
              aria-hidden
            />

            <header className="relative mx-auto mb-12 max-w-3xl text-center lg:mb-14">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400"
              >
                {t('about.bioLabel')}
              </motion.span>
              <motion.h1
                id="about-bio-heading"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 font-serif text-3xl leading-tight tracking-tight text-stone-900 dark:text-stone-100 md:text-4xl lg:text-[2.35rem]"
              >
                {t('about.bioTitle')}
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-8 h-px w-20 origin-center bg-gradient-to-r from-transparent via-stone-800 to-transparent dark:via-stone-500"
              />
            </header>

            {/* flow-root envuelve el float; el texto rodea el retrato y sigue a ancho completo debajo */}
            <div className="relative flow-root">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mb-8 max-w-xs sm:max-w-sm md:mx-0 md:mb-5 md:mr-8 md:float-left md:w-[min(44%,22rem)] md:max-w-md lg:mr-10 lg:w-[min(40%,24rem)]"
              >
                <div className="about-portrait-frame">
                  <img
                    src={portrait}
                    alt={t('about.portraitAlt')}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="space-y-6 text-lg leading-[1.75] text-stone-700 dark:text-stone-300"
              >
                <p>{t('about.bioP1')}</p>
                <p>{t('about.bioP2')}</p>
                <p>{t('about.bioP3')}</p>
                <p>{t('about.bioP4')}</p>
                <p>{t('about.bioP5')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="clear-both mt-10 space-y-4 border-t border-stone-200/90 dark:border-stone-700/90 pt-8"
              >
                <h3 className="font-serif text-xl text-stone-900 dark:text-stone-100">{t('about.techniquesTitle')}</h3>
                <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300 md:text-[0.95rem]">
                  <Trans
                    i18nKey="about.techniquesBody"
                    components={{ auto: <strong className="font-semibold text-stone-900 dark:text-stone-100" /> }}
                  />
                </p>
              </motion.div>
            </div>
          </section>

          {/* Colecciones — después de la biografía */}
          <section className="relative pb-4" aria-labelledby="about-collections-heading">
            <div className="mb-10 border-b border-stone-200 dark:border-stone-700 pb-10 lg:mb-12 lg:pb-12">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400">{t('about.collectionsLabel')}</p>
                <h2
                  id="about-collections-heading"
                  className="mt-3 font-serif text-2xl tracking-tight text-stone-900 dark:text-stone-100 md:text-3xl"
                >
                  {t('about.collectionsTitle')}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
              <CarouselCard
                compact
                images={vidaTallerAlumnosImages}
                title={t('about.cardVidaTallerTitle')}
                description={t('about.cardVidaTallerDesc')}
                delay={0.08}
                onOpen={(imgs) => { setModalImages(imgs); setShowModal(true); }}
              />

              <CarouselCard
                compact
                images={arconImages}
                title={t('about.cardArconTitle')}
                description={t('about.cardArconDesc')}
                delay={0.18}
                onOpen={(imgs) => { setModalImages(imgs); setShowModal(true); }}
              />
            </div>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
