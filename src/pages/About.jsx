import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import CarouselCard from '../components/CarouselCard';
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
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState(arconImages);
  const [zoom, setZoom] = useState(false);

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

      {/* Modal para Arcón de los Recuerdos */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-6 text-white hover:text-stone-300 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Imagen principal */}
          <motion.div
            key={modalImageIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative mx-4 overflow-hidden flex items-center justify-center"
            style={{ maxWidth: zoom ? '90vw' : '56rem', maxHeight: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={modalImages[modalImageIndex]}
              alt={`Imagen ${modalImageIndex + 1}`}
              className={`max-w-full max-h-[80vh] object-contain select-none ${zoom ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
              animate={{ scale: zoom ? 2.5 : 1 }}
              transition={{ duration: 0.3 }}
              drag={zoom}
              dragElastic={0.05}
              dragConstraints={{ left: -600, right: 600, top: -400, bottom: 400 }}
              onTap={() => setZoom(z => !z)}
            />
            <button
              className="absolute bottom-3 right-3 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
              onClick={(e) => { e.stopPropagation(); setZoom(z => !z); }}
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

          {/* Botones navegación */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoom(false);
              setModalImageIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoom(false);
              setModalImageIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {modalImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom(false);
                  setModalImageIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${modalImageIndex === index ? 'bg-white' : 'bg-white/40'
                  }`}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white p-4 rounded-full shadow-lg hover:bg-stone-700 transition-colors"
        title={isPlaying ? "Pausar música" : "Reproducir música"}
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
          <h2 className="text-3xl font-serif text-center mb-12 text-stone-900">Explorar</h2>

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
                  Biografía
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl font-serif mb-6 text-stone-900"
                >
                  El Arquitecto de los Sueños
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
                      alt="Faiwel Wolfsdorf"
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
                >
                  <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-stone-900">N</span>
                  acido en Varsovia en 1921 y renacido bajo el cielo del sur, <strong className="text-stone-900">Faiwel Wolfsdorf (1921–2011)</strong> trazó un puente invisible entre la vieja Europa y la vibrante energía de América Latina. Su travesía vital, que lo llevó desde Polonia a Buenos Aires y finalmente a echar raíces en el Perú, forjó una sensibilidad única ante el desarraigo y la pertenencia.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Discípulo del automatismo inconsciente y la psicología de la forma —influenciado profundamente por el maestro <strong className="text-stone-900">Juan Batlle Planas</strong>—, Wolfsdorf no pintaba lo que veía, sino lo que sentía latir bajo la superficie de la realidad.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Su legado trasciende el lienzo: dedicó décadas a transformar vidas a través del arte, guiando a niños y jóvenes ("De pirañas a delfines") a encontrar su propia voz a través del color.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-stone-100 p-6 border-l-4 border-stone-900"
                >
                  <h3 className="font-serif text-lg mb-2 text-stone-900">Filosofía Artística</h3>
                  <p className="italic text-stone-600 text-sm">
                    "Crear es liberar. Mi obra busca capturar ese instante preciso donde el pensamiento lógico cede paso a la intuición pura. Utilizo el color —azules profundos, rojos que vibran, violetas que susurran— como vehículo para explorar los laberintos de la psique humana."
                  </p>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xl font-serif text-stone-900"
                >
                  Técnicas y Materiales
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-sm"
                >
                  Maestro del óleo y la técnica mixta, su trabajo se caracteriza por el uso del <strong className="text-stone-900">automatismo</strong>, permitiendo que la mano fluya libremente antes de que la mente imponga estructura. Sus texturas son ricas y orgánicas, construidas capa sobre capa para revelar la historia oculta en cada cuadro.
                </motion.p>
              </div>

              {/* Exhibitions */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border-t border-stone-200 px-8 py-6"
              >
                <h3 className="text-xl font-serif text-center mb-6 text-stone-900">Exposiciones Destacadas</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between group hover:bg-stone-100 p-3 transition-colors">
                    <div>
                      <h4 className="text-base font-serif text-stone-900">Retrospectiva "El Lenguaje del Inconsciente"</h4>
                      <p className="text-stone-500 text-sm">Museo de la Nación, Lima</p>
                    </div>
                    <span className="text-stone-900 font-serif text-sm">Colección Permanente</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between group hover:bg-stone-100 p-3 transition-colors">
                    <div>
                      <h4 className="text-base font-serif text-stone-900">Salón de Arte Moderno</h4>
                      <p className="text-stone-500 text-sm">Buenos Aires, Argentina</p>
                    </div>
                    <span className="text-stone-400 font-serif text-sm">Archivo Histórico</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between group hover:bg-stone-100 p-3 transition-colors">
                    <div>
                      <h4 className="text-base font-serif text-stone-900">Colección Instituto Peruano de Seguridad Social</h4>
                      <p className="text-stone-500 text-sm">Patronato Cultural</p>
                    </div>
                    <span className="text-stone-400 font-serif text-sm">Adquisición Institucional</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Other Cards Column */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 content-start">
              <CarouselCard
                images={tallerImages}
                title="Taller"
                description="El espacio de creación"
                delay={0.1}
                onOpen={(imgs) => { setModalImages(imgs); setModalImageIndex(0); setZoom(false); setShowModal(true); }}
              />

              <CarouselCard
                images={fotosImages}
                title="Fotos Cotidianas"
                description="Momentos de la vida"
                delay={0.2}
                onOpen={(imgs) => { setModalImages(imgs); setModalImageIndex(0); setZoom(false); setShowModal(true); }}
              />

              <CarouselCard
                images={arconImages}
                title="Arcón de los Recuerdos"
                description="Cápsula del tiempo"
                delay={0.4}
                onOpen={(imgs) => { setModalImages(imgs); setModalImageIndex(0); setZoom(false); setShowModal(true); }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
