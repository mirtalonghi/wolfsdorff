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

const About = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
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
            className="relative max-w-4xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImages[modalImageIndex]}
              alt={`Imagen ${modalImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </motion.div>

          {/* Botones navegación */}
          <button
            onClick={(e) => {
              e.stopPropagation();
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
                onOpen={(imgs) => { setModalImages(imgs); setModalImageIndex(0); setShowModal(true); }}
              />

              {/* Fotos Cotidianas Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8 }}
                className="group bg-stone-50 hover:bg-stone-100 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                    <span className="text-6xl text-stone-400">📷</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif text-stone-900 mb-2">Fotos Cotidianas</h3>
                  <p className="text-sm text-stone-500">Momentos de la vida</p>
                </div>
              </motion.div>

              <CarouselCard
                images={arconImages}
                title="Arcón de los Recuerdos"
                description="Cápsula del tiempo"
                delay={0.4}
                onOpen={(imgs) => { setModalImages(imgs); setModalImageIndex(0); setShowModal(true); }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;