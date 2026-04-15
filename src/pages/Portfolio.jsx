import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Import images
import img1 from '../assets/images/ef9b4c5816ab472896428fbbb59ebd29.jpeg';
import img2 from '../assets/images/6cc2eb932a474a6cad111d68b8fb334f.jpeg';
import img3 from '../assets/images/bca3eddc888045bbbcbc8d689341efb2.jpeg';
import img4 from '../assets/images/8f7ffae32ced4c4d9a8d5f6078a721a1.jpeg';
import img5 from '../assets/images/25a59a34176e4a378de82d3ad64f7c0b.jpeg';
import img6 from '../assets/images/50ad5f64ea534f869044073cb8738bc4.jpeg';

const artworks = [
  {
    id: 1,
    title: "La Vigilia del Sueño",
    category: "Ecos del Inconsciente",
    image: img1,
    description: "Una exploración de las formas que habitan en el umbral del sueño, donde el azul profundo representa la inmersión en el subconsciente.",
    technique: "Óleo sobre lienzo"
  },
  {
    id: 2,
    title: "Ancestros de la Memoria",
    category: "Figuras y Arquetipos",
    image: img2,
    description: "La representación de la herencia y el tiempo a través de la figura humana, utilizando tonos rojos viscerales para evocar la sangre y la vida.",
    technique: "Mixta sobre madera"
  },
  {
    id: 3,
    title: "De la Oscuridad a la Luz",
    category: "Serie Humanística",
    image: img3,
    description: "Testimonio visual de la transformación y la esperanza, inspirado en su labor social con jóvenes.",
    technique: "Óleo"
  },
  {
    id: 4,
    title: "Laberinto Cromático",
    category: "Ecos del Inconsciente",
    image: img4,
    description: "El color como vehículo de emoción pura, sin ataduras a la forma figurativa.",
    technique: "Acuarela y Tinta"
  },
  {
    id: 5,
    title: "Silencio Interior",
    category: "Figuras y Arquetipos",
    image: img5,
    description: "Un estudio sobre la introspección y el silencio necesario para la creación.",
    technique: "Óleo sobre lienzo"
  },
  {
    id: 6,
    title: "Metamorfosis",
    category: "Serie Humanística",
    image: img6,
    description: "La constante evolución del ser humano a través de las etapas de la vida.",
    technique: "Mixta"
  }
];

const categories = ["Todos", "Ecos del Inconsciente", "Figuras y Arquetipos", "Serie Humanística"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filteredArtworks = selectedCategory === "Todos"
    ? artworks
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <div className="pt-12 pb-24 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6">Galería</span>
          <h1 className="text-4xl font-serif mb-8 text-stone-900">Colección</h1>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm uppercase tracking-widest pb-2 transition-all ${selectedCategory === category
                    ? 'text-stone-900 border-b-2 border-stone-900'
                    : 'text-stone-400 hover:text-stone-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredArtworks.map((art, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                key={art.id}
                className="group cursor-pointer"
                onClick={() => setSelectedArtwork(art)}
              >
                <div className="relative overflow-hidden aspect-[3/4] bg-stone-100 mb-4">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-serif text-stone-900 group-hover:text-stone-700 transition-colors">{art.title}</h3>
                <p className="text-sm text-stone-500">{art.technique}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedArtwork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-stone-50/98 p-4 md:p-8"
              onClick={() => setSelectedArtwork(null)}
            >
              <button
                className="absolute top-8 right-8 text-stone-500 hover:text-stone-900 p-2"
                onClick={() => setSelectedArtwork(null)}
              >
                <X size={32} />
              </button>

              <div
                className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-[2rem] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="max-h-[80vh] overflow-hidden flex items-center justify-center bg-stone-100">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="p-8 md:p-12">
                  <span className="text-stone-900 text-xs uppercase tracking-widest mb-2 block">{selectedArtwork.category}</span>
                  <h2 className="text-4xl font-serif mb-4 text-stone-900">{selectedArtwork.title}</h2>
                  <p className="text-stone-600 leading-relaxed mb-6">{selectedArtwork.description}</p>
                  <p className="text-sm text-stone-500">{selectedArtwork.technique}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;