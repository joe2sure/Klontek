import React from "react";
import sports from "../../assets/images/service/sports-bg.png";
import { Fade } from "react-awesome-reveal";

const SportsContent = () => {
  return (
    <Fade direction="up" delay={300}>
      <section id="Sports" className="services-section light-bg">
        <div className="service-page-container">
          <div className="service-page-row service-page-reverse-row">
            <div className="service-page-col-content">
              <div className="service-page-icon">
                <i className="bi bi-universal-access-circle"></i>
              </div>
              <h4>Sports</h4>
              <p>Learning a sport is fun and challenging... sports like football, cricket, Tennis, Badminton, Rugby, volleyball and many more as such has tutoring videos talks about the history of the game, rules, knack to learn, skills to develop, details about the sport... so why to wait, let's play the sport...</p>
            </div>
            <div className="service-page-col-img">
              <img src={sports} alt="Sports" className="service-page-img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default SportsContent;