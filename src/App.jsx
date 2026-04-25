import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import Home from './pages/Home';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import Rental from './pages/Rental';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { Phone, MessageSquare } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
        
        {/* Mobile Sticky Bar */}
        <div className="mobile-cta-shell">
          <div className="mobile-sticky-bar">
            <a href="tel:+918421514348" className="m-cta-btn m-call">
              <Phone size={20}/> Call Now
            </a>
            <a href="https://wa.me/918421514348?text=Hi, I want to book a travel service. Please share details." className="m-cta-btn m-whatsapp">
              <MessageSquare size={20}/> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
