// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center' }}>
      <div className="logo" style={{ marginRight: 'auto' }}>
        <a href="#"><img src="images/logo.jpg" alt="logo" style={{ maxWidth: '15%' }} /></a>
      </div>
      <nav className="nav-menu">
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li style={{ marginRight: '20px' }}><Link to="/" style={{ textDecoration: 'none', fontSize: '1.6rem', color: '#333' }}>Home</Link></li>
          <li style={{ marginRight: '20px' }}><Link to="/about" style={{ textDecoration: 'none', fontSize: '1.6rem', color: '#333' }}>About</Link></li>
          <li style={{ marginRight: '20px' }}><Link to="/destinations" style={{ textDecoration: 'none', fontSize: '1.6rem', color: '#333' }}>Destinations</Link></li>
          <li style={{ marginRight: '20px' }}><Link to="/hotels" style={{ textDecoration: 'none', fontSize: '1.6rem', color: '#333' }}>Hotels</Link></li>
          <li style={{ marginRight: '20px' }}><Link to="/activities" style={{ textDecoration: 'none', fontSize: '1.6rem', color: '#333' }}>Activities</Link></li>
          <li><Link to="/contact" style={{ textDecoration: 'none', fontSize: '1.6rem', color: '#333' }}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
