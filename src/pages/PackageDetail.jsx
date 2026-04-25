import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, MapPin, CheckCircle, MessageSquare, Hotel, Coffee, Car, Zap, ShieldCheck } from 'lucide-react';
import './PackageDetail.css';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';
import dubaiImg from '../assets/dubai.png';
import thailandImg from '../assets/thailand.png';

const packagesData = {
  'kashmir-trip': {
    title: "Kashmir Paradise Tour",
    image: kashmirImg,
    duration: "6 Days / 5 Nights",
    price: "₹18,999",
    urgency: "Only 3 slots left for next week!",
    description: "Experience the Heaven on Earth. From the serenity of Dal Lake houseboats to the snowy peaks of Gulmarg, this curated tour covers the best of Kashmir valley.",
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
    description: "Escape to the mountains of Himachal. This package is perfect for adventure seekers and honeymooners alike.",
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
  'dubai-trip': {
    title: "Luxury Dubai City Tour",
    image: dubaiImg,
    duration: "5 Days / 4 Nights",
    price: "₹45,999",
    urgency: "Exclusive discounted rates!",
    description: "Experience the glitz and glamour of Dubai. From Burj Khalifa to Desert Safari, this package covers all major attractions.",
    itinerary: [
      { day: 1, title: "Arrival in Dubai", details: "Check-in to your hotel. Evening Dhow Cruise with dinner at Marina." },
      { day: 2, title: "City Tour & Burj Khalifa", details: "Half day city tour including Jumeirah Beach. Afternoon visit to 124th Floor of Burj Khalifa." },
      { day: 3, title: "Desert Safari", details: "Extreme dune bashing followed by BBQ dinner and belly dancing at the desert camp." },
      { day: 4, title: "Dubai Mall & Aquarium", details: "Leisure day at the world's largest mall and underwater zoo." },
      { day: 5, title: "Departure", details: "Final shopping and transfer to DXB international airport." }
    ],
    inclusions: ["4-star Hotel Stay", "UAE Visa & Insurance", "Desert Safari with Dinner", "Burj Khalifa Tickets", "Airport Transfers"],
    exclusions: ["Airfare", "Personal Expenses", "Tourism Dirham Fee"]
  }
};

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = packagesData[id] || packagesData['kashmir-trip'];

  const whatsappLink = `https://wa.me/919876543210?text=Hi, I am interested in the ${pkg.title} (${pkg.duration}) package for ₹${pkg.price}. Please provide more details and availability.`;

  return (
    <div className="package-detail-page">
      <div className="detail-hero">
        <img src={pkg.image} alt={pkg.title} className="detail-hero-img" loading="lazy" />
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
              <a href={whatsappLink} className="btn btn-whatsapp btn-lg full-width">
                <MessageSquare size={20}/> Book via WhatsApp
              </a>
              <div className="sidebar-support">
                 <p>Have Questions? Talk to our expert.</p>
                 <a href="tel:+919876543210" className="phone-cta">+91 98765 43210</a>
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
