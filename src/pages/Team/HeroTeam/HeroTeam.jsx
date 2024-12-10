import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './HeroTeam.css';

export default function HeroTeam() {
  return (
    <section className="hero-team">
      <div className="hero-team-text">
        <Fade direction="up" triggerOnce>
          <h1 className="hero-team-title">Our Team</h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className="hero-team-description">
            Our team is full of passionate people and ready to make your dream software come true.
          </p>
        </Fade>
      </div>
    </section>
  );
}
