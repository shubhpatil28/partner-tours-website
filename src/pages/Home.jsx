import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Bus, Plane, Globe, Star, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import './Home.css';
import heroImg from '../assets/hero.png';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src={heroImg} alt="Partner's Tours & Travels" className="hero-bg" loading="lazy" />
        <div className="container hero-content fade-in-up">
          <div className="badge badge-orange">Trusted Since 10+ Years</div>
          <h1>Explore India with <br/><span>Partner's Tours & Travels</span></h1>
          <p>Your one-stop destination for Bus, Flight, and Curated Tour Bookings. Based in Chalisgaon, serving All India.</p>
          <div className="hero-btns">
            <a href="tel:+918421514348" className="btn btn-primary btn-lg">
              <Phone size={22}/> Call +91 8421514348
            </a>
            <a href="https://wa.me/918421514348?text=Hi, I want to book a travel service. Please share details." className="btn btn-whatsapp btn-lg">
              <MessageSquare size={22}/> WhatsApp Now
            </a>
          </div>
          
          <div className="trust-badges mt-40">
            <div className="t-badge"><span className="num">10+</span> <span className="lab">Years Exp.</span></div>
            <div className="t-badge"><span className="num">1000+</span> <span className="lab">Happy Clients</span></div>
            <div className="t-badge"><span className="num">24/7</span> <span className="lab">Support</span></div>
          </div>
        </div>
      </section>

      {/* Services At a Glance */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>Premium Services</span></h2>
            <p>From daily travel needs to luxury vacations, we handle everything for you.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="service-card">
              <div className="s-icon"><Bus size={40}/></div>
              <h3>Bus Booking</h3>
              <p>Daily luxury bus services to Pune, Mumbai, Surat, and many more cities.</p>
              <ul className="s-list">
                <li><CheckCircle size={14}/> AC / Non-AC Buses</li>
                <li><CheckCircle size={14}/> Return Tickets Available</li>
              </ul>
              <Link to="/rental" className="s-link">View Routes <ArrowRight size={16}/></Link>
            </div>
            
            <div className="service-card">
              <div className="s-icon"><Plane size={40}/></div>
              <h3>Flight Booking</h3>
              <p>Hassle-free Domestic and International flight tickets at competitive rates.</p>
              <ul className="s-list">
                <li><CheckCircle size={14}/> Best Fare Guarantee</li>
                <li><CheckCircle size={14}/> Instant Cancellation</li>
              </ul>
              <a href="https://wa.me/918421514348" className="s-link">Inquire Now <ArrowRight size={16}/></a>
            </div>
            
            <div className="service-card">
              <div className="s-icon"><Globe size={40}/></div>
              <h3>Tour Packages</h3>
              <p>Customized holiday packages for Goa, Manali, Kashmir, and International destinations.</p>
               <ul className="s-list">
                <li><CheckCircle size={14}/> Family & Honeymoon</li>
                <li><CheckCircle size={14}/> Group Tours</li>
              </ul>
              <Link to="/packages" className="s-link">View Packages <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Highlights */}
      <section className="section-padding city-section">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="city-info">
              <h2>Major <span>Cities Covered</span></h2>
              <p>We provide reliable daily travel services connecting Chalisgaon to major hubs across India.</p>
              <div className="city-grid">
                <span className="city-tag">Pune</span>
                <span className="city-tag">Mumbai</span>
                <span className="city-tag">Surat</span>
                <span className="city-tag">Ahmedabad</span>
                <span className="city-tag">Indore</span>
                <span className="city-tag">Ujjain</span>
                <span className="city-tag">Bhopal</span>
                <span className="city-tag">Nasik</span>
              </div>
              <p className="mt-20"><strong>All India Services Available.</strong> Contact us for any destination.</p>
            </div>
            <div className="city-img-container">
               <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" alt="Travel Network" className="rounded-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Best <span>Tour Deals</span></h2>
          </div>
          <div className="grid grid-3">
             <PackageSummaryCard 
                id="kashmir-trip" 
                image={kashmirImg} 
                title="Kashmir Paradise" 
                dur="6D/5N" 
                price="₹18,999" 
             />
             <PackageSummaryCard 
                id="manali-trip" 
                image={manaliImg} 
                title="Manali Adventure" 
                dur="5D/4N" 
                price="₹12,499" 
             />
             <PackageSummaryCard 
                id="goa-trip" 
                image={goaImg} 
                title="Goa Beach Bliss" 
                dur="3D/2N" 
                price="₹7,999" 
             />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>What Our <span>Traveling Partners</span> Say</h2>
          </div>
          <div className="grid grid-3">
            <div className="testimonial-item">
              <div className="stars"><Star size={16} fill="#FFC107" color="#FFC107" /> x 5</div>
              <p>"Partner's Tours provided excellent service for our group trip to Ahmedabad. The bus was clean and on time."</p>
              <div className="client-info">- Manoj Patil (Chalisgaon)</div>
            </div>
            <div className="testimonial-item">
              <div className="stars"><Star size={16} fill="#FFC107" color="#FFC107" /> x 5</div>
              <p>"Booked my international flights here. Got the best price compared to online portals. Very helpful staff!"</p>
              <div className="client-info">- Sumit Shinde (Pune)</div>
            </div>
             <div className="testimonial-item">
              <div className="stars"><Star size={16} fill="#FFC107" color="#FFC107" /> x 5</div>
              <p>"Their Goa package was perfectly managed. Hotels and travel were top-notch. Truly trusted partners."</p>
              <div className="client-info">- Neha Mahajan (Nasik)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PackageSummaryCard = ({ id, image, title, dur, price }) => (
  <div className="p-sum-card">
    <div className="p-img"><img src={image} alt={title} /></div>
    <div className="p-content">
      <div className="p-meta"><span>{dur}</span> <span>Starts from {price}</span></div>
      <h3>{title}</h3>
      <Link to={`/package/${id}`} className="btn btn-primary full-width">View Details</Link>
    </div>
  </div>
);

export default Home;
