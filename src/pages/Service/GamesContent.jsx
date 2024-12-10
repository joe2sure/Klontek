import React from "react";
import games from "../../assets/images/service/games-bg.png";
import { Fade } from "react-awesome-reveal";

const GamesContent = () => {
  return (
    <Fade direction="up" delay={300}>
      <section id="Games" className="services-section">
        <div className="service-page-container">
          <div className="service-page-row">
            <div className="service-page-col-img">
              <img src={games} alt="Games" className="service-page-img-fluid" />
            </div>
            <div className="service-page-col-content">
              <div className="service-page-icon">
                <i className="bi bi-controller"></i>
              </div>
              <h4>Games</h4>
              <p>Get access to a bunch of games ranging from Action, Adventure, Arcade, Board, Cards, Casino, Casual, Educational, Music, Puzzle, Racing, Role Playing, Simulation, Sports, Strategy, Trivia, Word and more...</p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default GamesContent;