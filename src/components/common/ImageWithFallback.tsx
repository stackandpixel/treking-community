import React, { useState } from 'react';
import { Mountain } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
}

/**
 * Resilient Image Component enforcing Zero-Broken-Image Policy:
 * - Automatically injects referrerPolicy="no-referrer"
 * - Displays a styled CSS gradient fallback with outdoor icon if the remote URL fails
 */
export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Outdoor scenery',
  fallbackTitle,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#122319] via-[#0d1a13] to-[#08100c] text-emerald-100/70 p-4 border border-emerald-950/40 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#1b3d2b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
        <Mountain className="w-10 h-10 text-emerald-500/50 mb-2" />
        <span className="text-xs font-medium tracking-wide uppercase text-emerald-300/80 text-center line-clamp-1">
          {fallbackTitle || alt || 'Trail Tribe India'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#14261c] to-[#0a120e] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
