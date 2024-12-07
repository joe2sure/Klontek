import React, { useState, useEffect } from "react";
import "./Hero.css";
import TextHeader from '../../../components/TextHeader/TextHeader.jsx';
import "animate.css/animate.min.css";
import TrackVisibility from "react-on-screen";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150); // Faster typing speed
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Best Software Development Expertise",
    "Your Bridge to AI and Technological Excellence",
    "Building Solutions That Transform Lives",
    "Innovating Tomorrow, Empowering Today"
  ];

  const period = 700; // Small delay before deleting

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
      setDelta(75); // Faster deleting speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Delay before starting deletion
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // Reset typing speed
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <TextHeader subtitle="WELCOME TO Klontek !!" />
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
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;



// import React, { useState, useEffect } from "react";
// import "./Hero.css";
// import TextHeader from '../../../components/TextHeader/TextHeader.jsx';
// import "animate.css/animate.min.css";
// import TrackVisibility from "react-on-screen";

// const Hero = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState("");
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = [
//     "Best Software Development Expertise",
//     "Your Bridge to AI and Technological Excellence",
//     "Building Solutions That Transform Lives",
//     "Innovating Tomorrow, Empowering Today"
//   ];

//   const period = 500;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => {
//       clearInterval(ticker);
//     };
//   }, [text]);

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting
//       ? fullText.substring(0, text.length - 1)
//       : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta((prevDelta) => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex((prevIndex) => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === "") {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <div className='row'>
//             <TextHeader subtitle='WELCOME TO Klontek !!' />
//             <h1>
//             <span
//                       className="txt-rotate"
//                       data-rotate='[ "Innovating Tomorrow, Empowering Today", "Best Software Development Expertise", "Building Solutions That Transform Lives", ]'
//                       dataperiod="1000"
//                     >
//                       <span className="wrap">{text}</span>
//                     </span>
//             </h1>

//             <div className='button'>
//               <button className='primary-btn'>
//                 EXPLORE NOW!! <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//               <button>
//                 CONNECT WITH US <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className='margin'></div>
//     </>
//   )
// }

// export default Hero;