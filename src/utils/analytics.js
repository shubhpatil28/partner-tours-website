/**
 * Safe wrapper for Google Analytics event tracking.
 * Prevents crashes if gtag is not loaded.
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
    console.log(`[Analytics] Tracked: ${eventName}`, params);
  } else {
    console.warn(`[Analytics] GTag not found. Skipping event: ${eventName}`);
  }
};

export const ANALYTICS_EVENTS = {
  FORM_SUBMIT: 'form_submit',
  WHATSAPP_REDIRECT: 'whatsapp_redirect',
  CALL_CLICK: 'call_click',
  PACKAGE_VIEW: 'package_view',
  RENTAL_VIEW: 'rental_view'
};
