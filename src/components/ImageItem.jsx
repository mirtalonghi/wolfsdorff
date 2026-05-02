import React, { useState } from 'react';

const ImageItem = ({ src, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="break-inside-avoid cursor-pointer overflow-hidden group" onClick={onClick}>
      <img
        src={src}
        alt=""
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0 h-0'}`}
      />
      {!loaded && <div className="w-full aspect-[4/3] bg-stone-200 dark:bg-stone-700 animate-pulse" />}
    </div>
  );
};

export default ImageItem;