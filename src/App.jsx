import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import EnquiryBar from './components/EnquiryBar';
import ErrorBoundary from './components/ErrorBoundary';
import { Phone, MessageSquare } from 'lucide-react';
import { CONTACT_CONFIG } from './config';
import { trackEvent, ANALYTICS_EVENTS } from './utils/analytics';

// Lazy loading components for performance
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Packages = lazy(() => import('./pages/Packages.jsx'));
const PackageDetail = lazy(() => import('./pages/PackageDetail.jsx'));
const Rental = lazy(() => import('./pages/Rental.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Terms = lazy(() => import('./pages/Terms.jsx'));
const Disclaimer = lazy(() => import('./pages/Disclaimer.jsx'));

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
                <Route path="/about" element={<About />} />
                <Route path="/packages" element={<Packages onEnquiry={handleEnquiry} />} />
                <Route path="/package/:id" element={<PackageDetail onEnquiry={handleEnquiry} />} />
                <Route path="/rental" element={<Rental />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
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

