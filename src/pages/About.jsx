import React, { useEffect } from 'react';
import './About.css';
import { Shield, Award, Users, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { CONTACT_CONFIG } from '../config';
import { updateMetaTags } from '../utils/seo';

const About = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'About Us | Best Travel Agency in Jalgaon District',
      description: 'Partner\'s Tours & Travels - A trusted travel agency in Chalisgaon since 2015. We specialize in luxury bus rentals, flight bookings, and tour packages.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000',
    });
  }, []);
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="fade-in">About Partner's Tours & Travels</h1>
          <p className="subtitle fade-in-delay">Your Trusted Travel Companion in Chalisgaon since 2015</p>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="about-text">
              <h2>A Legacy of Trusted Travel</h2>
              <p>
                Founded in 2015, <strong>Partner's Tours & Travels</strong> has grown from a small local transport provider to one of the most respected travel agencies in the Jalgaon district. Based in the heart of Chalisgaon, we have spent nearly a decade building a reputation for reliability, safety, and exceptional customer service.
              </p>
              <p>
                Our deep roots in Chalisgaon allow us to offer a unique perspective on travel. We understand the specific needs of our local community, whether it's arranging a comfortable bus for a pilgrimage to Shirdi, booking urgent flight tickets for business travelers, or planning a dream international holiday for families. We aren't just a travel agency; we are your neighbors committed to making your journeys stress-free.
              </p>
              <p>
                At Partner's Tours & Travels, we believe that travel should be accessible to everyone. That's why we work tirelessly to negotiate the best rates with hotels, transport providers, and airlines, passing those savings directly to you. Our team of travel experts is passionate about discovering new destinations and refining our existing packages to ensure you get the best value for your hard-earned money.
              </p>
              <div className="about-stats mt-40">
                <div className="stat-item">
                  <span className="stat-num">10+</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">10,000+</span>
                  <span className="stat-label">Successful Bookings</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">24/7</span>
                  <span className="stat-label">Dedicated Support</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000" alt="About Partner's Tours Chalisgaon" className="rounded-img shadow-lg" />
            </div>
          </div>

          <div className="about-extra-content mt-50">
            <div className="grid grid-2">
              <div className="about-card glass-effect p-32">
                <h3>Our Vision</h3>
                <p>To be the leading travel platform in Northern Maharashtra, known for bridging the gap between local travelers and global destinations through technology and personalized care. We aim to make every resident of Chalisgaon feel confident and excited about exploring the world.</p>
              </div>
              <div className="about-card glass-effect p-32">
                <h3>Our Commitment</h3>
                <p>We are committed to ethical business practices and transparency. Unlike generic online portals, we provide face-to-face consultations at our Chalisgaon office, ensuring that you know exactly what you are paying for with no hidden costs or last-minute surprises.</p>
              </div>
            </div>
            
            <div className="full-text-section mt-50">
              <h3>Comprehensive Travel Management</h3>
              <p>From the moment you walk into our office on Bhadgaon Road to the moment you return from your trip, we handle everything. Our services include luxury bus rentals for weddings and events, domestic and international flight bookings with instant E-ticket generation, and highly customized tour packages for destinations like Goa, Kashmir, Dubai, and Thailand.</p>
              <p>We take pride in our "Best Price Guarantee." If you find a verified lower price for the same service in the Jalgaon district, we will match it. Our 24/7 support means that even if you are thousands of miles away in a different time zone, a friendly voice from Partner's Tours & Travels is just a call or WhatsApp message away.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Chalisgaon Trusts Us</h2>
            <p>Our core values are what set us apart from competitors.</p>
          </div>
          <div className="grid grid-3">
            <div className="feature-card">
              <Shield size={40} className="mb-16 text-primary" />
              <h3>Unmatched Safety</h3>
              <p>We only partner with verified hotels and transport providers who meet our stringent safety and hygiene standards. Your family's well-being is our highest priority.</p>
            </div>
            <div className="feature-card">
              <Award size={40} className="mb-16 text-primary" />
              <h3>Local Expertise</h3>
              <p>As a Chalisgaon-based agency, we know the local logistics better than anyone. We ensure seamless pick-ups and drops from your doorstep in the Jalgaon district.</p>
            </div>
            <div className="feature-card">
              <Clock size={40} className="mb-16 text-primary" />
              <h3>Human Connection</h3>
              <p>No bots, no endless waiting on hold. You get a dedicated travel manager who understands your preferences and is always ready to help with a smile.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-location section-padding">
        <div className="container text-center">
          <h2>Visit Our Chalisgaon Office</h2>
          <div className="location-info mt-32">
            <p><MapPin className="inline-icon" /> Bhadgaon Road, Near Station, Chalisgaon, Jalgaon, Maharashtra - 424101</p>
            <p><Phone className="inline-icon" /> {CONTACT_CONFIG?.PHONE_NUMBER}</p>
            <p>Email: {CONTACT_CONFIG?.EMAIL}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
