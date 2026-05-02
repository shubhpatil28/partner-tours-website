import React, { useState } from "react";
import { handleImageError } from "../../utils/imageUtils";

/**
 * Production-optimized Image component for Partner's Tours & Travels.
 * 
 * Performance & SEO Features:
 * - Decoding="async" for non-blocking rendering.
 * - Width/Height support to prevent Cumulative Layout Shift (CLS).
 * - Priority prop for LCP optimization (loading="eager").
 * - React.memo to prevent unnecessary re-renders.
 * - UX blur-to-clear transition effect.
 */
const Image = React.memo(({ 
  src, 
  alt = "Tour Image", 
  className = "", 
  width,
  height,
  priority = false, // Set to true for hero/above-the-fold images
  style,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const defaultAlt = alt || "Tour Package Image - Partner's Tours Chalisgaon";

  return (
    <img
      src={src}
      alt={defaultAlt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      onError={handleImageError}
      className={`image-component ${className}`}
      style={{
        backgroundColor: "#0f172a",
        objectFit: "cover",
        transition: "all 0.4s ease-in-out",
        opacity: isLoaded ? 1 : 0.6,
        filter: isLoaded ? "blur(0px)" : "blur(6px)",
        ...style
      }}
      {...props}
    />
  );
});

export default Image;
