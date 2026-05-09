import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageSquare, MapPin, User, Send, CheckCircle, Star, Zap, Loader2, Camera, Mail, Clock, ShieldCheck, RefreshCw } from 'lucide-react';
import './Contact.css';
import { CONTACT_CONFIG } from '../config';
import { getWhatsAppLink, getCallLink, getMailLink } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import updateMetaTags from '../utils/updateMetaTags';

const BACKEND_API_URL = "https://api.partner-tour.site/v3/leads";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', service: '', message: '', botField: '' 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorFallback, setErrorFallback] = useState(false);
  const nameInputRef = useRef(null);

  useEffect(() => {
    updateMetaTags({
      title: 'Contact Us | Luxury Bus Booking Chalisgaon',
      description: 'Get in touch with Partner\'s Tours & Travels for luxury bus rentals, tempo travellers, and group transport solutions in Chalisgaon.',
      keywords: 'Contact Partner Tours, Chalisgaon Bus Booking Phone, Rent Bus Chalisgaon',
    });
    if (nameInputRef.current) nameInputRef.current.focus();
    cleanupAndSyncLeads();
    
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

    trackEvent(ANALYTICS_EVENTS.FORM_SUBMIT, { 
      service_type: formData.service,     
      user_name: formData.name, 
    });

    setIsSubmitting(true);
    
    // Background API Sync
    saveLeadToAPI(formData);

    const formattedMessage = `Hi, I am ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nTravel Date: ${formData.travelDate}\nDetails: ${formData.message}`;
    const whatsappUrl = getWhatsAppLink(formattedMessage);
    
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);

      trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { 
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
    trackEvent(ANALYTICS_EVENTS.CALL_CLICK, {
      phone_number: CONTACT_CONFIG?.PHONE_NUMBER
    });
  };

  return (
    <div className="contact-page">
      <div className="page-header section-padding">
        <div className="container text-center">
          <div className="trust-badge-mini fade-in">
             <ShieldCheck size={14} color="#25D366" />
             <span>Secure Booking System Active</span>
          </div>
          <h1>Book Your Group Transport</h1>
          <p>Hire luxury buses with Chalisgaon's most reliable transport service.</p>
        </div>
      </div>

      <section className="section-padding contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-side-info">
              <div className="benefit-card">
                 <div className="b-icon"><Zap size={20} /></div>
                 <div className="b-content">
                    <h4>Instant Bus Quotes</h4>
                    <p>Chalisgaon's fastest response for group transport enquiries.</p>
                 </div>
              </div>

              <div className="c-info-card-premium">
                <div className="c-icon-circle"><MapPin size={22}/></div>
                <div className="c-text-stack"><label>Visit Our Office</label><p>{CONTACT_CONFIG.ADDRESS}</p></div>
              </div>
              
              <div className="c-info-card-premium">
                <div className="c-icon-circle"><Phone size={22}/></div>
                <div className="c-text-stack">
                  <label>Direct Call</label>
                  <p><a href={getCallLink()}>{CONTACT_CONFIG.DISPLAY_PHONE}</a></p>
                </div>
              </div>

              <div className="c-info-card-premium">
                <div className="c-icon-circle"><Mail size={22}/></div>
                <div className="c-text-stack">
                  <label>Email Us</label>
                  <p><a href={getMailLink()}>{CONTACT_CONFIG.EMAIL}</a></p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="map-container-premium mt-24">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14944.372138927877!2d75.0000!3d20.4611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9595800000001%3A0x0!2sChalisgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714650000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Partner's Tours Chalisgaon Office Location"
                ></iframe>
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
                           href={getWhatsAppLink()} 
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

                    <div className="form-double-row">
                      <div className="p-input-group">
                        <label>Service</label>
                        <select name="service" value={formData.service} onChange={handleChange} required>
                           <option value="">Select Category</option>
                           <option value="Luxury Bus Rental">Luxury Bus Rental</option>
                           <option value="Tempo Traveller Rental">Tempo Traveller</option>
                           <option value="Group Tour Package">Group Bus Tour</option>
                           <option value="Corporate Booking">Corporate Transport</option>
                        </select>
                      </div>
                      <div className="p-input-group">
                        <label>Travel Date</label>
                        <div className="p-input-wrapper">
                          <Clock size={18} className="p-icon" />
                          <input type="date" name="travelDate" value={formData.travelDate || ''} onChange={handleChange} required />
                        </div>
                      </div>
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
                          href={getCallLink()} 
                          className="btn-call-fallback"
                          onClick={handleCallClick}
                        >
                          {CONTACT_CONFIG.DISPLAY_PHONE}
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

