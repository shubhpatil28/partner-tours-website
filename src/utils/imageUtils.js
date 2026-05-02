export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800";

/**
 * Generates an Unsplash srcSet for responsive images.
 * @param {string} baseUrl - The base unsplash URL.
 * @returns {string} - The srcSet string.
 */
export const getUnsplashSrcSet = (baseUrl) => {
  if (!baseUrl || !baseUrl.includes('unsplash.com')) return null;
  
  // Clean the URL of existing width parameters
  const cleanUrl = baseUrl.split('?')[0];
  const params = "auto=format&fit=crop&q=80";

  return `
    ${cleanUrl}?${params}&w=400 400w,
    ${cleanUrl}?${params}&w=800 800w,
    ${cleanUrl}?${params}&w=1200 1200w,
    ${cleanUrl}?${params}&w=1600 1600w
  `.replace(/\s+/g, ' ').trim();
};

export const handleImageError = (e) => {
  if (e?.target) {
    e.target.onerror = null; // prevent loop
    e.target.src = FALLBACK_IMAGE;
  }
};
