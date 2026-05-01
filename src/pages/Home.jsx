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

const Home = ({ onEnquiry }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'; 
  };

  return (
    <div className="home-page">
      {/* Hero Section with Parallax Effect */}
      <section className="hero parallax-hero">
        <img src={heroImg} alt="Partner's Tours & Travels Chalisgaon" className="hero-bg" loading="lazy" onError={handleImageError} />
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in-up">
          <div className="badge badge-orange ripple mb-16">✔ 1000+ Happy Customers &bull; Best Price &bull; 24/7 Support</div>
          <h1 className="mb-24">Discover Your Next <br/><span>Perfect Adventure</span></h1>
          <p className="mb-32">The leading travel agency in Chalisgaon for Bus Booking, Flight Tickets, and Curated Tour Packages across India.</p>
          <div className="hero-btns">
            <a 
              href={`tel:${CONTACT_CONFIG.PHONE_NUMBER}`} 
              className="btn btn-primary btn-lg ripple"
              onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK)}
            >
              <Phone size={20}/> Call {CONTACT_CONFIG.PHONE_NUMBER}
            </a>
            <a 
              href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=${CONTACT_CONFIG.DEFAULT_WA_MESSAGE}`} 
              className="btn btn-whatsapp btn-lg ripple"
              onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'hero' })}
            >
              <MessageSquare size={20}/> Book on WhatsApp
            </a>
          </div>
          
          <div className="trust-badges mt-40">
            <div className="t-badge ripple">
              <span className="num">10+</span> 
              <span className="lab">Years Experience</span>
            </div>
            <div className="t-badge ripple">
              <span className="num">24/7</span> 
              <span className="lab">Local Support</span>
            </div>
            <div className="t-badge ripple">
              <span className="num">100%</span> 
              <span className="lab">Safe Travel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-light glass-effect">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-blue mb-16">Our Services</div>
            <h2 className="mb-16">Premium <span>Travel Solutions</span></h2>
            <p>Providing the best travel solutions in Chalisgaon and across Maharashtra for over a decade.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="service-card ripple">
              <div className="s-icon"><Bus size={32}/></div>
              <h3>Luxury Bus Service</h3>
              <p>Daily luxury bus services from Chalisgaon to Pune, Mumbai, Surat, and other major cities.</p>
              <ul className="s-list mb-16">
                <li><CheckCircle size={16}/> Premium AC Sleepers</li>
                <li><CheckCircle size={14}/> Daily Pune Routes</li>
              </ul>
              <Link to="/rental" className="s-link" onClick={() => trackEvent(ANALYTICS_EVENTS.RENTAL_VIEW)}>Explore Routes <ArrowRight size={16}/></Link>
            </div>
            
            <div className="service-card ripple">
              <div className="s-icon"><Plane size={32}/></div>
              <h3>Flight Bookings</h3>
              <p>Lowest fare Domestic and International flight tickets available at our Chalisgaon office.</p>
              <ul className="s-list mb-16">
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
            
            <div className="service-card ripple">
              <div className="s-icon"><Globe size={32}/></div>
              <h3>Holiday Packages</h3>
              <p>Customized holiday and pilgrimage packages starting from Jalgaon to all over India.</p>
               <ul className="s-list mb-16">
                <li><CheckCircle size={16}/> Family & Group Tours</li>
                <li><CheckCircle size={14}/> Honeymoon Specials</li>
              </ul>
              <Link to="/packages" className="s-link">See Packages <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="city-info">
              <div className="badge badge-orange mb-16">Why Choose Partner's</div>
              <h2 className="mb-24">Chalisgaon's Most <span>Reliable Travel Partner</span></h2>
              <p className="mb-32">We connect Chalisgaon and Jalgaon district to the most popular business and tourism hubs in India with unparalleled safety and comfort.</p>
              
              <div className="grid grid-2 mt-40" style={{gap: '2rem'}}>
                <div className="feature-item ripple" style={{display: 'flex', gap: '1rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)'}}>
                  <Shield className="text-accent" size={24} style={{color: 'var(--accent)'}} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>Secure Booking</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>Verified routes and safe payment options.</p>
                  </div>
                </div>
                <div className="feature-item ripple" style={{display: 'flex', gap: '1rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)'}}>
                  <Award className="text-accent" size={24} style={{color: 'var(--accent)'}} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>Award Winning</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>Best travel agency service in Jalgaon district.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="city-img-container">
               <img src={dubaiImg} alt="Travel with Partner's Tours" className="rounded-img shadow-lg" loading="lazy" onError={handleImageError} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding bg-light glass-effect">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-blue mb-16">Tour Packages</div>
            <h2 className="mb-16">Popular <span>Destinations</span></h2>
          </div>
          <div className="grid grid-3">
             <PackageSummaryCard 
                id="kashmir-trip" 
                image={kashmirImg} 
                title="Kashmir Paradise" 
                dur="6D/5N" 
                price="₹18,999" 
                onEnquiry={onEnquiry}
                handleImageError={handleImageError}
             />
             <PackageSummaryCard 
                id="manali-trip" 
                image={manaliImg} 
                title="Manali Adventure" 
                dur="5D/4N" 
                price="₹12,499" 
                onEnquiry={onEnquiry}
                handleImageError={handleImageError}
             />
             <PackageSummaryCard 
                id="goa-trip" 
                image={goaImg} 
                title="Goa Beach Bliss" 
                dur="3D/2N" 
                price="₹7,999" 
                onEnquiry={onEnquiry}
                handleImageError={handleImageError}
             />
          </div>
          <div className="text-center mt-50">
             <Link to="/packages" className="btn btn-secondary btn-lg ripple">View All Tour Packages</Link>
          </div>
        </div>
      </section>

      {/* Premium Testimonials Slider */}
      <section className="testimonials-section section-padding glass-effect">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-orange mb-16">Testimonials</div>
            <h2>What Our <span>Travelers Say</span></h2>
          </div>
          <div className="testimonial-slider-container">
             <div className="testimonial-track">
                <TestimonialCard name="Manoj Patil" location="Mumbai" text="Partner's Tours is the best. Their bus service to Pune is prompt and comfortable." />
                <TestimonialCard name="Sumit Shinde" location="Pune" text="Excellent group tour arrangements. They handled everything perfectly." />
                <TestimonialCard name="Neha Mahajan" location="Nashik" text="Highly recommend for flight bookings. Got the best rates in district!" />
                <TestimonialCard name="Manoj Patil" location="Mumbai" text="Partner's Tours is the best. Their bus service to Pune is prompt and comfortable." />
                <TestimonialCard name="Sumit Shinde" location="Pune" text="Excellent group tour arrangements. They handled everything perfectly." />
                <TestimonialCard name="Neha Mahajan" location="Nashik" text="Highly recommend for flight bookings. Got the best rates in district!" />
             </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="whatsapp-cta-section mb-50">
        <div className="container">
          <div className="whatsapp-cta-card ripple">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <div className="cta-icon-wrap">
                <MessageSquare size={32} />
              </div>
              <div className="cta-text">
                <h2>Get Latest Tour Offers on WhatsApp</h2>
                <p>Join our WhatsApp channel for exclusive deals & destination updates.</p>
              </div>
              <a
                href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=Hi, I want to receive latest tour offers on WhatsApp.`}
                className="btn btn-whatsapp btn-lg ripple"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'footer_banner' })}
              >
                <MessageSquare size={20} /> Join Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PackageSummaryCard = ({ id, image, title, dur, price, onEnquiry, handleImageError }) => (
  <div className="p-sum-card ripple" onClick={() => onEnquiry(title)}>
    <div className="p-img"><img src={image} alt={`${title} Tour Package`} loading="lazy" onError={handleImageError} /></div>
    <div className="p-content">
      <div className="p-meta"><span>{dur}</span> <span>Starts from {price}</span></div>
      <h3 className="mb-16">{title}</h3>
      <Link to={`/package/${id}`} className="btn btn-primary full-width ripple" onClick={(e) => e.stopPropagation()}>View Details</Link>
    </div>
  </div>
);

const TestimonialCard = ({ name, location, text }) => (
  <div className="testimonial-card premium-card ripple">
    <div className="stars mb-16">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
      ))}
    </div>
    <p className="mb-16">"{text}"</p>
    <div className="user">
      <div className="user-avatar">{name[0]}</div>
      <div className="user-info">
        <strong>{name}</strong>
        <span>{location}, India</span>
      </div>
    </div>
  </div>
);

export default Home;

