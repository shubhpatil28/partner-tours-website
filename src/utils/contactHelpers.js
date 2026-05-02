import { CONTACT_CONFIG } from '../config';

/**
 * Generates a WhatsApp direct message link
 * @param {string} message - The pre-filled message text
 * @returns {string}
 */
export const getWhatsAppLink = (message = CONTACT_CONFIG.DEFAULT_WA_MESSAGE) => {
  if (!CONTACT_CONFIG.WHATSAPP) return '#';
  return `https://wa.me/${CONTACT_CONFIG.WHATSAPP}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a telephone call link
 * @returns {string}
 */
export const getCallLink = () => {
  if (!CONTACT_CONFIG.PHONE_NUMBER) return '#';
  // Use pure digits for tel: links
  return `tel:+${CONTACT_CONFIG.PHONE_NUMBER}`;
};

/**
 * Generates a mailto link
 * @returns {string}
 */
export const getMailLink = () => {
  if (!CONTACT_CONFIG.EMAIL) return '#';
  return `mailto:${CONTACT_CONFIG.EMAIL}`;
};

/**
 * Dynamic WhatsApp message generator for high conversion
 * @param {string} type - 'bus', 'tour', or 'general'
 * @param {string} item - The specific name of the package or vehicle
 */
export const sendWhatsApp = (type, item) => {
  const phone = CONTACT_CONFIG.WHATSAPP || "918421514348";
  let message = "";

  if (type === "bus") {
    message = `Hi, I want to book ${item} from Partner's Tours & Travels. Please share full details.`;
  } 
  else if (type === "tour") {
    message = `Hi, I am interested in your tour package (${item}). Please share itinerary and pricing.`;
  } 
  else if (type === "conversion_optimized") {
    message = `Hi Partner Tours, I'm interested in booking a trip from Chalisgaon.\n\n` +
              `📍 Pickup Location: \n` +
              `📅 Travel Date: \n` +
              `👥 Passengers: \n\n` +
              `Please share the best price and availability.`;
  }
  else if (type === "simple_tour") {
    message = `Hi, I want to book a tour package. Please share details.`;
  }
  else {
    message = `Hi, I want to enquire about your travel services.`;
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
