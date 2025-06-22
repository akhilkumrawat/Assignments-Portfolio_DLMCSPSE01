import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Hotels from './components/Hotels';
import Activities from './components/Activities';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const destinations = [
    { name: 'New York City', image: '/images/destination-1.jpg', description: 'Visit the city that never sleeps.' },
    { name: 'Paris', image: '/images/destination-2.jpg', description: 'Experience the romance of the city.' },
    { name: 'Tokyo', image: '/images/destination-3.jpg', description: 'Explore Tokyo’s vibrant culture.' }
  ];

  return (
    <Router>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/destinations" element={<Destinations title="Popular Destinations" items={destinations} />} />
      </Routes>
    </Router>
  );
}

export default App;
