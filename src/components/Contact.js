// src/components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      alert(response.data.message); // Alert success message
    } catch (error) {
      alert('Error submitting contact form');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="contact">
      <h3>Contact Us</h3>
      <form className="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          style={{ padding: '10px', margin: '10px 0', width: '70%', fontSize: '1.4rem' }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          style={{ padding: '10px', margin: '10px 0', width: '70%', fontSize: '1.4rem' }}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          style={{ padding: '10px', margin: '10px 0', width: '70%', fontSize: '1.4rem', height: '150px' }}
        ></textarea>
        
        <button type="submit" style={{ padding: '12px 30px', backgroundColor: '#ff7f50', borderRadius: '50px', fontSize: '1.6rem', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
