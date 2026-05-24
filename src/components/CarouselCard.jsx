import { useState } from 'react';
import { motion } from 'framer-motion';

const CarouselCard = ({ images, title, description, onOpen, delay = 0, compact }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative cursor-pointer bg-gradient-to-b from-white to-stone-50 ring-1 ring-stone-200/90 shadow-[0_4px_24px_-8px_rgba(28,25,23,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(28,25,23,0.18)] hover:ring-stone-300/80 dark:from-stone-900 dark:to-stone-950 dark:ring-stone-700/70 dark:hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.45)] dark:hover:ring-stone-600/70 ${compact ? 'mx-auto w-full max-w-[min(100%,17rem)] sm:max-w-[18.5rem] md:max-w-xs lg:max-w-sm' : ''}`}
      onClick={() => onOpen(images)}
      onMouseEnter={() => setShowCarousel(true)}
      onMouseLeave={() => setShowCarousel(false)}
    >
      <div className={`relative overflow-hidden ring-1 ring-inset ring-black/[0.04] ${compact ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-stone-950/25 via-transparent to-stone-950/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

        {showCarousel ? (
          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            src={images[currentImage]}
            alt={`${title} ${currentImage + 1}`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-px bg-stone-300/80 dark:bg-stone-700/80 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
            <img src={images[0]} alt="" className="h-full w-full object-cover" />
            <img src={images[1]} alt="" className="h-full w-full object-cover" />
            <img src={images[2]} alt="" className="h-full w-full object-cover" />
            <div className="relative bg-stone-100 dark:bg-stone-800">
              <img src={images[3]} alt="" className="h-full w-full object-cover" />
              {images[4] && (
                <img src={images[4]} alt="" className="absolute bottom-0 right-0 h-1/2 w-1/2 object-cover ring-1 ring-white/60" />
              )}
            </div>
          </div>
        )}

        {showCarousel && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
              }}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 dark:bg-stone-800/95 dark:text-stone-100 p-2 shadow-md ring-1 ring-stone-200/80 dark:ring-stone-600/80 backdrop-blur-sm transition hover:bg-white dark:hover:bg-stone-700"
              aria-label="Imagen anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 dark:bg-stone-800/95 dark:text-stone-100 p-2 shadow-md ring-1 ring-stone-200/80 dark:ring-stone-600/80 backdrop-blur-sm transition hover:bg-white dark:hover:bg-stone-700"
              aria-label="Imagen siguiente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 z-20 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center justify-center gap-2">
              {images.length <= 14 ? (
                images.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImage(dotIdx);
                    }}
                    className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                      currentImage === dotIdx ? 'bg-stone-900 dark:bg-stone-100' : 'bg-white/50 dark:bg-stone-600/80'
                    }`}
                    aria-label={`Ir a imagen ${dotIdx + 1}`}
                  />
                ))
              ) : (
                <span className="rounded-full bg-black/35 px-2.5 py-0.5 font-mono text-[10px] tabular-nums text-white/95 backdrop-blur-sm">
                  {currentImage + 1} / {images.length}
                </span>
              )}
            </div>
          </>
        )}
      </div>

      <div className={`border-t border-stone-100 dark:border-stone-800 bg-white/60 dark:bg-stone-900/70 text-center backdrop-blur-[2px] ${compact ? 'px-4 pb-5 pt-5' : 'px-6 pb-7 pt-8'}`}>
        <h3 className={`font-serif leading-snug tracking-tight text-stone-900 dark:text-stone-100 ${compact ? 'text-base sm:text-[1.05rem]' : 'text-[1.15rem] sm:text-xl'}`}>{title}</h3>
        <p className="mx-auto mt-2 max-w-[28ch] font-sans text-xs uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default CarouselCard;
