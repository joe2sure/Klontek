import React from "react"
import BlogCard from "./BlogCard"
import "../../pages/Home/BlogSection/Blog.css"
import Back from "../Back"

const BlogPage = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default BlogPage;