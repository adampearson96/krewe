import React from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Tween } from "react-gsap"

import "../scss/portfolio.scss"

export default ({ data }) => {

  const posts = data.portfolio.edges.map(edge => 
    <div className="col" key={edge.node.id}>
      <Link to={edge.node.frontmatter.path}>
        <Img fluid={edge.node.frontmatter.heroimage.childImageSharp.fluid} />
        <div className="content">
          <h3>{edge.node.frontmatter.title}</h3>
        </div>
      </Link>
    </div>
  )

  return (
    <Layout pageTitle="Portfolio">
      <div id="page-portfolio-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>Work</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="outer-container">
            <div className="row">
              <div className="outer-container">
                <Tween
                  staggerFrom={{
                    opacity: 0
                  }}
                  staggerTo={{
                    opacity: 1
                  }}
                  stagger={0.15}
                  duration={1}
                >
                  {posts}
                </Tween>
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
    portfolio: allMarkdownRemark( filter: {fields: {slug: {regex: "/portfolio/"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            heroimage {
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