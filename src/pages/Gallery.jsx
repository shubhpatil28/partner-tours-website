import React, { useEffect } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import './Gallery.css';
import ProImage from '../components/common/ProImage';
import updateMetaTags from '../utils/updateMetaTags';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';
import heroImg from '../assets/hero.png';
import dubaiImg from '../assets/dubai.png';
import thailandImg from '../assets/thailand.png';

const galleryImages = [
  { id: 1, src: goaImg, title: "Sunny Goa", location: "South Goa Beaches" },
  { id: 2, src: manaliImg, title: "Manali Peaks", location: "Solang Valley" },
  { id: 3, src: kashmirImg, title: "Dal Lake", location: "Srinagar, Kashmir" },
  { id: 4, src: heroImg, title: "Incredible India", location: "Cultural Heritage" },
  { id: 5, src: dubaiImg, title: "Dubai Skyline", location: "United Arab Emirates" },
  { id: 6, src: thailandImg, title: "Phi Phi Islands", location: "Thailand Paradise" },
  { id: 7, src: goaImg, title: "Goa Nightlife", location: "North Goa" },
  { id: 8, src: manaliImg, title: "Snow Adventure", location: "Rohtang Pass" },
  { id: 9, src: kashmirImg, title: "Gulmarg", location: "Kashmir Meadows" }
].filter(img => img.src && img.title); // Safety filter

const Gallery = () => {
  useEffect(() => {
    updateMetaTags({
      title: 'Travel Gallery | Best Travel Agency in Chalisgaon',
      description: 'Explore the travel moments captured by Partner\'s Tours & Travels. Real photos of our tours from Chalisgaon to Kashmir, Goa, Dubai, and more.',
      keywords: 'Chalisgaon Travel Photos, Partner Tours Gallery, Jalgaon Tour Agency Images',
    });

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.gallery-item').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery-page">
      <div className="page-header section-padding">
        <div className="container">
          <div className="badge badge-white">Captured Moments</div>
          <h1>Travel <span>Gallery</span></h1>
          <p>A glimpse into the extraordinary destinations we've explored with our premium travelers.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div 
                key={img.id} 
                className="gallery-item"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="gallery-card">
                  <ProImage 
                    src={img.src} 
                    alt={`${img.title} at ${img.location}`} 
                    width={400}
                    height={300}
                    aspectRatio="4/3"
                  />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <div className="loc-info">
                        <MapPin size={14} />
                        <span>{img.location}</span>
                      </div>
                      <h4>{img.title}</h4>
                      <button className="btn-view-details">
                        View Details <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
