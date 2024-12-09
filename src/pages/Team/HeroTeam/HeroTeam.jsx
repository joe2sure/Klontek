import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Team from '../../../assets/images/hero/team.png';
import './HeroTeam.css';

export default function HeroTeam() {
  return (
    <section className="hero">
      <div className="hero-text">
        <Fade direction="up" triggerOnce>
          <h1 className="hero-title">Our Team</h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className="hero-description">
            Our team is full of passionate people and ready to make your dream software come true.
          </p>
        </Fade>
      </div>
      <div className="hero-image">
        <Fade direction="top-right" triggerOnce delay={300}>
          <img src={Team} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
