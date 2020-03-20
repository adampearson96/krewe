import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "../scss/about.scss"

export default ({ data }) => {
  
  return (
    <Layout>
      <div id="page-about-page">
        <section className="page-title">
          <div className="outer-container">
            <h1>About</h1>
          </div>
        </section>
        <section className="content-container">
          <div className="outer-container">
            <div className="row" >
              <div className="col">
                <h2
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="300"
                  data-sal-easing="easeOutQuart"
                >About</h2>
                <div 
                  className="content"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart"
                >
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pulvinar tortor, at lobortis velit. Etiam porta mollis tellus sit amet pharetra. Fusce in orci turpis. Vestibulum ut rhoncus mi, eu ultricies ante. Donec interdum imperdiet turpis aliquam varius. Suspendisse ac enim ut est sollicitudin mattis et non enim. Morbi condimentum dui dolor, vel viverra orci pellentesque id. Nulla placerat nulla ac ultrices mollis.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2
                  data-sal="slide-up"
                  data-sal-duration="600"
                  data-sal-delay="300"
                  data-sal-easing="easeOutQuart"
                >Skills</h2>
                <div 
                  className="content"
                  data-sal="slide-up"
                  data-sal-duration="600"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart"
                >
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pulvinar tortor, at lobortis velit. Etiam porta mollis tellus sit amet pharetra. Fusce in orci turpis. Vestibulum ut rhoncus mi, eu ultricies ante. Donec interdum imperdiet turpis aliquam varius. Suspendisse ac enim ut est sollicitudin mattis et non enim. Morbi condimentum dui dolor, vel viverra orci pellentesque id. Nulla placerat nulla ac ultrices mollis.</p>
                </div>
              </div>
            </div>
            <div 
              className="row heading"
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-delay="300"
              data-sal-easing="easeOutQuart"
            >
              <div className="col">
                <h2
                  data-sal="slide-up"
                  data-sal-duration="600"
                  data-sal-delay="300"
                  data-sal-easing="easeOutQuart"
                >Who knew… I like…</h2>
              </div>
            </div>
            <div 
              className="row image"
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-delay="300"
              data-sal-easing="easeOutQuart"
            >
              <div className="col title">
                <h3>Scary Movies</h3>
              </div>
              <div className="col">
                <Img fluid={data.image1.childImageSharp.fluid} />
              </div>
            </div>
            <div 
              className="row image image-2"
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-delay="300"
              data-sal-easing="easeOutQuart"
            >
              <div className="col title">
                <h3>DIY</h3>
              </div>
              <div className="col">
                <Img fluid={data.image1.childImageSharp.fluid} />
              </div>
            </div>
            <div 
              className="row image"
              data-sal="slide-up"
              data-sal-duration="600"
              data-sal-delay="300"
              data-sal-easing="easeOutQuart"
            >
              <div className="col title">
                <h3>Chips &amp; Icecream!</h3>
              </div>
              <div className="col">
                <Img fluid={data.image1.childImageSharp.fluid} />
              </div>
            </div>
            <div className="row heading">
              <div className="col">
                <h2
                  data-sal="slide-up"
                  data-sal-duration="600"
                  data-sal-delay="300"
                  data-sal-easing="easeOutQuart"
                >Work Experience</h2>
              </div>
            </div>
            <div className="row button">
              <div className="col">
                <a 
                  className="btn" 
                  rel="noopener noreferrer" 
                  target="_blank"
                  download 
                  data-sal="slide-up"
                  data-sal-duration="600"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart"
                >
                  CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "icon-512x512.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`