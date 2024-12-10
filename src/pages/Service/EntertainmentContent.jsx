import React from "react";
import entertainment from "../../assets/images/service/entertainment-bg.png";
import { Fade } from "react-awesome-reveal";

const EntertainmentContent = () => {
  return (
    <Fade direction="up" delay={300}>
      <section id="Entertainment-content" className="services-section service-page-light-bg">
        <div className="service-page-container">
          <div className="service-page-row service-page-reverse-row">
            <div className="service-page-col-content">
              <div className="service-page-icon">
                <i className="bi bi-collection-play service-icon-green"></i>
              </div>
              <h4>Entertainment Content</h4>
              <p>Our Entertainment content can keep the consumer engaged for hours if that's what one is interested in.</p>
              <p>We have an impressive array of <span className="highlight">Content on Movies, Fashion, on Demand Videos</span> and many more...</p>
              <p>So every time a consumer needs enthralling content, ours is the way to go.</p>
            </div>
            <div className="service-page-col-img">
              <img src={entertainment} alt="Entertainment Content" className="service-page-img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default EntertainmentContent;
