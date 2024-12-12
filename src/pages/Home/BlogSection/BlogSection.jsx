import React from "react"; 
import { Fade } from 'react-awesome-reveal';
import "./Blog.css"; 
import { blog } from "../../../data/dummyData.js"; 
import TextHeader from "../../../components/TextHeader/TextHeader"; 
 
const BlogSection = () => { 
  return ( 
    <> 
      <section className='blog'> 
        <div className='container'> 
          <Fade direction="right"> {/* Add Fade to TextHeader */}
            <TextHeader subtitle='OUR BLOG' title='Recent From Blog' /> 
          </Fade>
          <div className='grid2'> 
            {blog.slice(0, 3).map((val, index) => ( 
              <Fade direction="up" delay={500 * index} key={index}> {/* Add Fade to each blog item */}
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
          </div> 
        </div> 
      </section> 
    </> 
  ) 
} 
 
export default BlogSection;