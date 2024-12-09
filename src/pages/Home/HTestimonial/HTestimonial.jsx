import React, { useState, useEffect } from 'react';
import './HTestimonial.css';
import homeTestimonialImg from '../../../assets/images/home-test-img.png';

const HomeTestimonialSection = ({ testimonials }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Only set up interval if testimonials exist and have length
    if (testimonials && testimonials.length > 0) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials]); // Add testimonials to dependency array

  // Safety check in case testimonials is undefined or empty
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // Get the current active testimonial, with a fallback
  const currentTestimonial = testimonials[activeSlide] || {};

  return (
    <section className="home-testimonial-section">
      <div className="home-testimonial-container">
        <div className="home-testimonial-left">
          <div className="home-testimonial-worker">
            <img 
              src={homeTestimonialImg} 
              alt="home Site" 
              className="home-testimonial-main-image"
            />
          </div>
        </div>

        <div className="home-testimonial-right">
          <div className="home-testimonial-header">
            <span className="home-testimonial-client-says">CLIENT SAYS</span>
            <h2 className="home-testimonial-happy-customers">Happy Customers</h2>
          </div>

          <div className="home-testimonial-rating">
            {[...Array(currentTestimonial.rating || 0)].map((_, index) => (
              <span key={index} className="star">★</span>
            ))}
          </div>

          <div className="home-testimonial-content">
            <p className="home-testimonial-text">
              {currentTestimonial.text || ''}
            </p>

            <div className="home-testimonial-footer">
              <div className="home-testimonial-author-info">
                <img 
                  src={currentTestimonial.avatar || ''} 
                  alt={currentTestimonial.author || ''} 
                  className="home-author-avatar"
                />
                <div className="home-testimonial-author-details">
                  <h4>{currentTestimonial.author || ''}</h4>
                  <p>{currentTestimonial.role || ''}</p>
                </div>
              </div>
            </div>
          </div>

          <p className="home-testimonial-additional-text">
            {currentTestimonial.additionalText || ''}
          </p>
        </div>

        <div className="home-testimonial-navigation-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`home-testimonial-dot ${activeSlide === index ? 'home-testimonial-active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialSection;