import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageItem from './ImageItem';

const BATCH = 24;

const GalleryGrid = ({ images, galleryKey, onImageClick }) => {
  const [visibleCount, setVisibleCount] = useState(BATCH);
  const sentinelRef = useRef(null);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  useEffect(() => {
    setVisibleCount(BATCH);
  }, [galleryKey]);

  useEffect(() => {
    if (!hasMore || !sentinelRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisibleCount(n => Math.min(n + BATCH, images.length));
      },
      { rootMargin: '300px' }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, images.length]);

  return (
    <>
      <p className="text-center text-xs text-stone-400 uppercase tracking-widest mb-8">
        {visibleImages.length} / {images.length} obras
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={galleryKey}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
        >
          {visibleImages.map((image, i) => (
            <ImageItem key={image.src} image={image} onClick={() => onImageClick(images, i)} />
          ))}
        </motion.div>
      </AnimatePresence>

      {hasMore && (
        <div ref={sentinelRef} className="flex justify-center py-12">
          <div className="w-6 h-6 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin" />
        </div>
      )}
    </>
  );
};

export default GalleryGrid;