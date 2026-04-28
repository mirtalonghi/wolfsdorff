import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const CriticaCard = ({ publicacion, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative overflow-hidden bg-stone-100 aspect-[3/4] mb-4 flex items-center justify-center">
      <img
        src={publicacion.imagenes[0]}
        alt={publicacion.publicacion}
        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
      {publicacion.imagenes.length > 1 && (
        <span className="absolute bottom-2 right-2 bg-stone-900/70 text-white text-[10px] px-2 py-0.5 uppercase tracking-widest">
          {publicacion.imagenes.length} páginas
        </span>
      )}
    </div>
    <p className="font-serif text-lg text-stone-900 group-hover:text-stone-600 transition-colors leading-snug">
      {publicacion.publicacion}
    </p>
    <div className="flex items-center gap-1 text-xs text-stone-500 mt-1">
      <MapPin size={10} />
      <span>{publicacion.pais}</span>
      <span className="mx-1">·</span>
      <span>{publicacion.fecha}</span>
    </div>
  </motion.div>
);

export default CriticaCard;
