import React, { useState } from 'react';
import { handleImageError } from '../../utils/imageUtils';

/**
 * Reusable Image component for Partner's Tours & Travels.
 * Features:
 * - Automatic fallback to high-quality placeholder on error
 * - Native lazy loading for performance
 * - Dark background placeholder to prevent layout shift and visual "pop"
 * - Responsive object-fit support
 */
const Image = ({ 
  src, 
  alt = "Tour Image", 
  className = "", 
  style = {}, 
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const baseStyle = {
    backgroundColor: "#0f172a", // Dark slate background for "blur/skeleton" feel
    objectFit: "cover",
    transition: "opacity 0.4s ease-in-out",
    opacity: isLoaded ? 1 : 0.6,
    ...style
  };

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={handleImageError}
      onLoad={() => setIsLoaded(true)}
      className={className}
      style={baseStyle}
      {...props}
    />
  );
};

export default Image;
