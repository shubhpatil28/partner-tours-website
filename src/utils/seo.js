/**
 * Dynamic SEO and Schema management
 */
export const updateMetaTags = ({ title, description, image, url }) => {
  if (typeof document === 'undefined') return;

  // Title
  document.title = `${title} | Partner's Tours & Travels`;

  // Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', description);

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute('content', image);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', url || window.location.href);
};

export const injectStructuredData = (data) => {
  if (typeof document === 'undefined') return;

  const scriptId = 'structured-data-script';
  let script = document.getElementById(scriptId);
  
  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.innerHTML = JSON.stringify(data);
};

export const getTourSchema = (tour) => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": tour.title,
  "image": tour.image,
  "description": tour.duration + " tour to " + tour.category,
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": tour.price.replace(/[^\d]/g, ''),
    "availability": "https://schema.org/InStock"
  }
});
