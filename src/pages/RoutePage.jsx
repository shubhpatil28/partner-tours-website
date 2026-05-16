import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck, Bus, ArrowRight, CheckCircle, Info } from 'lucide-react';
import ProImage from '../components/common/ProImage';
import { CONTACT_CONFIG } from '../config';
import { getWhatsAppLink, getCallLink, sendWhatsApp } from '../utils/contactHelpers';
import updateMetaTags from '../utils/updateMetaTags';
import { injectStructuredData } from '../utils/seo';
import './PackageDetail.css'; // Reusing similar layout styles

const routesData = {
  'chalisgaon-to-surat-bus': {
    from: 'Chalisgaon',
    to: 'Surat',
    timing: 'Daily 9:00 PM',
    price: '₹700',
    duration: '8 Hours',
    pickup: 'Chalisgaon Bus Stand, Bhadgaon Road',
    drop: 'Surat Station, Sahara Darwaja',
    busType: 'Premium AC Sleeper Coach (2+1)',
    images: ['https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000'],
    faqs: [
      { q: "What is the bus fare from Chalisgaon to Surat?", a: "The bus fare starts from ₹700 for a sleeper berth." },
      { q: "Which is the best bus for Chalisgaon to Surat?", a: "Our Premium AC Sleeper Coach is highly recommended for a comfortable night journey." }
    ]
  },
  'chalisgaon-to-pune-bus': {
    from: 'Chalisgaon',
    to: 'Pune',
    timing: 'Daily 10:30 PM',
    price: '₹650',
    duration: '9 Hours',
    pickup: 'Chalisgaon City, Partner Travels Office',
    drop: 'Shivajinagar, Wagholi, Katraj',
    busType: 'Luxury AC Sleeper Coach',
    images: ['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1000'],
    faqs: [
      { q: "What time does the Pune bus leave Chalisgaon?", a: "The Pune sleeper bus departs at 10:30 PM daily." },
      { q: "Are there charging points in the bus?", a: "Yes, all our sleeper berths have individual charging points and reading lights." }
    ]
  },
  'chalisgaon-to-mumbai-bus': {
    from: 'Chalisgaon',
    to: 'Mumbai',
    timing: 'Daily 10:00 PM',
    price: '₹800',
    duration: '10 Hours',
    pickup: 'Chalisgaon Bypass, Bhadgaon Road',
    drop: 'Borivali, Sion, Dadar, Thane',
    busType: 'Executive AC Sleeper (2+1)',
    images: ['https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000'],
    faqs: [
      { q: "What is the drop point in Mumbai?", a: "We drop at Thane, Mulund, Sion, Dadar, and Borivali." },
      { q: "Can I book a lady's seat separately?", a: "Yes, we offer dedicated ladies' berths for safety and comfort." }
    ]
  },
  'chalisgaon-to-nashik-bus': {
    from: 'Chalisgaon',
    to: 'Nashik',
    timing: 'Daily 7:00 AM',
    price: '₹400',
    duration: '3.5 Hours',
    pickup: 'Partner Travels Office, Chalisgaon',
    drop: 'Thakkar Bazaar, Nashik CBS',
    busType: 'Luxury Semi-Sleeper / Seater',
    images: ['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1000'],
    faqs: [
      { q: "Is this a morning bus?", a: "Yes, we operate a daily morning service to Nashik departing at 7:00 AM." },
      { q: "Is there a lunch break?", a: "Since it's a short 3-4 hour journey, we usually have one quick 15-min refreshment stop." }
    ]
  }
};

