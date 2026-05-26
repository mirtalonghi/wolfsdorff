import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageItem = ({ image, onClick, cardMode = false }) => {
  const { src, title, description } = image;
  const [loaded, setLoaded] = useState(false);

  if (cardMode) {
    return (
      <motion.div
        className="cursor-pointer rounded-sm overflow-hidden bg-white dark:bg-stone-800 shadow-md"
        whileHover={{ y: -7, boxShadow: '0 24px 48px rgba(0,0,0,0.18)' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={onClick}
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={src}
            alt={title || ''}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
          {!loaded && <div className="w-full h-full bg-stone-200 dark:bg-stone-700 animate-pulse" />}
        </div>
        {(title || description) && (
          <div className="p-4 border-t border-stone-100 dark:border-stone-700">
            {title && (
              <p className="text-stone-800 dark:text-stone-200 text-sm font-serif leading-snug mb-1">
                {title}
              </p>
            )}
            {description && (
              <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed line-clamp-3">
                {description}
              </p>
            )}
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <div
      className="break-inside-avoid cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={title || ''}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-auto block group-hover:scale-[1.03] transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {!loaded && <div className="w-full aspect-[4/3] bg-stone-200 dark:bg-stone-700 animate-pulse" />}
      </div>
      {title && (
        <div className="px-3 py-2 border-t border-stone-100">
          <p className="text-stone-600 text-xs font-serif truncate">{title}</p>
        </div>
      )}
    </div>
  );
};

export default ImageItem;
