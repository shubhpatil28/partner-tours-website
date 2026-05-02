import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, CheckCircle, MessageSquare, Hotel, Coffee, Car, Zap, ShieldCheck } from 'lucide-react';
import './PackageDetail.css';
import Image from '../components/common/Image';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';
import dubaiImg from '../assets/dubai.png';
import thailandImg from '../assets/thailand.png';
import { CONTACT_CONFIG } from '../config';
import { getWhatsAppLink, getCallLink } from '../utils/contactHelpers';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import updateMetaTags from '../utils/updateMetaTags';
import { injectStructuredData, getTourSchema } from '../utils/seo';

const packagesData = {
  'kashmir-trip': {
    title: "Kashmir Paradise Tour",
    image: kashmirImg,
    duration: "6 Days / 5 Nights",
    price: "₹18,999",
    urgency: "Only 3 slots left for next week!",
    description: "Experience the Heaven on Earth with our meticulously crafted Kashmir Paradise Tour. This journey takes you through the heart of the Himalayas, starting with the iconic Dal Lake in Srinagar. Enjoy the unique experience of staying in a luxury houseboat, floating on the serene waters while being surrounded by majestic mountain peaks. You will explore the world-famous Mughal Gardens, witness the saffron fields of Pampore, and visit the historic Avantipura ruins. The adventure continues to Gulmarg, where you can take the Gondola ride to the highest peaks, and Pahalgam, the valley of shepherds. This tour is perfect for families and honeymooners looking for a blend of tranquility, natural beauty, and cultural richness in the most beautiful valley in India.",
    itinerary: [
      { day: 1, title: "Srinagar Arrival & Houseboat Stay", details: "Welcome to Srinagar. Check-in to a traditional Houseboat on Dal Lake. Enjoy a relaxing Shikara ride during sunset." },
      { day: 2, title: "Srinagar Local Sightseeing", details: "Visit the famous Mughal Gardens: Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Abode of Love)." },
      { day: 3, title: "Gulmarg - The Meadow of Flowers", details: "A full-day excursion to Gulmarg. Enjoy the Gondola ride (world's highest cable car) to the Apharwat mountains." },
      { day: 4, title: "Pahalgam - The Valley of Shepherds", details: "Drive to Pahalgam. Enroute visit saffron fields and Avantipura ruins. Overnight at hotel in Pahalgam." },
      { day: 5, title: "Sonmarg - The Meadow of Gold", details: "Day trip to Sonmarg to see the Thajiwas Glacier and enjoy the breathtaking Sindh River views." },
      { day: 6, title: "Departure from Srinagar", details: "Transfer to Srinagar Airport with sweet memories of your Kashmir trip." }
    ],
    inclusions: ["5 Nights Accommodation (Houseboat + Hotel)", "Daily Breakfast & Dinner", "Shikara Ride on Dal Lake", "All private airport transfers", "Toll, Parking & Driver allowance"],
    exclusions: ["Airfare/Train fare", "Lunch", "Entry fees to gardens", "Gondola ride tickets"]
  },
  'manali-trip': {
    title: "Manali Adventure Escape",
    image: manaliImg,
    duration: "5 Days / 4 Nights",
    price: "₹12,499",
    urgency: "Fast selling package!",
    description: "Escape to the majestic mountains of Himachal Pradesh with our Manali Adventure Escape package. Manali is a high-altitude Himalayan resort town known for its cool climate and snow-capped peaks. This tour is designed for those who seek both adventure and relaxation. You will visit the ancient Hadimba Devi Temple, explore the Tibetan Monasteries, and walk through the charming streets of Old Manali. The highlight of the trip is the excursion to Solang Valley, where you can engage in paragliding, zorbing, and skiing. We also take you to the sacred Manikaran Sahib, famous for its hot springs and spiritual atmosphere. Whether you are traveling with friends or family, this package ensures a refreshing break from the hustle of city life with premium stays and reliable transport services.",
    itinerary: [
      { day: 1, title: "Manali Arrival", details: "Check-in to your resort. Evening free to explore Mall Road and Hadimba Temple." },
      { day: 2, title: "Solang Valley & Rohtang", details: "Experience snow activities at Solang Valley. Optional visit to Rohtang Pass." },
      { day: 3, title: "Kullu & Manikaran", details: "Visit Kullu for river rafting and the hot springs of Manikaran Sahib." },
      { day: 4, title: "Old Manali Exploring", details: "Relax and explore the cafes and culture of Old Manali." },
      { day: 5, title: "Departure", details: "Morning shopping and transfer to Volvo stand." }
    ],
    inclusions: ["Hotel Stay", "Breakfast & Dinner", "Personal Car for sightseeing", "River Rafting voucher"],
    exclusions: ["Adventure activity costs", "Lunch", "Rohtang entry permit"]
  },
  'goa-trip': {
    title: "Goa Beach Vacation",
    image: goaImg,
    duration: "3 Days / 2 Nights",
    price: "₹7,999",
    urgency: "Budget friendly deal!",
    description: "Discover the vibrant beaches and Portuguese heritage of Goa with our specially curated 3-day vacation. Goa is the ultimate destination for sun, sand, and sea lovers. Our package covers both North and South Goa, giving you a complete experience of the state's diverse culture. From the famous Baga and Calangute beaches known for their nightlife and water sports to the serene beaches of South Goa like Colva and Palolem, you will experience it all. We also include a visit to the UNESCO World Heritage site of Old Goa, home to magnificent churches like the Basilica of Bom Jesus. Enjoy local Goan cuisine, explore the spice plantations, and relax by the Arabian Sea. This budget-friendly package is designed for travelers who want a quick yet fulfilling getaway to India's most popular coastal destination.",
    itinerary: [
      { day: 1, title: "North Goa Arrival", details: "Arrival at Goa airport/station. Check-in and evening free for Baga Beach and local shacks." },
      { day: 2, title: "South Goa Sightseeing", details: "Visit Old Goa Churches, Mangueshi Temple, and enjoy a sunset cruise on the Mandovi River." },
      { day: 3, title: "Departure", details: "Morning shopping at Panjim market and transfer for departure." }
    ],
    inclusions: ["AC Accommodation", "Breakfast", "North & South Goa Sightseeing", "Airport/Station Transfers"],
    exclusions: ["Water sports charges", "Lunch & Dinner", "Personal expenses"]
  },
  'dubai-trip': {
    title: "Luxury Dubai City Tour",
    image: dubaiImg,
    duration: "5 Days / 4 Nights",
    price: "₹45,999",
    urgency: "Exclusive discounted rates!",
    description: "Experience the glitz, glamour, and architectural wonders of Dubai with our premium luxury city tour. Dubai is a city that must be seen to be believed, and our package ensures you don't miss any of the highlights. You will witness the world's tallest building, the Burj Khalifa, and enjoy breathtaking views from its observation deck. The tour includes a thrilling Desert Safari with dune bashing in a 4x4 vehicle, followed by a traditional BBQ dinner under the stars with belly dancing performances. Experience the charm of old Dubai with a visit to the Gold and Spice Souks and the modern luxury of Dubai Marina on a traditional Dhow Cruise. This package is all-inclusive of visa and insurance, making it a hassle-free international trip for you and your loved ones. Book now to explore the jewel of the Middle East.",
    itinerary: [
      { day: 1, title: "Arrival in Dubai", details: "Check-in to your hotel. Evening Dhow Cruise with dinner at Marina." },
      { day: 2, title: "City Tour & Burj Khalifa", details: "Half day city tour including Jumeirah Beach. Afternoon visit to 124th Floor of Burj Khalifa." },
      { day: 3, title: "Desert Safari", details: "Extreme dune bashing followed by BBQ dinner and belly dancing at the desert camp." },
      { day: 4, title: "Dubai Mall & Aquarium", details: "Leisure day at the world's largest mall and underwater zoo." },
      { day: 5, title: "Departure", details: "Final shopping and transfer to DXB international airport." }
    ],
    inclusions: ["4-star Hotel Stay", "UAE Visa & Insurance", "Desert Safari with Dinner", "Burj Khalifa Tickets", "Airport Transfers"],
    exclusions: ["Airfare", "Personal Expenses", "Tourism Dirham Fee"]
  },
  'thailand-trip': {
    title: "Exotic Thailand Holiday",
    image: thailandImg,
    duration: "6 Days / 5 Nights",
    price: "₹38,500",
    urgency: "Limited slots available!",
    description: "Embark on an exotic journey to the Land of Smiles with our Thailand holiday package. This tour combines the bustling energy of Bangkok with the tropical beauty of Pattaya. You will start your journey in Pattaya, enjoying the stunning beaches and visiting the famous Coral Island for water activities. Experience the world-renowned Alcazar Show and explore the Nong Nooch Tropical Garden. The second leg of your trip takes you to Bangkok, where you will visit majestic Buddhist temples like Wat Traimit and Wat Pho. Enjoy shopping at the world-class malls and local markets, and experience the vibrant street food culture. This package is perfect for those looking for a mix of relaxation, adventure, and shopping in one of Southeast Asia's most popular destinations. We provide guided tours and comfortable transfers to ensure a smooth international travel experience.",
    itinerary: [
      { day: 1, title: "Bangkok Arrival - Pattaya", details: "Arrival at Bangkok airport and transfer to Pattaya. Evening Alcazar Show." },
      { day: 2, title: "Coral Island Tour", details: "Full day excursion to Coral Island with lunch. Water sports activities available." },
      { day: 3, title: "Pattaya to Bangkok", details: "Transfer to Bangkok. Evening free for shopping at MBK or Siam Paragon." },
      { day: 4, title: "Bangkok City & Temple Tour", details: "Visit the Golden Buddha and Reclining Buddha temples. Afternoon free." },
      { day: 5, title: "Safari World & Marine Park", details: "Optional full day tour to Safari World to see exotic animals and stunt shows." },
      { day: 6, title: "Departure", details: "Transfer to Suvarnabhumi Airport for your flight back home." }
    ],
    inclusions: ["3-star Hotel Stays", "Daily Breakfast", "Coral Island Tour with Lunch", "Bangkok Temple Tour", "Private Transfers"],
    exclusions: ["Flight tickets", "Visa on arrival fee", "Dinner", "Personal expenses"]
  },
  'kerala-trip': {
    title: "Kerala Backwater Serenity",
    image: goaImg,
    duration: "4 Days / 3 Nights",
    price: "₹15,500",
    urgency: "Romantic getaway special!",
    description: "Immerse yourself in the lush green landscapes and peaceful backwaters of God's Own Country. Our Kerala Backwater Serenity package is designed to rejuvenate your soul. The journey begins in Kochi, the gateway to Kerala, where you can explore the colonial history and Chinese fishing nets. You will then proceed to Munnar, the world-famous hill station known for its sprawling tea plantations and mist-covered mountains. The highlight of the trip is a stay in a traditional houseboat in Alleppey, where you will cruise through the narrow canals and witness the local way of life. This package includes visits to Eravikulam National Park and the Mattupetty Dam. Experience the authentic taste of Kerala cuisine and the warmth of South Indian hospitality. Perfect for couples and nature lovers, this tour offers a peaceful escape into the heart of nature.",
    itinerary: [
      { day: 1, title: "Kochi Arrival - Munnar", details: "Arrival at Kochi and drive to Munnar. Visit Cheeyappara waterfalls enroute." },
      { day: 2, title: "Munnar Sightseeing", details: "Visit Eravikulam National Park, Tea Museum, and Mattupetty Dam." },
      { day: 3, title: "Munnar to Alleppey Houseboat", details: "Drive to Alleppey. Check-in to a private houseboat for an overnight cruise." },
      { day: 4, title: "Departure", details: "Breakfast on houseboat and transfer back to Kochi airport/station." }
    ],
    inclusions: ["Private Houseboat Stay", "Hotel in Munnar", "All Meals in Houseboat", "A/C Car for transfers", "Sightseeing"],
    exclusions: ["Air/Train fare", "Entry tickets to parks", "Personal laundry/tips"]
  }
};

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = packagesData[id] || packagesData['kashmir-trip'];

  useEffect(() => {
    window.scrollTo(0, 0);
    updateMetaTags({
      title: `${pkg.title} | ${pkg.duration} Tour Package`,
      description: `Book the ${pkg.title} from Chalisgaon. ${pkg.duration} includes ${pkg.inclusions.slice(0, 2).join(', ')}. Best rates guaranteed in Jalgaon district.`,
      image: pkg.image,
    });
    injectStructuredData(getTourSchema(pkg));
    trackEvent(ANALYTICS_EVENTS.PACKAGE_VIEW, { package_id: id, title: pkg.title });
  }, [id, pkg.title, pkg.image, pkg.duration, pkg.inclusions]);

  const whatsappLink = getWhatsAppLink(`Hi, I'm interested in the ${pkg.title} package. Please share details.`);

  return (
    <div className="package-detail-page">
      <div className="detail-hero">
        <Image 
          src={pkg.image} 
          alt={pkg.title} 
          className="detail-hero-img" 
          priority={true} 
          width={1920}
          height={600}
        />
        <div className="container">
          <div className="detail-header-content fade-in">
            <span className="duration-pill"><Clock size={16}/> {pkg.duration}</span>
            <h1>{pkg.title}</h1>
            <div className="price-info">Deal Price: <span>{pkg.price}</span></div>
            {pkg.urgency && <div className="detail-urgency"><Zap size={20}/> {pkg.urgency}</div>}
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="detail-grid">
          <div className="detail-main">
            <section className="detail-section">
              <h3>Tour Overview</h3>
              <p>{pkg.description}</p>
            </section>

            <section className="detail-section">
              <h3>Day-wise Itinerary</h3>
              <div className="itinerary-list">
                {pkg.itinerary.map(item => (
                  <div key={item.day} className="itinerary-item">
                    <div className="day-number">Day {item.day}</div>
                    <div className="itinerary-content">
                      <h4>{item.title}</h4>
                      <p>{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h3>Inclusions & Exclusions</h3>
              <div className="grid-2">
                <div className="list-box inclusion-box">
                  <h4><ShieldCheck size={20}/> What's Included</h4>
                  <ul>
                    {pkg.inclusions.map((item, index) => (
                      <li key={index}><CheckCircle size={18} className="text-success"/> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="list-box exclusion-box">
                  <h4>What's Not Included</h4>
                  <ul>
                    {pkg.exclusions.map((item, index) => (
                      <li key={index} className="exclusion-li">✕ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="detail-sidebar">
            <div className="booking-card">
               <div className="sticky-badge">SAVE 20% TODAY</div>
              <h3>Quick Booking</h3>
              <div className="sidebar-amenities">
                 <div className="am-item"><Hotel size={18}/> <span>Hotel</span></div>
                 <div className="am-item"><Coffee size={18}/> <span>Meals</span></div>
                 <div className="am-item"><Car size={18}/> <span>Cab</span></div>
              </div>
              <div className="sidebar-price">
                Offer Price per person: <span>{pkg.price}</span>
              </div>
              <a 
                href={whatsappLink} 
                className="btn btn-whatsapp btn-lg full-width"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_REDIRECT, { package_id: id, title: pkg.title })}
              >
                <MessageSquare size={20}/> Book on WhatsApp
              </a>
              <div className="sidebar-support">
                 <p>Have Questions? Talk to our expert.</p>
                  <a 
                    href={getCallLink()} 
                    className="phone-cta"
                    onClick={() => trackEvent(ANALYTICS_EVENTS.CALL_CLICK)}
                  >
                    {CONTACT_CONFIG.DISPLAY_PHONE}
                  </a>
              </div>
            </div>

            <div className="trust-card mt-30">
               <div className="trust-item">
                  <CheckCircle size={20} color="#27ae60"/>
                  <span>GST Registered Agency</span>
               </div>
               <div className="trust-item">
                  <CheckCircle size={20} color="#27ae60"/>
                  <span>Verified Safe Hotels</span>
               </div>
               <div className="trust-item">
                  <CheckCircle size={20} color="#27ae60"/>
                  <span>Professional Drivers</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
