/**
 * Upgraded SEO Utility for React + Vite
 * Production-grade features: Canonical, Open Graph, Twitter Cards, and Duplication Prevention.
 */

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200';
const DEFAULT_TITLE = "Partner's Tours & Travels | Best Travel Agency in Chalisgaon";

/**
 * Helper to set or update a meta tag
 * @param {string} attrName - Name of the attribute to look for (e.g., 'name', 'property')
 * @param {string} attrValue - Value of the attribute (e.g., 'description', 'og:title')
 * @param {string} content - Content to set
 */
const setMetaTag = (attrName, attrValue, content) => {
  if (!content) return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

/**
 * Helper to set or update a link tag (like canonical)
 * @param {string} rel - Relationship (e.g., 'canonical')
 * @param {string} href - URL to set
 */
const setLinkTag = (rel, href) => {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

/**
 * Safely updates document metadata for SEO, AdSense, and Social Sharing.
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} [props.keywords] - Meta keywords
 * @param {string} [props.image] - Social sharing image URL
 * @param {string} [props.url] - Canonical and OG URL
 * @param {string} [props.type] - OG Type (default: 'website')
 */
const updateMetaTags = ({ 
  title, 
  description, 
  keywords, 
  image = DEFAULT_IMAGE, 
  url, 
  type = 'website' 
} = {}) => {
  try {
    // 1. Browser Check
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const finalTitle = title ? (title.includes("Partner's") ? title : `${title} | Partner's Tours & Travels`) : DEFAULT_TITLE;
    const finalUrl = url || window.location.href;

    // 2. Standard Meta Tags
    document.title = finalTitle;
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow');

    // 3. Canonical URL
    setLinkTag('canonical', finalUrl);

    // 4. Open Graph (Facebook, WhatsApp, LinkedIn)
    setMetaTag('property', 'og:site_name', "Partner's Tours & Travels");
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:url', finalUrl);
    setMetaTag('property', 'og:type', type);

    // 5. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

  } catch (error) {
    console.error('SEO Error:', error);
  }
};

export default updateMetaTags;
