import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <Link to="/" className="footer-logo">
              Partner's<span>Tours</span>
            </Link>
            <p>Your trusted travel partner based in Chalisgaon. Specializing in Bus bookings, Flight tickets, and memorable Tour packages across India.</p>
            <div className="social-links">
              <a href="https://instagram.com/partners_tours" target="_blank" rel="noreferrer"><Instagram size={20}/></a>
              <a href="#"><Facebook size={20}/></a>
              <a href="#"><Youtube size={20}/></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/">Bus Booking</Link></li>
              <li><Link to="/">Flight Booking</Link></li>
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/gallery">Travel Gallery</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Chalisgaon Office</h4>
            <ul>
              <li><Phone size={18}/> +91 8421514348</li>
              <li><MapPin size={18}/> Bhadgaon Road, Chalisgaon, Jalgaon, Maharashtra</li>
              <li><Mail size={18}/> partners.tours@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Partner's Tours & Travels. Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
