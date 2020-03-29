import React from "react"
import Layout from "../components/layout"

import "../scss/contact.scss"

export default () => {
  return (
    <Layout path="Contact">
      <div id="page-contact-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="content-container">
          <div className="outer-container">
            <div className="col-one">
              <p>Want me to be part of your Krewe or have a project in mind for my krewe?</p>
              <p>Don't be a stranger, just say hello</p>
            </div>
            <div className="col-two">
              <h2>Get in touch</h2>
              <form action="POST" data-netlify="true">
                <label>
                  Name
                  <input type="text" name="name" placeholder="name" />
                </label>
                <label>
                  Name
                  <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                  Project Requirements
                  <textarea col="8" rows="4" name="project requirements" placeholder="Project Requirements" />
                </label>
                <button className="btn" type="submit">Send</button>
              </form>
            </div>
            <div className="col-three">
              <a href="mailto:" target="_blank" rel="noopener noreferrer">Email address</a>
              <a href="tel:" target="_blank" rel="noopener noreferrer">Phone number</a>
              <a href="#linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}