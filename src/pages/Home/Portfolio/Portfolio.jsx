import React from 'react'; 
import { Fade } from 'react-awesome-reveal'; 
import Button from '../../../components/elements/Button.js'; 
import './Portfolio.css'; 

export default function Portfolio({ data }) { 
  return ( 
    <section className="portfolio-container"> 
      <Fade direction="right" triggerOnce> 
        <h1 className="portfolio-title">Our Selected Project</h1> 
      </Fade>
      <Fade direction="left" triggerOnce> 
        <p className="portfolio-subtitle"> 
          We are ready to scale up your business with our great work result. 
        </p> 
      </Fade> 
 
      <div className="portfolio-grid"> 
        { 
          data.map((item, index) => ( 
            <Fade direction="up" triggerOnce bottom delay={500 * index} key={index}> 
              <Button type="link" href={`/project/${item.id}`}> 
                <div className="portfolio-card"> 
                  <div className="portfolio-card-image-container"> 
                    <img src={item.imageUrl} alt="Portfolio" className="portfolio-card-image" /> 
                    <div className="portfolio-card-overlay"> 
                      <button className="portfolio-card-overlay-button"> 
                        <svg className="portfolio-card-overlay-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> 
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /> 
                        </svg> 
                      </button> 
                    </div> 
                  </div> 
                  <div className="portfolio-card-content"> 
                    <h2 className="portfolio-card-title">{item.title}</h2> 
                    <p className="portfolio-card-type">{item.type}</p> 
                  </div> 
                </div> 
              </Button> 
            </Fade> 
          )) 
        } 
      </div> 
 
      <Fade bottom triggerOnce> 
        <Button href="/project" type="link" className="portfolio-see-more-button"> 
          <p className="portfolio-see-more-text"> 
            See More 
          </p> 
          <svg className="portfolio-see-more-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /> 
          </svg> 
          <svg className="portfolio-see-more-icon portfolio-see-more-icon-offset" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /> 
          </svg> 
        </Button> 
      </Fade> 
    </section> 
  ); 
}