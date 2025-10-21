import React, { useState, useEffect } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Sir Balaji Groups?",
          answer: "Sir Balaji Groups (formerly Sri Balaji Estates) is a trusted real estate developer established in 2013 by Mr. Ravi Vathsavaai. We specialize in DTCP approved open plots, villas, apartments, and resorts across Telangana. We are ISO 9001:2015 certified and have successfully served 500+ happy families."
        },
        {
          question: "Where are your projects located?",
          answer: "We have projects in multiple locations across Telangana including Raghunadhapalem, Koyachalaka, Kodada, Suryapet, and Miryalaguda. Our upcoming ventures are in Mahabubabad, Thorrur, and Hyderabad. Most of our plots are strategically located near Khammam with excellent connectivity."
        },
        {
          question: "Are your projects legally approved?",
          answer: "Yes, absolutely! All our open plot ventures come with proper DTCP (Directorate of Town and Country Planning) approvals. We maintain complete transparency and provide clear titles for all our properties. We are also ISO 9001:2015 certified, ensuring quality standards in all our processes."
        }
      ]
    },
    {
      category: "Open Plots",
      questions: [
        {
          question: "What are the benefits of buying open plots?",
          answer: "Open plots offer excellent investment opportunities with high appreciation potential. Our DTCP approved plots come with clear titles, excellent infrastructure including roads, electricity, and water supply. They provide flexibility to build your dream home as per your design and requirements. Properties in our locations have shown consistent value appreciation over the years."
        },
        {
          question: "What is the minimum plot size available?",
          answer: "We offer various plot sizes to suit different requirements and budgets. Plot sizes typically range from 150 sq yards to 500+ sq yards. Specific sizes vary by project and location. Please contact our sales team for detailed information about available plot sizes in your preferred location."
        },
        {
          question: "Do you provide EMI options?",
          answer: "Yes, we offer flexible payment plans to make your investment easier. We have attractive EMI options with minimal documentation. Our team will guide you through the payment process and help you choose a plan that suits your financial situation. Bank loan facilities are also available for eligible buyers."
        },
        {
          question: "What documents will I receive after purchase?",
          answer: "Upon purchase completion, you will receive: Sale Agreement/Registration documents, DTCP approval copy, Encumbrance Certificate, Patta/Title documents, Property Tax receipts, and Layout plan. We ensure complete documentation transparency and assist you throughout the registration process."
        }
      ]
    },
    {
      category: "Gated Communities & Villas",
      questions: [
        {
          question: "What amenities are provided in gated communities?",
          answer: "Our gated communities feature world-class amenities including 24/7 security with CCTV surveillance, clubhouse, children's play area, landscaped gardens, jogging track, indoor games room, swimming pool (select projects), community hall, power backup, and proper drainage system. Specific amenities vary by project."
        },
        {
          question: "Are the villas ready to move in?",
          answer: "We offer both under-construction and ready-to-move villa options depending on the project. Our villas are built with high-quality materials and modern designs. Construction timelines are clearly communicated, and we ensure timely delivery. Please check with our sales team for the current status of specific villa projects."
        },
        {
          question: "Can I customize my villa design?",
          answer: "Yes, customization options are available for villa projects during the early stages of construction. Our architects and designers will work with you to incorporate your preferences while maintaining structural integrity and project standards. Customization options and charges vary by project phase and requirements."
        }
      ]
    },
    {
      category: "Investment & Returns",
      questions: [
        {
          question: "What kind of returns can I expect?",
          answer: "Our properties have shown consistent appreciation of 15-25% annually in most locations. Returns depend on factors like location, infrastructure development, and market conditions. Properties near Khammam and in developing areas have shown excellent growth potential. We focus on locations with high future development prospects to ensure good returns for investors."
        },
        {
          question: "Is it safe to invest in real estate now?",
          answer: "Real estate, especially in developing areas of Telangana, continues to be one of the safest investment options. With government initiatives, infrastructure development, and urbanization, property values are expected to appreciate steadily. Our DTCP approved plots with clear titles provide secure investment opportunities with tangible assets."
        },
        {
          question: "Can I resell the property later?",
          answer: "Yes, absolutely! All our properties come with clear titles and proper documentation, making resale smooth and hassle-free. We maintain transparency in all transactions. Many of our investors have successfully resold their properties at appreciated values. We can also assist you with resale processes if needed."
        }
      ]
    },
    {
      category: "Purchase Process",
      questions: [
        {
          question: "How do I book a plot or property?",
          answer: "Booking is simple: 1) Visit our office or contact our sales team, 2) Choose your preferred plot/property, 3) Pay the booking amount, 4) Submit required documents (ID proof, address proof, PAN card), 5) Sign the booking agreement. Our team will guide you through each step and answer all your queries."
        },
        {
          question: "What is the booking amount required?",
          answer: "Booking amounts vary by project and property type, typically ranging from 10-20% of the total property value. The exact amount and payment schedule will be communicated by our sales team. We offer flexible payment plans to make the process convenient for you."
        },
        {
          question: "How long does the registration process take?",
          answer: "Once full payment is made and all documents are submitted, the registration process typically takes 30-45 days. This includes document verification, registration with sub-registrar office, and handover of registered documents. We assist you throughout the entire process to ensure smooth and timely completion."
        },
        {
          question: "What documents do I need to provide?",
          answer: "Required documents include: PAN Card (mandatory), Aadhaar Card or any government photo ID, Address proof (electricity bill/passport/voter ID), Passport size photographs (4-6 copies), and Bank account details. For additional owners, their documents are also required. Our team will guide you on specific requirements."
        }
      ]
    },
    {
      category: "Support & Services",
      questions: [
        {
          question: "Do you provide site visit facilities?",
          answer: "Yes, we arrange free site visits for interested buyers. Our team will pick you up from a convenient location and show you the property, surrounding areas, and infrastructure. You can schedule a site visit by contacting our office. Group site visits are also organized regularly on weekends."
        },
        {
          question: "Is there any maintenance required for plots?",
          answer: "For open plots, minimal maintenance is required until construction. We maintain common areas and roads in all our layouts. For gated communities and villa projects, monthly maintenance charges apply for upkeep of amenities and common areas. Specific maintenance details are provided during the purchase process."
        },
        {
          question: "What if I face any issues after purchase?",
          answer: "Customer satisfaction is our priority. We have a dedicated customer support team to address any concerns post-purchase. You can reach us via phone, email, or by visiting our office. We are committed to resolving all issues promptly and maintaining long-term relationships with our customers."
        },
        {
          question: "Can I get help with property loans?",
          answer: "Yes, we have tie-ups with leading banks and financial institutions. Our team can assist you in: Understanding loan eligibility, Preparing required documents, Connecting with bank representatives, and Processing loan applications. We guide you through the entire loan approval process to make it hassle-free."
        }
      ]
    }
  ];

  return (
    <div className="faqs-page">
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
              <a href="/faqs" className="nav-link active">FAQs</a>
              <a href="/projects" className="nav-link">Projects</a>
              <a href="/contact" className="nav-link">Contact Us</a>
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
            <a href="/faqs" className="mobile-nav-link active">FAQs</a>
            <a href="/projects" className="mobile-nav-link">Projects</a>
            <a href="/contact" className="mobile-nav-link">Contact Us</a>
            <button className="mobile-login">Admin Login</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="faqs-hero">
        <div className="faqs-hero-overlay"></div>
        <div className="faqs-hero-content">
          <h1 className="faqs-hero-title">Frequently Asked Questions</h1>
          <p className="faqs-hero-subtitle">Find answers to common questions about our properties and services</p>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="faqs-content">
        <div className="container">
          <div className="faqs-intro">
            <h2 className="intro-title">Have Questions?</h2>
            <p className="intro-text">
              We've compiled answers to the most common questions about Sir Balaji Groups, our projects, and the buying process. 
              If you don't find what you're looking for, feel free to <a href="/contact" className="contact-link">contact us</a>.
            </p>
          </div>

          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h3 className="category-title">
                <span className="category-icon">📋</span>
                {category.category}
              </h3>
              <div className="faq-list">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = `${categoryIndex}-${faqIndex}`;
                  const isActive = activeIndex === globalIndex;
                  
                  return (
                    <div key={faqIndex} className={`faq-item ${isActive ? 'active' : ''}`}>
                      <button 
                        className="faq-question"
                        onClick={() => toggleFAQ(globalIndex)}
                      >
                        <span className="question-text">{faq.question}</span>
                        <span className="faq-icon">{isActive ? '−' : '+'}</span>
                      </button>
                      <div className={`faq-answer ${isActive ? 'show' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="faqs-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Still Have Questions?</h2>
            <p className="cta-text">
              Our team is here to help! Contact us for personalized assistance with your queries.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Contact Us</a>
              <a href="tel:+911234567890" className="cta-button secondary">📞 Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;