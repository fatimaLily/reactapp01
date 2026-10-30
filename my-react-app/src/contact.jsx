import React from 'react';
import contactImage from './assets/contact-img.jpeg'; // Import your image here
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to collaborate? Reach out to us and let’s build something amazing together.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-image-container">
          <img src={contactImage} alt="Contact Us" className="section-img" />
        </div>
      </div>
    </section>
  );
};

export default Contact;