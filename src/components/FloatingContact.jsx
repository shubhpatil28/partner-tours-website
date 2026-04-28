import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import './FloatingContact.css';
import { CONTACT_CONFIG } from '../config';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a 
        href={`tel:${CONTACT_CONFIG.WHATSAPP_NUMBER}`} 
        className="floating-btn call-btn" 
        title="Call Us"
        onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK, { location: 'floating_widget' })}
      >
        <Phone size={24} />
      </a>
      <a 
        href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=Hi, I want to book a travel service. Please share details.`} 
        className="floating-btn whatsapp-btn" 
        title="WhatsApp Us"
        onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'floating_widget' })}
      >
        <MessageSquare size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;

