import React from "react"
import { Link } from "gatsby" 
import Layout from "../components/layout"

import "../scss/process.scss"

export default () => {
  return (
    <Layout>
      <div id="page-process-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>Process</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="outer-container">
            <div className="row-one">

            </div>
            <div className="row-two"></div>
            <div className="row-three">
              <Link
                to="/contact"
                className="btn"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}