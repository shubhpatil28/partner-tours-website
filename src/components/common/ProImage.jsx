import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FALLBACK_IMAGE } from '../../utils/imageUtils';

/**
 * ProImage - Advanced production-grade image component
 * Features: Lazy loading, Retry logic, Skeleton loading, Fade-in, SEO optimized
 */
const ProImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false, 
  width, 
  height, 
  aspectRatio,
  style = {},
  objectFit = 'cover',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    skip: priority // Load immediately if priority is high
  });

  // Reset state if src changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoaded(false);
    setErrorCount(0);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (errorCount === 0 && src && !src.startsWith('data:')) {
      // First retry with cache buster
      const separator = src.includes('?') ? '&' : '?';
      setImgSrc(`${src}${separator}retry=1`);
      setErrorCount(1);
    } else {
      // Second failure - show fallback
      setImgSrc(FALLBACK_IMAGE);
      setErrorCount(2);
    }
  };

  // Generate srcSet for Unsplash or supported CDNs
  const getSrcSet = () => {
    if (typeof imgSrc !== 'string' || !imgSrc.includes('unsplash.com')) return undefined;
    const cleanUrl = imgSrc.split('?')[0];
    const params = "auto=format&fit=crop&q=80";
    return `
      ${cleanUrl}?${params}&w=400 400w,
      ${cleanUrl}?${params}&w=800 800w,
      ${cleanUrl}?${params}&w=1200 1200w,
      ${cleanUrl}?${params}&w=1600 1600w
    `.replace(/\s+/g, ' ').trim();
  };

  const shouldRender = priority || inView;

  return (
    <div 
      ref={ref}
      className={`pro-image-container ${isLoaded ? 'is-loaded' : 'is-loading'} ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
        aspectRatio: aspectRatio || (width && height ? `${width} / ${height}` : 'auto'),
        ...style
      }}
    >
      {/* Skeleton Shimmer */}
      {!isLoaded && (
        <div className="pro-image-skeleton" />
      )}

      {shouldRender && (
        <img
          src={imgSrc || FALLBACK_IMAGE}
          srcSet={getSrcSet()}
          sizes={props.sizes || "(max-width: 768px) 100vw, 50vw"}
          alt={alt || "Partner's Bus Service"}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          // @ts-ignore
          fetchpriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: objectFit,
            display: 'block',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            ...props.imgStyle
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default ProImage;
