import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Search, Zap, Shield, Award, Star, Phone, MessageCircle, Bus, ShieldCheck } from 'lucide-react';

// Centralized icon structure to prevent runtime crashes
const Icons = {
  Clock: Clock || (() => null),
  MapPin: MapPin || (() => null),
  Search: Search || (() => null),
  Zap: Zap || (() => null),
  Shield: Shield || (() => null),
  Award: Award || (() => null),
  Star: Star || (() => null),
  Phone: Phone || (() => null),
  MessageCircle: MessageCircle || (() => null),
  Bus: Bus || (() => null),
  ShieldCheck: ShieldCheck || (() => null)
};
import './Packages.css';
import Image from '../components/common/Image';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';
import dubaiImg from '../assets/dubai.png';
import thailandImg from '../assets/thailand.png';
import { CONTACT_CONFIG } from '../config';
import { sendWhatsApp } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import { injectStructuredData, getTourSchema } from '../utils/seo';
import updateMetaTags from '../utils/updateMetaTags';

import heroBusImg from '../assets/hero_bus.png';
import sleeperNightImg from '../assets/sleeper_night.png';
import shivSaiImg from '../assets/shiv_sai_coach.png';

const packagesData = [
  { 
    id: 'chalisgaon-surat', 
    image: heroBusImg, 
    title: "Chalisgaon → Surat", 
    duration: "Daily 9:00 PM", 
    price: "₹700/seat", 
    category: "Daily",
    badge: "Daily Service",
    badgeType: "bestseller"
  },
  { 
    id: 'chalisgaon-pune', 
    image: sleeperNightImg, 
    title: "Chalisgaon → Pune", 
    duration: "Daily 10:30 PM", 
    price: "₹650/seat", 
    category: "Daily",
    badge: "Night Sleeper",
    badgeType: "offer"
  },
  { 
    id: 'chalisgaon-mumbai', 
    image: shivSaiImg, 
    title: "Chalisgaon → Mumbai", 
    duration: "Daily 10:00 PM", 
    price: "₹800/seat", 
    category: "Daily",
    badge: "Limited Seats",
    badgeType: "luxury"
  }
];

