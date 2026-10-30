import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Nexa<span>Reach</span></h2>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="cta-btn">Get Started</a>
      </div>
    </header>
  );
};

export default Header;