// src/components/Destinations.js
import React from 'react';

function Destinations({ title, items }) {
  return (
    <section className="destinations" style={{ padding: '40px 80px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.4rem', fontWeight: 'bold', marginBottom: '40px' }}>{title}</h2>
      <div className="destination-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
        {items.map((item, index) => (
          <div className="destination-item" key={index} style={{ textAlign: 'left' }}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{item.name}</h3>
            <p style={{ fontSize: '1.4rem', lineHeight: '1' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
