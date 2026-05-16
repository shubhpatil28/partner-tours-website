import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search, Clock } from 'lucide-react';
import './Blog.css';
import ProImage from '../components/common/ProImage';
import { getUnsplashSrcSet } from '../utils/imageUtils';
import updateMetaTags from '../utils/updateMetaTags';

const blogPosts = [
  {
    id: 'best-places-near-chalisgaon',
    title: 'Top 10 Must-Visit Places Near Chalisgaon & Jalgaon District',
    excerpt: 'Discover the hidden gems around Chalisgaon, from ancient temples to scenic waterfalls. Your ultimate local travel guide.',
    date: 'May 02, 2026',
    author: 'Partner Tours Team',
    category: 'Local Guide',
    image: 'https://images.unsplash.com/photo-1590050752117-23a9d7f28a3a',
    readTime: '8 min read'
  },
  {
    id: 'shirdi-tour-cost-guide',
    title: 'Shirdi Tour Cost Guide: Planning Your Pilgrimage from Chalisgaon',
    excerpt: 'Everything you need to know about planning a budget-friendly or luxury trip to Shirdi. Breakdown of bus rentals, hotels, and darshan timings.',
    date: 'April 28, 2026',
    author: 'Admin',
    category: 'Religious',
    image: 'https://images.unsplash.com/photo-1544735038-179ad6bc0148',
    readTime: '10 min read'
  },
  {
    id: 'ajanta-ellora-caves-guide',
    title: 'Ajanta & Ellora Caves: Complete Travel Guide for History Lovers',
    excerpt: 'Uncover the mysteries of these UNESCO World Heritage sites. Best time to visit, transport from Chalisgaon, and entry requirements.',
    date: 'April 25, 2026',
    author: 'Travel Expert',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1599341624443-4171059f143a',
    readTime: '12 min read'
  },
  {
    id: 'goa-trip-under-5000',
    title: 'How to Plan a Goa Trip Under ₹5000: Tips from Chalisgaon Travelers',
    excerpt: 'Yes, it is possible! Discover the cheapest ways to reach Goa, budget stays in North Goa, and free things to do.',
    date: 'April 20, 2026',
    author: 'Partner Tours Team',
    category: 'Budget Travel',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
    readTime: '15 min read'
  },
  {
    id: 'budget-travel-maharashtra',
    title: 'Best Budget Destinations in Maharashtra for Family Trips',
    excerpt: 'From hill stations to beaches, explore Maharashtra without breaking the bank. Perfect for weekend getaways from Jalgaon district.',
    date: 'April 15, 2026',
    author: 'Admin',
    category: 'Family Travel',
    image: 'https://images.unsplash.com/photo-1596402184320-417d7178b2cd',
    readTime: '9 min read'
  },
  {
    id: 'best-sleeper-bus-chalisgaon-to-pune',
    title: 'Best Sleeper Bus From Chalisgaon To Pune: A Comfort Guide',
    excerpt: 'Looking for a comfortable night journey? Discover why our premium sleeper coach is the preferred choice for Chalisgaon to Pune travelers.',
    date: 'May 12, 2026',
    author: 'Partner Bus Team',
    category: 'Bus Service',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
    readTime: '7 min read'
  },
  {
    id: 'chalisgaon-to-surat-bus-timings',
    title: 'Chalisgaon To Surat Bus Timings: Everything You Need to Know',
    excerpt: 'Planning a business trip to Surat? Check the latest bus timings, pickup points, and ticket prices for the Chalisgaon-Surat route.',
    date: 'May 10, 2026',
    author: 'Admin',
    category: 'Route Guide',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e',
    readTime: '6 min read'
  },
  {
    id: 'best-group-bus-booking-maharashtra',
    title: 'Best Group Bus Booking In Maharashtra: Corporate & Family Guide',
    excerpt: 'Learn how to book a luxury bus for large groups in Maharashtra. We cover pricing, fleet options, and booking tips for your next outing.',
    date: 'May 08, 2026',
    author: 'Travel Expert',
    category: 'Group Booking',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
    readTime: '10 min read'
  },
  {
    id: 'wedding-bus-rental-guide',
    title: 'Wedding Bus Rental Guide: How to Transport Your Guests in Style',
    excerpt: 'Make your wedding logistics stress-free. Our guide covers everything from choosing the right bus size to decorating for the baraat.',
    date: 'May 05, 2026',
    author: 'Event Planner',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176',
    readTime: '12 min read'
  },
  {
    id: 'best-night-bus-service-tips',
    title: 'Best Night Bus Service: 7 Tips for a Restful Journey',
    excerpt: 'Traveling overnight? These expert tips will help you get better sleep and arrive refreshed at your destination.',
    date: 'May 03, 2026',
    author: 'Partner Bus Team',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1562620644-65bb470359c4',
    readTime: '5 min read'
  },
  {
    id: 'intercity-bus-safety-guide',
    title: 'Safety First: Our Guide to Secure Intercity Bus Travel',
    excerpt: 'Learn about the safety protocols followed by professional bus operators like Partner’s Bus Service to ensure a secure journey.',
    date: 'May 01, 2026',
    author: 'Safety Officer',
    category: 'Safety',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    readTime: '8 min read'
  }
].filter(post => post.image && post.title); // Safety filter

const Blog = () => {
  React.useEffect(() => {
    updateMetaTags({
      title: 'Travel Blog | Chalisgaon & Jalgaon Travel Insights - Partner Tours',
      description: 'Read the latest travel guides, budget tips, and local insights for Chalisgaon, Shirdi, Ajanta Ellora, and more. Plan your next trip with Partner Tours.',
      keywords: 'Chalisgaon travel blog, Shirdi tour guide, Ajanta Ellora transport, budget travel Maharashtra',
    });
  }, []);

  return (
    <div className="blog-page">
      <header className="blog-header parallax-hero">
        <div className="container">
          <div className="badge badge-orange mb-16">Expert Insights</div>
          <h1>Travel <span>Guides & Tips</span></h1>
          <p>Discover the best of Maharashtra and beyond with our local expertise.</p>
        </div>
      </header>

      <section className="blog-search section-padding bg-white">
        <div className="container">
          <div className="search-bar-wrap">
             <div className="search-input-group">
                <Search size={20} />
                <input type="text" placeholder="Search travel guides..." />
             </div>
             <div className="blog-categories">
                <button className="active">All</button>
                <button>Guides</button>
                <button>Budget</button>
                <button>Religious</button>
             </div>
          </div>

          <div className="blog-grid mt-50">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card ripple">
                <div className="blog-card-img">
                  <ProImage 
                    src={post.image} 
                    alt={post.title} 
                    width={500}
                    height={300}
                    aspectRatio="16/9"
                  />
                  <span className="blog-category-tag">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span><Calendar size={14} /> {post.date}</span>
                    <span><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more-btn">
                    Read Full Story <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-newsletter section-padding">
         <div className="container">
            <div className="newsletter-card glass-effect ripple">
               <div className="newsletter-text">
                  <h2>Join Our Travel Community</h2>
                  <p>Get exclusive tour offers and travel guides directly in your inbox or WhatsApp.</p>
               </div>
               <form className="newsletter-form">
                  <input type="email" placeholder="Your Email Address" required />
                  <button type="submit" className="btn btn-primary">Subscribe Now</button>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Blog;
