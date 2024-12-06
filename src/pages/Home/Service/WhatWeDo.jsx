import React from "react";
import { Fade } from "react-awesome-reveal";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      icon: "📖",
      title: "Educational Content",
      description:
        "Education is the key to unlocking the golden door of freedom. Educational content is crucial as it is an investment in human capital that yields tremendous benefits to personal, social, and economic development...",
      buttonText: "READ MORE",
    },
    {
      id: 2,
      icon: "📺",
      title: "Entertainment Content",
      description:
        "Our Entertainment content can keep the consumer engaged for hours if that’s what one is interested in. We have an impressive array of content on movies, fashion, on-demand videos, and many more...",
      buttonText: "READ MORE",
    },
    {
      id: 3,
      icon: "🎮",
      title: "Games",
      description:
        "Get access to a bunch of games ranging from action, adventure, arcade, board, cards, casino... If you're looking for fun, our games offer endless entertainment...",
      buttonText: "READ MORE",
    },
    // {
    //   id: 4,
    //   icon: "⚽",
    //   title: "Sports",
    //   description:
    //     "Learning a sport is fun and challenging... Sports like football, cricket, tennis, and volleyball include videos, tutorials, and tips to learn the game effectively.",
    //   buttonText: "READ MORE",
    // },
  ];

  return (
    <div className="what-we-do">
      {/* Header Animation */}
      <Fade direction="right" triggerOnce>
        <h2>What we do?</h2>
      </Fade>

      <Fade direction="left" triggerOnce>
        <p>
          We are a global leader in telecom VAS, offering services across
          educational content, entertainment content, games, and sports.
        </p>
      </Fade>

      {/* Cards Animation */}
      <div className="service-grid">
        {services.map((service, index) => (
          <Fade
            key={service.id}
            direction={index % 2 === 0 ? "left" : "right"} // Alternate directions
            delay={200 * index} // Add delay for staggered effect
            triggerOnce
          >
            <div className="service-card">
              <div className="icon">{service.icon}</div>
              <div className="content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <button>{service.buttonText}</button>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;