import React from "react"
import career from "../../assets/images/careers-img.png"
import "./CareerPage.css"
import Back from "../../components/Back"

const CareerPage = () => {
  return (
    <main className="main">
        <Back title='Career' />
      <section className="blog">
        <div className="container">
          <div className="section-header">
            <h2>
              Do what you LOVE, Inviting you to build a great future with us
            </h2>
          </div>

          <div className="blog-details">
            <div className="image-column">
              <img
                src={career}
                alt="Do what you LOVE, Inviting you to build a great future with us"
                title="Do what you LOVE, Inviting you to build a great future with us"
              />
            </div>
            <div className="content-column">
              <p>
                People! An essential part of any successful business, drive
                the Organization in the right direction. With our accelerated
                business expansion, we are always on the lookout for a
                talented pool of resources to grow with our organization.
              </p>
              <p>
                We look at talent with a long-term plan where they can be
                groomed for different roles People with the right attitude and
                great aspirations. At Klontek, we have an exciting work
                atmosphere with exceptional growth opportunities.
              </p>
              <div className="quote-content">
                <blockquote>
                  <p>
                    Please send your resumes to{" "}
                    <a href="mailto:hr@sklontekinfo.com">
                    hr@sklontekinfo.com
                    </a>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CareerPage