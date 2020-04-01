import React from "react"
import { Link } from "gatsby" 
import Layout from "../components/layout"

import "../scss/process.scss"

export default () => {
  return (
    <Layout path="Process">
      <div id="page-process-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>Process</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="outer-container">
            <div className="row-one">
              <h3>What is UX?</h3>
              <p>UX helps to solve a problem for the end user by creating a positive experience with a product.</p> 
              <p>To deliver the solution, the UX process covers research, analysis, design, prototyping, validation and wireframing.</p>
              <p>During research we are defining the problem. When we create a design, we are solving a problem. When we build the website, we are building the solution.</p>
              <p>There are three types of design that makes a high-quality product:</p>
              <ul>
                <li>Functional design – what is it built for?</li>
                <li>Aesthetic design – how does it look?</li>
                <li>Experience design – what does it feel like? Emotions and feelings</li>
              </ul>
              <p>Delivering a solution with positive emotions ensures the end users requirements are met, that the product solves the problem and leaves them wanting more.</p>
              <p>Why do we need UX? It reduces the risk of building the wrong thing. It reduces the risk of project failure!</p>
              <p>Let’s go through each stage of the UX process below.</p>
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