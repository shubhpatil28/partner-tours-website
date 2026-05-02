/**
 * Shared image error handler for tour packages and blogs.
 * Returns a high-quality travel-themed placeholder if the original image fails to load.
 */
export const handleImageError = (e) => {
  e.target.onerror = null; // Prevent infinite loop
  e.target.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800";
};

/**
 * Helper to ensure consistent image paths for production.
 * Handles assets import or public folder paths.
 */
export const getOptimizedImg = (path) => {
  if (!path) return "https://via.placeholder.com/800x400?text=Image+Not+Found";
  return path;
};
