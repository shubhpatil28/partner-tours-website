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
