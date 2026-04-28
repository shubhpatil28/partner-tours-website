import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Camera, Globe, Globe2, Send, Clock } from 'lucide-react';
import './Footer.css';
import { CONTACT_CONFIG } from '../config';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              Partner's<span>Tours</span>
            </Link>
            <p>Your trusted travel partner in Chalisgaon. We simplify travel with luxury bus bookings, instant flight tickets, and curated holiday packages across India.</p>
            <div className="social-links">
              <a href="https://instagram.com/partners_tours" target="_blank" rel="noreferrer"><Camera size={20}/></a>
              <a href="#"><Globe size={20}/></a>
              <a href="#"><Globe2 size={20}/></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/rental">Bus Services</Link></li>
              <li><Link to="/gallery">Travel Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <a 
                  href={`tel:${CONTACT_CONFIG.WHATSAPP_NUMBER}`} 
                  className="footer-contact-link"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK, { location: 'footer' })}
                >
                  <Phone size={18}/> <span>{CONTACT_CONFIG.PHONE_NUMBER}</span>
                </a>
              </li>
              <li><MapPin size={18}/> <span>{CONTACT_CONFIG.ADDRESS}</span></li>
              <li><Mail size={18}/> <span>{CONTACT_CONFIG.EMAIL}</span></li>
              <li><Clock size={18}/> <span>Mon - Sat: 9:00 AM - 9:00 PM</span></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Partner's Tours & Travels. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

