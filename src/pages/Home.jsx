import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Bus, Plane, Globe, Star, Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';
import './Home.css';
import Image from '../components/common/Image';
import heroImg from '../assets/hero_bus.png';
import tempoImg from '../assets/tempo_traveller.png';
import miniBusImg from '../assets/mini_bus.png';
import luxuryBusImg from '../assets/hero_bus.png'; // Reusing or could use another
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

const Home = ({ onEnquiry }) => {
  React.useEffect(() => {
    updateMetaTags({
      title: 'Partner\'s Bus Service | Luxury Bus Rental Chalisgaon',
      description: 'Chalisgaon\'s most reliable bus rental service. Book 35-50 seater luxury buses and sleeper coaches for weddings, school trips, and corporate travel.',
      keywords: 'Bus Rental Chalisgaon, Tourist Bus Jalgaon, Sleeper Coach Booking, Group Transport Chalisgaon',
    });

    injectStructuredData(getTravelAgencySchema(CONTACT_CONFIG));
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Parallax Effect */}
      <section className="hero parallax-hero">
        <Image 
          src={heroImg} 
          alt="Partner's Tours & Travels - Leading Travel Agency in Chalisgaon" 
          className="hero-bg" 
          priority={true} 
          width={1920}
          height={1080}
        />
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in-up">
          <div className="badge badge-orange ripple mb-16">Chalisgaon's Premium Bus Company • 24/7 Support</div>
          <h1 className="mb-24">Luxury Bus Rental <br/><span>Service in Chalisgaon</span></h1>
          <p className="mb-32">
            <strong>Partner's Bus Service</strong> provides professional group transport solutions. We specialize in 35-50 Seater Tourist Buses and Premium Sleeper Coaches for all your group travel needs across Maharashtra.
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

      <section className="section-padding bg-light glass-effect">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-blue mb-16">Our Services</div>
            <h2 className="mb-16">Professional <span>Bus Transport</span></h2>
            <p>Reliable and safe transport for every occasion.</p>
          </div>
          
          <div className="grid grid-3">
            <div className="service-card ripple">
              <div className="s-icon"><Bus size={32}/></div>
              <h3>Wedding Bus Booking</h3>
              <p>Punctual and decorated buses for your special day. We ensure your guests travel in comfort.</p>
              <Link to="/rental" className="s-link">Book for Wedding <ArrowRight size={16}/></Link>
            </div>
            
            <div className="service-card ripple">
              <div className="s-icon"><Bus size={32}/></div>
              <h3>School & College Trips</h3>
              <p>Safety-first transport for educational tours and excursions with experienced drivers.</p>
              <Link to="/rental" className="s-link">Enquire for Trip <ArrowRight size={16}/></Link>
            </div>
            
            <div className="service-card ripple">
              <div className="s-icon"><Bus size={32}/></div>
              <h3>Corporate Travel</h3>
              <p>Premium buses for corporate retreats, site visits, and employee transport solutions.</p>
              <Link to="/rental" className="s-link">Corporate Booking <ArrowRight size={16}/></Link>
            </div>

            <div className="service-card ripple">
              <div className="s-icon"><Bus size={32}/></div>
              <h3>Pilgrimage Tours</h3>
              <p>Comfortable group travel to Shirdi, Jyotirlingas, and other religious destinations.</p>
              <Link to="/rental" className="s-link">Book Yatra Bus <ArrowRight size={16}/></Link>
            </div>

            <div className="service-card ripple">
              <div className="s-icon"><Bus size={32}/></div>
              <h3>Outstation Service</h3>
              <p>Reliable long-distance bus rentals for intercity travel across Maharashtra and beyond.</p>
              <Link to="/rental" className="s-link">Get Outstation Quote <ArrowRight size={16}/></Link>
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
              <div className="badge badge-orange mb-16">Why Choose Our Bus Service</div>
              <h2 className="mb-24">Premium <span>Group Transport</span></h2>
              <p className="mb-32">Partner's Bus Service is dedicated to providing the best-in-class transport experience for large groups. With a decade of expertise, we ensure every journey is safe, comfortable, and punctual.</p>
              
              <div className="grid grid-2 mt-40" style={{gap: '2rem'}}>
                <div className="feature-item ripple" style={{display: 'flex', gap: '1rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)'}}>
                  <CheckCircle className="text-accent" size={24} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>Professional Drivers</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>Experienced and verified staff for safe travel.</p>
                  </div>
                </div>
                <div className="feature-item ripple" style={{display: 'flex', gap: '1rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)'}}>
                  <Shield className="text-accent" size={24} />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>24/7 Support</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>Dedicated booking and en-route assistance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="city-img-container">
               <Image 
                src={heroImg} 
                alt="Partner's Bus Service Fleet" 
                className="rounded-img shadow-lg" 
                width={600}
                height={400}
               />
            </div>
          </div>
        </div>
      </section>

      {/* Our Bus Fleet Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-orange mb-16">Our Bus Fleet</div>
            <h2 className="text-white mb-16">Premium <span>Bus Options</span></h2>
          </div>
          <div className="grid grid-3">
             <FleetCard 
                image={tempoImg} 
                name="17 Seater Executive Bus" 
                capacity="17 Seater" 
                features={["AC", "Push-back Seats", "Music System"]} 
             />
             <FleetCard 
                image={miniBusImg} 
                name="35 Seater Tourist Bus" 
                capacity="35 Seater" 
                features={["Full AC", "High Roof", "LCD Entertainment"]} 
             />
             <FleetCard 
                image={heroImg} 
                name="Luxury Sleeper Bus" 
                capacity="30 Berths" 
                features={["Premium Berths", "Charging Points", "Air Suspension"]} 
             />
          </div>
          <div className="text-center mt-40">
             <Link to="/rental" className="btn btn-primary btn-lg ripple">View Fleet & Pricing</Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding bg-light glass-effect">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-blue mb-16">Bus Tours</div>
            <h2 className="mb-16">Group <span>Excursions</span></h2>
          </div>
          <div className="grid grid-3">
             <PackageSummaryCard 
                id="kashmir-trip" 
                image={kashmirImg} 
                title="Kashmir Paradise" 
                dur="6D/5N" 
                price="₹18,999" 
                onEnquiry={onEnquiry}
             />
             <PackageSummaryCard 
                id="manali-trip" 
                image={manaliImg} 
                title="Manali Adventure" 
                dur="5D/4N" 
                price="₹12,499" 
                onEnquiry={onEnquiry}
             />
             <PackageSummaryCard 
                id="goa-trip" 
                image={goaImg} 
                title="Goa Beach Bliss" 
                dur="3D/2N" 
                price="₹7,999" 
                onEnquiry={onEnquiry}
             />
          </div>
          <div className="text-center mt-50">
             <Link to="/packages" className="btn btn-secondary btn-lg ripple">View All Bus Tours</Link>
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
                <TestimonialCard name="Rajesh Deshmukh" location="Chalisgaon" text="We booked a 50-seater luxury bus for our son's wedding. The bus was clean, punctual, and the driver was very professional. Highly recommended for wedding transport!" />
                <TestimonialCard name="Priyanka Patil" location="Jalgaon" text="Our school trip to Mahabaleshwar was seamless thanks to Partner's Tours. The Tempo Traveller was comfortable and safe for the kids." />
                <TestimonialCard name="Amol Sonawane" location="Pachora" text="Excellent corporate bus booking service. We use them for all our company outings. Best rates in Jalgaon district!" />
                <TestimonialCard name="Rajesh Deshmukh" location="Chalisgaon" text="We booked a 50-seater luxury bus for our son's wedding. The bus was clean, punctual, and the driver was very professional." />
                <TestimonialCard name="Priyanka Patil" location="Jalgaon" text="Our school trip to Mahabaleshwar was seamless thanks to Partner's Tours. The Tempo Traveller was comfortable and safe for the kids." />
                <TestimonialCard name="Amol Sonawane" location="Pachora" text="Excellent corporate bus booking service. We use them for all our company outings." />
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

const FleetCard = ({ image, name, capacity, features }) => (
  <div className="fleet-card ripple">
    <div className="f-img">
      <Image src={image} alt={name} width={400} height={250} />
      <div className="f-capacity">{capacity}</div>
    </div>
    <div className="f-info">
      <h3>{name}</h3>
      <ul className="f-features">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <button 
        className="btn btn-whatsapp full-width mt-16"
        onClick={() => sendWhatsApp('bus', name)}
      >
        <MessageSquare size={16} /> Enquire on WhatsApp
      </button>
    </div>
  </div>
);

const PackageSummaryCard = ({ id, image, title, dur, price, onEnquiry }) => (
  <div className="p-sum-card ripple" onClick={() => onEnquiry(title)}>
    <div className="p-img">
      <Image 
        src={image} 
        alt={`${title} Tour Package from Chalisgaon Travel Agency`} 
        width={400}
        height={250}
      />
    </div>
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