const RoutePage = () => {
  const { slug } = useParams();
  const route = routesData[slug];

  React.useEffect(() => {
    if (route) {
      updateMetaTags({
        title: `${route.from} to ${route.to} Bus | Timings, Price & Booking`,
        description: `Book ${route.from} to ${route.to} bus tickets. Check ${route.timing} timings, ${route.price} pricing, and luxury sleeper coach details. Safe and reliable intercity travel.`,
        keywords: `${route.from} to ${route.to} bus, bus timings, sleeper bus, travel to ${route.to}`,
      });

      // Schema for Route
      injectStructuredData({
        "@context": "https://schema.org",
        "@type": "BusTrip",
        "busName": "Partner's Bus Service",
        "departureTime": route.timing,
        "provider": {
          "@type": "Organization",
          "name": "Partner's Bus Service",
          "url": "https://partner-tour.site"
        },
        "departureStation": {
          "@type": "BusStation",
          "name": route.pickup,
          "address": "Chalisgaon, Maharashtra"
        },
        "arrivalStation": {
          "@type": "BusStation",
          "name": route.drop,
          "address": route.to
        }
      });
    }
    window.scrollTo(0, 0);
  }, [route, slug]);

  if (!route) {
    return <div className="container py-100 text-center"><h2>Route not found</h2><Link to="/" className="btn btn-primary mt-20">Go Home</Link></div>;
  }

  return (
    <div className="route-detail-page section-padding">
      <div className="container">
        <div className="route-header mb-40">
           <div className="badge badge-orange mb-16">Daily Intercity Route</div>
           <h1>{route.from} <span>to {route.to} Bus</span></h1>
           <p className="lead-text mt-16">Professional sleeper coach service with daily departures and premium comfort.</p>
        </div>

        <div className="grid grid-2-1">
          <div className="route-main-content">
            <div className="route-image-gallery mb-40">
              <ProImage 
                src={route.images[0]} 
                alt={`${route.from} to ${route.to} Bus Coach`} 
                className="rounded-lg shadow-md"
                width={800}
                height={500}
              />
            </div>

            <div className="route-info-grid grid grid-2 mb-40">
               <div className="info-card card ripple">
                  <Clock className="text-accent mb-12" size={24} />
                  <h4>Departure Timing</h4>
                  <p>{route.timing}</p>
               </div>
               <div className="info-card card ripple">
                  <Bus className="text-accent mb-12" size={24} />
                  <h4>Bus Type</h4>
                  <p>{route.busType}</p>
               </div>
               <div className="info-card card ripple">
                  <MapPin className="text-accent mb-12" size={24} />
                  <h4>Pickup Point</h4>
                  <p>{route.pickup}</p>
               </div>
               <div className="info-card card ripple">
                  <ShieldCheck className="text-accent mb-12" size={24} />
                  <h4>Travel Duration</h4>
                  <p>Approx. {route.duration}</p>
               </div>
            </div>

            <div className="route-description mb-40">
               <h3 className="mb-20 text-gradient">Route Overview</h3>
               <p>Experience a seamless journey from <strong>{route.from}</strong> to <strong>{route.to}</strong> with Partner's Bus Service. Our intercity coaches are designed for maximum comfort, featuring ergonomic sleeper berths, clean linens, and climate control.</p>
               <ul className="feature-list mt-24">
                  <li><CheckCircle size={18} /> GPS Tracked Buses for Safety</li>
                  <li><CheckCircle size={18} /> Professional & Experienced Drivers</li>
                  <li><CheckCircle size={18} /> Individual Charging Points</li>
                  <li><CheckCircle size={18} /> Ample Luggage Space</li>
               </ul>
            </div>

            <div className="route-faq mb-40">
               <h3 className="mb-24">Frequently Asked Questions</h3>
               <div className="faq-list">
                  {route.faqs.map((faq, i) => (
                    <div key={i} className="faq-item-mini mb-20 pb-20 border-b">
                       <h5 className="mb-8"><Info size={16} className="text-blue" /> {faq.q}</h5>
                       <p className="text-muted">{faq.a}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <aside className="route-sidebar">
            <div className="booking-card sticky-card card shadow-lg p-32 text-center">
               <div className="price-tag mb-16">
                  <small>Ticket Price Starts at</small>
                  <div className="amount">{route.price}<span>/seat</span></div>
               </div>
               <div className="booking-cta-group">
                  <button 
                    className="btn btn-whatsapp full-width mb-16 ripple"
                    onClick={() => sendWhatsApp(`Hi, I want to book a seat for ${route.from} to ${route.to} on ${route.timing}.`)}
                  >
                    <MessageSquare size={20} /> Book on WhatsApp
                  </button>
                  <a 
                    href={getCallLink()} 
                    className="btn btn-primary full-width ripple"
                    onClick={() => trackEvent('route_call_click', { route: slug })}
                  >
                    <Phone size={20} /> Call for Booking
                  </a>
               </div>
               <p className="mt-20 text-sm text-muted">⚡ Limited seats available. Book early to get your preferred berth.</p>
               <div className="trust-metrics mt-32 pt-32 border-t">
                  <div className="flex align-center gap-12 mb-12 justify-center">
                    <CheckCircle size={16} className="text-green" /> <span>GST Verified Operator</span>
                  </div>
                  <div className="flex align-center gap-12 justify-center">
                    <CheckCircle size={16} className="text-green" /> <span>Safe for Solo Female Travelers</span>
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
