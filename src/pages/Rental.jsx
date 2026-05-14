import React from 'react';
import { Users, Briefcase, MessageSquare, Wind, Fuel, Map, CheckCircle, ShieldCheck, Zap, Phone, ExternalLink } from 'lucide-react';

// Centralized icon structure to prevent runtime crashes
const Icons = {
  Users: Users || (() => null),
  Briefcase: Briefcase || (() => null),
  MessageSquare: MessageSquare || (() => null),
  Wind: Wind || (() => null),
  Fuel: Fuel || (() => null),
  Map: Map || (() => null),
  CheckCircle: CheckCircle || (() => null),
  ShieldCheck: ShieldCheck || (() => null),
  Zap: Zap || (() => null),
  Phone: Phone || (() => null),
  ExternalLink: ExternalLink || (() => null)
};
import './Rental.css';
import Image from '../components/common/Image';
import { getCallLink, sendWhatsApp } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import { getUnsplashSrcSet } from '../utils/imageUtils';
import updateMetaTags from '../utils/updateMetaTags';

import tempoImg from '../assets/tempo_traveller.png';
import miniBusImg from '../assets/mini_bus.png';
import sleeperCoachImg from '../assets/sleeper_coach.png';

const vehicles = [
  {
    id: 1,
    name: "17 Seater Executive Bus",
    type: "Mini Bus - AC",
    seats: "17 + 1",
    bags: 15,
    transmission: "Manual",
    priceKm: "₹25",
    priceDay: "₹6,000",
    features: ["Push-back Seats", "Music System", "Ample Luggage Space", "Experienced Driver", "Charging Points"],
    image: tempoImg,
    urgency: "Only 2 slots left this weekend"
  },
  {
    id: 2,
    name: "35 Seater Luxury Bus",
    type: "Tourist Coach - AC",
    seats: "35 + 2",
    bags: 35,
    transmission: "Manual",
    priceKm: "₹45",
    priceDay: "₹12,500",
    features: ["Air Conditioned", "High Roof", "Reading Lights", "Perfect for Groups", "Mic & Audio System"],
    image: miniBusImg,
    urgency: "Popular for weddings"
  },
  {
    id: 3,
    name: "Premium Sleeper Coach",
    type: "30 Berth - AC",
    seats: "30 Berths",
    bags: 50,
    transmission: "Manual",
    priceKm: "₹65",
    priceDay: "₹22,000",
    features: ["Full Sleeper Berths", "Privacy Curtains", "AC & Ventilation", "Smooth Suspension", "Night Light"],
    image: sleeperCoachImg,
    urgency: "Night travel specialist"
  }
];

const Rental = () => {
  React.useEffect(() => {
    updateMetaTags({
      title: 'Our Bus Fleet | Partner\'s Bus Service Chalisgaon',
      description: 'Explore our premium bus fleet including 17 seater executive buses, 35 seater luxury coaches, and AC sleeper buses. Professional group transport in Chalisgaon.',
      keywords: 'Bus Rental Chalisgaon, Luxury Bus Jalgaon, 35 Seater Bus Hire, Sleeper Coach Chalisgaon',
    });
  }, []);

  return (
    <div className="rental-page">
      <div className="page-header section-padding parallax-hero">
        <div className="container">
          <div className="badge badge-orange mb-16">Premium Bus Fleet</div>
          <h1>Partner's Bus Fleet</h1>
          <p>The most reliable luxury buses in Chalisgaon for safe and comfortable group journeys.</p>
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
              Whether you are planning a family wedding in Chalisgaon, a school trip, or a corporate retreat, <strong>Partner's Bus Service</strong> offers the most reliable fleet of buses in the region. We specialize strictly in group transport, ensuring safety and comfort for all passengers.
            </p>
            <p>
              Our fleet includes executive <strong>17 Seater Mini Buses</strong>, luxury <strong>35 Seater Coaches</strong>, and premium <strong>Sleeper Buses</strong> for long-distance travel.
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
                  <Image 
                    src={`${vehicle.image}?auto=format&fit=crop&q=80&w=800`} 
                    srcSet={getUnsplashSrcSet(vehicle.image)}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt={vehicle.name} 
                    width={500}
                    height={350}
                  />
                  <div className="vehicle-pricing-overlay">
                    <span>From {vehicle.priceKm}/km</span>
                  </div>
                  <div className="v-urgency-badge">
                     <Icons.Zap size={10} /> {vehicle.urgency}
                  </div>
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-header">
                    <h3>{vehicle.name}</h3>
                    <span className="v-tag">{vehicle.type}</span>
                  </div>
                  
                  <div className="vehicle-main-features">
                    <div className="v-feat"><Icons.Users size={18}/> {vehicle.seats}</div>
                    <div className="v-feat"><Icons.Briefcase size={18}/> {vehicle.bags}</div>
                    <div className="v-feat"><Icons.Wind size={18}/> AC</div>
                    <div className="v-feat"><Icons.Fuel size={18}/> Petrol/Diesel</div>
                  </div>

                  <ul className="v-feature-list">
                    {vehicle.features.map((f, i) => (
                      <li key={i}><Icons.CheckCircle size={14} color="#2ed573"/> {f}</li>
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
                        <Icons.MessageSquare size={18}/> WhatsApp
                      </button>
                      <a 
                        href={getCallLink()} 
                        className="btn btn-primary ripple"
                        onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK)}
                      >
                        <Icons.Phone size={18}/> Call Now
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
                  Book on RedBus <Icons.ExternalLink size={18} />
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



