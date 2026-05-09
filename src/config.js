/**
 * Centralized Contact Configuration
 * Hardened for production stability.
 */

const rawConfig = {
  PHONE_NUMBER: "918421514348", // Pure digits for tel: links
  DISPLAY_PHONE: "+91 84215 14348", // Formatted for UI display
  WHATSAPP: "918421514348",
  EMAIL: "partners.tours@gmail.com",
  LOCATION: "Chalisgaon, Jalgaon",
  ADDRESS: "Bhadgaon Road, Chalisgaon, Jalgaon, MH",
  SITE_URL: "https://partner-tour.site",
  DEFAULT_WA_MESSAGE: "Hi I want tour details"
};

// Validation for development
if (import.meta.env.DEV) {
  const requiredFields = ['PHONE_NUMBER', 'WHATSAPP', 'EMAIL', 'LOCATION'];
  requiredFields.forEach(field => {
    if (!rawConfig[field]) {
      throw new Error(`[CONFIG ERROR] Missing required contact field: ${field}`);
    }
  });
}

export const CONTACT_CONFIG = Object.freeze(rawConfig);

export const SITE_METADATA = Object.freeze({
  title: "Partner's Bus Service | Premium Bus Rental Chalisgaon",
  description: "Chalisgaon's premier bus rental company. Professional transport for weddings, corporate groups, and tours. 35-50 seater luxury buses and sleeper coaches.",
  ogImage: "/og-image.jpg"
});
