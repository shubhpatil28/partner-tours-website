import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import './BlogDetail.css';
import ProImage from '../components/common/ProImage';
import { getWhatsAppLink } from '../utils/contactHelpers';
import updateMetaTags from '../utils/updateMetaTags';

const blogContent = {
  'best-places-near-chalisgaon': {
    title: 'Top 10 Must-Visit Places Near Chalisgaon & Jalgaon District',
    date: 'May 02, 2026',
    author: 'Partner Tours Team',
    category: 'Local Guide',
    image: 'https://images.unsplash.com/photo-1590050752117-23a9d7f28a3a?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Chalisgaon, a vibrant city in the Jalgaon district of Maharashtra, is often overlooked by mainstream tourists. However, for those who know where to look, it serves as a gateway to some of the most stunning historical and natural wonders in Northern Maharashtra. As the most trusted travel agency in Chalisgaon, we've compiled this ultimate guide to the best places you can visit within a short drive from the city.</p>
      
      <h2>1. Pitalkhora Caves (40 km from Chalisgaon)</h2>
      <p>Hidden in the Satmala range of the Western Ghats, the Pitalkhora Caves are one of the earliest examples of rock-cut architecture in India, dating back to the 2nd century BCE. Unlike the crowded Ajanta and Ellora, Pitalkhora offers a serene experience. The complex consists of 14 caves, most of which are viharas (monasteries). During the monsoon, a spectacular waterfall cascades right next to the caves, making it a paradise for nature photographers.</p>

      <h2>2. Patnadevi Temple (18 km from Chalisgaon)</h2>
      <p>Located in the heart of the Gautala Autramghat Sanctuary, Patnadevi is a place of immense historical and religious significance. It is the birthplace of the great mathematician Bhaskaracharya. The ancient Chandika Devi temple here is a fine example of Hemadpanti architecture. The surrounding forest is perfect for a light trek and bird watching.</p>

      <h2>3. Gautala Autramghat Wildlife Sanctuary</h2>
      <p>Spanning across the hills of the Sahyadri range, this sanctuary is home to leopards, sloth bears, barking deer, and over 200 species of birds. For residents of Chalisgaon and Jalgaon, it is the perfect weekend getaway for a jungle safari. The best time to visit is from October to March when the weather is pleasant and wildlife sightings are frequent.</p>

      <h2>4. Unapdev Hot Springs</h2>
      <p>Located near Chopda in the Jalgaon district, these natural hot springs are believed to have medicinal properties. The water flows from a structure shaped like a cow's mouth (Gomukh). It's a popular spot for pilgrims and those looking for a natural spa experience.</p>

      <h2>Conclusion</h2>
      <p>Whether you're a history buff, a nature lover, or a spiritual seeker, the area around Chalisgaon has something for everyone. Planning a trip to these locations can be tricky due to limited public transport. That's where <strong>Partner's Tours & Travels</strong> comes in. We provide reliable luxury bus rentals and car services from Chalisgaon to all these hidden gems.</p>
    `
  },
  'shirdi-tour-cost-guide': {
    title: 'Shirdi Tour Cost Guide: Planning Your Pilgrimage from Chalisgaon',
    date: 'April 28, 2026',
    author: 'Admin',
    category: 'Religious',
    image: 'https://images.unsplash.com/photo-1544735038-179ad6bc0148?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Planning a trip to Shirdi from Chalisgaon or Jalgaon is a regular tradition for many families. However, costs can vary significantly depending on how you plan. In this guide, we break down the expenses for a typical Shirdi tour to help you plan better.</p>
      
      <h2>Transport Options & Costs</h2>
      <p>The distance from Chalisgaon to Shirdi is approximately 100 km, making it a perfect day trip or overnight journey. Here are the transport costs:</p>
      <ul>
        <li><strong>Private Car (Swift Dzire):</strong> Approx ₹3,000 - ₹3,500 (Round trip).</li>
        <li><strong>Tempo Traveller (12-17 Seater):</strong> Best for large families, costing between ₹6,000 - ₹8,000.</li>
        <li><strong>Luxury Bus:</strong> For groups of 30+, rentals start from ₹15,000.</li>
      </ul>

      <h2>Accommodation in Shirdi</h2>
      <p>Shirdi offers stays for every budget. From free 'Bhakti Niwas' provided by the Sansthan to 5-star luxury resorts. On average, a decent AC room for a family of four will cost between ₹1,500 to ₹2,500 per night.</p>

      <h2>Tips for a Budget Trip</h2>
      <p>To keep your Shirdi tour under budget, we recommend booking your 'Darshan' and 'Aarti' tickets online in advance. This saves you from long queues and the need for expensive "VIP" services offered by touts.</p>

      <p>At <strong>Partner's Tours & Travels</strong>, we offer special Shirdi-Shani Shingnapur-Nasik packages starting from Chalisgaon. Contact us for a customized quote!</p>
    `
  },
  'ajanta-ellora-caves-guide': {
    title: 'Ajanta & Ellora Caves: Complete Travel Guide for History Lovers',
    date: 'April 25, 2026',
    author: 'Travel Expert',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1599341624443-4171059f143a?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>The Ajanta and Ellora caves are the crown jewels of Maharashtra's tourism and a testament to the incredible engineering skills of ancient Indian civilizations. While they are often mentioned together, they represent different eras, religions, and architectural styles. If you're planning a visit from Chalisgaon or Jalgaon, this guide covers everything you need to know.</p>
      
      <h2>Ajanta Caves: The Masterpiece of Buddhist Art</h2>
      <p>Located about 90 km from Jalgaon, Ajanta consists of 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 CE. These caves are famous for their ancient paintings (frescoes) that are among the finest surviving examples of ancient Indian art. The paintings depict the Jataka tales and are a marvel of natural pigments that have survived for millennia.</p>

      <h2>Ellora Caves: The Unity of Religions</h2>
      <p>Ellora is located 30 km from Aurangabad and is unique because it features 34 monasteries and temples belonging to Buddhism, Hinduism, and Jainism, built side-by-side between the 6th and 10th centuries CE. The highlight is the <strong>Kailasa Temple (Cave 16)</strong>, the largest monolithic structure in the world, carved out of a single rock from the top down.</p>

      <h2>Best Way to Reach from Chalisgaon</h2>
      <p>The most efficient way to see both sites is to hire a private car or luxury bus from <strong>Partner's Tours & Travels</strong>. We offer 2-day itineraries that include comfortable stays in Aurangabad, allowing you to explore the caves without rushing.</p>
    `
  },
  'goa-trip-under-5000': {
    title: 'How to Plan a Goa Trip Under ₹5000: Tips from Chalisgaon Travelers',
    date: 'April 20, 2026',
    author: 'Partner Tours Team',
    category: 'Budget Travel',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Goa is the dream destination for many, but the perceived high costs often deter travelers from Chalisgaon and Jalgaon. However, with smart planning, you can experience the magic of Goa beaches for under ₹5000 per person. Here is the secret blueprint used by budget-savvy travelers.</p>
      
      <h2>Step 1: Budget-Friendly Transport</h2>
      <p>Avoid last-minute flight bookings which can cost upwards of ₹6000 one-way. Instead, leverage the excellent rail connectivity from Jalgaon or Manmad. The <strong>Goa Express</strong> is a reliable choice. A Sleeper Class (SL) round-trip ticket will cost you roughly ₹900-₹1100.</p>

      <h2>Step 2: Smart Accommodation</h2>
      <p>Resorts in Calangute or Baga can eat up your entire budget. Look for hostels in Anjuna, Vagator, or Arambol. A bunk bed in a clean, high-rated hostel costs between ₹400-₹600 per night. If you're traveling in a group of four, budget guest houses in South Goa can be even cheaper.</p>

      <h2>Step 3: Eat Like a Local</h2>
      <p>Beach shacks are for the views, but local 'Bhojan' places are for your wallet. Explore the inner roads of Mapusa or Panjim for authentic Goan Thalis costing just ₹150.</p>

      <p><strong>Partner's Tours & Travels</strong> organizes "College Special" budget trips to Goa from Chalisgaon every winter. WhatsApp us to join our next group tour!</p>
    `
  },
  'budget-travel-maharashtra': {
    title: 'Best Budget Destinations in Maharashtra for Family Trips',
    date: 'April 15, 2026',
    author: 'Admin',
    category: 'Family Travel',
    image: 'https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Maharashtra is a land of diversity, offering everything from misty mountains to sun-kissed beaches. For families in the Jalgaon district looking for affordable weekend getaways, here are three destinations that offer maximum value for money.</p>
      
      <h2>1. Bhandardara: The Lake District</h2>
      <p>Located in the Ahmednagar district, Bhandardara is a paradise for nature lovers. The Arthur Lake, Wilson Dam, and the Randha Falls are spectacular, especially during the monsoon.</p>

      <h2>2. Ganpatipule: Spiritual Solace & Serenity</h2>
      <p>If your family loves the beach but hates the noise of Goa, Ganpatipule is the place. The 400-year-old Ganesha temple right on the shore is the main attraction. The beaches here are exceptionally clean.</p>

      <h2>3. Mahabaleshwar & Panchgani: The Classics</h2>
      <p>While known for luxury, Mahabaleshwar can be done on a budget if you stay in Panchgani. Explore the Venna Lake, Mapro Garden, and various 'Points' that offer stunning views of the Sahyadri range.</p>

      <p>No matter which destination you choose, <strong>Partner's Tours & Travels</strong> ensures your family travels in comfort. Book our 12-seater Tempo Traveller for a safe journey from Chalisgaon.</p>
    `
  },
  'best-sleeper-bus-chalisgaon-to-pune': {
    title: 'Best Sleeper Bus From Chalisgaon To Pune: A Comfort Guide',
    date: 'May 12, 2026',
    author: 'Partner Bus Team',
    category: 'Bus Service',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>When it comes to traveling from Chalisgaon to Pune, the night sleeper bus is the most popular choice for both professionals and students. But what makes a bus the "best"? It's not just about reaching the destination; it's about the quality of sleep you get on the way.</p>
      <h2>Why Choose Partner’s Sleeper Coach?</h2>
      <p>Our premium AC Sleeper coaches are maintained to the highest standards. With wide berths, clean pillows, and sanitized blankets, we ensure you feel at home even on the road.</p>
      <ul>
        <li><strong>Timely Departures:</strong> We respect your time. Our Pune bus leaves Chalisgaon at 10:30 PM sharp.</li>
        <li><strong>Safety:</strong> Our buses are equipped with GPS and driven by two experienced drivers on long routes.</li>
        <li><strong>Comfort:</strong> Individual AC vents and charging points for every berth.</li>
      </ul>
      <p>Book your seat today for a restful journey to Pune!</p>
    `
  },
  'chalisgaon-to-surat-bus-timings': {
    title: 'Chalisgaon To Surat Bus Timings: Everything You Need to Know',
    date: 'May 10, 2026',
    author: 'Admin',
    category: 'Route Guide',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Surat is a major business hub, especially for the textile and diamond industries. Travelers from Chalisgaon frequently visit Surat for trade. Having the correct bus timings is crucial for planning your business day.</p>
      <h2>Daily Timings</h2>
      <p>Our premium service to Surat departs daily from Chalisgaon at 9:00 PM. This ensures you reach Surat by early morning (around 5:00 AM), giving you a full day for your work.</p>
      <h2>Ticket Pricing</h2>
      <p>Tickets for the Chalisgaon-Surat route start at ₹700 for a sleeper berth. We recommend booking at least 2 days in advance during weekends as this route is highly popular.</p>
      <p>Contact <strong>Partner’s Bus Service</strong> on WhatsApp for instant seat availability.</p>
    `
  },
  'best-group-bus-booking-maharashtra': {
    title: 'Best Group Bus Booking In Maharashtra: Corporate & Family Guide',
    date: 'May 08, 2026',
    author: 'Travel Expert',
    category: 'Group Booking',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Organizing a group trip for 40+ people can be a logistical nightmare. Whether it's a corporate team-building outing or a large family pilgrimage, choosing the right bus operator is the first step to a successful trip.</p>
      <h2>What to Look for in a Group Booking</h2>
      <p>Always verify the bus's fitness certificate and the operator's GST registration. At Partner's, we provide all documentation upfront for corporate compliance.</p>
      <p>Our fleet includes 35-seater, 45-seater, and 50-seater luxury coaches. For smaller groups, our 17-seater Tempo Traveller is a perfect choice.</p>
      <p>Ask for a "Group Discount" when booking more than one bus!</p>
    `
  },
  'wedding-bus-rental-guide': {
    title: 'Wedding Bus Rental Guide: How to Transport Your Guests in Style',
    date: 'May 05, 2026',
    author: 'Event Planner',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Weddings in India are grand, and transporting the 'Baraat' or outstation guests requires careful planning. A dedicated wedding bus rental ensures everyone arrives together and on time.</p>
      <h2>Wedding Logistics Tips</h2>
      <p>1. <strong>Book Early:</strong> Wedding seasons in Maharashtra see a massive demand for buses. Book your rental at least 3 months in advance.</p>
      <p>2. <strong>Decorations:</strong> Most operators, including Partner’s, allow subtle decorations. Coordinate with your florist to make the bus part of the celebration.</p>
      <p>3. <strong>Refreshments:</strong> Keep water bottles and light snacks on the bus for guests, especially if the journey is longer than 2 hours.</p>
      <p>Partner’s Bus Service specialized in wedding transport across Jalgaon district.</p>
    `
  },
  'best-night-bus-service-tips': {
    title: 'Best Night Bus Service: 7 Tips for a Restful Journey',
    date: 'May 03, 2026',
    author: 'Partner Bus Team',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1562620644-65bb470359c4?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Night travel is efficient as it saves you a day of vacation and the cost of a hotel night. However, waking up tired can ruin your day. Follow these tips for a better experience:</p>
      <ul>
        <li><strong>Choose the Lower Berth:</strong> Lower berths have less movement compared to upper ones, leading to better sleep.</li>
        <li><strong>Carry Earplugs:</strong> While we maintain a quiet environment, earplugs help block out road noise.</li>
        <li><strong>Dress in Layers:</strong> AC temperatures can fluctuate; having a light jacket helps.</li>
        <li><strong>Avoid Heavy Meals:</strong> Eat light before boarding for a more comfortable sleep.</li>
      </ul>
    `
  },
  'intercity-bus-safety-guide': {
    title: 'Safety First: Our Guide to Secure Intercity Bus Travel',
    date: 'May 01, 2026',
    author: 'Safety Officer',
    category: 'Safety',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>Safety is the non-negotiable aspect of travel. At Partner’s Bus Service, we implement strict safety protocols that exceed industry standards.</p>
      <h2>Our Safety Protocols</h2>
      <p>Every bus in our fleet undergoes a thorough mechanical check after every long trip. Our drivers are trained in defensive driving and have mandatory rest periods between shifts.</p>
      <p>We also provide a dedicated 24/7 helpline for passengers on the road. For solo female travelers, we ensure they are seated in safe, designated areas of the bus.</p>
    `
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogContent[id];

  React.useEffect(() => {
    if (post) {
      updateMetaTags({
        title: `${post.title} | Partner's Tours Blog`,
        description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
      });
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) return <div className="container section-padding"><h1>Article not found</h1></div>;

  return (
    <div className="blog-detail-page">
      <div className="container post-container">
        <Link to="/blog" className="back-link"><ArrowLeft size={16} /> Back to Blog</Link>
        
        <header className="post-header">
          <span className="post-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span><Calendar size={18} /> {post.date}</span>
            <span><User size={18} /> {post.author}</span>
            <span><Clock size={18} /> 10 min read</span>
          </div>
        </header>

        <div className="post-featured-img">
          <ProImage 
            src={post.image} 
            alt={post.title} 
            priority={true} 
            width={1200}
            height={600}
            aspectRatio="2/1"
          />
        </div>

        <div className="post-content-layout">
          <main className="post-main-content">
            <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            <div className="post-tags mt-40">
               <span className="tag">#Chalisgaon</span>
               <span className="tag">#TravelGuide</span>
               <span className="tag">#Maharashtra</span>
               <span className="tag">#PartnerTours</span>
            </div>
          </main>

          <aside className="post-sidebar">
             <div className="sidebar-cta glass-effect ripple">
                <h3>Ready to Explore?</h3>
                <p>Book a luxury bus or a customized tour package from Chalisgaon today.</p>
                <a href={getWhatsAppLink(`Hi, I read your blog about ${post.title} and want to plan a trip.`)} className="btn btn-whatsapp full-width">
                   Enquire Now
                </a>
             </div>

             <div className="related-posts mt-40">
                <h4>Trending Guides</h4>
                <div className="related-list">
                   {Object.keys(blogContent).filter(k => k !== id).slice(0, 3).map(key => (
                      <Link key={key} to={`/blog/${key}`} className="related-item">
                         <ProImage 
                          src={blogContent[key].image} 
                          alt={blogContent[key].title} 
                          width={120}
                          height={80}
                          aspectRatio="3/2"
                         />
                         <h6>{blogContent[key].title}</h6>
                      </Link>
                   ))}
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
