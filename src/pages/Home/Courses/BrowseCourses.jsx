import React from "react";
import { Fade } from 'react-awesome-reveal';
import "./Courses.css";
import { coursesCard } from "../../../data/dummyData";
import ExploreCourses from "./ExploreCourses";
import TextHeader from "../../../components/TextHeader/TextHeader";

const BrowseCourses = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
        <Fade direction="right">
            {/* Optional coming soon tag */}
            <TextHeader 
              subtitle='our courses' 
              title='explore our popular online courses'
              comingSoon={true}
            />
          </Fade>

          <div className='coursesCard'>
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val, index) => (
                <Fade direction="left" delay={500 * index} key={index}>
                  <div className='items'>
                    <div className='content flex'>
                      <div className='left'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                      </div>
                      <div className='text'>
                        <h1>{val.coursesName}</h1>
                        <div className='rate'>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <i className='fa fa-star'></i>
                          <label htmlFor=''>(5.0)</label>
                        </div>
                        <div className='details'>
                          {val.courTeacher.map((details, detailIndex) => (
                            <React.Fragment key={detailIndex}>
                              <div className='box'>
                                <div className='dimg'>
                                  <img src={details.dcover} alt='' />
                                </div>
                                <div className='para'>
                                  <h4>{details.name}</h4>
                                </div>
                              </div>
                              <span>{details.totalTime}</span>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='price'>
                      <h3>
                        {val.priceAll} / {val.pricePer}
                      </h3>
                    </div>
                    <button className='outline-btn'>ENROLL NOW !</button>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
        <ExploreCourses />
      </section>
    </>
  )
}

export default BrowseCourses;