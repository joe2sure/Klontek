import React from 'react';
import Fade from 'react-awesome-reveal';
import './WhyChooseUs.css';

export default function WhyChooseUs({ data }) {
  return (
    <div className="advantage-section">
      <div className="advantage-container">
        <Fade bottom triggerOnce>
          <h1 className="advantage-title">Why Choose Us</h1>

          <p className="advantage-subtitle">
            Why you should choose us to handle your project.
          </p>
        </Fade>

        <div className="advantage-content">
          <div className="advantage-column">
            {data[0].map((item, index) => (
              <Fade bottom triggerOnce delay={500 * index} key={index}>
                <div>
                  <div className="advantage-item">
                    <img src={item.imageUrl} alt="" className="advantage-image" />
                    <div className="advantage-text">
                      <h2 className="advantage-item-title">{item.title}</h2>
                      <p className="advantage-item-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <div className="advantage-column offset">
            {data[1].map((item, index) => (
              <Fade bottom triggerOnce delay={500 * index} key={index}>
                <div>
                  <div className="advantage-item">
                    <img src={item.imageUrl} alt="" className="advantage-image" />
                    <div className="advantage-text">
                      <h2 className="advantage-item-title">{item.title}</h2>
                      <p className="advantage-item-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}