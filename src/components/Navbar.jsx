import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import './Navbar.css';
import { CONTACT_CONFIG } from '../config';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          Partner's<span>Tours</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/packages" className={location.pathname.includes('/package') ? 'active' : ''}>Tour Packages</Link>
          <Link to="/rental" className={location.pathname === '/rental' ? 'active' : ''}>Bus Service</Link>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          
          <div className="nav-cta-mobile">
             <a 
               href={`tel:${CONTACT_CONFIG.PHONE_NUMBER}`} 
               className="btn btn-primary ripple"
               onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK, { location: 'navbar_mobile' })}
             >
               <Phone size={18}/> Call Now
             </a>
             <a 
               href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=${CONTACT_CONFIG.DEFAULT_WA_MESSAGE}`} 
               className="btn btn-whatsapp ripple"
               onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'navbar_mobile' })}
             >
               <MessageSquare size={18}/> Book on WhatsApp
             </a>
          </div>
        </div>

        <div className="nav-cta-desktop">
          <a 
            href={`tel:${CONTACT_CONFIG.PHONE_NUMBER}`} 
            className="phone-link ripple"
            onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK, { location: 'navbar_desktop' })}
          >
            <Phone size={20}/> {CONTACT_CONFIG.PHONE_NUMBER}
          </a>
          <a 
            href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=${CONTACT_CONFIG.DEFAULT_WA_MESSAGE}`} 
            className="btn btn-whatsapp ripple"
            onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'navbar_desktop' })}
          >
            <MessageSquare size={18}/> Book on WhatsApp
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

