import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { Fade } from 'react-awesome-reveal';
import dashboard from '../../../assets/images/revenue-dashboard.png'; 
import './Revenue.css'; 
 
const Revenue = () => { 
  return ( 
    <section id="revenue" className="revenue"> 
      <div className="revenue-container"> 
        <Fade direction="up" delay={300}>
          <div className="revenue-row"> 
            <div className="revenue-col-md-7"> 
              <h4>Drive revenue and optimise your Business</h4> 
              <p> 
                We have fortified our services with almost two decades of being a 
                VAS major, with our unified experience, coupled with the latest 
                product line that interests consumers with their diversified needs 
                of meaningful and engaging content. 
              </p> 
              <p> 
                Our abreast technology trends and unabating innovation has always 
                enhanced the business impact for our clients resulting in happy 
                faces seeing the revenue graph. 
              </p> 
              <p> 
                We are always focused on unfolding new revenue streams for our 
                operators with our innovative service line and meeting clients' 
                specific requirements. 
              </p> 
              <Link to="/about" className="revenue-btn-get-started"> 
                Read More 
              </Link> 
            </div> 
              <div className="revenue-col-lg-5 position-relative"> 
                <div className="revenue-phone-wrap"> 
                  <img src={dashboard} alt="Revenue Dashboard" className="revenue-img-fluid" /> 
                </div> 
              </div>
 
          </div>
        </Fade> 
      </div> 
    </section> 
  ); 
}; 
 
export default Revenue;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import dashboard from '../../../assets/images/revenue-dashboard.png';
// import './Revenue.css';

// const Revenue = () => {
//   return (
//     <section id="revenue" className="revenue">
//       <div className="revenue-container" data-aos="fade-up" data-aos-delay="300">
//         <div className="revenue-row">
//           <div className="revenue-col-md-7">
//             <h4>Drive revenue and optimise your Business</h4>
//             <p>
//               We have fortified our services with almost two decades of being a
//               VAS major, with our unified experience, coupled with the latest
//               product line that interests consumers with their diversified needs
//               of meaningful and engaging content.
//             </p>
//             <p>
//               Our abreast technology trends and unabating innovation has always
//               enhanced the business impact for our clients resulting in happy
//               faces seeing the revenue graph.
//             </p>
//             <p>
//               We are always focused on unfolding new revenue streams for our
//               operators with our innovative service line and meeting clients'
//               specific requirements.
//             </p>
//             <Link to="/about" className="revenue-btn-get-started">
//               Read More
//             </Link>
//           </div>
//           <div
//             className="revenue-col-lg-5 position-relative"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="revenue-phone-wrap">
//               <img src={dashboard} alt="Revenue Dashboard" className="revenue-img-fluid" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Revenue;
