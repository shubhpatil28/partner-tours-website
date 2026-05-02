import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import './FloatingContact.css';
import { CONTACT_CONFIG } from '../config';
import { getWhatsAppLink } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a 
        href={getWhatsAppLink("Hi, I want to book a travel service. Please share details.")} 
        className="floating-btn whatsapp-btn pulse" 
        title="Chat with us"
        onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'floating_widget' })}
      >
        <div className="btn-label">Book on WhatsApp</div>
        <MessageSquare size={28} />
      </a>
    </div>
  );
};

export default FloatingContact;

