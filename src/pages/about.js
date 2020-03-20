import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

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
                <iframe src="https://giphy.com/embed/gjP5x1cENxayk" width="480" height="270" frameBorder="0" title="scary movies"></iframe>
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
                <iframe src="https://giphy.com/embed/HXJUbsDk4kYKc" width="480" height="368" frameBorder="0" title="DIY"></iframe>
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
                <iframe src="https://giphy.com/embed/y3QOvy7xxMwKI" width="480" height="383" frameBorder="0" title="Chips &amp; Icecream!"></iframe>
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
                  href={data.file.publicURL}
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
    file(extension: {eq: "pdf"}, name: {eq: "cv"}) {
      publicURL
    }
  }
`