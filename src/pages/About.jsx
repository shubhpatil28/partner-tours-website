import React, { useEffect } from 'react';
import './About.css';
import { Shield, Award, MapPin, Phone, Clock } from 'lucide-react';
import { CONTACT_CONFIG } from '../config';
import Image from '../components/common/Image';
import updateMetaTags from '../utils/updateMetaTags';

const About = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'About Us | Luxury Bus Rental & Group Transport Chalisgaon',
      description: 'Partner\'s Bus Service is Chalisgaon\'s leading group transport provider since 2015. We specialize in luxury bus rentals, school trips, and corporate transport solutions.',
      keywords: 'Chalisgaon Bus Rental, Group Transport Jalgaon, Partner Bus History, Luxury Bus Chalisgaon',
    });
  }, []);
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="fade-in">About Partner's Bus Service</h1>
          <p className="subtitle fade-in-delay">Chalisgaon's Premier Bus Rental Specialist since 2015</p>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="about-text">
              <h2>A Legacy of Reliable Transport</h2>
              <p>
                Founded in 2015, <strong>Partner's Bus Service</strong> has grown from a local transport provider to Chalisgaon's most trusted name in <strong>Luxury Bus Rental & Group Travel</strong>. We specialize in providing high-quality transport solutions for groups of all sizes across the Jalgaon district.
              </p>
              <p>
                Our deep roots in Chalisgaon allow us to offer unparalleled transport logistics. We understand the specific needs of our community, whether it's providing a decorated luxury bus for a wedding, a safe mini-bus for a family pilgrimage, or a fleet of coaches for school and college excursions. We aren't just a travel service; we are your transport partners committed to making group journeys seamless and safe.
              </p>
              <p>
                At Partner's Bus Service, we believe that group travel should be comfortable and affordable. That's why we maintain our own fleet of modern buses, ensuring that we can offer the most competitive rates and the highest standards of vehicle maintenance in Northern Maharashtra.
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
              <Image 
                src="/src/assets/hero_bus.png" 
                alt="Partner's Luxury Bus Fleet" 
                className="rounded-img shadow-lg" 
                width={800}
                height={600}
              />
            </div>
          </div>

          <div className="about-extra-content mt-50">
            <div className="grid grid-2">
              <div className="about-card glass-effect p-32">
                <h3>Our Vision</h3>
                <p>To be the leading group transport platform in Northern Maharashtra, known for bridging the gap between local travelers and their destinations through safety and personalized care. We aim to make every group trip from Chalisgaon a premium experience.</p>
              </div>
              <div className="about-card glass-effect p-32">
                <h3>Our Commitment</h3>
                <p>We are committed to passenger safety and vehicle excellence. Unlike generic booking portals, we manage our own fleet and provide professional, verified drivers for every journey, ensuring no compromises on your group's comfort.</p>
              </div>
            </div>
            
            <div className="full-text-section mt-50">
              <h3>Comprehensive Travel Management</h3>
              <p>From the moment you walk into our office on Bhadgaon Road to the moment you return from your trip, we handle everything. Our services include luxury bus rentals for weddings and events, domestic and international flight bookings with instant E-ticket generation, and highly customized tour packages for destinations like Goa, Kashmir, Dubai, and Thailand.</p>
              
              <h3>Expertise in Local & International Logistics</h3>
              <p>Our specialization lies in managing complex travel logistics with ease. For domestic travelers from Chalisgaon, we provide seamless connectivity to major transit hubs like Pune, Mumbai, and Indore through our verified network of luxury transport providers. Whether it is a pilgrimage to the holy sites of Shirdi and Jyotirlingas or a corporate retreat to the hill stations of Lonavala and Mahabaleshwar, our planning ensures zero downtime.</p>
              
              <p>On the international front, Partner's Tours & Travels has established strong tie-ups with leading Destination Management Companies (DMCs) across the globe. This allows us to provide "On-Ground Support" in countries like the UAE, Thailand, Singapore, and Bali. We assist with visa documentation, currency exchange guidance, and international roaming setups so that your focus remains solely on creating memories.</p>

              <h3>A Culture of Continuous Improvement</h3>
              <p>We take pride in our "Best Price Guarantee." If you find a verified lower price for the same service in the Jalgaon district, we will match it. But more than the price, we compete on quality. We constantly collect feedback from our travelers to refine our itineraries, upgrade our transport fleet, and vet our hotel partners. Our 24/7 support means that even if you are thousands of miles away in a different time zone, a friendly voice from Partner's Tours & Travels is just a call or WhatsApp message away.</p>
              
              <p>By choosing us, you are supporting a local Chalisgaon business that values your trust above all else. We invite you to experience the difference of traveling with a partner who truly cares about your journey.</p>
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
            <p><Phone className="inline-icon" /> {CONTACT_CONFIG.DISPLAY_PHONE}</p>
            <p>Email: {CONTACT_CONFIG.EMAIL}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

