import React from 'react';
import servicesImage from './assets/services-img.jpeg'; // Import your image here
import './services.css';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-image-container">
          <img src={servicesImage} alt="Our Services" className="section-img" />
        </div>
        <div className="services-content">
          <h2>Our Services</h2>
          <p className="services-subtitle">Everything you need to scale your digital footprint.</p>
          <div className="services-list">
            <div className="service-item">
              <h3>🌐 Web Development</h3>
              <p>Custom, responsive, and high-performance websites built using modern React architecture.</p>
            </div>
            <div className="service-item">
              <h3>📈 Digital Marketing</h3>
              <p>Targeted campaigns designed to maximize user acquisition and brand engagement.</p>
            </div>
            <div className="service-item">
              <h3>⚡ Brand Optimization</h3>
              <p>Speed enhancement, SEO tuning, and asset restructuring for optimal performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;