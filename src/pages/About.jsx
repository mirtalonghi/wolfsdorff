import React, { useState, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import CarouselCard from '../components/CarouselCard';
import ImageLightbox from '../components/ImageLightbox';
import portrait from '../assets/images/16.jpg';
import backgroundMusic from '../assets/17-Johann-Sebastian-Bach-Air-On-The-G-String-1723.mp3';
// Taller images
import tallerImg1 from '../assets/images/Taller/12.jpg';
import tallerImg2 from '../assets/images/Taller/Faiwel-y-Patty-15Oct2008.JPG';
import tallerImg3 from '../assets/images/Taller/foto003.jpg';
import tallerImg4 from '../assets/images/Taller/Taller-Patty.jpg';
import tallerImg5 from '../assets/images/Taller/Taller-Pattyalbum-06.jpg';
// ElArconDeLosRecuerdos images
import arconImg1 from '../assets/images/ElArconDeLosRecuerdos/escanear0001.jpg';
import arconImg2 from '../assets/images/ElArconDeLosRecuerdos/escanear0002.jpg';
import arconImg3 from '../assets/images/ElArconDeLosRecuerdos/escanear0003.jpg';
import arconImg4 from '../assets/images/ElArconDeLosRecuerdos/escanear0004.jpg';
import arconImg5 from '../assets/images/ElArconDeLosRecuerdos/escanear0005.jpg';
import arconImg6 from '../assets/images/ElArconDeLosRecuerdos/escanear0006.jpg';
import arconImg7 from '../assets/images/ElArconDeLosRecuerdos/escanear0007.jpg';
import arconImg8 from '../assets/images/ElArconDeLosRecuerdos/escanear0008.jpg';
import arconImg9 from '../assets/images/ElArconDeLosRecuerdos/escanear0009.jpg';
import arconImg11 from '../assets/images/ElArconDeLosRecuerdos/escanear0011.jpg';
import arconImg12 from '../assets/images/ElArconDeLosRecuerdos/escanear0012.jpg';
import arconImg14 from '../assets/images/ElArconDeLosRecuerdos/escanear0014.jpg';
import arconImg15 from '../assets/images/ElArconDeLosRecuerdos/escanear0015.jpg';
import arconImg16 from '../assets/images/ElArconDeLosRecuerdos/escanear0016.jpg';
import arconImg17 from '../assets/images/ElArconDeLosRecuerdos/escanear0017.jpg';
import arconImg18 from '../assets/images/ElArconDeLosRecuerdos/escanear0018.jpg';
import arconImg73 from '../assets/images/ElArconDeLosRecuerdos/escanear0073.jpg';
import arconImg74 from '../assets/images/ElArconDeLosRecuerdos/escanear0074.jpg';
import arconImg75 from '../assets/images/ElArconDeLosRecuerdos/escanear0075.jpg';
import arconImg77 from '../assets/images/ElArconDeLosRecuerdos/escanear0077.jpg';
import arconImg78 from '../assets/images/ElArconDeLosRecuerdos/escanear0078.jpg';
import arconImg79 from '../assets/images/ElArconDeLosRecuerdos/escanear0079.jpg';
import arconImg80 from '../assets/images/ElArconDeLosRecuerdos/escanear0080.jpg';
import arconImg81 from '../assets/images/ElArconDeLosRecuerdos/escanear0081.jpg';
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
  arconImg1, arconImg2, arconImg3, arconImg4, arconImg5,
  arconImg6, arconImg7, arconImg8, arconImg9, arconImg11,
  arconImg12, arconImg14, arconImg15, arconImg16, arconImg17,
  arconImg18, arconImg73, arconImg74, arconImg75, arconImg77,
  arconImg78, arconImg79, arconImg80, arconImg81
];

const tallerImages = [tallerImg1, tallerImg2, tallerImg3, tallerImg4, tallerImg5];

