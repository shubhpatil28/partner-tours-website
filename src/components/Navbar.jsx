import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import './Navbar.css';
import { CONTACT_CONFIG } from '../config';
import { getWhatsAppLink, getCallLink, sendWhatsApp } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const Navbar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location, setIsOpen]);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <h1 className="logo">
          <Link to="/">Partner's<span>Tours</span></Link>
        </h1>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/packages" className={location.pathname.includes('/package') ? 'active' : ''}>Tour Packages</Link>
          <Link to="/rental" className={location.pathname === '/rental' ? 'active' : ''}>Bus Service</Link>
          <Link to="/blog" className={location.pathname.includes('/blog') ? 'active' : ''}>Blog</Link>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          
          <div className="nav-cta-mobile">
             <a 
               href={getCallLink()} 
               className="btn btn-primary ripple"
               onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK, { location: 'navbar_mobile' })}
             >
               <Phone size={18}/> Call Now
             </a>
             <button 
               className="btn btn-whatsapp ripple"
               onClick={() => {
                 trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'navbar_mobile' });
                 sendWhatsApp('general', 'Navbar Mobile');
               }}
             >
               <MessageSquare size={18}/> Book on WhatsApp
             </button>
          </div>
        </div>

        <div className="nav-cta-desktop">
          <a 
            href={getCallLink()} 
            className="phone-link ripple"
            onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK, { location: 'navbar_desktop' })}
          >
            <Phone size={20}/> {CONTACT_CONFIG.DISPLAY_PHONE}
          </a>
          <button 
            className="btn btn-whatsapp ripple"
            onClick={() => {
              trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'navbar_desktop' });
              sendWhatsApp('general', 'Navbar Desktop');
            }}
          >
            <MessageSquare size={18}/> Book on WhatsApp
          </button>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

