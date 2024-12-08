import React from 'react';
import Fade from 'react-awesome-reveal';
import './WhyChooseUs.css';
import TextHeader from '../../../components/TextHeader/TextHeader';

export default function WhyChooseUs({ data }) {
  return (
    <div className="advantage-section">
      <div className="advantage-container">

      <Fade direction="right">
        <TextHeader
          subtitle="Why Choose Us"
          title="Why you should choose us to handle your project"
        />
      </Fade>
        <div className="advantage-content">
          <div className="advantage-column">
            {data[0].map((item, index) => (
              <Fade bottom delay={500 * index} key={index}>
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
              <Fade bottom delay={500 * index} key={index}>
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