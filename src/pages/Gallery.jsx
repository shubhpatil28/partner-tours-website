import React from 'react';
import './Gallery.css';
import goaImg from '../assets/goa.png';
import manaliImg from '../assets/manali.png';
import kashmirImg from '../assets/kashmir.png';
import heroImg from '../assets/hero.png';

const galleryImages = [
  { id: 1, src: goaImg, title: "Sunny Goa Beaches" },
  { id: 2, src: manaliImg, title: "Manali Snow Peaks" },
  { id: 3, src: kashmirImg, title: "Kashmir Dal Lake" },
  { id: 4, src: heroImg, title: "Incredible India" },
  { id: 5, src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800", title: "Taj Mahal Agra" },
  { id: 6, src: "https://images.unsplash.com/photo-1514222139745-d186a89a65e8?auto=format&fit=crop&q=80&w=800", title: "Varanasi Ghats" },
  { id: 7, src: "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80&w=800", title: "Kerala Backwaters" },
  { id: 8, src: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800", title: "Jaipur Hawa Mahal" },
  { id: 9, src: "https://images.unsplash.com/photo-1598330106281-789a4918e977?auto=format&fit=crop&q=80&w=800", title: "Spiti Valley" }
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="page-header section-padding">
        <div className="container">
          <h1>Travel Gallery</h1>
          <p>A glimpse into the beautiful destinations we've explored with our clients.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map(img => (
              <div key={img.id} className="gallery-item fade-in">
                <img src={img.src} alt={img.title} />
                <div className="gallery-overlay">
                  <h4>{img.title}</h4>
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
