import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../../../components/elements/Button.js';
import './Discuss.css';

export default function Discuss() {
  return (
    <Fade direction="up">
      <section className="discuss-section">
        <div className="discuss-container">
          <div className="discuss-header">
            <h1>
              Have an awesome project in mind?
            </h1>
            <Fade direction="up" delay={500}>
              <Button 
                href="/discuss-project" 
                type="link" 
                className="discuss-button"
              >
                Let's Discuss!
              </Button>
            </Fade>
          </div>
          <Fade delay={300} >
            <p className="discuss-text">
              Let's discuss it and make your dream software come true!
            </p>
          </Fade>
        </div>
      </section>
    </Fade>
  );
}
