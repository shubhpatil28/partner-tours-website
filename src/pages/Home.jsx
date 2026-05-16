import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Bus, Plane, Globe, Star, Shield, Award, CheckCircle, ArrowRight, Clock, MapPin, ShieldCheck, MessageCircle } from 'lucide-react';

// Centralized icon structure to prevent runtime crashes
const Icons = {
  Phone: Phone || (() => null),
  MessageSquare: MessageSquare || (() => null),
  Bus: Bus || (() => null),
  Plane: Plane || (() => null),
  Globe: Globe || (() => null),
  Star: Star || (() => null),
  Shield: Shield || (() => null),
  Award: Award || (() => null),
  CheckCircle: CheckCircle || (() => null),
  ArrowRight: ArrowRight || (() => null),
  Clock: Clock || (() => null),
  MapPin: MapPin || (() => null),
  ShieldCheck: ShieldCheck || (() => null),
  MessageCircle: MessageCircle || (() => null)
};
import './Home.css';
import ProImage from '../components/common/ProImage';
import heroImg from '../assets/hero_bus.png';
import tempoImg from '../assets/tempo_traveller.png';
import miniBusImg from '../assets/mini_bus.png';

// Route Imports
import suratBus from '../assets/routes/surat-bus.png';
import puneBus from '../assets/routes/pune-bus.png';
import mumbaiBus from '../assets/routes/mumbai-bus.png';

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
      title: 'Partner\'s Bus Service | Daily Intercity Bus Operator Chalisgaon',
      description: 'Chalisgaon\'s premium bus operator. Daily luxury sleeper bus services to Surat, Pune, Mumbai, and Nashik. Book your seat online via WhatsApp or Call.',
      keywords: 'Daily Bus Chalisgaon, Chalisgaon to Surat Bus, Pune Sleeper Coach, Mumbai Bus Operator',
    });

    injectStructuredData(getTravelAgencySchema(CONTACT_CONFIG));
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Parallax Effect */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-image-side">
            <ProImage 
              src={heroImg} 
              alt="Partner's Luxury Intercity Sleeper Bus" 
              className="hero-main-img" 
              priority={true} 
              width={1000}
              height={800}
              aspectRatio="5/4"
            />
            <div className="hero-image-gradient"></div>
          </div>
          
          <div className="hero-content-side">
            <div className="hero-text-wrapper fade-in-up">
              <div className="badge badge-orange mb-16">Daily Intercity Services • Night Sleeper Coach • 24/7 Booking</div>
              <h1 className="hero-title mb-24">Premium Intercity <br/><span>Bus Operator in Chalisgaon</span></h1>
              <p className="hero-desc mb-32">
                <strong>Partner's Bus Service</strong> operates daily premium sleeper and luxury coach services to major cities. Experience the most comfortable and safe intercity travel in Maharashtra.
              </p>
              
              <div className="hero-btns">
                <a 
                  href={getCallLink()} 
                  className="btn btn-primary btn-lg ripple"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK)}
                >
                  <Icons.Phone size={20}/> Call Now
                </a>
                <button 
                  className="btn btn-whatsapp btn-lg ripple"
                  onClick={() => {
                    trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { location: 'hero' });
                    sendWhatsApp('general', 'Home Hero');
                  }}
                >
                  <Icons.MessageSquare size={20}/> Book on WhatsApp
                </button>
              </div>
              
              <div className="trust-badges mt-40">
                <div className="t-badge">
                  <span className="num">9+</span> 
                  <span className="lab">Years in Chalisgaon</span>
                </div>
                <div className="t-badge">
                  <span className="num">5000+</span> 
                  <span className="lab">Happy Travelers</span>
                </div>
              </div>
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

      {/* Daily Routes Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-blue mb-16">Active Routes</div>
            <h2 className="mb-16">Daily <span>Intercity Services</span></h2>
            <p>Reliable daily departures to major cities with premium sleeper coaches.</p>
          </div>
          
          <div className="grid grid-3">
            {[
              { from: "Chalisgaon", to: "Surat", image: suratBus, tag: "Most Popular", time: "Daily 9:00 PM", price: "₹700/seat", link: "/chalisgaon-to-surat-bus" },
              { from: "Chalisgaon", to: "Pune", image: puneBus, tag: "Night Service", time: "Daily 10:30 PM", price: "₹650/seat", link: "/chalisgaon-to-pune-bus" },
              { from: "Chalisgaon", to: "Mumbai", image: mumbaiBus, tag: "Limited Seats", time: "Daily 10:00 PM", price: "₹800/seat", link: "/chalisgaon-to-mumbai-bus" },
              { from: "Chalisgaon", to: "Nashik", image: suratBus, tag: "Daily Morning", time: "Daily 7:00 AM", price: "₹400/seat", link: "/chalisgaon-to-nashik-bus" },
              { from: "Chalisgaon", to: "Rajasthan", image: mumbaiBus, tag: "Long Distance", time: "Alternate Days", price: "₹1800/seat", link: "/chalisgaon-to-surat-bus" }
            ].map((route, idx) => (
              <RouteCard 
                key={idx}
                from={route.from} 
                to={route.to} 
                image={route.image} 
                tag={route.tag}
                time={route.time}
                price={route.price}
                badge="Daily Service"
                link={route.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Builders Section */}
      <section className="trust-bar bg-primary text-white py-24">
        <div className="container">
          <div className="grid grid-4 text-center">
            <div className="trust-item">
              <Icons.CheckCircle size={20} className="text-accent" />
              <span>Daily Service Available</span>
            </div>
            <div className="trust-item">
              <Icons.CheckCircle size={20} className="text-accent" />
              <span>Professional Drivers</span>
            </div>
            <div className="trust-item">
              <Icons.CheckCircle size={20} className="text-accent" />
              <span>Safe Night Travel</span>
            </div>
            <div className="trust-item">
              <Icons.CheckCircle size={20} className="text-accent" />
              <span>Comfortable Journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* RedBus Integration CTA */}
      <section className="redbus-cta bg-white">
        <div className="container">
          <div className="redbus-banner ripple">
            <div className="redbus-icon-wrap">
              <Icons.Bus size={32} />
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
                  <Icons.Shield size={24} className="text-accent" />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>Professional Drivers</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>Experienced and verified staff for safe travel.</p>
                  </div>
                </div>
                <div className="feature-item ripple" style={{display: 'flex', gap: '1rem', padding: '1rem', background: 'var(--slate-50)', borderRadius: 'var(--radius-md)'}}>
                  <Icons.ShieldCheck size={24} className="text-accent" />
                  <div>
                    <h4 style={{marginBottom: '0.25rem'}}>24/7 Support</h4>
                    <p style={{fontSize: '0.875rem', color: 'var(--slate-500)'}}>Dedicated booking and en-route assistance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="city-img-container">
               <ProImage 
                src={heroImg} 
                alt="Partner's Bus Service Fleet" 
                className="rounded-img shadow-lg" 
                width={600}
                height={400}
                aspectRatio="3/2"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Our Bus Fleet Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-orange mb-16">Our Premium Fleet</div>
            <h2 className="text-white mb-16">Premium <span>Bus Fleet</span></h2>
          </div>
          <div className="grid grid-2" style={{gap: '3rem'}}>
             <FleetCard 
                image={mumbaiBus} 
                name="Shiv Sai Luxury Coach" 
                capacity="45 Seater" 
                features={["AC", "Push-back Seats", "LCD Entertainment", "Luggage Space"]} 
             />
             <FleetCard 
                image={suratBus} 
                name="Premium AC Sleeper Bus" 
                capacity="30 Berths" 
                features={["Full AC", "Charging Points", "Night Lights", "Air Suspension"]} 
             />
             <FleetCard 
                image={miniBusImg} 
                name="Tourist Luxury Coach" 
                capacity="35 Seater" 
                features={["Push-back Seats", "Music System", "Window Curtains", "Clean Interior"]} 
             />
             <FleetCard 
                image={heroImg} 
                name="35 Seater Group Bus" 
                capacity="35 Seater" 
                features={["Economy Rates", "Experienced Staff", "Safe Travel", "Ample Space"]} 
             />
          </div>
          <div className="text-center mt-40">
             <Link to="/rental" className="btn btn-primary btn-lg ripple">View Full Fleet & Booking</Link>
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

      {/* FAQ Section for SEO */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <div className="badge badge-blue mb-16">Help Center</div>
            <h2 className="mb-16">Frequently Asked <span>Questions</span></h2>
            <p>Common questions about our bus services and bookings.</p>
          </div>
          
          <div className="faq-grid mt-40">
            <div className="faq-item card ripple">
              <h4>How do I book a seat?</h4>
              <p>You can book your seat instantly by calling us or sending a message on WhatsApp. We provide quick confirmation and seat numbers.</p>
            </div>
            <div className="faq-item card ripple">
              <h4>What are the bus timings from Chalisgaon to Pune?</h4>
              <p>Our premium sleeper bus to Pune departs daily from Chalisgaon at 10:30 PM and reaches Pune by early morning.</p>
            </div>
            <div className="faq-item card ripple">
              <h4>Is AC available in all buses?</h4>
              <p>We operate both AC Sleeper and Non-AC Seater buses. Most of our intercity routes use Premium AC Sleeper coaches.</p>
            </div>
            <div className="faq-item card ripple">
              <h4>What is the cancellation policy?</h4>
              <p>Cancellations made 24 hours before departure get a 90% refund. Please check our Cancellation Policy page for detailed terms.</p>
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
                <Icons.Bus size={32} />
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
                <Icons.MessageSquare size={20} /> Join Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const RouteCard = ({ from, to, image, tag, time, price, badge, link }) => (
  <div className="route-card ripple">
    <Link to={link || "#"} className="route-link-wrapper">
      <div className="route-image-wrapper">
        <ProImage 
          src={image} 
          alt={`${from} to ${to} Bus`} 
          className="route-image"
          width={400} 
          height={250} 
          aspectRatio="16/10"
        />
        {tag && <div className="r-tag">{tag}</div>}
        {badge && <div className="r-badge">{badge}</div>}
      </div>
    </Link>
    <div className="r-info">
      <div className="r-main">
        <h3><Link to={link || "#"}>{from} <Icons.ArrowRight size={18}/> {to}</Link></h3>
        <p><Icons.Clock size={16}/> {time}</p>
      </div>
      <div className="r-price">
        <small>From</small>
        <strong>{price || '₹600'}</strong>
      </div>
    </div>
    <div className="r-actions">
        <button className="btn-book-seat" onClick={() => sendWhatsApp(`Hi, I want to book a seat for ${from} to ${to} on ${time}.`)}>
          Book Seat Now
        </button>
        <div className="r-btns-group">
          <a href={getCallLink()} className="r-btn-icon" title="Call Now"><Icons.Phone size={18} /></a>
          <button className="r-btn-icon whatsapp" onClick={() => sendWhatsApp(`Enquiry for ${from} to ${to} route.`)} title="WhatsApp"><Icons.MessageSquare size={18} /></button>
      </div>
    </div>
  </div>
);

const FleetCard = ({ image, name, capacity, features }) => (
  <div className="fleet-card ripple">
    <div className="f-img">
      <ProImage 
        src={image} 
        alt={name} 
        width={400} 
        height={250} 
        aspectRatio="16/10"
      />
      <div className="f-capacity">{capacity}</div>
    </div>
    <div className="f-content">
      <h3>{name}</h3>
      <div className="f-features">
        {features.map((feat, i) => (
          <span key={i} className="f-feat"><Icons.CheckCircle size={14} /> {feat}</span>
        ))}
      </div>
      <button className="btn-fleet-book" onClick={() => sendWhatsApp(`Hi, I want to book the ${name} for our group trip.`)}>
        Book for Group
      </button>
    </div>
  </div>
);

const PackageSummaryCard = ({ id, image, title, dur, price, onEnquiry }) => (
  <div className="p-sum-card ripple" onClick={() => onEnquiry(title)}>
    <div className="p-img">
      <ProImage 
        src={image} 
        alt={`${title} Tour Package from Chalisgaon Travel Agency`} 
        width={400}
        height={250}
        aspectRatio="16/10"
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
        <Icons.Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
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

