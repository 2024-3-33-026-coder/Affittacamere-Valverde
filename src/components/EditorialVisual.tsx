import React, { useState } from 'react';

interface EditorialVisualProps {
  type: 'hero' | 'room' | 'breakfast' | 'pool' | 'detail' | 'landscape';
  title?: string;
  subtitle?: string;
  aspect?: '16:9' | '4:3' | '3:4' | '1:1';
  className?: string;
  imgSrc?: string;
  altText?: string;
  onClick?: () => void;
}

const DEFAULT_REAL_PHOTOS: Record<string, string> = {
  hero: '/assets/images/valverde-hero.jpg',
  breakfast: '/assets/images/valverde-breakfast.jpg',
  room: '/assets/images/valverde-room-01.jpg',
  pool: '/assets/images/valverde-pool.jpg',
  landscape: '/assets/images/valverde-landscape.jpg',
  detail: '/assets/images/valverde-detail.jpg',
};

export const EditorialVisual: React.FC<EditorialVisualProps> = ({
  type,
  title,
  subtitle,
  aspect = '16:9',
  className = '',
  imgSrc,
  altText = 'Affittacamere Valverde authentic property photograph',
  onClick,
}) => {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Always prefer explicit imgSrc, then the real property default for this section type
  const resolvedSrc = imgSrc || DEFAULT_REAL_PHOTOS[type];

  const aspectClass =
    aspect === '16:9'
      ? 'aspect-[16/9]'
      : aspect === '4:3'
      ? 'aspect-[4/3]'
      : aspect === '3:4'
      ? 'aspect-[3/4]'
      : 'aspect-square';

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#24211D] select-none ${aspectClass} ${className} ${
        onClick ? 'cursor-pointer group' : ''
      }`}
    >
      {/* Real Authentic Property Photograph */}
      {resolvedSrc && !imgError && (
        <img
          src={resolvedSrc}
          alt={altText}
          loading="eager"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] ${
            isLoaded ? 'opacity-100' : 'opacity-80 blur-xs'
          }`}
        />
      )}

      {/* Subtle tactile film grain on top of photograph */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:16px_16px] opacity-35 mix-blend-overlay" />

      {/* Optional editorial overlay caption */}
      {(title || subtitle) && (
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white z-10">
          {subtitle && (
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#E4DCCF] font-sans mb-1 font-medium">
              {subtitle}
            </span>
          )}
          {title && (
            <h4 className="font-serif text-lg md:text-xl font-normal tracking-wide text-white">
              {title}
            </h4>
          )}
        </div>
      )}
    </div>
  );
};
