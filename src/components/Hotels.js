// src/components/Hotels.js
import React from 'react';

function Hotels() {
  const hotels = [
    { name: 'The Ritz Carlton', image: '/images/hotel-1.jpg', description: 'Experience luxury accommodations at The Ritz Carlton.' },
    { name: 'The Four Seasons', image: '/images/hotel-2.jpg', description: 'Relax at The Four Seasons with breathtaking views.' },
    { name: 'The Waldorf Astoria', image: '/images/hotel-3.jpg', description: 'Indulge in luxury at The Waldorf Astoria.' }
  ];

  return (
    <section id="hotels" className="destinations">
      <h2>Featured Hotels</h2>
      <div className="destination-grid">
        {hotels.map((hotel, index) => (
          <div className="destination-item" key={index}>
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hotels;
