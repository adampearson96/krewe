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
            <h1>Work</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="outer-container">
            <div className="row-one">

            </div>
            <div className="row-two"></div>
            <div className="row-three">
              <Link
                to="/process"
                className="btn"
              >
                View Process
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}