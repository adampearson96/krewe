import React from "React"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ProcessTemplate = ({ data }) => {

  return (
    <Layout>
      <div id="page-individual-process-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>{data.markdownRemark.frontmatter.title}</h1>
          </div>
        </div>
        <div className="content-container">
          <div className="outer-container">
            <div className="row-one">
              <div className="col-one">
                <h2></h2>
                <p></p>
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

export default ProcessTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`