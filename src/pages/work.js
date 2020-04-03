import React from "react"
import { graphql } from "gatsby" 
import Layout from "../components/layout"
import Img from "gatsby-image"
import Button from '@material-ui/core/Button'

import "../scss/work.scss"

export default ({ data }) => {

  const posts = data.work.edges.map(edge => 
    <div className="row" key={edge.node.id}>
      <div className="outer-container">
        <div className="col image">
          <Img fluid={edge.node.frontmatter.row1image.childImageSharp.fluid} alt="" />
          <h3>{edge.node.frontmatter.title}</h3>
        </div>
        <div className="col content">
          <div className="inner">
            <h3>{edge.node.frontmatter.title}</h3>
            <p><strong>Project Summary</strong>{edge.node.frontmatter.projectSummary}</p>
            <Button
              className="btn" 
              variant="contained" 
              color="primary" 
              href={edge.node.frontmatter.path}
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Layout pageTitle="Work">
      <div id="page-work-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>Work</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="outer-container">
            <div className="row-container">
              {posts}
            </div>
          </div>
          <div className="row-three">
            <div className="outer-container">
              <div className="col">
                <h2>Want to know how UX can work for you?</h2>
                <Button
                  variant="contained" 
                  color="primary" 
                  href="/process"
                >
                  View Process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    work: allMarkdownRemark( filter: {fields: {slug: {regex: "/work/"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            projectSummary
            row1image {
              childImageSharp {
                fluid(maxWidth: 720, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`