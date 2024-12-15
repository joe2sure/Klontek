import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Service.css';
import TextHeader from '../../../components/TextHeader/TextHeader';

export default function Service({ data }) {
  return (
    <div className="service-container">
      <div className="service-wrapper">

        <Fade direction="right" triggerOnce>
            <TextHeader 
              subtitle='Our Service' 
              title='We are ready to scale up your business with our great service.'
            />
          </Fade>

        <div className="service-grid">
          {data.map((item, index) => (
            <Fade direction={item.animation} delay={500 * index} key={index}>
              <div className="service-card-wrapper">
                <div className="service-card">
                  <img src={item.imageUrl} alt="Service" className="service-image" />
                  <h2 className="service-card-title">{item.title}</h2>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}