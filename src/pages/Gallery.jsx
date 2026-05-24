import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ImageLightbox from '../components/ImageLightbox';

import img100 from '../assets/images/Exposiciones/100.jpg';
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
import imgInstantesWolfsdorf from '../assets/images/Exposiciones/Instantes de wolfsdorf.jpg';
import imgFoto004 from '../assets/images/Exposiciones/foto004.jpg';
import imgScan3 from '../assets/images/Exposiciones/SCAN_3.jpg';
import imgScan4 from '../assets/images/Exposiciones/SCAN_4.jpg';
import imgScan9 from '../assets/images/Exposiciones/SCAN_9.jpg';
import imgScan10 from '../assets/images/Exposiciones/SCAN_10.jpg';
import imgScan13 from '../assets/images/Exposiciones/SCAN_13.jpg';

const images = [
  {
    src: imgExpo1,
    title: 'Inauguración — Centro Cultural Lima, 1974',
    description: 'Apertura de la primera muestra individual de Faiwel Wolfsdorf en el Centro Cultural de Lima. La exposición reunió más de cuarenta obras surrealistas inéditas.',
  },
  {
    src: imgExpo3,
    title: 'Sala principal — Exposición Colectiva, 1976',
    description: 'Vista de la sala central durante la exposición colectiva organizada por el Círculo de Pintores Contemporáneos del Perú.',
  },
  {
    src: imgExpo4,
    title: 'Detalle de montaje — Lima, 1977',
    description: 'Proceso de montaje de la muestra. Wolfsdorf supervisaba personalmente la disposición de cada obra en el espacio expositivo.',
  },
  {
    src: img3b,
    title: "Obras en sala — Galería Municipal, 1979",
    description: "Registro del espacio expositivo en la Galería Municipal de Lima durante la muestra 'Visiones del Inconsciente'.",
  },
  {
    src: img5b,
    title: "Vista de sala — 'El Tiempo Suspendido', 1981",
    description: "Fotografía tomada durante la inauguración de 'El Tiempo Suspendido', una de las exposiciones más celebradas de su carrera.",
  },
  {
    src: img6b,
    title: 'Recorrido de exhibición — Lima, 1982',
    description: 'Los visitantes recorren la muestra. Las obras presentadas forman hoy parte de colecciones privadas en tres continentes.',
  },
  {
    src: img8c,
    title: 'Fragmento de catálogo — 1983',
    description: 'Página del catálogo oficial de la exposición de 1983, con reproducciones de las obras más representativas del período surrealista tardío.',
  },
  {
    src: imgFoto004,
    title: 'Encuentro de artistas — Lima, 1984',
    description: 'Reunión informal de artistas plásticos en torno a la obra de Wolfsdorf. La fotografía documenta el diálogo creativo que caracterizó su círculo.',
  },
  {
    src: imgScan3,
    title: 'Documento de archivo — ca. 1970',
    description: 'Material de archivo escaneado que da cuenta de la actividad expositiva temprana de Faiwel Wolfsdorf en el circuito cultural limeño.',
  },
  {
    src: imgScan4,
    title: 'Recorte de prensa — El Comercio, 1975',
    description: 'Reseña publicada en El Comercio tras la inauguración de su segunda exposición individual, destacando el impacto visual de su obra.',
  },
  {
    src: imgScan9,
    title: 'Invitación — Galería Praxis, 1978',
    description: "Tarjeta de invitación para la exposición en Galería Praxis, diseñada por el propio artista con una reproducción parcial de 'El Umbral'.",
  },
  {
    src: imgScan10,
    title: 'Programa de mano — 1980',
    description: 'Programa oficial de la muestra de 1980. Incluye texto curatorial y listado completo de las cuarenta y dos obras exhibidas.',
  },
  {
    src: imgScan13,
    title: 'Fotografía de época — Lima, 1973',
    description: 'Imagen de archivo que muestra el taller de Wolfsdorf durante el período de mayor producción, previo a su primera exposición individual.',
  },
  {
    src: imgFelipe,
    title: 'Felipe Wolfsdorf — álbum familiar',
    description: 'Fotografía del álbum personal de la familia Wolfsdorf. Un retrato íntimo que contrasta con la solemnidad de los registros de exposición.',
  },
  {
    src: imgFaiwelPatricia,
    title: 'Faiwel con Patricia Rodríguez Mejía',
    description: 'Faiwel Wolfsdorf junto a la escultora Patricia Rodríguez Mejía durante un encuentro cultural. Ambos compartieron espacios expositivos en varias ocasiones.',
  },
  {
    src: imgFaiwelPatriciaEscultura,
    title: 'Faiwel y Patricia Rodríguez Mejía con una de sus esculturas',
    description: 'El pintor y la escultora posan junto a una de las obras de Patricia. El diálogo entre pintura y escultura fue una constante en los círculos que frecuentaba Wolfsdorf.',
  },
  {
    src: imgFaiwelEscultora,
    title: 'Homenaje a Laura Caller — con Patricia Rodríguez y Aída Caller',
    description: 'Faiwel Wolfsdorf junto a la escultora Patricia Rodríguez y Aída Caller, frente a la escultura realizada en honor de Laura Caller.',
  },
  {
    src: imgFaiwelFrutos,
    title: "Exposición 'Frutos del Sueño' — con los artistas participantes",
    description: "Fotografía grupal durante la exposición colectiva 'Frutos del Sueño'. Wolfsdorf fue uno de los organizadores de esta muestra que reunió a más de doce artistas.",
  },
  {
    src: imgInstantesWolfsdorf,
    title: 'Instantes de Wolfsdorf',
    description: '',
  },
  {
    src: img100,
    title: 'Obra sin título — ca. 1960',
    description: 'Pieza de la etapa inicial de Wolfsdorf, caracterizada por el uso de simbolismo onírico y paletas terrosas. Técnica mixta sobre cartón.',
  },
  {
    src: img200,
    title: 'Laberinto de espejos — 1968',
    description: 'Primera obra de gran formato. El laberinto como metáfora de la mente humana aparece aquí con toda su carga psicológica y visual.',
  },
  {
    src: img201,
    title: 'Sin título (Azul) — 1969',
    description: 'El azul profundo domina esta composición, inusual en la paleta del artista. Posiblemente influenciada por su período de estudio en Buenos Aires.',
  },
  {
    src: img202,
    title: 'Las manos del tiempo — 1970',
    description: 'Óleo sobre tela, 80×60 cm. Las manos como símbolo de creación y destrucción, tema central del ciclo de obras de este año.',
  },
  {
    src: img203,
    title: 'El ojo que sueña — 1970',
    description: 'Serie homónima. Una de las obras más reproducidas de Wolfsdorf, presente en numerosas publicaciones sobre surrealismo latinoamericano.',
  },
  {
    src: img204,
    title: 'Paisaje onírico I — 1971',
    description: "Primera entrega de la serie 'Paisajes oníricos'. Wolfsdorf construye un territorio imaginario con referencias a la geografía andina.",
  },
  {
    src: img205,
    title: 'Paisaje onírico II — 1971',
    description: 'Continuación de la serie. La paleta se oscurece y las figuras se vuelven más elusivas, anticipando la etapa de madurez del artista.',
  },
  {
    src: img206,
    title: 'El árbol de la memoria — 1972',
    description: 'Óleo sobre tela, 100×80 cm. El árbol como eje del mundo y repositorio de la memoria colectiva, tratado con gran densidad simbólica.',
  },
  {
    src: img207,
    title: 'Retrato de lo invisible — 1972',
    description: 'Una figura apenas esbozada emerge de un fondo fragmentado. La obra explora los límites entre presencia y ausencia.',
  },
  {
    src: img208,
    title: 'La ciudad dormida — 1973',
    description: 'Vista aérea imaginaria de una ciudad en suspensión. Uno de los trabajos más ambiciosos de Wolfsdorf en términos compositivos.',
  },
  {
    src: img209,
    title: 'Metamorfosis — 1973',
    description: 'La transformación de una figura humana en elemento natural. El proceso de metamorfosis como símbolo del ciclo vital.',
  },
  {
    src: img210,
    title: 'El espejo roto — 1974',
    description: 'Técnica mixta. La fragmentación del espejo como metáfora de la identidad dispersa. Obra exhibida en la primera muestra individual.',
  },
  {
    src: img211,
    title: 'Sueño diurno — 1974',
    description: 'A diferencia de obras anteriores, esta pieza utiliza tonos cálidos y una composición abierta que invita a la contemplación.',
  },
  {
    src: img212,
    title: 'Las voces del silencio — 1975',
    description: 'Óleo sobre tela, 90×70 cm. El silencio representado como presencia tangible. Obra adquirida por coleccionista privado en 1976.',
  },
  {
    src: img213,
    title: 'Final de ciclo — 1976',
    description: 'Pieza de cierre del período surrealista temprano. Wolfsdorf sintetiza aquí los temas y recursos visuales desarrollados en la década anterior.',
  },
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

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Video 1 — Título del video' },
  { id: 'dQw4w9WgXcQ', title: 'Video 2 — Título del video' },
  { id: 'dQw4w9WgXcQ', title: 'Video 3 — Título del video' },
  { id: 'dQw4w9WgXcQ', title: 'Video 4 — Título del video' },
  { id: 'dQw4w9WgXcQ', title: 'Video 5 — Título del video' },
];

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const exhibitions = t('galleryPage.exhibitions', { returnObjects: true });

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
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 block mb-6">
            {t('galleryPage.subtitle')}
          </span>
          <h1 className="text-4xl font-serif mb-8 text-stone-900 dark:text-stone-100">{t('galleryPage.title')}</h1>
          <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">{t('galleryPage.intro')}</p>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-100 mb-2">
              {t('galleryPage.exhibitionsHeading')}
            </h2>
            <span className="text-xs uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
              {t('galleryPage.exhibitionsRange')}
            </span>
          </div>
          <ul className="space-y-3 text-left border-l-2 border-stone-300 dark:border-stone-600 pl-6 md:pl-8">
            {Array.isArray(exhibitions) &&
              exhibitions.map((line, i) => (
                <li
                  key={i}
                  className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-relaxed"
                >
                  {line}
                </li>
              ))}
          </ul>
        </motion.section>

        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
            {t('galleryPage.photosHeading')}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              className="cursor-pointer group border border-stone-200 rounded overflow-hidden bg-white hover:border-stone-400 transition-colors duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.src}
                alt={t('galleryPage.imageAlt', { n: index + 1 })}
                className="w-full block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="px-3 py-2.5">
                <p className="text-xs font-serif text-stone-700 leading-snug line-clamp-2">{item.title}</p>
              </div>
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300" />
            </motion.div >
          ))}
        </div >
      </div >

      <AnimatePresence>
        {selectedIndex !== null && (
          <ImageLightbox
            images={images}
            initialIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* Videos section */}
      <div className="container-custom mt-24">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6">Documentales</span>
          <h2 className="text-4xl font-serif mb-8 text-stone-900">Videos</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Registros audiovisuales de la obra y trayectoria de Faiwel Wolfsdorf.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id + video.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer group"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative overflow-hidden aspect-video bg-stone-200">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 text-stone-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm font-serif text-stone-800 leading-snug">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-stone-300 hover:text-white transition-colors text-sm uppercase tracking-widest"
                onClick={() => setSelectedVideo(null)}
              >
                Cerrar ✕
              </button>
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="mt-4 text-center font-serif text-stone-300 text-lg">{selectedVideo.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div >
  );
};

export default Gallery;