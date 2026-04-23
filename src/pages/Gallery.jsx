import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, ArrowRight } from 'lucide-react';

// Import images for exhibitions
import img1 from '../assets/images/ef9b4c5816ab472896428fbbb59ebd29.jpeg';
import img2 from '../assets/images/6cc2eb932a474a6cad111d68b8fb334f.jpeg';
import img3 from '../assets/images/bca3eddc888045bbbcbc8d689341efb2.jpeg';
import img4 from '../assets/images/8f7ffae32ced4c4d9a8d5f6078a721a1.jpeg';
import img5 from '../assets/images/25a59a34176e4a378de82d3ad64f7c0b.jpeg';
import img6 from '../assets/images/50ad5f64ea534f869044073cb8738bc4.jpeg';

const exhibitions = [
  {
    id: 1,
    title: "Galería Mimo Arte",
    subtitle: "Primera exposición individual",
    date: "1967",
    location: "Santiago, Chile",
    description: "La primera exposición individual de Faiwel Wolfsdorf en la Galería Mimo Arte marcó el inicio de su trayectoria artística profesional. Esta muestra presentó sus primeras obras explorando el surrealismo y el automatismo creativo que caracterizarían toda su obra posterior.",
    images: [img1, img4],
    featured: true
  },
  {
    id: 2,
    title: "Galería Wircomb",
    subtitle: "Exposición individual",
    date: "1968",
    location: "Santiago, Chile",
    description: "Un año después de su debut, Wolfsdorf presentó su segunda exposición individual en la Galería Wircomb, consolidando su presencia en el circuito artístico chileno y estableciendo su estilo único dentro del surrealismo latinoamericano.",
    images: [img2, img5],
    featured: true
  },
  {
    id: 3,
    title: "AMIA - Asociación Mutual Israelita Argentina",
    subtitle: "Exposición colectiva",
    date: "1971",
    location: "Buenos Aires, Argentina",
    description: "Exposición realizada en la AMIA de Buenos Aires, donde Wolfsdorf presentó su obra en el contexto de la comunidad judía argentina. Esta exposición fortaleció los vínculos entre el artista y el circuito artístico sudamericano.",
    images: [img3, img6],
    featured: false
  },
  {
    id: 4,
    title: "Galería En Flores",
    subtitle: "De las moradas sus habitantes y algunas otras cosas",
    date: "1979",
    location: "Buenos Aires, Argentina",
    description: "Una de las exposiciones más emblemáticas de Wolfsdorf, realizada en la Galería En Flores de Buenos Aires. El título hace referencia a la exploración de los espacios interiores y la condición humana, tema central de su obra en esta época.",
    images: [img1, img2],
    featured: true
  },
  {
    id: 5,
    title: "Galería Ivonne Briceño",
    subtitle: "Exposición individual",
    date: "1981",
    location: "Santiago, Chile",
    description: "Exposición individual en la Galería Ivonne Briceño, donde Wolfsdorf presentó su serie de obras inspiradas en la figura humana y los arquetipos. Esta muestra representó un punto de inflexión en su carrera, consolidando su estilo maduro.",
    images: [img4, img5],
    featured: false
  },
  {
    id: 6,
    title: "Galería La Araña",
    subtitle: "Casualismo",
    date: "1982",
    location: "Santiago, Chile",
    description: "La última exposición documentada de Wolfsdorf en vida, realizada en la Galería La Araña bajo el concepto de 'Casualismo'. Esta muestra representó la culminación de su búsqueda artística, donde el azar y la intuición se unen para crear obras que exploran los límites entre lo consciente y lo inconsciente.",
    images: [img3, img6],
    featured: true
  }
];

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

const Gallery = () => {
  const [selectedExhibition, setSelectedExhibition] = useState(null);

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
            Un recorrido por las exposiciones más significativas que han presentado la obra de Faiwel Wolfsdorf a lo largo de su trayectoria artística.
          </p>
        </div>

        {/* Featured Exhibitions */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-stone-900 mb-8 text-center">Exposiciones Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exhibitions.filter(e => e.featured).map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedExhibition(exhibition)}
              >
                <div className="relative overflow-hidden aspect-[16/9] bg-stone-100 mb-4">
                  <img
                    src={exhibition.images[0]}
                    alt={exhibition.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                  <Calendar size={12} />
                  <span>{exhibition.date}</span>
                  <span className="mx-2">•</span>
                  <MapPin size={12} />
                  <span className="truncate">{exhibition.location}</span>
                </div>
                <h3 className="text-xl font-serif text-stone-900 group-hover:text-stone-700 transition-colors">{exhibition.title}</h3>
                <p className="text-sm text-stone-500 mt-1">{exhibition.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Exhibitions Grid */}
        <div>
          <h2 className="text-2xl font-serif text-stone-900 mb-8 text-center">Todas las Exposiciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitions.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer bg-white border border-stone-200 p-4 hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedExhibition(exhibition)}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-stone-100 mb-4">
                  <img
                    src={exhibition.images[0]}
                    alt={exhibition.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                  <Calendar size={12} />
                  <span>{exhibition.date}</span>
                </div>
                <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-700 transition-colors">{exhibition.title}</h3>
                <p className="text-sm text-stone-500 mt-1 line-clamp-2">{exhibition.description}</p>
                <div className="mt-4 flex items-center text-xs text-stone-900 uppercase tracking-widest group-hover:gap-2 transition-all">
                  Ver más <ArrowRight size={14} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Exhibition Detail Modal */}
      <AnimatePresence>
        {selectedExhibition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm"
            onClick={() => setSelectedExhibition(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedExhibition.images[0]}
                  alt={selectedExhibition.title}
                  className="w-full aspect-video object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  onClick={() => setSelectedExhibition(null)}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                  <Calendar size={14} />
                  <span>{selectedExhibition.date}</span>
                  <span className="mx-2">•</span>
                  <MapPin size={14} />
                  <span>{selectedExhibition.location}</span>
                </div>
                <h2 className="text-3xl font-serif text-stone-900 mb-2">{selectedExhibition.title}</h2>
                <p className="text-lg text-stone-600 mb-6">{selectedExhibition.subtitle}</p>
                <p className="text-stone-700 leading-relaxed mb-8">{selectedExhibition.description}</p>
                
                {/* Additional Images */}
                {selectedExhibition.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {selectedExhibition.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${selectedExhibition.title} - imagen ${idx + 1}`}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;