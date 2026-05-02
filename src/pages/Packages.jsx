import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Search, Zap, Shield, Award, Star } from 'lucide-react';
import './Packages.css';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';
import dubaiImg from '../assets/dubai.png';
import thailandImg from '../assets/thailand.png';
import { CONTACT_CONFIG } from '../config';
import { getWhatsAppLink, sendWhatsApp } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import { injectStructuredData, getTourSchema } from '../utils/seo';
import updateMetaTags from '../utils/updateMetaTags';

const packagesData = [
  { 
    id: 'kashmir-trip', 
    image: kashmirImg, 
    title: "Kashmir Paradise Tour", 
    duration: "6 Days / 5 Nights", 
    price: "₹18,999", 
    category: "Paradise",
    badge: "Limited Offer",
    badgeType: "offer"
  },
  { 
    id: 'manali-trip', 
    image: manaliImg, 
    title: "Manali Adventure Escape", 
    duration: "5 Days / 4 Nights", 
    price: "₹12,499", 
    category: "Mountains",
    badge: "Best Seller",
    badgeType: "bestseller"
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
    badgeType: "bestseller",
    slots: "Only 4 slots left"
  },
  { 
    id: 'kerala-trip', 
    image: goaImg, 
    title: "Kerala Backwater Serenity", 
    duration: "4 Days / 3 Nights", 
    price: "₹15,500", 
    category: "Nature",
    badge: "Limited Offer",
    badgeType: "luxury",
    slots: "Only 2 slots left"
  }
];


const Packages = ({ onEnquiry }) => {
  const [activeCategory, setActiveCategory] = React.useState('All Deals');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [recentlyViewed, setRecentlyViewed] = React.useState([]);

  React.useEffect(() => {
    updateMetaTags({
      title: 'Cheap Tour Packages | Best Travel Agency in Chalisgaon',
      description: 'Explore verified domestic and international tour packages from Chalisgaon. Kashmir, Goa, Dubai, and Thailand tours at guaranteed lowest prices. Book your dream vacation today.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    });

    // Recently Viewed logic
    const saved = JSON.parse(localStorage.getItem('recently_viewed') || '[]');
    setRecentlyViewed(saved);

    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800';
  };

  const handlePackageClick = (pkg) => {
    // Save to recently viewed
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
          <h1 className="fade-in-up">Tour Packages</h1>
          <p className="fade-in-up">Discover hand-picked travel experiences with guaranteed best prices.</p>
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
              <Search size={20} className="search-icon"/>
              <input 
                type="text" 
                placeholder="Search destinations (e.g. Goa, Kashmir)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="category-filters">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={activeCategory === cat ? 'active ripple' : 'ripple'}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Personalization: Recently Viewed */}
          {!isLoading && recentlyViewed.length > 0 && searchQuery === '' && activeCategory === 'All Deals' && (
            <div className="recently-viewed-section mb-50">
               <h4 className="section-subtitle">Pick up where you left off</h4>
               <div className="grid grid-4">
                  {recentlyViewed.map(pkg => (
                     <div key={`rv-${pkg.id}`} className="rv-card ripple" onClick={() => handlePackageClick(pkg)}>
                        <img src={pkg.image} alt={`${pkg.title} - Best Tour Package from Chalisgaon`} />
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
                  <PackageCard key={pkg.id} pkg={pkg} onEnquiry={onEnquiry} handlePackageClick={handlePackageClick} handleImageError={handleImageError} handleLeadCapture={handleLeadCapture} />
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
                  <PackageCard key={pkg.id} pkg={pkg} onEnquiry={onEnquiry} handlePackageClick={handlePackageClick} handleImageError={handleImageError} handleLeadCapture={handleLeadCapture} />
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
                  <PackageCard key={pkg.id} pkg={pkg} onEnquiry={onEnquiry} handlePackageClick={handlePackageClick} handleImageError={handleImageError} handleLeadCapture={handleLeadCapture} />
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
                  <p>"The Kashmir trip was flawlessly organized. Everything from houseboats to transport was premium. Best travel agency in Jalgaon district!"</p>
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
                  <p>"Best prices I found online. The team at Partner's Tours was available 24/7 for my Dubai trip. Truly professional service."</p>
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
                  <p>"Seamless booking through WhatsApp. Loved the itinerary for Manali. Very helpful staff at the Bhadgaon Road office."</p>
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
               <Shield size={40} color="var(--accent)"/>
               <Star size={40} color="#FFC107" fill="#FFC107"/>
               <Award size={40} color="var(--primary)"/>
            </div>
         </div>
      </section>
    </div>
  );
};

const PackageCard = ({ pkg, onEnquiry, handlePackageClick, handleImageError, handleLeadCapture }) => (
  <div className="package-card fade-in-up" onClick={() => handlePackageClick(pkg)}>
    <div className="package-img">
      <img src={pkg.image} alt={`${pkg.title} Tour Package from Best Travel Agency in Chalisgaon`} loading="lazy" onError={handleImageError} />
      <div className="card-overlay"></div>
      <span className="price-tag">
        <small>Starting from</small>
        {pkg.price}
      </span>
      <div className="card-badges">
        {pkg.badge && <span className={`badge badge-${pkg.badgeType} floating-badge`}>{pkg.badge}</span>}
        <span className="rating-badge">
           <Star size={12} fill="currentColor" /> 4.8
        </span>
      </div>
      <div className="urgency-badge">
         <Zap size={10} /> {pkg.slots || '12 people viewed this today'}
      </div>
    </div>
    <div className="package-info">
      <div className="category-label">{pkg.category}</div>
      <h3>{pkg.title}</h3>
      <div className="package-meta">
        <span><Clock size={16}/> {pkg.duration}</span>
        <span><MapPin size={16}/> {pkg.category === 'International' ? 'Abroad' : 'India'}</span>
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

