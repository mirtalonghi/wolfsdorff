import React, { useState } from 'react';

const ImageItem = ({ image, onClick }) => {
  const { src, title } = image;
  const [loaded, setLoaded] = useState(false);

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
          className={`w-full h-auto block group-hover:scale-[1.03] transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'
            }`}
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
