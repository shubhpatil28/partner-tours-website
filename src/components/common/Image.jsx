import React, { useState } from "react";
import { FALLBACK_IMAGE } from "../../utils/imageUtils";

/**
 * Enterprise-hardened Image component for Partner's Tours & Travels.
 * 
 * Performance & SEO Hardening:
 * - srcSet & sizes for responsive delivery.
 * - fetchpriority="high" for hero LCP optimization.
 * - 1-step error retry logic before fallback.
 * - WebP/CDN-ready structure.
 * - Async decoding + CLS stability.
 */
const Image = React.memo(({
  src,
  alt = "Tour Image",
  width,
  height,
  priority = false,
  className = "",
  style,
  srcSet,
  sizes,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  const handleError = (e) => {
    // Prevent infinite loops if fallback also fails
    if (e.target.src === FALLBACK_IMAGE) return;

    if (errorCount < 1) {
      setErrorCount(1);
      // Simple retry logic by re-setting the same src
      e.target.src = src; 
    } else {
      setErrorCount(2);
      e.target.src = FALLBACK_IMAGE;
    }
  };

  const defaultAlt = alt || "Tour Package Image - Partner's Tours Chalisgaon";

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={defaultAlt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      // @ts-ignore - fetchPriority is supported in modern browsers and recent React
      fetchpriority={priority ? "high" : "auto"}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      onError={handleError}
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
