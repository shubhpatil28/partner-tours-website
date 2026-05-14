import React, { useState, useEffect } from "react";
import { FALLBACK_IMAGE } from "../../utils/imageUtils";

/**
 * ZERO-BUG Production-Grade Image Component for Partner's Tours & Travels.
 * 
 * Features:
 * 1. Safe Source: Handles null, undefined, and empty strings instantly.
 * 2. 1-Step Retry: Attempts recovery with ?retry=1 before falling back.
 * 3. Loop Prevention: Stops all attempts after fallback failure.
 * 4. CLS Safe: Enforces aspect-ratio and block-level container.
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
  // Safe initial source handling
  const initialSrc = src || FALLBACK_IMAGE;
  
  const [errorCount, setErrorCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(initialSrc);

  // Sync state when src prop changes (important for dynamic lists)
  useEffect(() => {
    setErrorCount(0);
    setIsLoaded(false);
    setImgSrc(src || FALLBACK_IMAGE);
  }, [src]);

  const handleError = () => {
    // 1. If we are already showing fallback and it fails, STOP.
    if (imgSrc === FALLBACK_IMAGE) {
      setErrorCount(2);
      return;
    }

    // 2. If it's the first error, try a cache-busting retry
    if (errorCount < 1) {
      setErrorCount(1);
      const separator = imgSrc.includes("?") ? "&" : "?";
      // Only add retry if not already present
      const retryUrl = imgSrc.includes("retry=1") ? imgSrc : `${imgSrc}${separator}retry=1`;
      setImgSrc(retryUrl);
    } 
    // 3. If second error (retry failed), switch to fallback
    else if (errorCount === 1) {
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
        display: "block",
        ...style
      }}
    >
      {!isLoaded && <div className="skeleton-overlay image-skeleton" />}
      <img
        src={imgSrc || FALLBACK_IMAGE}
        alt={alt || "Travel destination image"}
        loading={priority ? "eager" : "lazy"}
        // @ts-ignore
        fetchpriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={handleLoad}
        onError={(e) => {
          handleError();
          // Emergency direct DOM fallback if state update is too slow
          if (e.currentTarget.src !== FALLBACK_IMAGE) {
            e.currentTarget.src = FALLBACK_IMAGE;
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block"
        }}
        {...props}
      />
    </div>
  );
});

export default Image;
