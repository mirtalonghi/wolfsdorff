import React, { useState } from 'react';

const ImageItem = ({ image, onClick }) => {
  const { src, title } = image;
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="break-inside-avoid cursor-pointer group border border-stone-200 rounded overflow-hidden bg-white hover:border-stone-400 transition-colors duration-300"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={title || ''}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-auto block group-hover:scale-[1.03] transition-all duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!loaded && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-stone-100 animate-pulse pointer-events-none"
            style={{ minHeight: '180px' }}
          />
        )}
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
