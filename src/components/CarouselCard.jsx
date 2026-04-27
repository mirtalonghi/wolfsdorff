import { useState } from 'react';
import { motion } from 'framer-motion';

const CarouselCard = ({ images, title, description, onOpen, delay = 0 }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group bg-stone-50 transition-all duration-300 cursor-pointer"
      onClick={() => onOpen(images)}
      onMouseEnter={() => setShowCarousel(true)}
      onMouseLeave={() => setShowCarousel(false)}
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        {showCarousel ? (
          <motion.img
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={images[currentImage]}
            alt={`${title} ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5">
            <img src={images[0]} alt="" className="w-full h-full object-cover" />
            <img src={images[1]} alt="" className="w-full h-full object-cover" />
            <img src={images[2]} alt="" className="w-full h-full object-cover" />
            <div className="relative">
              <img src={images[3]} alt="" className="w-full h-full object-cover" />
              {images[4] && (
                <img src={images[4]} alt="" className="w-1/2 h-1/2 object-cover absolute bottom-0 right-0" />
              )}
            </div>
          </div>
        )}

        {showCarousel && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImage === index ? 'bg-stone-900' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-serif text-stone-900 mb-2">{title}</h3>
        <p className="text-sm text-stone-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default CarouselCard;
