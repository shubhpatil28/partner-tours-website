import React, { useState } from "react";
import { FALLBACK_IMAGE } from "../../utils/imageUtils";

/**
 * Enterprise++ Optimized Image component for Partner's Tours & Travels.
 * 
 * Enhancements:
 * - Smart Retry: Detects and prevents duplicate retry parameters.
 * - SEO Enforcement: Fallback alt text ensures search engine accessibility.
 * - LCP Tuning: decoding="sync" for priority assets to speed up Largest Contentful Paint.
 * - Stability: Retains all previous hardening (srcSet, fetchPriority, block-layout).
 */
const Image = React.memo(({
  src,
  alt,
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
    // Safety check for fallback failure
    if (e.target.src === FALLBACK_IMAGE) return;

    if (errorCount < 1) {
      setErrorCount(1);
      
      // Prevent duplicate retry parameters
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
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt || "Travel destination image"}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      // @ts-ignore
      fetchpriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
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
