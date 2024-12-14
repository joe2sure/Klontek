import React from "react"
import BlogCard from "../../components/blog/BlogCard"
import "../../pages/Home/BlogSection/Blog.css"
import Back from "../../components/Back"

const BlogPage = () => {
  return (
    <>
      <Back title='Blog' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default BlogPage;