import React from "react";
import { courseTestimonial } from "../../../data/dummyData.js";
import "./CTestimonial.css";
import TextHeader from "../../../components/TextHeader/TextHeader.jsx";

const Testimonial = () => {
  return (
    <>
      <section className='testimonial padding'>
        <div className='container'>
          <TextHeader subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='content grid2'>
            {courseTestimonial.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
