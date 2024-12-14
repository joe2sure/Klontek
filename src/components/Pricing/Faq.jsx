import React, { useState } from "react";
import { faqData } from "../../data/dummyData.js";
import TextHeader from "../TextHeader/TextHeader.jsx";
// import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <TextHeader subtitle='FAQS' title='Frequently Ask Question' />
      <section className='faq'>
        <div className='container'>
          {faqData.map((val, index) => (
            <div 
              key={index} 
              className={`faq-box ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className='accordion' 
                onClick={() => toggle(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h2>{val.title}</h2>
                <span className="icon">
                  {activeIndex === index ? (
                    <i className='fa fa-chevron-up'></i>
                  ) : (
                    <i className='fa fa-chevron-right'></i>
                  )}
                </span>
              </button>
              <div 
                id={`faq-content-${index}`}
                className={`faq-content ${activeIndex === index ? 'show' : ''}`}
                aria-hidden={activeIndex !== index}
              >
                <p>{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;