import React from 'react'; 
import { Fade } from 'react-awesome-reveal'; 
import './Discuss.css'; 
import Button from '../../../components/elements/Button.js'

export default function Discuss() { 
  return ( 
    <Fade direction="up" triggerOnce> 
      <section className="discuss-section"> 
        <div className="discuss-container"> 
          <div className="discuss-header"> 
            <h1 className="discuss-title"> 
              Have an awesome project in mind? 
            </h1> 
            <Fade direction="up" triggerOnce delay={500}> 
              <Button href="/discuss-project" type="link" className="discuss-button"> 
                Lets Discuss! 
              </Button> 
            </Fade> 
          </div> 
          <Fade delay={300} triggerOnce> 
            <p className="discuss-description">Lets discuss it and make your dream software come true!</p> 
          </Fade> 
        </div> 
      </section> 
    </Fade> 
  ); 
}