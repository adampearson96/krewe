import React from "react"
import Layout from "../components/layout"
import LinkedInIcon from '@material-ui/icons/LinkedIn'

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
              <form name="contact" method="POST" data-netlify="true">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Name" />
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
              <div className="link">
                Email Address: <a href="mailto:emmalmarsh17@gmail.com" target="_blank" rel="noopener noreferrer">emmalmarsh17@gmail.com</a>
              </div>
              <div className="link">
                Phone Number: <a href="tel:07956639816" target="_blank" rel="noopener noreferrer">07956 639816</a>
              </div>
              <div className="link">
                <a href="https://www.linkedin.com/in/emma-marsh-94a91142/" target="_blank" rel="noopener noreferrer" className="linkedIn">
                  LinkedIn
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}