/**
 * Dynamic SEO and Schema management
 */
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

/**
 * Local SEO Schema for Travel Agency
 */
export const getTravelAgencySchema = (config) => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Partner's Tours & Travels",
  "image": "https://partner-tour.site/assets/hero.png",
  "@id": "https://partner-tour.site",
  "url": "https://partner-tour.site",
  "telephone": config.PHONE_NUMBER,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bhadgaon Road, Near Station",
    "addressLocality": "Chalisgaon",
    "addressRegion": "Maharashtra",
    "postalCode": "424101",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.4611,
    "longitude": 75.0000
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
});

/**
 * Product Schema for Tour Packages
 */
export const getTourSchema = (tour) => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": tour.title,
  "image": tour.image,
  "description": tour.duration + " tour to " + (tour.category || 'Domestic'),
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": tour.price ? tour.price.replace(/[^\d]/g, '') : "0",
    "availability": "https://schema.org/InStock",
    "url": "https://partner-tour.site/packages"
  }
});
