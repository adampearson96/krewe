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
                <h2>{data.markdownRemark.frontmatter.row1title}</h2>
                <p>{data.markdownRemark.frontmatter.row1content}</p>
              </div>
              <div className="col-two">
                {data.markdownRemark.frontmatter.row1image}
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

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `