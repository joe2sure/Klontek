import React, { useState, useEffect } from "react";
import "./Hero.css";
import TextHeader from '../../../components/TextHeader/TextHeader.jsx';
import "animate.css/animate.min.css";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Best Software Development Expertise",
    "Your Bridge to AI and Technological Excellence",
    "Building Solutions That Transform Lives",
    "Innovating Tomorrow, Empowering Today"
  ];

  const period = 900;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(75);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <TextHeader subtitle="WELCOME TO Klontek !!" />
            <div className="text-container">
              <h1>
                <span
                  className="txt-rotate"
                  data-rotate='[
                    "Innovating Tomorrow, Empowering Today", 
                    "Best Software Development Expertise", 
                    "Building Solutions That Transform Lives"
                  ]'
                  dataperiod="1000"
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
            </div>

            <div className="button-container">
              <div className="button dynamic-button">
                <button className="primary-btn">
                  EXPLORE NOW!! <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button>
                  CONNECT WITH US <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;