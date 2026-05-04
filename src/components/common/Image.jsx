import React, { useState, useEffect } from "react";
import { FALLBACK_IMAGE } from "../../utils/imageUtils";

/**
 * Production-Grade Image Component for Partner's Tours & Travels.
 * 
 * Features:
 * 1. Smart Retry: 1-step retry with ?retry=1 before falling back to placeholder.
 * 2. UX: Blur-to-clear transition and skeleton background while loading.
 * 3. Performance: Lazy loading by default, high priority for hero assets.
 * 4. Stability: CLS safe with block display and aspect-ratio support.
 */
const Image = React.memo(({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  style,
  ...props
}) => {
  const [errorCount, setErrorCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);

  // Reset state when src changes
  useEffect(() => {
    setErrorCount(0);
    setIsLoaded(false);
    setImgSrc(src || FALLBACK_IMAGE);
  }, [src]);

  const handleError = () => {
    // Prevent infinite loops if fallback fails
    if (!imgSrc || imgSrc === FALLBACK_IMAGE) return;

    if (errorCount < 1) {
      setErrorCount(1);
      const retrySrc = imgSrc.includes("?") 
        ? `${imgSrc}&retry=1` 
        : `${imgSrc}?retry=1`;
      setImgSrc(retrySrc);
    } else {
      setErrorCount(2);
      setImgSrc(FALLBACK_IMAGE);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className={`image-wrapper ${isLoaded ? "loaded" : "loading"} ${className}`}
      style={{
        width: width ? (typeof width === 'number' ? `${width}px` : width) : "100%",
        aspectRatio: (width && height) ? `${width} / ${height}` : "auto",
        ...style
      }}
    >
      {!isLoaded && <div className="skeleton-overlay" />}
      <img
        src={imgSrc}
        alt={alt || "Travel destination image"}
        loading={priority ? "eager" : "lazy"}
        // @ts-ignore
        fetchpriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
});

export default Image;
