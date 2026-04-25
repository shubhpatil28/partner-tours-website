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
        <img src={heroImg} alt="Partner's Tours & Travels Chalisgaon" className="hero-bg" loading="lazy" />
        <div className="container hero-content fade-in-up">
          <div className="badge badge-orange">Best Travel Agency in Chalisgaon</div>
          <h1>Top Rated Travel Partner in <br/><span>Chalisgaon & Jalgaon</span></h1>
          <p>The leading travel agency near you for Bus Booking, Flight Tickets, and Curated Tour Packages across Maharashtra and India.</p>
          <div className="hero-btns">
            <a href="tel:+918421514348" className="btn btn-primary btn-lg">
              <Phone size={22}/> Call +91 8421514348
            </a>
            <a href="https://wa.me/918421514348?text=Hi, I am looking for a travel agency near me in Chalisgaon. Please share details." className="btn btn-whatsapp btn-lg">
              <MessageSquare size={22}/> WhatsApp Now
            </a>
          </div>
          
          <div className="trust-badges mt-40">
            <div className="t-badge"><span className="num">10+</span> <span className="lab">Years in Jalgaon</span></div>
            <div className="t-badge"><span className="num">1000+</span> <span className="lab">Happy Travelers</span></div>
            <div className="t-badge"><span className="num">24/7</span> <span className="lab">Local Support</span></div>
          </div>
        </div>
      </section>

      {/* Services At a Glance */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>Travel Services in Jalgaon</span></h2>
            <p>Providing the best travel solutions in Chalisgaon and across Maharashtra for over a decade.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="service-card">
              <div className="s-icon"><Bus size={40}/></div>
              <h3>Bus Booking Jalgaon</h3>
              <p>Daily luxury bus services from Chalisgaon to Pune, Mumbai, Surat, and other major cities.</p>
              <ul className="s-list">
                <li><CheckCircle size={14}/> AC / Non-AC Luxury Buses</li>
                <li><CheckCircle size={14}/> Daily Jalgaon to Pune Routes</li>
              </ul>
              <Link to="/rental" className="s-link">Explore Routes <ArrowRight size={16}/></Link>
            </div>
            
            <div className="service-card">
              <div className="s-icon"><Plane size={40}/></div>
              <h3>Flight Booking Chalisgaon</h3>
              <p>Lowest fare Domestic and International flight tickets available at our Chalisgaon office.</p>
              <ul className="s-list">
                <li><CheckCircle size={14}/> Exclusive Local Discounts</li>
                <li><CheckCircle size={14}/> Instant Ticket Booking</li>
              </ul>
              <a href="https://wa.me/918421514348" className="s-link">Check Fares <ArrowRight size={16}/></a>
            </div>
            
            <div className="service-card">
              <div className="s-icon"><Globe size={40}/></div>
              <h3>Tour Packages Maharashtra</h3>
              <p>Customized holiday and pilgrimage packages starting from Jalgaon to all over India.</p>
               <ul className="s-list">
                <li><CheckCircle size={14}/> Group Tours from Chalisgaon</li>
                <li><CheckCircle size={14}/> Affordable Honeymoon Deals</li>
              </ul>
              <Link to="/packages" className="s-link">See Packages <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Highlights */}
      <section className="section-padding city-section">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="city-info">
              <h2>Major <span>Routes from Chalisgaon</span></h2>
              <p>We connect Chalisgaon and Jalgaon district to the most popular business and tourism hubs in India.</p>
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
              <p className="mt-20"><strong>Best Bus Booking Near Me.</strong> Reliable travels across Maharashtra.</p>
            </div>
            <div className="city-img-container">
               <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" alt="Bus Booking Service Jalgaon" className="rounded-img" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Popular <span>Packages from Jalgaon</span></h2>
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
          <div className="text-center mt-40">
             <Link to="/packages" className="btn btn-secondary">View All Tour Packages</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Trusted by <span>Chalisgaon Residents</span></h2>
          </div>
          <div className="grid grid-3">
            <div className="testimonial-item">
              <div className="stars"><Star size={16} fill="#FFC107" color="#FFC107" /> x 5</div>
              <p>"Partner's Tours is the best travel agency in Chalisgaon. Their bus service to Pune is always prompt and comfortable."</p>
              <div className="client-info">- Manoj Patil (Bhadgaon Road)</div>
            </div>
            <div className="testimonial-item">
              <div className="stars"><Star size={16} fill="#FFC107" color="#FFC107" /> x 5</div>
              <p>"Excellent group tour arrangements. They handled everything from Jalgaon to Kashmir perfectly."</p>
              <div className="client-info">- Sumit Shinde (Chalisgaon)</div>
            </div>
             <div className="testimonial-item">
              <div className="stars"><Star size={16} fill="#FFC107" color="#FFC107" /> x 5</div>
              <p>"Highly recommend for flight bookings. Got the best rates in Jalgaon district!"</p>
              <div className="client-info">- Neha Mahajan (Pachora Area)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PackageSummaryCard = ({ id, image, title, dur, price }) => (
  <div className="p-sum-card">
    <div className="p-img"><img src={image} alt={`${title} Tour Package`} loading="lazy" /></div>
    <div className="p-content">
      <div className="p-meta"><span>{dur}</span> <span>Starts from {price}</span></div>
      <h3>{title}</h3>
      <Link to={`/package/${id}`} className="btn btn-primary full-width">View Details</Link>
    </div>
  </div>
);

export default Home;
