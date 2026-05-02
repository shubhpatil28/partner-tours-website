/**
 * Enhanced image utility for Partner's Tours & Travels.
 * Centralizes fallback logic and error handling.
 */

export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800";

export const handleImageError = (e) => {
  if (e?.target) {
    e.target.onerror = null; // Prevent infinite fallback loop
    e.target.src = FALLBACK_IMAGE;
  }
};

/**
 * Ensures consistent image pathing for both imported assets and public folder paths.
 */
export const getOptimizedImg = (path) => {
  if (!path) return FALLBACK_IMAGE;
  return path;
};
