import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import './Navbar.css';

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
             <a href="tel:+918421514348" className="btn btn-primary"><Phone size={18}/> Call Now</a>
             <a href="https://wa.me/918421514348" className="btn btn-whatsapp"><MessageSquare size={18}/> WhatsApp</a>
          </div>
        </div>

        <div className="nav-cta-desktop">
          <a href="tel:+918421514348" className="phone-link"><Phone size={20}/> +91 8421514348</a>
          <a href="https://wa.me/918421514348" className="btn btn-whatsapp"><MessageSquare size={18}/> WhatsApp</a>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
