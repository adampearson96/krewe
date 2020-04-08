import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Button from '@material-ui/core/Button'
import WorkCard from '../components/workCard'

import "../scss/workTemplate.scss"


const WorkTemplate = ({ data }) => {
  return (
    <Layout pageTitle="Work" pageClass="page-individual-work-page">
      <div id="page-individual-work-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>{data.markdownRemark.frontmatter.title}</h1>
          </div>
        </div>
        <div className="content-container">
          <div className="outer-container">
            <div className="row-one">
              <div className="outer-container">
                <div className="col-one">
                  <h2>{data.markdownRemark.frontmatter.row1title}</h2>
                  {data.markdownRemark.frontmatter.row1content}
                  <h3>Skills Involved</h3>
                  <ul>
                    {data.markdownRemark.frontmatter.skillsInvolved.map(edge => 
                      <li key={edge} dangerouslySetInnerHTML={{ __html: edge }}></li>  
                    )}
                  </ul>
                </div>
              </div>
            </div>
            { !!data.markdownRemark.frontmatter.row2content ? 
              <WorkCard 
                row="row-two"
                title={data.markdownRemark.frontmatter.row2title}
                image={data.markdownRemark.frontmatter.row2image.childImageSharp.fluid}
                content={data.markdownRemark.frontmatter.row2content} 
              /> : null
            }
            { !!data.markdownRemark.frontmatter.row3content ? 
              <WorkCard 
                row="row-three"
                title={data.markdownRemark.frontmatter.row3title}
                image={data.markdownRemark.frontmatter.row3image.childImageSharp.fluid}
                content={data.markdownRemark.frontmatter.row3content} 
              /> : null
            }
            { !!data.markdownRemark.frontmatter.row4content ? 
              <WorkCard 
                row="row-four"
                title={data.markdownRemark.frontmatter.row4title}
                image={data.markdownRemark.frontmatter.row4image.childImageSharp.fluid}
                content={data.markdownRemark.frontmatter.row4content} 
              /> : null
            }
            { !!data.markdownRemark.frontmatter.row5content ? 
              <WorkCard 
                row="row-five"
                title={data.markdownRemark.frontmatter.row5title}
                image={data.markdownRemark.frontmatter.row5image.childImageSharp.fluid}
                content={data.markdownRemark.frontmatter.row5content} 
              /> : null
            }
            { !!data.markdownRemark.frontmatter.row6content ? 
              <WorkCard 
                row="row-six"
                title={data.markdownRemark.frontmatter.row6title}
                image={data.markdownRemark.frontmatter.row6image.childImageSharp.fluid}
                content={data.markdownRemark.frontmatter.row6content} 
              /> : null
            }
            { !!data.markdownRemark.frontmatter.row7content ? 
              <WorkCard 
                row="row-seven"
                title={data.markdownRemark.frontmatter.row7title}
                image={data.markdownRemark.frontmatter.row7image.childImageSharp.fluid}
                content={data.markdownRemark.frontmatter.row7content} 
              /> : null
            }
            { !!data.markdownRemark.frontmatter.row8content ? 
              <WorkCard 
                row="row-eight"
                title={data.markdownRemark.frontmatter.row8title}
                image={data.markdownRemark.frontmatter.row8image.childImageSharp.fluid}
                content={data.markdownRemark.frontmatter.row8content} 
              /> : null
            }
            <div className="row-nine">
              <div className="outer-container">
                <div className="col-one">
                  <Button className="btn" variant="contained" color="primary" href="/work">
                    Back to Work
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
        row1image {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row2title
        row2content
        row2image {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row3title
        row3content
        row3image {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row4title
        row4content
        row4image {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row5title
        row5content
        row5image {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row6title
        row6content
        row6image {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row7title
        row7content
        row7image {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row8title
        row8content
        row8image {
          childImageSharp {
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`