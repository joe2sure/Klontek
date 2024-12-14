import React from "react";
import { Fade } from 'react-awesome-reveal';
import { blog } from "../../data/dummyData.js";
 
const BlogCard = () => {
  return (
    <> 
      {blog.map((val, index) => (
        <Fade direction="up" delay={500 * index} key={index}>
          <div className='items shadow'> 
            <div className='img'> 
              <img src={val.cover} alt='' /> 
            </div> 
            <div className='text'> 
              <div className='admin flexSB'> 
                <span> 
                  <i className='fa fa-user'></i> 
                  <label htmlFor=''>{val.type}</label> 
                </span> 
                <span> 
                  <i className='fa fa-calendar-alt'></i> 
                  <label htmlFor=''>{val.date}</label> 
                </span> 
                <span> 
                  <i className='fa fa-comments'></i> 
                  <label htmlFor=''>{val.com}</label> 
                </span> 
              </div> 
              <h1>{val.title}</h1> 
              <p>{val.desc}</p> 
            </div> 
          </div>
        </Fade>
      ))}
    </> 
  );
};
 
export default BlogCard;