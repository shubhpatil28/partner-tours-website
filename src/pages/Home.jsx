import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Bus, Plane, Globe, Star, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';
import './Home.css';
import heroImg from '../assets/hero.png';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';
import dubaiImg from '../assets/dubai.png';
import thailandImg from '../assets/thailand.png';
import { CONTACT_CONFIG } from '../config';
import { getWhatsAppLink, getCallLink, sendWhatsApp } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import updateMetaTags from '../utils/updateMetaTags';
import { injectStructuredData, getTravelAgencySchema } from '../utils/seo';
import { handleImageError } from '../utils/imageUtils';

const Home = ({ onEnquiry }) => {
  React.useEffect(() => {
    updateMetaTags({
      title: 'Partner\'s Tours & Travels | Best Travel Agency in Chalisgaon',
      description: 'Partner\'s Tours & Travels is the most trusted travel agency in Chalisgaon. We offer premium holiday packages, luxury bus rentals, and flight bookings across Jalgaon district.',
      keywords: 'Travel Agency Chalisgaon, Best Tour Operator Jalgaon, Bus Rental Chalisgaon, Flight Booking Chalisgaon, Partner Tours',
    });

    injectStructuredData(getTravelAgencySchema(CONTACT_CONFIG));
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Parallax Effect */}
      <section className="hero parallax-hero">
        <img src={heroImg} alt="Partner's Tours & Travels - Leading Travel Agency in Chalisgaon" className="hero-bg" loading="lazy" onError={handleImageError} />
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in-up">
          <div className="badge badge-orange ripple mb-16">1000+ Happy Customers • Best Price • 24/7 Support</div>
          <h1 className="mb-24">Experience Your Next <br/><span>Perfect Journey</span></h1>
          <p className="mb-32">
            <strong>Partner's Tours & Travels</strong> is the most trusted travel agency in <strong>Chalisgaon</strong>. Since 2015, we have been serving the Jalgaon district with premium holiday packages, luxury bus rentals, and instant flight bookings. Our office is located at Bhadgaon Road, ready to plan your dream vacation.
          </p>
          <div className="hero-btns">
            <a 
              href={getCallLink()} 
              className="btn btn-primary btn-lg ripple"
              onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK)}
            >
              <Phone size={20}/> Call Now
            </a>
            <button 
              className="btn btn-whatsapp btn-lg ripple"
              onClick={() => {
                trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'hero' });
                sendWhatsApp('general', 'Home Hero');
              }}
            >
              <MessageSquare size={20}/> Book on WhatsApp
            </button>
          </div>
          
          <div className="trust-badges mt-40">
            <div className="t-badge ripple">
              <span className="num">9+</span> 
              <span className="lab">Years in Chalisgaon</span>
            </div>
            <div className="t-badge ripple gst-badge">
              <span className="num">GST</span> 
              <span className="lab">Verified Agency</span>
            </div>
            <div className="t-badge ripple">
              <span className="num">5000+</span> 
              <span className="lab">Happy Travelers</span>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder Below Hero */}
      <div className="container ads-container mt-32 mb-32">
        <ins className="adsbygoogle"
             style={{display:'block'}}
             data-ad-client="ca-pub-4843301407118801"
             data-ad-slot="hero_bottom_slot"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>

      {/* Services Section */}
      <section className="section-padding bg-light glass-effect">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-blue mb-16">Our Specialized Services</div>
            <h2 className="mb-16">Chalisgaon's Most <span>Reliable Travel Partner</span></h2>
            <p>We combine local Chalisgaon expertise with world-class travel standards to bring you the best deals on tours, rentals, and bookings.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="service-card ripple">
              <div className="s-icon"><Bus size={32}/></div>
              <h3>Luxury Bus Rentals</h3>
              <p>Book premium AC/Non-AC luxury buses for family trips, weddings, or corporate outings from Chalisgaon to anywhere in Maharashtra.</p>
              <ul className="s-list mb-16">
                <li><CheckCircle size={16}/> Daily Pune-Mumbai Routes</li>
                <li><CheckCircle size={14}/> 12 to 50 Seater Options</li>
              </ul>
              <Link to="/rental" className="s-link" onClick={() => trackEvent(ANALYTICS_EVENTS.RENTAL_VIEW)}>Check Rates <ArrowRight size={16}/></Link>
            </div>
            
            <div className="service-card ripple">
              <div className="s-icon"><Plane size={32}/></div>
              <h3>Instant Flight Booking</h3>
              <p>Forget the online booking hassle. Get instant E-tickets for domestic and international flights at our Chalisgaon office at the lowest fares.</p>
              <ul className="s-list mb-16">
                <li><CheckCircle size={16}/> Group Booking Discounts</li>
                <li><CheckCircle size={14}/> 24/7 Cancellation Support</li>
              </ul>
              <button 
                className="s-link"
                onClick={() => {
                  trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { type: 'flights' });
                  sendWhatsApp('general', 'Flight Booking');
                }}
              >
                Get Best Fare <ArrowRight size={16}/>
              </button>
            </div>
            
            <div className="service-card ripple">
              <div className="s-icon"><Globe size={32}/></div>
              <h3>Curated Tour Packages</h3>
              <p>Hand-picked domestic and international holiday packages designed for comfort and luxury, starting right from Chalisgaon/Jalgaon.</p>
               <ul className="s-list mb-16">
                <li><CheckCircle size={16}/> Honeymoon & Family Tours</li>
                <li><CheckCircle size={14}/> Religious & Heritage Trips</li>
              </ul>
              <Link to="/packages" className="s-link">Explore Tours <ArrowRight size={16}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* RedBus Integration CTA */}
      <section className="redbus-cta bg-white">
        <div className="container">
          <div className="redbus-banner ripple">
            <div className="redbus-icon-wrap">
              <Bus size={32} />
            </div>
            <div className="redbus-text">
              <h3>Book Bus Tickets Online</h3>
              <p>Looking for daily bus tickets to Pune, Mumbai or Nasik? Book instantly via RedBus.</p>
            </div>
            <a 
              href="https://www.redbus.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg ripple"
              onClick={() => trackEvent('redbus_redirect_home')}
            >
              Book on RedBus
            </a>
          </div>
        </div>
      </section>

      {/* Trust & About Summary Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="city-info">
              <div className="badge badge-orange mb-16">Why Chalisgaon Chooses Us</div>
              <h2 className="mb-24">10 Years of <span>Travel Excellence</span></h2>
              <p className="mb-32">As a locally owned business, we take pride in serving our community. We don't just book tickets; we create memories. Our office on Bhadgaon Road is always open for personal consultations to help you plan your perfect trip.</p>
              
              <div className="grid grid-2 mt-40" style={{gap: '2rem'}}>
                <div className="feature-item ripple" style={{display: 'flex', gap: '1rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)'}}>
                  <Shield className="text-accent" size={24} style={{color: 'var(--accent)'}} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>Secure & Verified</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>GST registered with verified hotel partners.</p>
                  </div>
                </div>
                <div className="feature-item ripple" style={{display: 'flex', gap: '1rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)'}}>
                  <Award className="text-accent" size={24} style={{color: 'var(--accent)'}} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>Best Price</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>We match any verified quote in Jalgaon district.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="city-img-container">
               <img src={dubaiImg} alt="Partner's Tours & Travels - Best Tour Operator in Jalgaon District" className="rounded-img shadow-lg" loading="lazy" onError={handleImageError} />
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
                <TestimonialCard name="Rajesh Deshmukh" location="Chalisgaon" text="I booked my Kashmir honeymoon with Partner's Tours. The arrangements at Srinagar were world-class. Best travel agency in Chalisgaon!" />
                <TestimonialCard name="Priyanka Patil" location="Jalgaon" text="Their luxury bus service to Mumbai is very punctual. The drivers are professional and the seats are comfortable for long journeys." />
                <TestimonialCard name="Amol Sonawane" location="Pachora" text="Excellent flight booking service. I got a much better rate than online portals for my Dubai trip. Highly recommended!" />
                <TestimonialCard name="Rajesh Deshmukh" location="Chalisgaon" text="I booked my Kashmir honeymoon with Partner's Tours. The arrangements at Srinagar were world-class. Best travel agency in Chalisgaon!" />
                <TestimonialCard name="Priyanka Patil" location="Jalgaon" text="Their luxury bus service to Mumbai is very punctual. The drivers are professional and the seats are comfortable for long journeys." />
                <TestimonialCard name="Amol Sonawane" location="Pachora" text="Excellent flight booking service. I got a much better rate than online portals for my Dubai trip. Highly recommended!" />
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
                href={getWhatsAppLink("Hi, I want to receive latest tour offers on WhatsApp.")}
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
    <div className="p-img"><img src={image} alt={`${title} Tour Package from Chalisgaon Travel Agency`} loading="lazy" onError={handleImageError} /></div>
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
