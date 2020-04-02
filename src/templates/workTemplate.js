import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import Button from '@material-ui/core/Button'

import "../scss/workTemplate.scss"

const WorkTemplate = ({ data }) => {
  return (
    <Layout pageTitle="Work">
      <div id="page-individual-work-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>{data.markdownRemark.frontmatter.title}</h1>
          </div>
        </div>
        <div className="content-container">
          <div className="outer-container">
            <div className="row-one">
              <div className="col-one">

              </div>
              <div className="col-two">
                
              </div>
            </div>
            <div className="row-two">
              <div className="col-one">

              </div>
              <div className="col-two">

              </div>
            </div>
            <div className="row-three">
              <div className="col-one">

              </div>
              <div className="col-two">

              </div>
            </div>
            <div className="row-four">
              <div className="col-one">

              </div>
              <div className="col-two">

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WorkTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        projectSummary
        skillsInvolved
        row1title
        row1content
        row2title
        row2content
        row3title
        row3content
        row4title
        row4content
        row5title
        row5content
        row6title
        row6content
        row7title
        row7content
        row8title
        row8content
      }
    }
  }
`