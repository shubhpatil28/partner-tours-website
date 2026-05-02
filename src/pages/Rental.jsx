import React from 'react';
import { Users, Briefcase, Settings, MessageSquare, Wind, Fuel, Map, CheckCircle, ShieldCheck, Zap, Phone, ExternalLink } from 'lucide-react';
import './Rental.css';
import kashmirImg from '../assets/kashmir.png';
import manaliImg from '../assets/manali.png';
import heroImg from '../assets/hero.png';
import { CONTACT_CONFIG } from '../config';
import { getWhatsAppLink, getCallLink, sendWhatsApp } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import updateMetaTags from '../utils/updateMetaTags';
import { handleImageError } from '../utils/imageUtils';

const vehicles = [
  {
    id: 1,
    name: "Tempo Traveller",
    type: "12 Seater - AC",
    seats: "12 + 1",
    bags: 8,
    transmission: "Manual",
    priceKm: "₹25",
    priceDay: "₹6,000",
    features: ["Push-back Seats", "Music System", "Ample Luggage Space", "Experienced Driver"],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    urgency: "Only 2 slots left this weekend"
  },
  {
    id: 2,
    name: "Mini Bus",
    type: "17 Seater - AC",
    seats: "17 + 1",
    bags: 12,
    transmission: "Manual",
    priceKm: "₹30",
    priceDay: "₹8,500",
    features: ["Air Conditioned", "High Roof", "Reading Lights", "Perfect for Groups"],
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
    urgency: "12 people viewed today"
  },
  {
    id: 3,
    name: "Luxury Bus",
    type: "35 Seater - Pushback",
    seats: "35 + 1",
    bags: 25,
    transmission: "Manual",
    priceKm: "₹45",
    priceDay: "₹15,000",
    features: ["Premium Push-back", "Luxury Interior", "LCD Entertainment", "Tour Specialist Driver"],
    image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80&w=800',
    urgency: "Last slot available for May 15"
  }
];

const Rental = () => {
  React.useEffect(() => {
    updateMetaTags({
      title: 'Luxury Bus & Car Rental Chalisgaon | Partner\'s Travels',
      description: 'Rent premium AC luxury buses, Swift Dzire, and Innova Crysta in Chalisgaon. Best rates for outstation trips from Jalgaon district. Verified drivers and 24/7 support.',
      keywords: 'Bus Rental Chalisgaon, Luxury Bus Jalgaon, Car Hire Chalisgaon, Innova Rental Chalisgaon',
    });
  }, []);

  return (
    <div className="rental-page">
      <div className="page-header section-padding parallax-hero">
        <div className="container">
          <div className="badge badge-orange mb-16">Premium Fleet</div>
          <h1>Chalisgaon Vehicle Rental</h1>
          <p>Hire the most reliable cars and luxury buses with professional drivers for safe journeys.</p>
        </div>
      </div>

      <section className="rental-intro section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Luxury Transport for <span>Every Occasion</span></h2>
            <p>Providing top-tier rental services across the Jalgaon district for over a decade.</p>
          </div>
          <div className="intro-text">
            <p>
              Whether you are planning a family wedding in Chalisgaon, a corporate outing to Mumbai, or a group pilgrimage to Shirdi or Saputara, <strong>Partner's Tours & Travels</strong> offers the most diverse and well-maintained fleet of vehicles in the region. We understand that comfort and safety are paramount when traveling with loved ones, which is why every vehicle in our fleet undergoes regular mechanical checks and deep cleaning.
            </p>
            <p>
              Our fleet includes fuel-efficient sedans like the <strong>Swift Dzire</strong> for small families, premium SUVs like the <strong>Innova Crysta</strong> for luxury travel, and spacious <strong>Tempo Travellers</strong> for larger groups. For even larger gatherings, we offer 32 to 50-seater luxury AC buses with modern amenities like push-back seats and high-quality sound systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-3">
            {vehicles.map(vehicle => (
              <div key={vehicle.id} className="vehicle-card fade-in">
                <div className="vehicle-img">
                  <img src={vehicle.image} alt={vehicle.name} loading="lazy" onError={handleImageError} />
                  <div className="vehicle-pricing-overlay">
                    <span>From {vehicle.priceKm}/km</span>
                  </div>
                  <div className="v-urgency-badge">
                     <Zap size={10} /> {vehicle.urgency}
                  </div>
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-header">
                    <h3>{vehicle.name}</h3>
                    <span className="v-tag">{vehicle.type}</span>
                  </div>
                  
                  <div className="vehicle-main-features">
                    <div className="v-feat"><Users size={18}/> {vehicle.seats}</div>
                    <div className="v-feat"><Briefcase size={18}/> {vehicle.bags}</div>
                    <div className="v-feat"><Wind size={18}/> AC</div>
                    <div className="v-feat"><Fuel size={18}/> Petrol/Diesel</div>
                  </div>

                  <ul className="v-feature-list">
                    {vehicle.features.map((f, i) => (
                      <li key={i}><CheckCircle size={14} color="#2ed573"/> {f}</li>
                    ))}
                  </ul>

                  <div className="rental-action-box">
                    <div className="action-price">
                       <small>Local Day Rate</small>
                       <strong>{vehicle.priceDay}</strong>
                    </div>
                    <div className="card-btn-stack">
                      <button 
                        className="btn btn-whatsapp ripple"
                        onClick={() => {
                          trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { vehicle: vehicle.name, source: 'rental_card' });
                          sendWhatsApp('bus', vehicle.name);
                        }}
                      >
                        <MessageSquare size={18}/> WhatsApp
                      </button>
                      <a 
                        href={getCallLink()} 
                        className="btn btn-primary ripple"
                        onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK)}
                      >
                        <Phone size={18}/> Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="redbus-integration-card mt-32 mb-32 glass-effect ripple">
             <div className="redbus-content">
                <div className="redbus-text">
                   <h3>Book Bus Tickets Online</h3>
                   <p>Looking for interstate bus tickets? Book instantly via RedBus for all major routes.</p>
                </div>
                <a 
                  href="https://www.redbus.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary ripple"
                  onClick={() => trackEvent('redbus_redirect')}
                >
                  Book on RedBus <ExternalLink size={18} />
                </a>
             </div>
          </div>

          <div className="ads-container mt-32 mb-32">
            <ins className="adsbygoogle"
                 style={{display:'block'}}
                 data-ad-client="ca-pub-4843301407118801"
                 data-ad-slot="rental_bottom_slot"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>

          <div className="pricing-table-container mt-50">
             <div className="section-title">
               <h2>Detailed Pricing Table</h2>
             </div>
             <div className="table-responsive">
                <table className="rental-table">
                   <thead>
                      <tr>
                         <th>Vehicle Name</th>
                         <th>Capacity</th>
                         <th>Outstation (per km)</th>
                         <th>Local (8hrs/80km)</th>
                         <th>Extra Hour</th>
                         <th>Extra Km</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr>
                         <td>Swift Dzire</td>
                         <td>4+1 Seats</td>
                         <td>₹12</td>
                         <td>₹2,500</td>
                         <td>₹200</td>
                         <td>₹12</td>
                      </tr>
                      <tr>
                         <td>Innova Crysta</td>
                         <td>7+1 Seats</td>
                         <td>₹18</td>
                         <td>₹4,500</td>
                         <td>₹350</td>
                         <td>₹18</td>
                      </tr>
                      <tr>
                         <td>Tempo Traveller</td>
                         <td>12-17 Seats</td>
                         <td>₹25</td>
                         <td>₹6,000</td>
                         <td>₹500</td>
                         <td>₹25</td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rental;
