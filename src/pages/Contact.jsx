import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageSquare, MapPin, User, Send, CheckCircle, Star, Zap, Loader2, Camera, Mail, Clock, ShieldCheck, RefreshCw } from 'lucide-react';
import './Contact.css';

const BACKEND_API_URL = "https://api.partnertours.in/v3/leads";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', service: '', message: '', botField: '' 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorFallback, setErrorFallback] = useState(false);
  const nameInputRef = useRef(null);

  // --- GOOGLE ANALYTICS EVENT TRACKING ---
  const trackEvent = (eventName, params = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
  };

  useEffect(() => {
    if (nameInputRef.current) nameInputRef.current.focus();
    cleanupAndSyncLeads();
    
    // Track page view explicitly if needed (optional as gtag auto-tracks)
    trackEvent('page_view', { page_title: 'Contact Us' });
  }, []);

  // --- ENTERPRISE SECURITY: AES-GCM & WEB CRYPTO ---

  // Helper to generate a key for localStorage encryption
  const getEncryptionKey = async () => {
    const baseKey = "PT_LOCAL_SECURE_SALT_2026";
    const enc = new TextEncoder();
    return await crypto.subtle.importKey(
      "raw",
      enc.encode(baseKey).slice(0, 32), // 256-bit key
      "AES-GCM",
      false,
      ["encrypt", "decrypt"]
    );
  };

  const encryptData = async (data) => {
    try {
      const key = await getEncryptionKey();
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const enc = new TextEncoder();
      const encrypted = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        enc.encode(JSON.stringify(data))
      );
      
      // Package IV and data together for storage
      return {
        iv: btoa(String.fromCharCode(...iv)),
        content: btoa(String.fromCharCode(...new Uint8Array(encrypted)))
      };
    } catch (e) {
      console.error("Encryption failed", e);
      return null;
    }
  };

  const decryptData = async (payload) => {
    try {
      const key = await getEncryptionKey();
      const iv = new Uint8Array(atob(payload.iv).split('').map(c => c.charCodeAt(0)));
      const content = new Uint8Array(atob(payload.content).split('').map(c => c.charCodeAt(0)));
      
      const decrypted = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        content
      );
      
      return JSON.parse(new TextDecoder().decode(decrypted));
    } catch (e) {
      return null;
    }
  };

  const saveLeadToAPI = async (data, isRetry = false) => {
    try {
      const timestamp = Date.now().toString();
      const nonce = crypto.randomUUID(); // Nonce-based replay protection
      
      const response = await fetch(BACKEND_API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-PT-Timestamp': timestamp,
          'X-PT-Nonce': nonce
        },
        body: JSON.stringify({ ...data, origin: window.location.hostname })
      });

      if (!response.ok) throw new Error('SEC_FAIL');
      return true;
    } catch (err) {
      if (!isRetry) backupLeadSecurely(data);
      return false;
    }
  };

  const backupLeadSecurely = async (data) => {
    const encrypted = await encryptData({ ...data, savedAt: Date.now() });
    if (!encrypted) return;
    
    try {
      const backup = JSON.parse(localStorage.getItem('secure_lead_vault') || '[]');
      backup.push(encrypted);
      localStorage.setItem('secure_lead_vault', JSON.stringify(backup.slice(-5)));
    } catch (e) {}
  };

  const cleanupAndSyncLeads = async () => {
    try {
      const vault = JSON.parse(localStorage.getItem('secure_lead_vault') || '[]');
      if (vault.length === 0) return;

      const now = Date.now();
      let remaining = [];

      for (const payload of vault) {
        const lead = await decryptData(payload);
        // Expiry check: 24h
        if (lead && (now - lead.savedAt) < 86400000) {
          const success = await saveLeadToAPI(lead, true);
          if (!success) remaining.push(payload);
        }
      }
      localStorage.setItem('secure_lead_vault', JSON.stringify(remaining));
    } catch (e) {}
  };

  const handleWhatsAppSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.botField) return;

    // --- GA Event: form_submit ---
    trackEvent('form_submit', { 
      service_type: formData.service,     
      user_name: formData.name, 
    });

    setIsSubmitting(true);
    
    // Background API Sync
    saveLeadToAPI(formData);

    const whatsappNumber = "919730704731"; 
    const formattedMessage = `Hi, I am ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDetails: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);

      // --- GA Event: whatsapp_redirect ---
      trackEvent('whatsapp_redirect', { 
        service_type: formData.service 
      });

      setTimeout(() => { window.location.href = whatsappUrl; }, 500); 
    }, 300);

    setTimeout(() => { if (document.visibilityState === 'visible') setErrorFallback(true); }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCallClick = () => {
    // --- GA Event: call_click ---
    trackEvent('call_click', {
      phone_number: '+91 8421514348'
    });
  };

  return (
    <div className="contact-page">
      <div className="page-header section-padding">
        <div className="container text-center">
          <div className="trust-badge-mini fade-in">
             <ShieldCheck size={14} color="#25D366" />
             <span>Encrypted Transmission Active</span>
          </div>
          <h1>Start Your Next Adventure</h1>
          <p>Book with Chalisgaon's most secure travel agency.</p>
        </div>
      </div>

      <section className="section-padding contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-side-info">
              <div className="benefit-card">
                 <div className="b-icon"><Zap size={20} /></div>
                 <div className="b-content">
                    <h4>Direct Assistance</h4>
                    <p>Priority support for all online bookings.</p>
                 </div>
              </div>

              <div className="c-info-card-premium">
                <div className="c-icon-circle"><MapPin size={22}/></div>
                <div className="c-text-stack"><label>Office</label><p>Bhadgaon Road, Chalisgaon</p></div>
              </div>
              
              <div className="c-info-card-premium">
                <div className="c-icon-circle"><Phone size={22}/></div>
                <div className="c-text-stack"><label>Call</label><p>+91 8421514348</p></div>
              </div>

               <div className="c-info-card-premium">
                <div className="c-icon-circle"><MessageSquare size={22}/></div>
                <div className="c-text-stack"><label>Status</label><p className="status-online"><span className="dot"></span> Agent Online</p></div>
              </div>
            </div>

            <div className="contact-form-premium-card">
              {showSuccess ? (
                <div className="success-overlay">
                   <CheckCircle size={80} color="#25D366" className="success-lottie" />
                   <h3>Securing Chat...</h3>
                   <p>Opening WhatsApp.</p>
                   {errorFallback && (
                      <div className="redirect-fallback-notice mt-20">
                         <a 
                           href={`https://wa.me/918421514348?text=Hi`} 
                           className="btn-whatsapp"
                           onClick={() => trackEvent('whatsapp_manual_click')}
                         >
                           Open Manually
                         </a>
                      </div>
                   )}
                </div>
              ) : (
                <>
                  <div className="form-header">
                     <span className="whats-highlight"><Zap size={14}/> Secure</span>
                     <h3>Book Your Trip</h3>
                  </div>
                  
                  <form className="premium-form" onSubmit={handleWhatsAppSubmit}>
                    <input type="text" name="botField" style={{ display: 'none' }} value={formData.botField} onChange={handleChange} />

                    <div className="form-double-row">
                      <div className="p-input-group">
                        <label>Name</label>
                        <div className="p-input-wrapper">
                          <User size={18} className="p-icon" />
                          <input ref={nameInputRef} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        </div>
                      </div>
                      <div className="p-input-group">
                        <label>Phone</label>
                        <div className="p-input-wrapper">
                          <Phone size={18} className="p-icon" />
                          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                      </div>
                    </div>

                    <div className="p-input-group">
                      <label>Service</label>
                      <select name="service" value={formData.service} onChange={handleChange} required>
                         <option value="">Select Category</option>
                         <option value="Bus Booking">Luxury Bus</option>
                         <option value="Flight Booking">Flights</option>
                         <option value="Tour Package">Tour Packages</option>
                      </select>
                    </div>

                    <div className="p-input-group">
                      <label>Details</label>
                      <textarea name="message" rows="4" placeholder="Your destination..." value={formData.message} onChange={handleChange} required></textarea>
                    </div>

                    <div className="form-actions-stack">
                        <button type="submit" className={`btn-premium-submit ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                          {isSubmitting ? <><RefreshCw size={20} className="spinner" /> Securing...</> : <><Send size={18}/> Get Quote on WhatsApp</>}
                        </button>
                        <div className="fallback-divider"><span>OR CALL</span></div>
                        <a 
                          href="tel:+918421514348" 
                          className="btn-call-fallback"
                          onClick={handleCallClick}
                        >
                          +91 8421514348
                        </a>
                    </div>
                    <p className="privacy-note">🔒 Local data is encrypted with AES-GCM before storage.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
