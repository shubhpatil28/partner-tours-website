import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import './FloatingContact.css';

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a href="tel:+918421514348" className="floating-btn call-btn" title="Call Us">
        <Phone size={24} />
      </a>
      <a href="https://wa.me/918421514348?text=Hi, I want to book a travel service. Please share details." className="floating-btn whatsapp-btn" title="WhatsApp Us">
        <MessageSquare size={24} />
      </a>
    </div>
  );
};

export default FloatingContact;
