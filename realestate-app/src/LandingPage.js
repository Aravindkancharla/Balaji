import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder images - Admin will be able to upload/manage these
  const heroImages = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <span className="logo-icon"><img src="Balaji logo.png" alt="Balaji logo" /></span>
              <span className="logo-text">Sir Balaji Groups</span>
            </div>

            {/* Desktop Login/Signup */}
            <div className="nav-links">
              <a href="/home" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About Us</a>
              <a href="/faqs" className="nav-link">FAQs</a>
              <a href="/projects" className="nav-link">Projects</a>
              <a href="/contact" className="nav-link">ContactUs</a>
            </div>
            <div className="nav-buttons">
              <button className="btn-login">Admin Login</button>
            </div>

            {/* Mobile menu button */}
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
  <div className="mobile-menu">
    <a href="/home" className="nav-link">Home</a>
    <a href="/about" className="nav-link">About Us</a>
    <a href="/faqs" className="nav-link">FAQs</a>
    <a href="/projects" className="nav-link">Projects</a>
    <a href="/contact" className="nav-link">Contact Us</a>
    <button className="mobile-login">Admin Login</button>
  </div>
)}

      </nav>

      {/* Hero Section with Image Carousel */}
      <section className="hero">
        {/* Image Carousel */}
        <div className="hero-carousel">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Building Dreams Into Reality</h1>
          <p className="hero-subtitle">Premium Open Plots & Gated Community Constructions</p>
          <div className="hero-buttons">
            <button className="btn-primary">
              <span>Explore Projects</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>



      {/* Our Projects Preview */}
      <section className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">Discover premium open plots and gated communities</p>
          </div>

          <div className="projects-grid">
            {/* Open Plots Card */}
            <div className="project-card">
              <div className="project-card-image green">
                <span className="project-icon">📍</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Open Plots</h3>
                <p className="project-card-text">
                  Premium residential plots with clear titles, excellent infrastructure, and great investment potential.
                </p>
                <div className="project-card-link">
                  <span>View Projects</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>

            {/* Constructions Card */}
            <div className="project-card">
              <div className="project-card-image orange">
                <span className="project-icon">🏢</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Gated Communities</h3>
                <p className="project-card-text">
                  Luxurious gated community constructions with world-class amenities and security.
                </p>
                <div className="project-card-link">
                  <span>View Projects</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      

      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <span className="logo-icon"><img src="Balaji logo.png" alt="Balaji logo" /></span>
                <span className="logo-text">Sir Balaji Estates</span>
              </div>
              <p className="footer-text">
                Building dreams into reality with premium real estate solutions.
              </p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li>Our Projects</li>
                <li>About Us</li>
                <li>Achievements</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact">
                <li>📧 info@primeproperties.com</li>
                <li>📞 +91 1234567890</li>
                <li>📍 Khammam , Telangana</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Follow Us</h4>
              <div className="social-icons">
                <div className="social-icon">f</div>
                <div className="social-icon">in</div>
                <div className="social-icon">✕</div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Prime Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;