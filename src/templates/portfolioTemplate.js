import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Button from '@material-ui/core/Button'

import "../scss/portfolioTemplate.scss"

export default ({ data }) => {
  
  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
      <div id="page-individual-portfolio-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>{data.markdownRemark.frontmatter.title}</h1>
          </div>
        </div>
        <div className="content-container">
          <div className="outer-container">
            <div className="row">
              <div className="outer-container">
                <div className="col-one">
                  <p>{data.markdownRemark.frontmatter.projectDescription}</p>
                </div>
                <div className="col-two">
                  <a className="link" href={data.markdownRemark.frontmatter.websiteurl} target="_blank" rel="noopener noreferrer">
                    <Img fluid={data.markdownRemark.frontmatter.heroimage.childImageSharp.fluid} alt="" />
                    <div className="overlay">
                      <span>Visit website</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row-two">
              <div className="outer-container">
                <div className="col-one">
                  <Button className="btn" variant="contained" color="primary" href="/portfolio">
                    Back to Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        heroimage {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        websiteurl
        projectDescription
      }
    }
  }
`