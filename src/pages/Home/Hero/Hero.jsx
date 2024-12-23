import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import TextHeader from '../../../components/TextHeader/TextHeader.jsx';
import "animate.css/animate.min.css";

const Hero = () => {
  const navigate = useNavigate();

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);

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
  }, [text, delta]);

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

  // Robust navigation method
  const handleNavigation = (path, event) => {
    // Prevent default behavior and stop propagation
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // Log navigation attempt for debugging
      console.log(`Attempting to navigate to: ${path}`);
      
      // Ensure navigation is triggered
      navigate(path, { replace: false });
    } catch (error) {
      console.error("Navigation Error:", error);
      
      // Fallback to standard navigation
      window.location.href = path;
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
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
            </div>

            <div className="button-container">
              <div className="button dynamic-button">
                <button 
                  type="button"
                  className="hero-button explore-btn"
                  onClick={(e) => handleNavigation('/projects', e)}
                >
                  EXPLORE NOW!! <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button 
                  type="button"
                  className="hero-button connect-btn"
                  onClick={(e) => handleNavigation('/contact', e)}
                >
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


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Hero.css";
// import TextHeader from '../../../components/TextHeader/TextHeader.jsx';
// import "animate.css/animate.min.css";

// const Hero = () => {
//   const navigate = useNavigate();
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState("");
//   const [delta, setDelta] = useState(150);
//   const [index, setIndex] = useState(1);
//   const [clickedButton, setClickedButton] = useState(null);

//   const toRotate = [
//     "Best Software Development Expertise",
//     "Your Bridge to AI and Technological Excellence",
//     "Building Solutions That Transform Lives",
//     "Innovating Tomorrow, Empowering Today"
//   ];

//   const period = 900;

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
//       setDelta(75);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setDelta(period);
//     } else if (isDeleting && updatedText === "") {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setDelta(150);
//     }
//   };

//   // Handler for navigating to the Project page
//   const handleExploreNow = () => {
//     setClickedButton('explore');
//     setTimeout(() => {
//       navigate('/projects');
//       setClickedButton(null);
//     }, 300);
//   };

//   // Handler for navigating to the Contact page
//   const handleConnectWithUs = () => {
//     setClickedButton('connect');
//     setTimeout(() => {
//       navigate('/contact');
//       setClickedButton(null);
//     }, 300);
//   };

//   return (
//     <>
//       <section className="hero">
//         <div className="container">
//           <div className="row">
//             <TextHeader subtitle="WELCOME TO Klontek !!" />
//             <div className="text-container">
//               <h1>
//                 <span
//                   className="txt-rotate"
//                   data-rotate='[
//                     "Innovating Tomorrow, Empowering Today", 
//                     "Best Software Development Expertise", 
//                     "Building Solutions That Transform Lives"
//                   ]'
//                   dataperiod="1000"
//                 >
//                   <span className="wrap">{text}</span>
//                 </span>
//               </h1>
//             </div>

//             <div className="button-container">
//               <div className="button dynamic-button">
//                 <button 
//                   className={`primary-btn ${clickedButton === 'explore' ? 'button-clicked' : ''}`}
//                   onClick={handleExploreNow}
//                 >
//                   EXPLORE NOW!! <i className="fa fa-long-arrow-alt-right"></i>
//                 </button>
//                 <button 
//                   className={`${clickedButton === 'connect' ? 'button-clicked' : ''}`}
//                   onClick={handleConnectWithUs}
//                 >
//                   CONNECT WITH US <i className="fa fa-long-arrow-alt-right"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="margin"></div>
//     </>
//   );
// };

// export default Hero;