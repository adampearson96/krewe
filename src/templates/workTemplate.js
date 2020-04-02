import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import showdown from "showdown";
import Img from "gatsby-image"
import Button from '@material-ui/core/Button'

import "../scss/workTemplate.scss"

const converter = new showdown.Converter();

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
              <div className="outer-container">
                <div className="col-one">
                  <h2>{data.markdownRemark.frontmatter.row1title}</h2>
                  {data.markdownRemark.frontmatter.row1content}
                  <h3>Skills Involved</h3>
                  <ul>
                    {data.markdownRemark.frontmatter.skillsInvolved.map(edge => 
                      <li key={edge}>{edge}</li>  
                    )}
                  </ul>
                </div>
              </div>
            </div>
            { !!data.markdownRemark.frontmatter.row2content ? 
              <div className="row-two">
                <div className="outer-container">
                  <div className="col-one">
                    <h3>{data.markdownRemark.frontmatter.row2title}</h3>
                    { !!data.markdownRemark.frontmatter.row2image ? 
                      <Img fluid={data.markdownRemark.frontmatter.row2image.childImageSharp.fluid} alt="" /> : null
                    }
                  </div>
                  <div className="col-two">
                    <div className="inner">
                      <h3>{data.markdownRemark.frontmatter.row2title}</h3>
                      <div className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row2content) }}></div>
                    </div>
                  </div>
                </div>
              </div> : null
            }
            { !!data.markdownRemark.frontmatter.row3content ? 
              <div className="row-three">
                <div className="outer-container">
                  <div className="col-one">
                    <h3>{data.markdownRemark.frontmatter.row3title}</h3>
                    { !!data.markdownRemark.frontmatter.row3image ? 
                      <Img fluid={data.markdownRemark.frontmatter.row3image.childImageSharp.fluid} alt="" /> : null
                    }
                  </div>
                  <div className="col-two">
                    <div className="inner">
                      <h3>{data.markdownRemark.frontmatter.row3title}</h3>
                      <div className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row3content) }}></div>
                    </div>
                  </div>
                </div>
              </div> : null
            }
            { !!data.markdownRemark.frontmatter.row4content ? 
              <div className="row-four">
                <div className="outer-container">
                  <div className="col-one">
                    <h3>{data.markdownRemark.frontmatter.row4title}</h3>
                    { !!data.markdownRemark.frontmatter.row4image ? 
                      <Img fluid={data.markdownRemark.frontmatter.row4image.childImageSharp.fluid} alt="" /> : null
                    }
                  </div>
                  <div className="col-two">
                    <div className="inner">
                      <h3>{data.markdownRemark.frontmatter.row4title}</h3>
                      <div className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row4content) }}></div>
                    </div>
                  </div>
                </div>
              </div> : null
            }
            { !!data.markdownRemark.frontmatter.row5content ? 
              <div className="row-five">
                <div className="outer-container">
                  <div className="col-one">
                    <h3>{data.markdownRemark.frontmatter.row5title}</h3>
                    { !!data.markdownRemark.frontmatter.row5image ? 
                      <Img fluid={data.markdownRemark.frontmatter.row5image.childImageSharp.fluid} alt="" /> : null
                    }
                  </div>
                  <div className="col-two">
                    <div className="inner">
                      <h3>{data.markdownRemark.frontmatter.row5title}</h3>
                      <div className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row5content) }}></div>
                    </div>
                  </div>
                </div>
              </div> : null
            }
            { !!data.markdownRemark.frontmatter.row6content ? 
              <div className="row-six">
                <div className="outer-container">
                  <div className="col-one">
                    <h3>{data.markdownRemark.frontmatter.row6title}</h3>
                    { !!data.markdownRemark.frontmatter.row6image ? 
                      <Img fluid={data.markdownRemark.frontmatter.row6image.childImageSharp.fluid} alt="" /> : null
                    }
                  </div>
                  <div className="col-two">
                    <div className="inner">
                      <h3>{data.markdownRemark.frontmatter.row6title}</h3>
                      <div className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row6content) }}></div>
                    </div>
                  </div>
                </div>
              </div> : null
            }
            { !!data.markdownRemark.frontmatter.row7content ? 
              <div className="row-seven">
                <div className="outer-container">
                  <div className="col-one">
                    <h3>{data.markdownRemark.frontmatter.row7title}</h3>
                    { !!data.markdownRemark.frontmatter.row7image ? 
                      <Img fluid={data.markdownRemark.frontmatter.row7image.childImageSharp.fluid} alt="" /> : null
                    }
                  </div>
                  <div className="col-two">
                    <div className="inner">
                      <h3>{data.markdownRemark.frontmatter.row7title}</h3>
                      <div className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row7content) }}></div>
                    </div>
                  </div>
                </div>
              </div> : null
            }
            { !!data.markdownRemark.frontmatter.row8content ? 
              <div className="row-eight">
                <div className="outer-container">
                  <div className="col-one">
                    <h3>{data.markdownRemark.frontmatter.row8title}</h3>
                    { !!data.markdownRemark.frontmatter.row8image ? 
                      <Img fluid={data.markdownRemark.frontmatter.row8image.childImageSharp.fluid} alt="" /> : null
                    }
                  </div>
                  <div className="col-two">
                    <div className="inner">
                      <h3>{data.markdownRemark.frontmatter.row8title}</h3>
                      <div className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row8content) }}></div>
                    </div>
                  </div>
                </div>
              </div> : null
            }
            <div className="row-nine">
            <div className="outer-container">
              <div className="col-one">
                <Button className="btn" variant="contained" color="primary" href="/process">
                  Back to Process
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