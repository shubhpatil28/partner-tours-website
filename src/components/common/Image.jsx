import React, { useState, useEffect } from "react";
import { FALLBACK_IMAGE } from "../../utils/imageUtils";

/**
 * FINAL Production-Grade Image Component for Partner's Tours & Travels.
 * 
 * This component is the centralized solution for all image rendering across the platform,
 * providing enterprise-level performance, SEO resilience, and layout stability.
 * 
 * Features:
 * 1. CLS Protection: Forced block-level display and explicit width/height support.
 * 2. LCP Optimization: High-priority loading for above-the-fold hero assets.
 * 3. Network Resilience: Smart 1-step retry with cache-busting and loop prevention.
 * 4. Dynamic Stability: Automatic state reset on source changes to handle interactive UI.
 * 5. SEO & Accessibility: Guaranteed alt-text presence for better indexing.
 */
const Image = React.memo(({
  src,
  alt,
  width,
  height,
  priority = false, // Set to true for Hero/Header images
  srcSet,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  style,
  ...props
}) => {
  const [errorCount, setErrorCount] = useState(0);

  // 1. State Reset: Ensure new images get a fresh retry attempt when dynamic content updates
  useEffect(() => {
    setErrorCount(0);
  }, [src]);

  const handleError = (e) => {
    // 2. Rendering Safety: Prevent infinite loops if the fallback image itself fails
    if (!src || e.target.src === FALLBACK_IMAGE) return;

    if (errorCount < 1) {
      setErrorCount(1);
      
      // 3. Smart Retry: Attempt recovery with cache-busting (?retry=1) 
      // only if not already attempted (prevents duplicate params)
      const retrySrc = src.includes("retry=")
        ? src
        : src.includes("?")
        ? `${src}&retry=1`
        : `${src}?retry=1`;

      e.target.src = retrySrc;
    } else {
      // 4. Final Fallback: Switch to production-safe placeholder after retry failure
      setErrorCount(2);
      e.target.src = FALLBACK_IMAGE;
    }
  };

  return (
    <img
      // 5. Safe Source Handling: Immediate fallback if src is null or undefined
      src={src || FALLBACK_IMAGE}
      srcSet={srcSet}
      sizes={sizes}
      // 6. Accessibility & SEO: Enforce fallback alt text
      alt={alt || "Travel destination image"}
      width={width}
      height={height}
      // 7. Performance: Conditional loading strategy for LCP vs Lazy
      loading={priority ? "eager" : "lazy"}
      // @ts-ignore - fetchPriority is supported in modern Chrome/Edge and React 18.2+
      fetchpriority={priority ? "high" : "auto"}
      // 8. Non-blocking UI: Async decoding for all images to prevent CPU stalls
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      className={`image-component ${className}`}
      style={{
        // 9. Layout Stability: Forced block display to eliminate baseline gaps
        display: "block",
        backgroundColor: "#0f172a", // Dark placeholder background
        objectFit: "cover",
        transition: "opacity 0.4s ease-in-out",
        ...style
      }}
      {...props}
    />
  );
});

export default Image;