const Packages = ({ onEnquiry }) => {
  const [activeCategory, setActiveCategory] = React.useState('All Deals');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [recentlyViewed, setRecentlyViewed] = React.useState([]);

  React.useEffect(() => {
    updateMetaTags({
      title: 'Daily Intercity Bus Routes | Partner\'s Bus Service',
      description: 'Check daily bus timings and book seats for Chalisgaon to Surat, Pune, Mumbai, and Nashik. Premium AC Sleeper and Luxury Coach services.',
      keywords: 'Daily Bus Routes, Chalisgaon Bus Timings, Surat Bus Booking, Pune Sleeper Coach',
    });

    const saved = JSON.parse(localStorage.getItem('recently_viewed') || '[]');
    setRecentlyViewed(saved);

    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handlePackageClick = (pkg) => {
    const updated = [pkg, ...recentlyViewed.filter(p => p.id !== pkg.id)].slice(0, 4);
    setRecentlyViewed(updated);
    localStorage.setItem('recently_viewed', JSON.stringify(updated));
    
    onEnquiry(pkg.title);
    trackEvent(ANALYTICS_EVENTS.PACKAGE_VIEW, { package_id: pkg.id, title: pkg.title, category: pkg.category });
  };

  const handleLeadCapture = (pkg) => {
    const lead = {
      package: pkg.title,
      timestamp: new Date().toISOString(),
      source: 'packages_page'
    };
    localStorage.setItem('last_lead', JSON.stringify(lead));
    trackEvent('whatsapp_lead_capture', { package_name: pkg.title });
  };

  const filteredPackages = packagesData.filter(pkg => {
    const matchesCategory = activeCategory === 'All Deals' || pkg.category === activeCategory || (activeCategory === 'Domestic' && pkg.category !== 'International');
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pkg.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All Deals', 'Domestic', 'International', 'Adventure'];
  const suggestions = ['Goa', 'Kashmir', 'Manali', 'Kerala', 'Dubai'];

  const SkeletonCard = () => (
    <div className="package-card skeleton">
      <div className="package-img skeleton-shimmer"></div>
      <div className="package-info">
        <div className="skeleton-line skeleton-shimmer" style={{ width: '40%' }}></div>
        <div className="skeleton-line skeleton-shimmer" style={{ height: '24px', width: '80%', margin: '10px 0' }}></div>
        <div className="skeleton-line skeleton-shimmer" style={{ width: '60%', marginBottom: '20px' }}></div>
        <div className="card-actions">
           <div className="skeleton-button skeleton-shimmer"></div>
           <div className="skeleton-button skeleton-shimmer"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="packages-page">
      <div className="page-header section-padding parallax-hero">
        <div className="container">
          <h1 className="fade-in-up">Daily Intercity Routes</h1>
          <p className="fade-in-up">Fixed daily departures to major cities. Book your seat instantly.</p>
        </div>
      </div>

      {/* Trust Section */}
      <section className="trust-badges-section glass-effect">
        <div className="container">
          <div className="trust-badges-grid">
            <div className="trust-badge">
              <div className="badge-icon">✔</div>
              <div className="badge-content">
                <h4>1000+ Happy Travelers</h4>
                <p>Real experiences, real memories</p>
              </div>
            </div>
            <div className="trust-badge">
              <div className="badge-icon">✔</div>
              <div className="badge-content">
                <h4>Best Price Guarantee</h4>
                <p>Found it cheaper? We'll match it</p>
              </div>
            </div>
            <div className="trust-badge">
              <div className="badge-icon">✔</div>
              <div className="badge-content">
                <h4>24/7 Support</h4>
                <p>We're here when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="filter-bar sticky-filters">
            <div className="search-box">
              <Icons.Search size={20} className="search-icon"/>
              <input 
                type="text" 
                placeholder="Search destinations (e.g. Goa, Kashmir)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="category-scroll">
              <div className="category-row">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    className={`${activeCategory === cat ? 'active' : ''} category-btn ripple`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Personalization: Recently Viewed */}
          {!isLoading && recentlyViewed.length > 0 && searchQuery === '' && activeCategory === 'All Deals' && (
            <div className="recently-viewed-section mb-50">
               <h4 className="section-subtitle">Pick up where you left off</h4>
               <div className="grid grid-4">
                  {recentlyViewed.map(pkg => (
                     <div key={`rv-${pkg.id}`} className="rv-card ripple" onClick={() => handlePackageClick(pkg)}>
                        <Image 
                          src={pkg.image} 
                          alt={`${pkg.title} - Best Tour Package from Chalisgaon`} 
                          width={300}
                          height={200}
                        />
                        <div className="p-badge best"><Icons.Zap size={14}/> {pkg.badge}</div>
                        <div className="rv-info">
                           <h5>{pkg.title}</h5>
                           <span>{pkg.price}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          )}

          <div className="grid grid-3">
            {isLoading ? (
              Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
            ) : (
              <>
                {filteredPackages.slice(0, 2).map(pkg => (
                  <PackageCard key={pkg.id} pkg={pkg} onEnquiry={onEnquiry} handlePackageClick={handlePackageClick} handleLeadCapture={handleLeadCapture} />
                ))}

                <div className="ads-container grid-full mt-32 mb-32">
                  <ins className="adsbygoogle"
                       style={{display:'block'}}
                       data-ad-client="ca-pub-4843301407118801"
                       data-ad-slot="packages_slot_1"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
                </div>

                {filteredPackages.slice(2, 4).map(pkg => (
                  <PackageCard key={pkg.id} pkg={pkg} onEnquiry={onEnquiry} handlePackageClick={handlePackageClick} handleLeadCapture={handleLeadCapture} />
                ))}

                <div className="ads-container grid-full mt-32 mb-32">
                  <ins className="adsbygoogle"
                       style={{display:'block'}}
                       data-ad-client="ca-pub-4843301407118801"
                       data-ad-slot="packages_slot_2"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
                </div>

                {filteredPackages.slice(4).map(pkg => (
                  <PackageCard key={pkg.id} pkg={pkg} onEnquiry={onEnquiry} handlePackageClick={handlePackageClick} handleLeadCapture={handleLeadCapture} />
                ))}
              </>
            )}
          </div>
          {!isLoading && filteredPackages.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No packages found for "{searchQuery}"</h3>
              <p>Try one of these popular destinations:</p>
              <div className="suggestions mt-20">
                {suggestions.map(s => (
                  <button key={s} className="suggestion-pill ripple" onClick={() => setSearchQuery(s)}>{s}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="testimonials-section section-padding glass-effect">
        <div className="container">
          <div className="section-title">
            <h2>What Our <span>Travelers</span> Say</h2>
            <p>1000+ happy explorers from Chalisgaon & beyond.</p>
          </div>
          <div className="testimonial-slider-container">
             <div className="testimonial-track">
                <div className="testimonial-card premium-card">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p>"We booked a custom bus tour for our senior citizen group to Ashtavinayak. The driver was patient and the bus was very comfortable. Best transport service in Chalisgaon!"</p>
                  <div className="user">
                    <div className="user-avatar">R</div>
                    <div className="user-info">
                      <strong>Rahul Sharma</strong>
                      <span>Chalisgaon, India</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card premium-card">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p>"Organized our college industrial visit with Partner's Tours. Their 50-seater bus was in excellent condition and the rates were very competitive."</p>
                  <div className="user">
                    <div className="user-avatar">A</div>
                    <div className="user-info">
                      <strong>Anjali Gupta</strong>
                      <span>Jalgaon, India</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card premium-card">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p>"Seamless booking for our family Shirdi trip. The Tempo Traveller was clean and the driver was very well-mannered. Highly recommended!"</p>
                  <div className="user">
                    <div className="user-avatar">V</div>
                    <div className="user-info">
                      <strong>Vikram Singh</strong>
                      <span>Pachora, India</span>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Section Icons */}
      <section className="booking-trust section-padding">
         <div className="container text-center">
            <h3>Our Premium Partners</h3>
            <div className="trust-icons mt-40">
             <div className="flex gap-24 justify-center">
                <Icons.Shield size={40} color="var(--accent)"/>
                <Icons.Star size={40} color="#FFC107" fill="#FFC107"/>
                <Icons.Award size={40} color="var(--primary)"/>
             </div>
            </div>
         </div>
      </section>
    </div>
  );
};

const PackageCard = ({ pkg, handlePackageClick, handleLeadCapture }) => (
  <div className="package-card fade-in-up" onClick={() => handlePackageClick(pkg)}>
    <div className="package-img">
      <Image 
        src={pkg.image} 
        alt={`${pkg.title} Tour Package from Best Travel Agency in Chalisgaon`} 
        width={500}
        height={350}
      />
      <div className="card-overlay"></div>
      <span className="price-tag">
        <small>Starting from</small>
        {pkg.price}
      </span>
      <div className="card-badges">
        {pkg.badge && <span className={`badge badge-${pkg.badgeType} floating-badge`}>{pkg.badge}</span>}
        <div className="rating-badge">
          <Icons.Star size={12} fill="currentColor" /> 4.8
       </div>
      </div>
      <div className="urgency-badge">
         <Icons.Zap size={10} /> {pkg.slots || '12 people viewed this today'}
      </div>
    </div>
    <div className="package-info">
      <div className="category-label">{pkg.category}</div>
      <h3>{pkg.title}</h3>
      <div className="package-meta">
        <span><Icons.Clock size={16}/> {pkg.duration}</span>
        <span><Icons.MapPin size={16}/> India</span>
      </div>
      <div className="card-actions">
        <Link 
          to={`/package/${pkg.id}`} 
          className="btn btn-outline ripple"
          onClick={(e) => {
            e.stopPropagation();
            handlePackageClick(pkg);
          }}
        >
          Details
        </Link>
        <button 
          className="btn btn-whatsapp ripple"
          onClick={(e) => {
            e.stopPropagation();
            handleLeadCapture(pkg);
            trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { package_name: pkg.title, source: 'package_card' });
            sendWhatsApp('tour', pkg.title);
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
);

export default Packages;

