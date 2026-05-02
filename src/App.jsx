import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import EnquiryBar from './components/EnquiryBar';
import ErrorBoundary from './components/ErrorBoundary';
import { Phone, MessageSquare } from 'lucide-react';
import { CONTACT_CONFIG } from './config';
import { getWhatsAppLink, getCallLink, sendWhatsApp } from './utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from './utils/analytics';

// Lazy loading components for performance
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Packages = lazy(() => import('./pages/Packages.jsx'));
const PackageDetail = lazy(() => import('./pages/PackageDetail.jsx'));
const Rental = lazy(() => import('./pages/Rental.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const BlogDetail = lazy(() => import('./pages/BlogDetail.jsx'));
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  const handleEnquiry = (packageName) => {
    setActiveEnquiry(packageName);
    trackEvent('package_interest_triggered', { package_name: packageName });
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="app-wrapper">
          <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
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
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
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
          
          {/* Mobile Sticky Contact Bar (Always Visible per Requirement 2) */}
          <div className="sticky-contact-bar slide-up-anim">
            <div className="sticky-trust-text">Trusted by 1000+ travelers</div>
            <div className="sticky-bar-btns">
              <a 
                href={getCallLink()} 
                className="call-btn-sticky"
                onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK, { location: 'sticky_bar_v3' })}
              >
                <Phone size={18} /> Call Expert
              </a>
              <button 
                className="whatsapp-btn-sticky"
                onClick={() => {
                  trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'sticky_bar_v3' });
                  sendWhatsApp('simple_tour');
                }}
              >
                <MessageSquare size={18} /> Get Best Price
              </button>
            </div>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

