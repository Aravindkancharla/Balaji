import React, { useState, useEffect } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', null

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Replace with actual API call to Spring Boot backend
    console.log('Form submitted:', formData);
    
    // Simulate API call
    try {
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-icon"><img src="Balaji logo.png" alt="Balaji logo" /></span>
              <span className="logo-text">Sir Balaji Groups</span>
            </div>
            <div className="nav-links">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About Us</a>
              <a href="/faqs" className="nav-link">FAQs</a>
              <a href="/projects" className="nav-link">Projects</a>
              <a href="/contact" className="nav-link active">Contact Us</a>
            </div>
            <div className="nav-buttons">
              <button className="btn-login">Admin Login</button>
            </div>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="/" className="mobile-nav-link">Home</a>
            <a href="/about" className="mobile-nav-link">About Us</a>
            <a href="/faqs" className="mobile-nav-link">FAQs</a>
            <a href="/projects" className="mobile-nav-link">Projects</a>
            <a href="/contact" className="mobile-nav-link active">Contact Us</a>
            <button className="mobile-login">Admin Login</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">We'd love to hear from you. Let's discuss your dream property!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-subtitle">
                Reach out to us through any of the following channels. Our team is ready to assist you!
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <h3 className="info-card-title">Visit Us</h3>
                  <p className="info-card-text">
                    Main Office<br />
                    Khammam, Telangana<br />
                    India - 507002
                  </p>
                </div>

                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <h3 className="info-card-title">Call Us</h3>
                  <p className="info-card-text">
                    <a href="tel:+911234567890">+91 1234 567 890</a><br />
                    <a href="tel:+919876543210">+91 9876 543 210</a><br />
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>

                <div className="info-card">
                  <div className="info-icon">📧</div>
                  <h3 className="info-card-title">Email Us</h3>
                  <p className="info-card-text">
                    <a href="mailto:info@balajiestates.com">info@balajiestates.com</a><br />
                    <a href="mailto:sales@balajiestates.com">sales@balajiestates.com</a><br />
                    We'll respond within 24 hours
                  </p>
                </div>

                <div className="info-card">
                  <div className="info-icon">⏰</div>
                  <h3 className="info-card-title">Working Hours</h3>
                  <p className="info-card-text">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h3 className="social-title">Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon facebook">
                    <span>f</span>
                  </a>
                  <a href="#" className="social-icon instagram">
                    <span>📷</span>
                  </a>
                  <a href="#" className="social-icon linkedin">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-icon twitter">
                    <span>✕</span>
                  </a>
                  <a href="#" className="social-icon youtube">
                    <span>▶</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2 className="form-title">Send Us a Message</h2>
                <p className="form-subtitle">Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              {formStatus === 'success' && (
                <div className="form-message success">
                  <span className="message-icon">✓</span>
                  <span>Thank you! Your message has been sent successfully. We'll contact you soon.</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-message error">
                  <span className="message-icon">✕</span>
                  <span>Oops! Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="plots">Open Plots</option>
                    <option value="villas">Villas & Apartments</option>
                    <option value="sitevisit">Request Site Visit</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your requirements..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit">
                  <span>Send Message</span>
                  <span className="submit-icon">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="map-title">Find Us on Map</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p className="map-text">Google Maps Integration</p>
              <p className="map-subtext">Main Office - Khammam, Telangana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="quick-contact">
        <div className="container">
          <div className="quick-contact-content">
            <div className="quick-contact-text">
              <h2 className="quick-title">Need Immediate Assistance?</h2>
              <p className="quick-subtitle">Our team is available to answer your questions</p>
            </div>
            <div className="quick-buttons">
              <a href="tel:+911234567890" className="quick-btn primary">
                <span className="btn-icon">📞</span>
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/911234567890" className="quick-btn secondary" target="_blank" rel="noopener noreferrer">
                <span className="btn-icon">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;