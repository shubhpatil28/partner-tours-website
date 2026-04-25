import React from 'react';
import { Users, Briefcase, Settings, MessageSquare, Wind, Fuel, Map, CheckCircle, ShieldCheck } from 'lucide-react';
import './Rental.css';

const vehicles = [
  {
    id: 1,
    name: "Swift Dzire",
    type: "Sedan (AC)",
    seats: "4 + 1",
    bags: 2,
    transmission: "Manual/Auto",
    priceKm: "₹12",
    priceDay: "₹2,500",
    features: ["Clean Interiors", "USB Charger", "Bluetooth", "Experienced Driver"],
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Innova Crysta",
    type: "Premium SUV",
    seats: "7 + 1",
    bags: 4,
    transmission: "Automatic",
    priceKm: "₹18",
    priceDay: "₹4,500",
    features: ["Spacious Legroom", "Rear AC Vents", "Carrier included", "Luxury Seats"],
    image: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Tempo Traveller",
    type: "Mini Bus (AC)",
    seats: "12 - 17",
    bags: 10,
    transmission: "Manual",
    priceKm: "₹25",
    priceDay: "₹6,000",
    features: ["High Roof", "Reclining Seats", "Music System", "Perfect for Groups"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
  }
];

const Rental = () => {
  return (
    <div className="rental-page">
      <div className="page-header section-padding">
        <div className="container">
          <h1>Vehicle Rental Fleet</h1>
          <p>Hire the best cars with professional drivers for local and outstation trips.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-3">
            {vehicles.map(vehicle => (
              <div key={vehicle.id} className="vehicle-card fade-in">
                <div className="vehicle-img">
                  <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
                  <div className="vehicle-pricing-overlay">
                    <span>From {vehicle.priceKm}/km</span>
                  </div>
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-header">
                    <h3>{vehicle.name}</h3>
                    <span className="v-tag">{vehicle.type}</span>
                  </div>
                  
                  <div className="vehicle-main-features">
                    <div className="v-feat"><Users size={18}/> {vehicle.seats}</div>
                    <div className="v-feat"><Briefcase size={18}/> {vehicle.bags}</div>
                    <div className="v-feat"><Wind size={18}/> AC</div>
                    <div className="v-feat"><Fuel size={18}/> Petrol/Diesel</div>
                  </div>

                  <ul className="v-feature-list">
                    {vehicle.features.map((f, i) => (
                      <li key={i}><CheckCircle size={14} color="#2ed573"/> {f}</li>
                    ))}
                  </ul>

                  <div className="rental-action-box">
                    <div className="action-price">
                       <small>Local Day Rate</small>
                       <strong>{vehicle.priceDay}</strong>
                    </div>
                    <a href={`https://wa.me/919876543210?text=Hi, I want to book a ${vehicle.name} for rental. Please share availability.`} 
                       className="btn btn-whatsapp">
                      <MessageSquare size={18}/> Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-table-container mt-50">
             <div className="section-title">
               <h2>Detailed Pricing Table</h2>
             </div>
             <div className="table-responsive">
                <table className="rental-table">
                   <thead>
                      <tr>
                         <th>Vehicle Name</th>
                         <th>Capacity</th>
                         <th>Outstation (per km)</th>
                         <th>Local (8hrs/80km)</th>
                         <th>Extra Hour</th>
                         <th>Extra Km</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr>
                         <td>Swift Dzire</td>
                         <td>4+1 Seats</td>
                         <td>₹12</td>
                         <td>₹2,500</td>
                         <td>₹200</td>
                         <td>₹12</td>
                      </tr>
                      <tr>
                         <td>Innova Crysta</td>
                         <td>7+1 Seats</td>
                         <td>₹18</td>
                         <td>₹4,500</td>
                         <td>₹350</td>
                         <td>₹18</td>
                      </tr>
                      <tr>
                         <td>Tempo Traveller</td>
                         <td>12-17 Seats</td>
                         <td>₹25</td>
                         <td>₹6,000</td>
                         <td>₹500</td>
                         <td>₹25</td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>

          <div className="rental-notes mt-50">
            <div className="notes-grid">
               <div className="note-card">
                  <Map size={32}/>
                  <h4>Outstation Trips</h4>
                  <p>Minimum running of 250km per day is applicable for outstation duties.</p>
               </div>
               <div className="note-card">
                  <Users size={32}/>
                  <h4>Professional Drivers</h4>
                  <p>All our drivers are background verified, polite, and know the routes well.</p>
               </div>
               <div className="note-card">
                  <ShieldCheck size={32}/>
                  <h4>All-India Permit</h4>
                  <p>Our vehicles carry All-India Tourist permits for hassle-free travel across states.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Rental;
