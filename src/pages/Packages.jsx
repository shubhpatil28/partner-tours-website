import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Search, Zap } from 'lucide-react';
import './Packages.css';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';
import dubaiImg from '../assets/dubai.png';
import thailandImg from '../assets/thailand.png';

const packagesData = [
  { 
    id: 'kashmir-trip', 
    image: kashmirImg, 
    title: "Kashmir Paradise Tour", 
    duration: "6 Days / 5 Nights", 
    price: "₹18,999", 
    category: "Paradise",
    badge: "Limited Offer",
    badgeType: "offer",
    urgency: "Only 3 slots left!"
  },
  { 
    id: 'manali-trip', 
    image: manaliImg, 
    title: "Manali Adventure Escape", 
    duration: "5 Days / 4 Nights", 
    price: "₹12,499", 
    category: "Mountains",
    badge: "Best Seller",
    badgeType: "bestseller",
    urgency: "Selling Out Fast"
  },
  { 
    id: 'goa-trip', 
    image: goaImg, 
    title: "Goa Beach Vacation", 
    duration: "3 Days / 2 Nights", 
    price: "₹7,999", 
    category: "Beach",
    badge: "Budget Friendly",
    badgeType: "budget"
  },
  { 
    id: 'dubai-trip', 
    image: dubaiImg, 
    title: "Luxury Dubai City Tour", 
    duration: "5 Days / 4 Nights", 
    price: "₹45,999", 
    category: "International",
    badge: "Luxury",
    badgeType: "luxury"
  },
  { 
    id: 'thailand-trip', 
    image: thailandImg, 
    title: "Exotic Thailand Holiday", 
    duration: "6 Days / 5 Nights", 
    price: "₹38,500", 
    category: "International",
    badge: "Best Value",
    badgeType: "bestseller"
  },
  { 
    id: 'kerala-trip', 
    image: goaImg, 
    title: "Kerala Backwater Serenity", 
    duration: "4 Days / 3 Nights", 
    price: "₹15,500", 
    category: "Nature",
    badge: "Romantic",
    badgeType: "luxury"
  },
  { 
    id: 'rajasthan-trip', 
    image: manaliImg, 
    title: "Royal Rajasthan Heritage", 
    duration: "7 Days / 6 Nights", 
    price: "₹22,000", 
    category: "Heritage",
    badge: "Cultural",
    badgeType: "budget"
  },
  { 
    id: 'shimla-trip', 
    image: kashmirImg, 
    title: "Shimla Kullu Manali Combo", 
    duration: "6 Days / 5 Nights", 
    price: "₹14,999", 
    category: "Mountains",
    badge: "Family Pack",
    badgeType: "budget"
  }
];

const Packages = () => {
  return (
    <div className="packages-page">
      <div className="page-header section-padding">
        <div className="container">
          <h1>Tour Packages</h1>
          <p>Discover hand-picked travel experiences with guaranteed best prices.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="filter-bar">
            <div className="search-box">
              <Search size={20}/>
              <input type="text" placeholder="Search destinations (e.g. Goa, Kashmir)..." />
            </div>
            <div className="category-filters">
              <button className="active">All Deals</button>
              <button>Domestic</button>
              <button>International</button>
              <button>Adventure</button>
            </div>
          </div>

          <div className="grid grid-3">
            {packagesData.map(pkg => (
              <div key={pkg.id} className="package-card fade-in">
                <div className="package-img">
                  <img src={pkg.image} alt={pkg.title} loading="lazy" />
                  <span className="price-tag">{pkg.price}</span>
                  {pkg.badge && <span className={`badge badge-${pkg.badgeType} floating-badge`}>{pkg.badge}</span>}
                </div>
                <div className="package-info">
                  <div className="category-label">{pkg.category}</div>
                  <h3>{pkg.title}</h3>
                  <div className="package-meta">
                    <span><Clock size={16}/> {pkg.duration}</span>
                    <span><MapPin size={16}/> {pkg.category === 'International' ? 'Abroad' : 'India'}</span>
                  </div>
                  {pkg.urgency && <div className="urgency-text"><Zap size={14}/> {pkg.urgency}</div>}
                  <Link to={`/package/${pkg.id}`} className="btn btn-primary full-width mt-15">View Itinerary</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="booking-trust section-padding">
         <div className="container text-center">
            <h3>Safe & Secure Booking</h3>
            <p>100% Refund on cancellations made 7 days prior to travel.</p>
            <div className="trust-icons mt-30">
               <Shield size={40} color="var(--primary-blue)"/>
               <Star size={40} color="#FFC107" fill="#FFC107"/>
               <Award size={40} color="var(--secondary-blue)"/>
            </div>
         </div>
      </section>
    </div>
  );
};

const Award = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export default Packages;
