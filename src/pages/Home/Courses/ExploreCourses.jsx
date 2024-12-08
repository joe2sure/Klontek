import React from "react";
import { Fade } from 'react-awesome-reveal';
// import "./Courses.css";
import { online } from "../../../data/dummyData";
import TextHeader from "../../../components/TextHeader/TextHeader";

const ExploreCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
        <Fade direction="right" >
            <TextHeader 
              subtitle='COURSES' 
              title='Browse Our Online Courses'
              comingSoon={true}
            />
          </Fade>
          <div className='content grid3'>
            {online.map((val, index) => (
              <Fade direction="left" delay={500 * index} key={index}>
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt={val.courseName} />
                    <img src={val.hoverCover} alt='' className='show' />
                  </div>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ExploreCourses;