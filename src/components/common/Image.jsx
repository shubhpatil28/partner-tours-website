import React, { useState } from "react";
import { FALLBACK_IMAGE } from "../../utils/imageUtils";

/**
 * Enterprise-grade Image component for Partner's Tours & Travels.
 * 
 * Features:
 * - Smart Retry: Cache-busting (?retry=1) on first error.
 * - Responsive: Mandatory sizes with smart mobile-first defaults.
 * - Stability: Forced display: block and CLS protection.
 * - Compliance: ReferrerPolicy for secure CDN loads.
 * - Performance: fetchPriority, decoding="async", and lazy loading.
 */
const Image = React.memo(({
  src,
  alt = "Tour Image",
  width,
  height,
  priority = false,
  srcSet,
  sizes = "(max-width: 768px) 100vw, 50vw", // Optimized for grid-based tour layouts
  className = "",
  style,
  ...props
}) => {
  const [errorCount, setErrorCount] = useState(0);

  const handleError = (e) => {
    // Prevent recursive loops
    if (e.target.src === FALLBACK_IMAGE) return;

    if (errorCount < 1) {
      setErrorCount(1);
      // Cache-busting retry logic
      const retrySrc = src.includes("?")
        ? `${src}&retry=1`
        : `${src}?retry=1`;
      
      e.target.src = retrySrc;
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
      // @ts-ignore
      fetchpriority={priority ? "high" : "auto"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      className={`image-component ${className}`}
      style={{
        display: "block",
        backgroundColor: "#0f172a",
        objectFit: "cover",
        transition: "all 0.4s ease-in-out",
        ...style
      }}
      {...props}
    />
  );
});

export default Image;
