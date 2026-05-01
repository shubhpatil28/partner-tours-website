import React, { Suspense, lazy, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import EnquiryBar from './components/EnquiryBar';
import ErrorBoundary from './components/ErrorBoundary';
import { Phone, MessageSquare } from 'lucide-react';
import { CONTACT_CONFIG } from './config';
import { trackEvent, ANALYTICS_EVENTS } from './utils/analytics';

// Lazy loading components for performance
const Home = lazy(() => import('./pages/Home'));
const Packages = lazy(() => import('./pages/Packages'));
const PackageDetail = lazy(() => import('./pages/PackageDetail'));
const Rental = lazy(() => import('./pages/Rental'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-shimmer"></div>
  </div>
);

function App() {
  const [activeEnquiry, setActiveEnquiry] = useState(null);

  const handleEnquiry = (packageName) => {
    setActiveEnquiry(packageName);
    trackEvent('package_interest_triggered', { package_name: packageName });
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home onEnquiry={handleEnquiry} />} />
                <Route path="/packages" element={<Packages onEnquiry={handleEnquiry} />} />
                <Route path="/package/:id" element={<PackageDetail onEnquiry={handleEnquiry} />} />
                <Route path="/rental" element={<Rental />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingContact />
          
          {activeEnquiry && (
            <EnquiryBar 
              packageName={activeEnquiry} 
              onClear={() => setActiveEnquiry(null)} 
            />
          )}
          
          {/* Mobile Sticky Bar */}
          <div className="mobile-cta-shell">
            <div className="mobile-sticky-bar">
              <a 
                href={`tel:${CONTACT_CONFIG.WHATSAPP_NUMBER}`} 
                className="m-cta-btn m-call ripple"
                onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK, { location: 'sticky_bar' })}
              >
                <Phone size={20} /> Call Now
              </a>
              <a 
                href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=Hi, I want to book a travel service. Please share details.`} 
                className="m-cta-btn m-whatsapp ripple"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'sticky_bar' })}
              >
                <MessageSquare size={20} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

