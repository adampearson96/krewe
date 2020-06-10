import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import "../scss/teamKrewe.scss"

export default ({ data }) => {
  
  return (
    <Layout pageTitle="Team KREWE" pageClass="page-team-krewe-page">
      <div>
        <section className="page-title">
          <div className="outer-container">
            <h1>Team KREWE</h1>
          </div>
        </section>
        <section className="content-container">
          <div className="row row-one">
            <div className="outer-container">
              <div className="col">
                <div className="content">
                  <p>
                  Team KREWE is made up of consultants, each specialising in UX, UI, Brand and Development. Meet team KREWE below:
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-two">
            <div className="outer-container">
              <div className="col">
                <div className="content">
                  <div className="image-container">
                    <Img fluid={data.emma.childImageSharp.fluid} />
                  </div>
                  <h2>Emma Marsh</h2>
                  <h3>UX Specialist</h3>
                  <p>I have worked in integrated agencies for over 10 years, managing and delivering projects on and offline. Working in a digital department has allowed me to deliver bespoke websites, micro-sites and ideas to support clients with their annual strategies. Implementing UX across all websites creates the building blocks for design, successful build and flow to user experience.</p>
                </div>
              </div>
              <div className="col">
                <div className="content">
                  <div className="image-container">
                    <Img fluid={data.april.childImageSharp.fluid} />
                  </div>
                  <h2>April Matthews</h2>
                  <h3>UI and Brand Specialist</h3>
                  <p>A commercially minded designer with over 10+ years experience within brand, digital, marketing, e-commerce, and retail. Motivated by delivering user centric design and marketing solutions supported by branding and identity that represents its business with integrity and finesse.</p>
                </div>
              </div>
              <div className="col">
                <div className="content">
                  <div className="image-container">
                    <Img fluid={data.adam.childImageSharp.fluid} />
                  </div>
                  <h2>Adam Pearson</h2>
                  <h3>Developer</h3>
                  <p>Passionate about modern technology to create clean, crisp and engaging websites with a focus on UX and performance. Adam has worked in agencies for over 5 years creating anything from small tailored landing pages to full website builds. Adam develops mobile first and ensures all websites are responsive, accessibility optimised and are fully tested.</p>
                </div>
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
    emma: file(relativePath: { eq: "emma.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    april: file(relativePath: { eq: "april.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    adam: file(relativePath: { eq: "adam.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`