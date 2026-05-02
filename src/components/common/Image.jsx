import React, { useState } from "react";
import { FALLBACK_IMAGE } from "../../utils/imageUtils";

/**
 * Clean & Production-Safe Image component for Partner's Tours & Travels.
 * 
 * Optimized for:
 * - UI Stability: Block-level rendering and zero CLS.
 * - Loading Strategy: Conditional priority for above-the-fold content.
 * - Resilience: Smart 1-step retry with duplicate prevention.
 * - Accessibility: Guaranteed fallback and alt text protection.
 */
const Image = React.memo(({
  src,
  alt = "Tour Image",
  width,
  height,
  priority = false,
  srcSet,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  style,
  ...props
}) => {
  const [errorCount, setErrorCount] = useState(0);

  const handleError = (e) => {
    // Immediate stop for empty sources or failed fallbacks
    if (!src || e.target.src === FALLBACK_IMAGE) return;

    if (errorCount < 1) {
      setErrorCount(1);
      
      // Prevent duplicate retry parameters in URL
      const retrySrc = src.includes("retry=")
        ? src
        : src.includes("?")
        ? `${src}&retry=1`
        : `${src}?retry=1`;

      e.target.src = retrySrc;
    } else {
      setErrorCount(2);
      e.target.src = FALLBACK_IMAGE;
    }
  };

  return (
    <img
      src={src || FALLBACK_IMAGE}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      // @ts-ignore - modern browser and React support
      fetchpriority={priority ? "high" : "auto"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      className={`image-component ${className}`}
      style={{
        display: "block",
        backgroundColor: "#0f172a",
        objectFit: "cover",
        transition: "opacity 0.4s ease-in-out",
        ...style
      }}
      {...props}
    />
  );
});

export default Image;
