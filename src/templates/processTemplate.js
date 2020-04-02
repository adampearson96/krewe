import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import showdown from "showdown";
import Img from "gatsby-image"
import Button from '@material-ui/core/Button'

import "../scss/processTemplate.scss"

const converter = new showdown.Converter();

const ProcessTemplate = ({ data }) => {

  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
      <div id="page-individual-process-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>{data.markdownRemark.frontmatter.title}</h1>
          </div>
        </div>
        <div className="page-content">
          {!! data.markdownRemark.html ?
            <div className="hero-section">
              <div className="outer-container">
                <div className="col-one" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div>
              </div>
            </div> : null
          }
          {!! data.markdownRemark.frontmatter.row1content ?
            <div className="row-one">
              <div className="outer-container">
                <div className="col-one">
                  <h2>{data.markdownRemark.frontmatter.row1title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row1content)}}></div>
                </div>
                {!! data.markdownRemark.frontmatter.row1image ? 
                  <div className="col-two">
                    <Img fluid={data.markdownRemark.frontmatter.row1image.childImageSharp.fluid} />
                  </div> : null
                }
              </div>
            </div> : null
          }
          {!! data.markdownRemark.frontmatter.row2content ?
            <div className="row-two">
              <div className="outer-container"> 
                <div 
                  className="col-one"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="500"
                  data-sal-easing="easeOutQuart"
                >
                  <h2>{data.markdownRemark.frontmatter.row2title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row2content)}}></div>
                </div>
                {!! data.markdownRemark.frontmatter.row2image ? 
                  <div 
                    className="col-two"
                    data-sal="slide-up"
                    data-sal-duration="200"
                    data-sal-delay="700"
                    data-sal-easing="easeOutQuart"  
                  >
                    <Img fluid={data.markdownRemark.frontmatter.row2image.childImageSharp.fluid} />
                  </div> : null
                }
              </div>
            </div> : null
          }
          {!! data.markdownRemark.frontmatter.row3content ?
            <div className="row-three">
              <div className="outer-container">
                <div 
                  className="col-one"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="500"
                  data-sal-easing="easeOutQuart"
                >
                  <h2>{data.markdownRemark.frontmatter.row3title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row3content)}}></div>
                </div>
                {!! data.markdownRemark.frontmatter.row3image ? 
                  <div 
                    className="col-two"
                    data-sal="slide-up"
                    data-sal-duration="200"
                    data-sal-delay="700"
                    data-sal-easing="easeOutQuart"
                  >
                    <Img fluid={data.markdownRemark.frontmatter.row3image.childImageSharp.fluid} />
                  </div> : null
                }
              </div>
            </div> : null
          }
          {!! data.markdownRemark.frontmatter.row4content ?
            <div className="row-four">
              <div className="outer-container">
                <div 
                  className="col-one"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="500"
                  data-sal-easing="easeOutQuart"
                >
                  <h2>{data.markdownRemark.frontmatter.row4title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row4content)}}></div>
                </div>
                {!! data.markdownRemark.frontmatter.row4image ? 
                  <div 
                    className="col-two"
                    data-sal="slide-up"
                    data-sal-duration="200"
                    data-sal-delay="700"
                    data-sal-easing="easeOutQuart"
                  >
                    <Img fluid={data.markdownRemark.frontmatter.row4image.childImageSharp.fluid} />
                  </div> : null
                }
              </div>
            </div> : null
          }
          {!! data.markdownRemark.frontmatter.row5content ?
            <div className="row-five">
              <div className="outer-container">
                <div 
                  className="col-one"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="500"
                  data-sal-easing="easeOutQuart"
                >
                  <h2>{data.markdownRemark.frontmatter.row5title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.markdownRemark.frontmatter.row5content)}}></div>
                </div>
                {!! data.markdownRemark.frontmatter.row5image ? 
                  <div 
                    className="col-two"
                    data-sal="slide-up"
                    data-sal-duration="200"
                    data-sal-delay="700"
                    data-sal-easing="easeOutQuart"  
                  >
                    <Img fluid={data.markdownRemark.frontmatter.row5image.childImageSharp.fluid} />
                  </div> : ''
                }
              </div>
            </div> : null
          }
          <div className="row-six">
            <div className="outer-container">
              <div className="col-one">
                <Button className="btn" color="primary" href="/process">
                  Back to Process
                </Button>
                <Button className="btn" variant="contained" color="primary" href={`/work/${data.markdownRemark.frontmatter.title}`}>
                  View all {data.markdownRemark.frontmatter.title} projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProcessTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        row1title
        row1content
        row1image {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row2title
        row2content
        row2image {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row3title
        row3content
        row3image {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row4title
        row4content
        row4image {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        row5title
        row5content
        row5image {
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`