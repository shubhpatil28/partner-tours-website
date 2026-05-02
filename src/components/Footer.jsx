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
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/rental">Bus Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <a href={`tel:${CONTACT_CONFIG.WHATSAPP_NUMBER}`} className="footer-contact-link">
                  <Phone size={18}/> <span>{CONTACT_CONFIG.PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=${CONTACT_CONFIG.DEFAULT_WA_MESSAGE}`} className="footer-contact-link" style={{color: 'var(--accent)'}}>
                  <Globe2 size={18}/> <span>Book on WhatsApp</span>
                </a>
              </li>
              <li><MapPin size={18}/> <span>{CONTACT_CONFIG.ADDRESS}</span></li>
            </ul>
          </div>
        </div>

        {/* AdSense Footer Placeholder */}
        <div className="ads-container footer-ads mt-32">
          <ins className="adsbygoogle"
               style={{display:'block'}}
               data-ad-client="ca-pub-4843301407118801"
               data-ad-slot="footer_slot"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Partner's Tours & Travels. Serving Chalisgaon & Jalgaon since 2015.</p>
          <div className="footer-badges mt-8">
            <span className="badge-inline">GST Registered</span>
            <span className="badge-inline">ISO Certified Style</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

