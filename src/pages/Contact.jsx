import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Instagram, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header section-padding">
        <div className="container text-center">
          <h1>Contact Partner's Tours & Travels</h1>
          <p>We're located in the heart of Chalisgaon. Visit us or call for bookings.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <div className="c-info-card">
                <div className="c-icon"><MapPin size={24}/></div>
                <div className="c-text">
                  <h4>Address</h4>
                  <p>Bhadgaon Road, Chalisgaon,<br/>District Jalgaon, Maharashtra - 424101</p>
                </div>
              </div>
              
              <div className="c-info-card">
                <div className="c-icon"><Phone size={24}/></div>
                <div className="c-text">
                  <h4>Phone Number</h4>
                  <p><a href="tel:+918421514348">+91 8421514348</a></p>
                </div>
              </div>

               <div className="c-info-card">
                <div className="c-icon"><Instagram size={24}/></div>
                <div className="c-text">
                  <h4>Follow Us</h4>
                  <p><a href="https://instagram.com/partners_tours" target="_blank" rel="noreferrer">@partners_tours</a></p>
                </div>
              </div>

              <div className="c-info-card">
                <div className="c-icon"><Clock size={24}/></div>
                <div className="c-text">
                  <h4>Opening Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                  <p>Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form-box">
               <h3>Send an Inquiry</h3>
               <p>Fill out the form below and our team will get back to you shortly.</p>
               <form className="c-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <input type="text" placeholder="Full Name" required />
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                  <select required>
                     <option value="">Select Service</option>
                     <option value="bus">Bus Booking</option>
                     <option value="flight">Flight Booking</option>
                     <option value="tour">Tour Package</option>
                  </select>
                  <textarea rows="4" placeholder="Your Message / Destination" required></textarea>
                  <button type="submit" className="btn btn-primary full-width">Send Message</button>
               </form>
               <div className="whatsapp-box mt-20">
                  <p>In a hurry? Chat on WhatsApp for instant booking.</p>
                  <a href="https://wa.me/918421514348?text=Hi, I want to inquire about a travel service." className="btn btn-whatsapp full-width">
                     <MessageSquare size={20}/> Message on WhatsApp
                  </a>
               </div>
            </div>
          </div>

          <div className="map-box mt-50">
             <iframe 
               title="Partner's Tours Chalisgaon Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14945.41460515157!2d75.0114068!3d20.4611598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd96b4478dce547%3A0x6a0f443b749d0842!2sChalisgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
               width="100%" 
               height="450" 
               style={{border:0, borderRadius:'20px', boxShadow: 'var(--shadow)'}} 
               allowFullScreen="" 
               loading="lazy">
             </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
