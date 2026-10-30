import React from 'react';
import Header from './header';
import About from './about';
import Services from './services';
import Contact from './contact';
import Footer from './footer'; // 1. Import Footer here
import heroImage from './assets/hero-img.jpeg'; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        {/* Home/Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Welcome to NexaReach</h1>
            <p>Accelerate your reach and expand your digital performance effortlessly.</p>
            <a href="#services" className="hero-btn">Explore Services</a>
          </div>
          <div className="hero-image-container">
            <img src={heroImage} alt="NexaReach Hero" className="section-img" />
          </div>
        </section>

        <About />
        <Services />
        <Contact />
      </main>

      {/* 2. Add Footer here at the bottom */}
      <Footer /> 
    </div>
  );
}

export default App;