const fotosImages = [
  ca1, ca2, ca3, ca4, ca5, ca6, ca7, ca8, ca9, ca10,
  ca11, ca12, ca13, ca14, ca15, ca16, ca17, ca18, ca19, ca20,
  ca21, ca22, ca23, ca24, ca25, ca26, ca27, ca28, ca29, ca30,
  ca31, ca32, ca33, ca34, ca35, ca36, ca37, ca38, ca39, ca40,
  ca41, ca42, ca43, ca44, ca45, ca46, ca47, ca48, ca49, ca50,
  ca51, ca52, ca53, ca54, ca55, ca56, ca57, ca58,
  fam1, fam2, fam3, fam4, fam5, fam6, fam7, fam8
];

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
        className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white p-4 rounded-full shadow-lg hover:bg-stone-700 transition-colors"
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
        {/* Info Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-serif text-center mb-12 text-stone-900">{t('about.explore')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Biografía Card - Large with full content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-stone-50"
            >
              {/* Card Header */}
              <div className="text-center pt-12 pb-6 px-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-4"
                >
                  {t('about.bioLabel')}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl font-serif mb-6 text-stone-900"
                >
                  {t('about.bioTitle')}
                </motion.h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-24 h-px bg-stone-900 mx-auto mb-8"
                />
              </div>

              {/* Portrait */}
              <div className="px-8 pb-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={portrait}
                      alt={t('about.portraitAlt')}
                      className="w-full h-auto shadow-xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Biography Text */}
              <div className="px-8 pb-6 space-y-6 text-lg text-stone-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-lg text-stone-700 leading-relaxed"
                >
                  <Trans
                    i18nKey="about.bioP1"
                    components={{ artist: <strong className="text-stone-900" /> }}
                  />
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-stone-700 leading-relaxed"
                >
                  <Trans
                    i18nKey="about.bioP2"
                    components={{ master: <strong className="text-stone-900" /> }}
                  />
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg text-stone-700 leading-relaxed"
                >
                  {t('about.bioP3')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-stone-100 p-6 border-l-4 border-stone-900"
                >
                  <h3 className="font-serif text-lg mb-2 text-stone-900">{t('about.philosophyTitle')}</h3>
                  <p className="italic text-stone-600 text-sm">{t('about.philosophyQuote')}</p>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xl font-serif text-stone-900"
                >
                  {t('about.techniquesTitle')}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-sm text-stone-700"
                >
                  <Trans
                    i18nKey="about.techniquesBody"
                    components={{ auto: <strong className="text-stone-900" /> }}
                  />
                </motion.p>
              </div>

              {/* Exhibitions */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border-t border-stone-200 px-8 py-6"
              >
                <h3 className="text-xl font-serif text-center mb-6 text-stone-900">{t('about.exhibitionsTitle')}</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between group hover:bg-stone-100 p-3 transition-colors">
                    <div>
                      <h4 className="text-base font-serif text-stone-900">{t('about.ex1Title')}</h4>
                      <p className="text-stone-500 text-sm">{t('about.ex1Place')}</p>
                    </div>
                    <span className="text-stone-900 font-serif text-sm">{t('about.ex1Badge')}</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between group hover:bg-stone-100 p-3 transition-colors">
                    <div>
                      <h4 className="text-base font-serif text-stone-900">{t('about.ex2Title')}</h4>
                      <p className="text-stone-500 text-sm">{t('about.ex2Place')}</p>
                    </div>
                    <span className="text-stone-400 font-serif text-sm">{t('about.ex2Badge')}</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between group hover:bg-stone-100 p-3 transition-colors">
                    <div>
                      <h4 className="text-base font-serif text-stone-900">{t('about.ex3Title')}</h4>
                      <p className="text-stone-500 text-sm">{t('about.ex3Place')}</p>
                    </div>
                    <span className="text-stone-400 font-serif text-sm">{t('about.ex3Badge')}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Other Cards Column */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 content-start">
              <CarouselCard
                images={tallerImages}
                title={t('about.cardTallerTitle')}
                description={t('about.cardTallerDesc')}
                delay={0.1}
                onOpen={(imgs) => { setModalImages(imgs); setShowModal(true); }}
              />

              <CarouselCard
                images={fotosImages}
                title={t('about.cardFotosTitle')}
                description={t('about.cardFotosDesc')}
                delay={0.2}
                onOpen={(imgs) => { setModalImages(imgs); setShowModal(true); }}
              />

              <CarouselCard
                images={arconImages}
                title={t('about.cardArconTitle')}
                description={t('about.cardArconDesc')}
                delay={0.4}
                onOpen={(imgs) => { setModalImages(imgs); setShowModal(true); }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
