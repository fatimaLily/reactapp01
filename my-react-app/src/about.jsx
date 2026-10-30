import React from 'react';
import aboutImage from './assets/about-img.jpeg'; // Import your image here
import './about.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text-content">
          <h2>About NexaReach</h2>
          <p className="about-subtitle">
            Empowering modern businesses with high-impact digital solutions and strategic marketing reach.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>To deliver scalable, transparent, and data-driven solutions that connect businesses with their ideal audience.</p>
            </div>
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>Becoming the trusted platform for brand visibility, growth automation, and enterprise strategy.</p>
            </div>
          </div>
        </div>
        <div className="about-image-container">
          <img src={aboutImage} alt="About NexaReach" className="section-img" />
        </div>
      </div>
    </section>
  );
};

export default About;