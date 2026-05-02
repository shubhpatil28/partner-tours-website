import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import './FloatingContact.css';
import { CONTACT_CONFIG } from '../config';
import { getWhatsAppLink, getCallLink, sendWhatsApp } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a 
        href={getCallLink()} 
        className="floating-btn call-btn" 
        title="Call us now"
        onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK, { location: 'floating_widget' })}
      >
        <div className="btn-label">Call Now</div>
        <Phone size={24} />
      </a>
      <button 
        className="floating-btn whatsapp-btn pulse" 
        title="Chat with us"
        onClick={() => {
          trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'floating_widget' });
          sendWhatsApp('general', 'Floating Widget');
        }}
      >
        <div className="btn-label">WhatsApp</div>
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default FloatingContact;

