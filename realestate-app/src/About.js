import React, { useState, useEffect } from 'react';
import './About.css';

const AboutUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <span className="logo-icon"><img src="Balaji logo.png" alt="Balaji logo" /></span>
              <span className="logo-text">Sir Balaji Groups</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="nav-links">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link active">About Us</a>
              <a href="/faqs" className="nav-link">FAQs</a>
              <a href="/projects" className="nav-link">Projects</a>
              <a href="/contact" className="nav-link">Contact Us</a>
            </div>

            {/* Desktop Login Button */}
            <div className="nav-buttons">
              <button className="btn-login">Admin Login</button>
            </div>

            {/* Mobile menu button */}
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="/" className="mobile-nav-link">Home</a>
            <a href="/about" className="mobile-nav-link active">About Us</a>
            <a href="/faqs" className="mobile-nav-link">FAQs</a>
            <a href="/projects" className="mobile-nav-link">Projects</a>
            <a href="/contact" className="mobile-nav-link">Contact Us</a>
            <button className="mobile-login">Admin Login</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Sir Balaji Groups</h1>
          <p className="about-hero-subtitle">Building Trust, Delivering Dreams Since 2013</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-paragraph">
                Sri Balaji Estates was established by <strong>Mr. Ravi Vathsavaai</strong> in 2013 with a vision to transform the real estate landscape in Telangana. What started as a modest venture with 12 acres and 10 dedicated employees has now grown into a thriving organization with over 1000+ team members.
              </p>
              <p className="story-paragraph">
                In 2017, we achieved a significant milestone by receiving <strong>ISO 9001:2015 certification</strong>, reflecting our commitment to quality and standardized processes. This certification stands as a testament to our dedication to excellence in every project we undertake.
              </p>
              <p className="story-paragraph">
                We are proud to announce our evolution into <strong>Sri Balaji Groups</strong>, expanding our portfolio to include DTCP approved open plots, luxurious villas, modern apartments, and serene resorts, alongside our existing plantation plots.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🏢</span>
                <p>Company Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-text">
                To provide premium real estate solutions that exceed customer expectations while maintaining the highest standards of quality, transparency, and integrity. We strive to create lasting value for our investors and contribute to the growth of our communities.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">👁️</div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-text">
                To be recognized as the most trusted and preferred real estate developer in Telangana, known for our customer-centric approach, innovative projects, and commitment to sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Presence */}
      <section className="our-presence">
        <div className="container">
          <h2 className="section-title center">Our Presence</h2>
          <p className="section-subtitle center">Strategically located projects across Telangana</p>
          
          <div className="presence-grid">
            <div className="presence-card">
              <div className="presence-icon">📍</div>
              <h3 className="presence-title">Raghunadhapalem</h3>
              <p className="presence-text">
                Located just 9.2 kms from the proposed new Khammam bus station (N.S.T Camp, Bypass)
              </p>
            </div>
            <div className="presence-card">
              <div className="presence-icon">📍</div>
              <h3 className="presence-title">Koyachalaka</h3>
              <p className="presence-text">
                Prime location with excellent connectivity and infrastructure development
              </p>
            </div>
            <div className="presence-card">
              <div className="presence-icon">📍</div>
              <h3 className="presence-title">Kodada</h3>
              <p className="presence-text">
                Emerging real estate hub with high growth potential
              </p>
            </div>
            <div className="presence-card">
              <div className="presence-icon">📍</div>
              <h3 className="presence-title">Suryapet</h3>
              <p className="presence-text">
                Mega venture in one of Telangana's fastest growing districts
              </p>
            </div>
            <div className="presence-card">
              <div className="presence-icon">📍</div>
              <h3 className="presence-title">Miryalaguda</h3>
              <p className="presence-text">
                Strategic location with excellent commercial prospects
              </p>
            </div>
            <div className="presence-card upcoming">
              <div className="presence-icon">🚀</div>
              <h3 className="presence-title">Upcoming Projects</h3>
              <p className="presence-text">
                Mahabubabad • Thorrur • Hyderabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title center white">Why Choose Sir Balaji Groups?</h2>
          <p className="section-subtitle center white-text">
            Transforming the real estate industry with trust and transparency
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3 className="feature-title">DTCP Approved</h3>
              <p className="feature-text">All our open plots come with proper DTCP approvals and clear titles</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">ISO Certified</h3>
              <p className="feature-text">ISO 9001:2015 certified company ensuring quality standards</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3 className="feature-title">High Returns</h3>
              <p className="feature-text">Secure investment with high returns and appreciation potential</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">Trust & Transparency</h3>
              <p className="feature-text">Building positive reputation by maintaining complete transparency</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">1000+ Team</h3>
              <p className="feature-text">Strong workforce dedicated to delivering excellent service</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3 className="feature-title">Timely Service</h3>
              <p className="feature-text">We value our clients by providing services required in time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="timeline">
        <div className="container">
          <h2 className="section-title center">Our Journey</h2>
          <p className="section-subtitle center">Milestones that shaped our success</p>
          
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Foundation</h3>
                <p className="timeline-text">
                  Sri Balaji Estates established by Mr. Ravi Vathsavaai. Started with 12 acres and 10 employees
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3 className="timeline-title">ISO Certification</h3>
                <p className="timeline-text">
                  Achieved ISO 9001:2015 certification, marking our commitment to quality
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Expansion</h3>
                <p className="timeline-text">
                  Expanded to multiple locations including Kodada, Suryapet, and Miryalaguda
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Sri Balaji Groups</h3>
                <p className="timeline-text">
                  Evolved into Sri Balaji Groups with 1000+ team members and diversified portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2 className="section-title center">Our Core Values</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3 className="value-title">Integrity</h3>
              <p className="value-text">
                We maintain the highest ethical standards in all our business dealings
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3 className="value-title">Customer Focus</h3>
              <p className="value-text">
                Our clients are at the heart of everything we do
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3 className="value-title">Quality</h3>
              <p className="value-text">
                We never compromise on quality in our projects and services
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-text">
                Continuously improving and adopting new technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Invest in Your Dream Property?</h2>
            <p className="cta-text">
              Join 500+ happy families who trusted Sir Balaji Groups for their real estate needs
            </p>
            <button className="cta-button">Explore Our Projects →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;