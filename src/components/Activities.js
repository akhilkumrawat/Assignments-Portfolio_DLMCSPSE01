// src/components/Activities.js
import React from 'react';

function Activities() {
  const activities = [
    { name: 'City Tour', image: '/images/activity-1.jpg', description: 'Explore the city on a guided tour.' },
    { name: 'Beach Vacation', image: '/images/activity-2.jpg', description: 'Relax on the beautiful beaches.' },
    { name: 'Museum Visit', image: '/images/activity-3.jpg', description: 'Learn about history and culture.' }
  ];

  return (
    <section id="activities" className="destinations" style={{ padding: '40px 80px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.4rem', fontWeight: 'bold', marginBottom: '40px' }}>Featured Activities</h2>
      <div className="destination-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
        {activities.map((activity, index) => (
          <div className="destination-item" key={index} style={{ textAlign: 'left' }}>
            <img src={activity.image} alt={activity.name} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{activity.name}</h3>
            <p style={{ fontSize: '1.4rem', lineHeight: '1' }}>{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
