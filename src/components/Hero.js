// src/components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="/images/hero.jpg" alt="Hero image" />
      </div>
      <div className="hero-content">
        <h1>Welcome to Our Travel Website</h1>
        <p>Discover amazing destinations and book your next trip with us.</p>
        <a href="#" className="hero-button">Book Now</a>
      </div>
    </section>
  );
}

export default Hero;
