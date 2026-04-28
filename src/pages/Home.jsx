import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Bus, Plane, Globe, Star, Users, Clock, ArrowRight, CheckCircle, Shield, Award, Headphones } from 'lucide-react';
import './Home.css';
import heroImg from '../assets/hero.png';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';
import dubaiImg from '../assets/dubai.png';
import thailandImg from '../assets/thailand.png';
import { CONTACT_CONFIG } from '../config';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const Home = () => {
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'; // Global fallback
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <img src={heroImg} alt="Partner's Tours & Travels Chalisgaon" className="hero-bg" loading="lazy" onError={handleImageError} />
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in-up">
          <div className="badge badge-orange">Trusted by 10,000+ Travelers</div>
          <h1>Discover Your Next <br/><span>Perfect Adventure</span></h1>
          <p>The leading travel agency in Chalisgaon for Bus Booking, Flight Tickets, and Curated Tour Packages across India.</p>
          <div className="hero-btns">
            <a 
              href={`tel:${CONTACT_CONFIG.WHATSAPP_NUMBER}`} 
              className="btn btn-primary btn-lg"
              onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK)}
            >
              <Phone size={20}/> Call {CONTACT_CONFIG.PHONE_NUMBER}
            </a>
            <a 
              href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=Hi, I am looking for a travel agency near me in Chalisgaon. Please share details.`} 
              className="btn btn-whatsapp btn-lg"
              onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'hero' })}
            >
              <MessageSquare size={20}/> WhatsApp Now
            </a>
          </div>
          
          <div className="trust-badges">
            <div className="t-badge">
              <span className="num">10+</span> 
              <span className="lab">Years Experience</span>
            </div>
            <div className="t-badge">
              <span className="num">24/7</span> 
              <span className="lab">Local Support</span>
            </div>
            <div className="t-badge">
              <span className="num">100%</span> 
              <span className="lab">Safe Travel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-blue">Our Services</div>
            <h2>Premium <span>Travel Solutions</span></h2>
            <p>Providing the best travel solutions in Chalisgaon and across Maharashtra for over a decade.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="service-card">
              <div className="s-icon"><Bus size={32}/></div>
              <h3>Luxury Bus Service</h3>
              <p>Daily luxury bus services from Chalisgaon to Pune, Mumbai, Surat, and other major cities.</p>
              <ul className="s-list">
                <li><CheckCircle size={16}/> Premium AC Sleepers</li>
                <li><CheckCircle size={14}/> Daily Pune Routes</li>
              </ul>
              <Link to="/rental" className="s-link" onClick={() => trackEvent(ANALYTICS_EVENTS.RENTAL_VIEW)}>Explore Routes <ArrowRight size={16}/></Link>
            </div>
            
            <div className="service-card">
              <div className="s-icon"><Plane size={32}/></div>
              <h3>Flight Bookings</h3>
              <p>Lowest fare Domestic and International flight tickets available at our Chalisgaon office.</p>
              <ul className="s-list">
                <li><CheckCircle size={16}/> Instant E-Tickets</li>
                <li><CheckCircle size={14}/> Best Rate Guarantee</li>
              </ul>
              <a 
                href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=Hi, I want to check flight fares.`} 
                className="s-link"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { type: 'flights' })}
              >
                Check Fares <ArrowRight size={16}/>
              </a>
            </div>
            
            <div className="service-card">
              <div className="s-icon"><Globe size={32}/></div>
              <h3>Holiday Packages</h3>
              <p>Customized holiday and pilgrimage packages starting from Jalgaon to all over India.</p>
               <ul className="s-list">
                <li><CheckCircle size={16}/> Family & Group Tours</li>
                <li><CheckCircle size={14}/> Honeymoon Specials</li>
              </ul>
              <Link to="/packages" className="s-link">See Packages <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Trust Badges Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="city-info">
              <div className="badge badge-orange">Why Choose Partner's</div>
              <h2>Chalisgaon's Most <span>Reliable Travel Partner</span></h2>
              <p className="mt-20">We connect Chalisgaon and Jalgaon district to the most popular business and tourism hubs in India with unparalleled safety and comfort.</p>
              
              <div className="grid grid-2 mt-40" style={{gap: '1.5rem'}}>
                <div className="feature-item" style={{display: 'flex', gap: '1rem'}}>
                  <Shield className="text-accent" size={24} style={{color: 'var(--accent)'}} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>Secure Booking</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>Verified routes and safe payment options.</p>
                  </div>
                </div>
                <div className="feature-item" style={{display: 'flex', gap: '1rem'}}>
                  <Award className="text-accent" size={24} style={{color: 'var(--accent)'}} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>Award Winning</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>Best travel agency service in Jalgaon district.</p>
                  </div>
                </div>
                <div className="feature-item" style={{display: 'flex', gap: '1rem'}}>
                  <Headphones className="text-accent" size={24} style={{color: 'var(--accent)'}} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>Expert Support</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>24/7 dedicated local support for all travelers.</p>
                  </div>
                </div>
                <div className="feature-item" style={{display: 'flex', gap: '1rem'}}>
                  <Clock className="text-accent" size={24} style={{color: 'var(--accent)'}} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>On-Time Service</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>Punctual departures and reliable schedules.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="city-img-container">
               <img src={dubaiImg} alt="Travel with Partner's Tours" className="rounded-img" loading="lazy" onError={handleImageError} />
            </div>
          </div>
        </div>
      </section>

      {/* Major Routes */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Major <span>Routes from Chalisgaon</span></h2>
          </div>
          <div className="city-grid" style={{justifyContent: 'center'}}>
            <span className="city-tag">Pune</span>
            <span className="city-tag">Mumbai</span>
            <span className="city-tag">Surat</span>
            <span className="city-tag">Ahmedabad</span>
            <span className="city-tag">Indore</span>
            <span className="city-tag">Ujjain</span>
            <span className="city-tag">Bhopal</span>
            <span className="city-tag">Nasik</span>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-blue">Tour Packages</div>
            <h2>Popular <span>Destinations</span></h2>
          </div>
          <div className="grid grid-3">
             <PackageSummaryCard 
                id="kashmir-trip" 
                image={kashmirImg} 
                title="Kashmir Paradise" 
                dur="6D/5N" 
                price="₹18,999" 
                handleImageError={handleImageError}
             />
             <PackageSummaryCard 
                id="manali-trip" 
                image={manaliImg} 
                title="Manali Adventure" 
                dur="5D/4N" 
                price="₹12,499" 
                handleImageError={handleImageError}
             />
             <PackageSummaryCard 
                id="goa-trip" 
                image={goaImg} 
                title="Goa Beach Bliss" 
                dur="3D/2N" 
                price="₹7,999" 
                handleImageError={handleImageError}
             />
          </div>
          <div className="text-center mt-40" style={{marginTop: '4rem', textAlign: 'center'}}>
             <Link to="/packages" className="btn btn-secondary btn-lg">View All Tour Packages</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-orange">Testimonials</div>
            <h2>What Our <span>Travelers Say</span></h2>
          </div>
          <div className="grid grid-3">
            <TestimonialCard 
              name="Manoj Patil"
              area="Bhadgaon Road"
              text="Partner's Tours is the best travel agency in Chalisgaon. Their bus service to Pune is always prompt and comfortable."
            />
            <TestimonialCard 
              name="Sumit Shinde"
              area="Chalisgaon"
              text="Excellent group tour arrangements. They handled everything from Jalgaon to Kashmir perfectly."
            />
            <TestimonialCard 
              name="Neha Mahajan"
              area="Pachora Area"
              text="Highly recommend for flight bookings. Got the best rates in Jalgaon district!"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="whatsapp-cta-section">
        <div className="container">
          <div className="whatsapp-cta-card">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <div className="cta-icon-wrap">
                <MessageSquare size={32} />
              </div>
              <div className="cta-text">
                <h2>Get Latest Tour Offers on WhatsApp</h2>
                <p>Join our WhatsApp channel for exclusive deals, flash sales & new destination updates.</p>
              </div>
              <a
                href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=Hi, I want to receive latest tour offers and deals on WhatsApp.`}
                className="btn btn-whatsapp btn-lg cta-join-btn"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'footer_banner' })}
              >
                <MessageSquare size={20} /> Join WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PackageSummaryCard = ({ id, image, title, dur, price, handleImageError }) => (
  <div className="p-sum-card">
    <div className="p-img"><img src={image} alt={`${title} Tour Package`} loading="lazy" onError={handleImageError} /></div>
    <div className="p-content">
      <div className="p-meta"><span>{dur}</span> <span>Starts from {price}</span></div>
      <h3>{title}</h3>
      <Link to={`/package/${id}`} className="btn btn-primary full-width" onClick={() => trackEvent(ANALYTICS_EVENTS.PACKAGE_VIEW, { package_id: id })}>View Details</Link>
    </div>
  </div>
);

const TestimonialCard = ({ name, area, text }) => (
  <div className="testimonial-item">
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
      ))}
    </div>
    <p>"{text}"</p>
    <div className="client-info">
      <div className="client-avatar" style={{width: '40px', height: '40px', borderRadius: '50%', background: 'var(--slate-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', color: 'var(--accent)'}}>
        {name[0]}
      </div>
      <div>
        <div className="name">{name}</div>
        <div className="area" style={{fontSize: '0.75rem', color: 'var(--slate-500)', fontWeight: '500'}}>{area}</div>
      </div>
    </div>
  </div>
);

export default Home;

