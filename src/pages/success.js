import React from "react"
import Layout from "../components/layout"

import "../scss/contact.scss"

export default () => {
  return (
    <Layout pageTitle="Success" pageClass="page-contact-page">
      <div id="page-contact-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>Success!</h1>
          </div>
        </div>
        <div className="content-container">
          <div className="outer-container">
            <div className="col-one">
              <p>Your form has been submitted successfully.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}