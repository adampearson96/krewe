import React from "react"
import Layout from "../components/layout"
import Button from '@material-ui/core/Button'

import "../scss/process.scss"

export default () => {
  return (
    <Layout pageTitle="Process" pageClass="page-process-page">
      <div id="page-process-page">
        <div className="page-title">
          <div className="outer-container">
            <h1>Process</h1>
          </div>
        </div>
        <div className="page-content">
          <div className="row-one">
            <div className="outer-container">
              <div className="col">
                <h3>What is UX?</h3>
                <p>UX helps to solve a problem for the end user by creating a positive experience with a product.</p> 
                <p>The UX process covers <a href="/process/research">research</a>, <a href="/process/analysis">analysis</a>, <a href="/process/design">design</a>, <a href="/process/prototyping">prototyping</a>, <a href="/process/validation">validation</a> and <a href="/process/wireframing">wireframing</a>.</p>
                <p>During research we are defining the problem. When we create a design, we are solving the problem. When we build the website, we are building the solution.</p>
                <p>There are three types of design that makes a high-quality product:</p>
                <ul>
                  <li>Functional design – what is it built for?</li>
                  <li>Aesthetic design – how does it look?</li>
                  <li>Experience design – what does it feel like? Emotions and feelings</li>
                </ul>
                <p>Delivering a solution with positive emotions ensures the end users requirements are met, that the product solves the problem and leaves them wanting more.</p>
                <p>Why do we need UX? It reduces the risk of building the wrong thing. It reduces the risk of project failure!</p>
                <p>Let’s go through each stage of the UX process below.</p>
                <h3>Click on each section to find out more</h3>
              </div>
            </div>
          </div>
          <div className="row-two">
            <div className="outer-container">
              <div className="col">
                <div className="diagram">
                  <div className="mobile">
                    <Button id="link-research" className="btn" variant="contained" color="primary" href="/process/research">
                      Research
                    </Button>
                    <div id="arrow-1" className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16">
                        <path d="M24,6H0v4H24v6l8-8L24,0Z"/>
                      </svg>
                    </div>
                    <Button id="link-analysis" className="btn" variant="contained" color="primary" href="/process/analysis">
                      Analysis
                    </Button>
                    <div id="arrow-2" className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 32">
                        <path d="M10,24V0H6V24H0l8,8,8-8Z"/>
                      </svg>
                    </div>
                    <Button id="link-prototype" className="btn" variant="contained" color="primary" href="/process/prototype">
                      Prototype
                    </Button>
                    <div id="arrow-3" className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16">
                        <path d="M8,10H32V6H8V0L0,8l8,8Z"/>
                      </svg>
                    </div>
                    <Button id="link-design" className="btn" variant="contained" color="primary" href="/process/design">
                      Design
                    </Button>
                    <div id="arrow-4" className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 32">
                        <path d="M10,24V0H6V24H0l8,8,8-8Z"/>
                      </svg>
                    </div>
                    <Button id="link-validate" className="btn" variant="contained" color="primary" href="/process/validate">
                      Validate
                    </Button>
                    <div id="arrow-5" className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16">
                        <path d="M24,6H0v4H24v6l8-8L24,0Z"/>
                      </svg>
                    </div>
                    <Button id="link-wireframes" className="btn" variant="contained" color="primary" href="/process/wireframes">
                      Wireframes
                    </Button>
                    <div id="arrow-6" className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 32">
                        <path d="M10,24V0H6V24H0l8,8,8-8Z"/>
                      </svg>
                    </div>
                    <Button id="link-test" className="btn" variant="contained" color="primary" disabled>
                      Test
                    </Button>
                    <div id="arrow-7" className="arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16">
                        <path d="M8,10H32V6H8V0L0,8l8,8Z"/>
                      </svg>
                    </div>
                    <Button id="link-build" className="btn" variant="contained" color="primary" disabled>
                      Build
                    </Button>
                  </div>
                  <div className="desktop">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 618.19">
                      <a href="/process/research">
                        <g id="Research">
                          <rect className="cls-1" y="123.19" width="175" height="50"/>
                          <path className="cls-2" d="M56.42,147a9.83,9.83,0,0,1,1.36,2.28l2,4.08H56.72L55.18,150c-.36-.76-1.24-2.44-1.24-2.44-.42,0-2.9,0-2.9,0v5.84H48.12V139.26h5.44c3.3,0,5.38.74,5.38,4A3.6,3.6,0,0,1,56.42,147Zm-2.72-5.64H51v4.1h2.6c1.82,0,2.6-.62,2.6-2.16C56.24,142,55.36,141.38,53.7,141.38Z"/>
                          <path className="cls-2" d="M63,148.74a2.63,2.63,0,0,0,2.92,2.84,5.16,5.16,0,0,0,3-.92l.76,1.7a5.94,5.94,0,0,1-3.84,1.22c-3.6,0-5.54-2.14-5.54-5.48,0-3.06,1.86-5.5,5.08-5.5S70,145.1,70,147.88v0c0,.26,0,.52,0,.78v0Zm4.46-1.48v-.1c0-1.68-.74-2.52-2.06-2.52-.9,0-2.24.54-2.38,2.62Z"/>
                          <path className="cls-2" d="M78,145.24a7.16,7.16,0,0,0-2.8-.64c-1.12,0-1.58.28-1.62.86s.28.9,1.18,1.22l1.6.56a3.32,3.32,0,0,1,2.58,3,3.25,3.25,0,0,1-3.58,3.34,7.4,7.4,0,0,1-4.36-1l.54-1.8a7.47,7.47,0,0,0,3.48.86c.78,0,1.4-.3,1.4-1.06,0-.6-.22-.82-1-1.12l-1.56-.58c-1.5-.56-2.7-1.32-2.7-3,0-2.16,1.6-3.18,3.84-3.18a6.13,6.13,0,0,1,3.5.84Z"/>
                          <path className="cls-2" d="M82.7,148.74a2.63,2.63,0,0,0,2.92,2.84,5.16,5.16,0,0,0,3-.92l.76,1.7a5.94,5.94,0,0,1-3.84,1.22c-3.6,0-5.54-2.14-5.54-5.48,0-3.06,1.86-5.5,5.08-5.5s4.62,2.5,4.62,5.28v0c0,.26,0,.52,0,.78v0Zm4.46-1.48v-.1c0-1.68-.74-2.52-2.06-2.52-.9,0-2.24.54-2.38,2.62Z"/>
                          <path className="cls-2" d="M94.12,153.58c-1.94,0-3.28-1.14-3.28-3,0-2.64,1.84-3.06,5.28-3.56l.74-.12v-.48c0-1.22-.1-1.74-1.52-1.8H95.2a12.91,12.91,0,0,0-3.22.72l-.54-2a10.24,10.24,0,0,1,4-.78h.24c2.4,0,4,1.12,4,3.38v7.4H97.52l-.28-1.12A4.55,4.55,0,0,1,94.12,153.58Zm2.74-2.64v-2.46l-.74.12c-1.54.22-2.8.46-2.8,1.9a1.18,1.18,0,0,0,1.28,1.3A3.67,3.67,0,0,0,96.86,150.94Z"/>
                          <path className="cls-2" d="M107.3,143l.14,2.1h-.74c-2,0-2.32,1-2.32,2.56v5.72h-2.76V143h2.56l.2,1.42A2.9,2.9,0,0,1,107,143Z"/>
                          <path className="cls-2" d="M115.6,150.8l.52,1.86a4.93,4.93,0,0,1-3,.92h0c-3,0-5.3-1.82-5.3-5.62a5,5,0,0,1,5.1-5.36h.08a4.77,4.77,0,0,1,3.06.94l-.44,1.84a4.7,4.7,0,0,0-2.36-.74c-1.54,0-2.78,1-2.78,3.42s1.14,3.52,2.84,3.52A4.08,4.08,0,0,0,115.6,150.8Z"/>
                          <path className="cls-2" d="M117.34,153.38V138.76h2.78v5.38a4.66,4.66,0,0,1,3.34-1.54c2,0,3.7,1.16,3.7,4.46v6.32h-2.78v-6.24c0-1.54-.28-2.5-1.56-2.5a3.44,3.44,0,0,0-2.7,1.76v7Z"/>
                        </g>
                      </a>

                      <a href="/process/analysis">
                        <g id="Analysis">
                          <rect className="cls-1" x="274.74" y="123.19" width="175" height="50"/>
                          <path className="cls-2" d="M333.48,149H329.3l-1.54,4.34h-2.88l.38-1.18L330,139.25h2.74l4.62,12.95.4,1.18H335Zm-.68-1.78-1.4-4.78-1.48,4.78Z"/>
                          <path className="cls-2" d="M344,144.64a3.2,3.2,0,0,0-2.54,1.66v7.08h-2.78V143H341l.22,1.38a4.84,4.84,0,0,1,3.68-1.78c2.52,0,3.6,1.9,3.6,4.46v6.32h-2.78v-6.06C345.68,145.88,345.6,144.64,344,144.64Z"/>
                          <path className="cls-2" d="M353.28,153.58c-1.94,0-3.28-1.14-3.28-3,0-2.64,1.84-3.06,5.28-3.56l.74-.12v-.48c0-1.22-.1-1.74-1.52-1.8h-.14a12.91,12.91,0,0,0-3.22.72l-.54-2a10.24,10.24,0,0,1,4-.78h.24c2.4,0,4,1.12,4,3.38v7.4h-2.12l-.28-1.12A4.55,4.55,0,0,1,353.28,153.58Zm2.74-2.64v-2.46l-.74.12c-1.54.22-2.8.46-2.8,1.9a1.18,1.18,0,0,0,1.28,1.3A3.67,3.67,0,0,0,356,150.94Z"/>
                          <path className="cls-2" d="M363.7,149.32c0,1.58.14,2.12,1.62,2.12a1.93,1.93,0,0,0,.58,0l.12,2a7.32,7.32,0,0,1-1.44.12c-3.14,0-3.64-1.9-3.64-4.56v-10l2.76-.19Z"/>
                          <path className="cls-2" d="M370.2,153,366,143h2.78l2.74,6.92L373.9,143h2.86l-4.26,11.08c-1,2.7-2.18,3.3-4.42,3.3h-1.34l-.26-2h.72C369,155.4,369.48,155.54,370.2,153Z"/>
                          <path className="cls-2" d="M384.22,145.24a7.16,7.16,0,0,0-2.8-.64c-1.12,0-1.58.28-1.62.86s.28.9,1.18,1.22l1.6.56a3.32,3.32,0,0,1,2.58,3,3.25,3.25,0,0,1-3.58,3.34,7.4,7.4,0,0,1-4.36-1l.54-1.8a7.47,7.47,0,0,0,3.48.86c.78,0,1.4-.3,1.4-1.06,0-.6-.22-.82-1-1.12l-1.56-.58c-1.5-.56-2.7-1.32-2.7-3,0-2.16,1.6-3.18,3.84-3.18a6.13,6.13,0,0,1,3.5.84Z"/>
                          <path className="cls-2" d="M389.6,141.22h-2.78v-2.28h2.78Zm0,12.16h-2.76V143h2.76Z"/>
                          <path className="cls-2" d="M398.24,145.24a7.16,7.16,0,0,0-2.8-.64c-1.12,0-1.58.28-1.62.86s.28.9,1.18,1.22l1.6.56a3.32,3.32,0,0,1,2.58,3,3.25,3.25,0,0,1-3.58,3.34,7.4,7.4,0,0,1-4.36-1l.54-1.8a7.47,7.47,0,0,0,3.48.86c.78,0,1.4-.3,1.4-1.06,0-.6-.22-.82-1-1.12l-1.56-.58c-1.5-.56-2.7-1.32-2.7-3,0-2.16,1.6-3.18,3.84-3.18a6.13,6.13,0,0,1,3.5.84Z"/>
                        </g>
                      </a>

                      <a href="/process/validate">
                        <g id="Validate">
                          <rect className="cls-1" x="557.11" width="175" height="50"/>
                          <path className="cls-2" d="M613.76,30.19,608.4,16.07h2.9l3.78,10.62,3.6-10.62h2.82l-5.16,14.12Z"/>
                          <path className="cls-2" d="M625.32,30.39c-1.94,0-3.28-1.14-3.28-3,0-2.64,1.84-3.06,5.28-3.56l.74-.12v-.48c0-1.22-.1-1.74-1.52-1.8h-.14a12.91,12.91,0,0,0-3.22.72l-.54-2a10.24,10.24,0,0,1,4-.78h.24c2.4,0,4,1.12,4,3.38v7.4h-2.12l-.28-1.12A4.55,4.55,0,0,1,625.32,30.39Zm2.74-2.64V25.29l-.74.12c-1.54.22-2.8.46-2.8,1.9a1.18,1.18,0,0,0,1.28,1.3A3.67,3.67,0,0,0,628.06,27.75Z"/>
                          <path className="cls-2" d="M635.74,26.13c0,1.58.14,2.12,1.62,2.12a1.93,1.93,0,0,0,.58,0l.12,2a7.32,7.32,0,0,1-1.44.12c-3.14,0-3.64-1.9-3.64-4.56v-10l2.76-.18Z"/>
                          <path className="cls-2" d="M642.24,18h-2.78V15.75h2.78Zm0,12.16h-2.76V19.81h2.76Z"/>
                          <path className="cls-2" d="M651.72,28.73a3.14,3.14,0,0,1-3,1.66h-.14c-3-.06-4.62-2.42-4.62-5.54,0-2.92,1.66-5.44,4.7-5.44a3.1,3.1,0,0,1,3,1.58V15.57h2.76V30.19h-2.7Zm0-3.8c0-2.64-1.28-3.48-2.52-3.48s-2.58.7-2.58,3.48,1.34,3.42,2.58,3.42S651.76,27.61,651.76,24.93Z"/>
                          <path className="cls-2" d="M659.4,30.39c-1.94,0-3.28-1.14-3.28-3,0-2.64,1.84-3.06,5.28-3.56l.74-.12v-.48c0-1.22-.1-1.74-1.52-1.8h-.14a12.91,12.91,0,0,0-3.22.72l-.54-2a10.24,10.24,0,0,1,4-.78H661c2.4,0,4,1.12,4,3.38v7.4H662.8l-.28-1.12A4.55,4.55,0,0,1,659.4,30.39Zm2.74-2.64V25.29l-.74.12c-1.54.22-2.8.46-2.8,1.9a1.18,1.18,0,0,0,1.28,1.3A3.67,3.67,0,0,0,662.14,27.75Z"/>
                          <path className="cls-2" d="M670.18,25.89c0,1.76.1,2.32,1.62,2.32l.88-.06.16,2s-1,.12-1.56.12c-3.22,0-3.86-1.54-3.86-4.58V21.47h-1.8l.16-1.66h1.64L668.1,16h2.08v3.78h2.56v1.66h-2.56Z"/>
                          <path className="cls-2" d="M676.78,25.55a2.63,2.63,0,0,0,2.92,2.84,5.16,5.16,0,0,0,3-.92l.76,1.7a5.94,5.94,0,0,1-3.84,1.22c-3.6,0-5.54-2.14-5.54-5.48,0-3.06,1.86-5.5,5.08-5.5s4.62,2.5,4.62,5.28v0c0,.26,0,.52,0,.78v0Zm4.46-1.48V24c0-1.68-.74-2.52-2.06-2.52-.9,0-2.24.54-2.38,2.62Z"/>
                        </g>
                      </a>

                      <a href="/process/design">
                        <g id="Design">
                          <rect className="cls-1" x="557.11" y="207.49" width="175" height="50"/>
                          <path className="cls-2" d="M618.83,237.68h-4.7V223.56H618c5.3,0,8.9,1.92,8.9,7.1C626.85,235.26,623.57,237.68,618.83,237.68Zm-.66-11.92h-1.12v9.74h2c3.18,0,4.94-1.7,4.94-4.8C624,227,622,225.76,618.17,225.76Z"/>
                          <path className="cls-2" d="M630.89,233a2.63,2.63,0,0,0,2.92,2.84,5.16,5.16,0,0,0,3-.92l.76,1.7a5.94,5.94,0,0,1-3.84,1.22c-3.6,0-5.54-2.14-5.54-5.48,0-3.06,1.86-5.5,5.08-5.5s4.62,2.5,4.62,5.28v0c0,.26,0,.52,0,.78v0Zm4.46-1.48v-.1c0-1.68-.74-2.52-2.06-2.52-.9,0-2.24.54-2.38,2.62Z"/>
                          <path className="cls-2" d="M645.89,229.54a7.16,7.16,0,0,0-2.8-.64c-1.12,0-1.58.28-1.62.86s.28.9,1.18,1.22l1.6.56a3.32,3.32,0,0,1,2.58,3,3.25,3.25,0,0,1-3.58,3.34,7.4,7.4,0,0,1-4.36-1l.54-1.8a7.47,7.47,0,0,0,3.48.86c.78,0,1.4-.3,1.4-1.06,0-.6-.22-.82-1-1.12l-1.56-.58c-1.5-.56-2.7-1.32-2.7-3,0-2.16,1.6-3.18,3.84-3.18a6.13,6.13,0,0,1,3.5.84Z"/>
                          <path className="cls-2" d="M651.27,225.52h-2.78v-2.29h2.78Zm0,12.16h-2.76V227.3h2.76Z"/>
                          <path className="cls-2" d="M655.87,242.44l-.2-2.14h1.1c3,0,4.08,0,4.08-3.18v-.84a3.21,3.21,0,0,1-3,1.4c-2.66,0-4.84-2-4.84-5.36,0-3.6,2.4-5.42,4.68-5.42h0a3.5,3.5,0,0,1,3.1,1.42v-1h2.76V237c0,3.76-1.44,5.4-6.4,5.4Zm2.54-6.78c1.48,0,2.56-1.26,2.56-3.32s-1.1-3.38-2.56-3.4h-.06c-1.74,0-2.64,1.32-2.64,3.4s1.1,3.32,2.62,3.32Z"/>
                          <path className="cls-2" d="M670.89,228.94a3.2,3.2,0,0,0-2.54,1.66v7.08h-2.78V227.3h2.32l.22,1.38a4.84,4.84,0,0,1,3.68-1.78c2.52,0,3.6,1.9,3.6,4.46v6.32h-2.78v-6.06C672.61,230.18,672.53,228.94,670.89,228.94Z"/>
                        </g>
                      </a>
                      
                      <a href="/process/prototype">
                        <g id="Prototype">
                          <rect className="cls-1" x="825" y="123.19" width="175" height="50"/>
                          <path className="cls-2" d="M868.78,153.38V139.26h4.72c3.4,0,5.6,1.32,5.6,4.4,0,2.54-1.2,4.6-5.36,4.6-.6,0-1.32,0-2-.06v5.18Zm7.5-9.58v0c0-1.54-1-2.38-2.76-2.38H871.7v4.8c.24,0,1,0,1.58,0C875.84,146.2,876.28,145,876.28,143.8Z"/>
                          <path className="cls-2" d="M886,143l.14,2.1h-.74c-2,0-2.32,1-2.32,2.56v5.72h-2.76V143h2.56l.2,1.42a2.9,2.9,0,0,1,2.64-1.42Z"/>
                          <path className="cls-2" d="M896.74,148.12c0,3.16-1.74,5.46-5.12,5.46s-5.12-2.3-5.12-5.46,1.74-5.52,5.12-5.52S896.74,144.9,896.74,148.12Zm-2.64,0c0-2.32-1-3.48-2.48-3.48s-2.46,1.16-2.46,3.48,1,3.44,2.46,3.44S894.1,150.38,894.1,148.12Z"/>
                          <path className="cls-2" d="M901.64,149.08c0,1.76.1,2.32,1.62,2.32l.88-.06.16,2s-1,.12-1.56.12c-3.22,0-3.86-1.54-3.86-4.58v-4.26h-1.8l.16-1.66h1.64l.68-3.78h2.08V143h2.56v1.66h-2.56Z"/>
                          <path className="cls-2" d="M915.76,148.12c0,3.16-1.74,5.46-5.12,5.46s-5.12-2.3-5.12-5.46,1.74-5.52,5.12-5.52S915.76,144.9,915.76,148.12Zm-2.64,0c0-2.32-1-3.48-2.48-3.48s-2.46,1.16-2.46,3.48,1,3.44,2.46,3.44S913.12,150.38,913.12,148.12Z"/>
                          <path className="cls-2" d="M920.66,149.08c0,1.76.1,2.32,1.62,2.32l.88-.06.16,2s-1,.12-1.56.12c-3.22,0-3.86-1.54-3.86-4.58v-4.26h-1.8l.16-1.66h1.64l.68-3.78h2.08V143h2.56v1.66h-2.56Z"/>
                          <path className="cls-2" d="M927.94,153l-4.18-10h2.78l2.74,6.92,2.36-6.92h2.86l-4.26,11.08c-1,2.7-2.18,3.3-4.42,3.3h-1.34l-.26-2h.72C926.76,155.4,927.22,155.54,927.94,153Z"/>
                          <path className="cls-2" d="M938.16,144.38a3.06,3.06,0,0,1,3.08-1.78c3.18,0,4.72,2.74,4.72,5.44,0,3-1.6,5.52-4.62,5.54h-.06a3.27,3.27,0,0,1-3.06-1.48v5l-2.76.28V143H938Zm5.14,3.74c0-2.78-1.34-3.48-2.56-3.48s-2.54.84-2.54,3.48,1.3,3.42,2.62,3.42S943.3,150.7,943.3,148.12Z"/>
                          <path className="cls-2" d="M949.92,148.74a2.63,2.63,0,0,0,2.92,2.84,5.16,5.16,0,0,0,3-.92l.76,1.7a5.94,5.94,0,0,1-3.84,1.22c-3.6,0-5.54-2.14-5.54-5.48,0-3.06,1.86-5.5,5.08-5.5s4.62,2.5,4.62,5.28v0c0,.26,0,.52,0,.78v0Zm4.46-1.48v-.1c0-1.68-.74-2.52-2.06-2.52-.9,0-2.24.54-2.38,2.62Z"/>
                        </g>
                      </a>
                      
                      <a href="/process/wireframes">
                        <g id="Wireframes"><rect className="cls-1" x="825" y="263.14" width="175" height="50"/>
                          <path className="cls-2" d="M865.94,289.55l3.52-10.34h2.4L875,289.65l3.13-10.44H881l-4.55,14.12h-2.74l-3-10.38-3.48,10.38h-2.7l-4.1-14.12h2.8Z"/>
                          <path className="cls-2" d="M884.82,281.17H882v-2.28h2.78Zm0,12.16H882V283h2.76Z"/>
                          <path className="cls-2" d="M892.62,283l.14,2.1H892c-2,0-2.32,1-2.32,2.56v5.72h-2.76V283h2.56l.2,1.42a2.9,2.9,0,0,1,2.64-1.42Z"/>
                          <path className="cls-2" d="M895.8,288.69a2.63,2.63,0,0,0,2.92,2.84,5.16,5.16,0,0,0,3-.92l.76,1.7a5.94,5.94,0,0,1-3.84,1.22c-3.6,0-5.54-2.14-5.54-5.48,0-3.06,1.86-5.5,5.08-5.5s4.62,2.5,4.62,5.28v0c0,.26,0,.52,0,.78v0Zm4.46-1.48v-.1c0-1.68-.74-2.52-2.06-2.52-.9,0-2.24.54-2.38,2.62Z"/>
                          <path className="cls-2" d="M909,278.23h.92l.24,2.06h-.9c-1.24,0-1.5.52-1.5,1.8V283h2.32v1.64h-2.32v8.74H905v-8.74h-1.68V283H905v-.32C905,279.87,905.32,278.23,909,278.23Z"/>
                          <path className="cls-2" d="M916.74,283l.14,2.1h-.74c-2,0-2.32,1-2.32,2.56v5.72h-2.76V283h2.56l.2,1.42a2.9,2.9,0,0,1,2.64-1.42Z"/>
                          <path className="cls-2" d="M920.52,293.53c-1.94,0-3.28-1.14-3.28-3,0-2.64,1.84-3.06,5.28-3.56l.74-.12v-.48c0-1.22-.1-1.74-1.52-1.8h-.14a12.91,12.91,0,0,0-3.22.72l-.54-2a10.24,10.24,0,0,1,4-.78h.24c2.4,0,4,1.12,4,3.38v7.4h-2.12l-.28-1.12A4.55,4.55,0,0,1,920.52,293.53Zm2.74-2.64v-2.46l-.74.12c-1.54.22-2.8.46-2.8,1.9a1.18,1.18,0,0,0,1.28,1.3A3.67,3.67,0,0,0,923.26,290.89Z"/>
                          <path className="cls-2" d="M930.78,293.33H928V283h2.34l.22,1.38a4.69,4.69,0,0,1,3.52-1.78h.12a2.67,2.67,0,0,1,2.68,1.76,4.58,4.58,0,0,1,3.62-1.76h.12c2.56,0,3.42,1.92,3.42,4.42v6.36H941.3v-5.78c0-2-.16-3-1.38-3h-.06a2.75,2.75,0,0,0-2.4,1.66v7.08H934.7v-6c0-1.58-.18-2.78-1.56-2.78a2.84,2.84,0,0,0-2.36,1.64Z"/>
                          <path className="cls-2" d="M948.28,288.69a2.63,2.63,0,0,0,2.92,2.84,5.16,5.16,0,0,0,3-.92l.76,1.7a5.94,5.94,0,0,1-3.84,1.22c-3.6,0-5.54-2.14-5.54-5.48,0-3.06,1.86-5.5,5.08-5.5s4.62,2.5,4.62,5.28v0c0,.26,0,.52,0,.78v0Zm4.46-1.48v-.1c0-1.68-.74-2.52-2.06-2.52-.9,0-2.24.54-2.38,2.62Z"/>
                          <path className="cls-2" d="M963.28,285.19a7.16,7.16,0,0,0-2.8-.64c-1.12,0-1.58.28-1.62.86s.28.9,1.18,1.22l1.6.56a3.32,3.32,0,0,1,2.58,3,3.25,3.25,0,0,1-3.58,3.34,7.4,7.4,0,0,1-4.36-1l.54-1.8a7.47,7.47,0,0,0,3.48.86c.78,0,1.4-.3,1.4-1.06,0-.6-.22-.82-1-1.12l-1.56-.58c-1.5-.56-2.7-1.32-2.7-3,0-2.16,1.6-3.18,3.84-3.18a6.13,6.13,0,0,1,3.5.84Z"/>
                        </g>
                      </a>

                      <g id="Build">
                        <rect className="cls-4" x="825" y="408.88" width="175" height="50"/>
                        <path className="cls-5" d="M895.2,439.07h-5.36V425h4.8c3.24,0,5.74.66,5.74,3.58a3.19,3.19,0,0,1-1.8,2.88,3.52,3.52,0,0,1,2.26,3.52C900.84,437.93,898.5,439.07,895.2,439.07ZM894.12,427h-1.36v3.62H895c1.62,0,2.58-.36,2.58-1.64C897.56,427.11,896.26,427,894.12,427Zm.88,5.56h-2.24v4.58h2.06c2,0,3.14-.48,3.14-2.26S897,432.51,895,432.51Z"/>
                        <path className="cls-5" d="M902.34,428.69h2.76v6.58c0,1.46.74,2,2,2a1.73,1.73,0,0,0,2-2v-6.58h2.78v6.62c0,2.68-1.94,4-4.76,4s-4.72-1.24-4.72-4Z"/>
                        <path className="cls-5" d="M916.72,426.91h-2.78v-2.28h2.78Zm0,12.16h-2.76V428.69h2.76Z"/>
                        <path className="cls-5" d="M921.76,435c0,1.58.14,2.12,1.62,2.12a1.93,1.93,0,0,0,.58,0l.12,2a7.32,7.32,0,0,1-1.44.12c-3.14,0-3.64-1.9-3.64-4.56v-10l2.76-.18Z"/>
                        <path className="cls-5" d="M932.6,437.61a3.14,3.14,0,0,1-3,1.66h-.14c-3-.06-4.62-2.42-4.62-5.54,0-2.92,1.66-5.44,4.7-5.44a3.1,3.1,0,0,1,3,1.58v-5.42h2.76v14.62h-2.7Zm0-3.8c0-2.64-1.28-3.48-2.52-3.48s-2.58.7-2.58,3.48,1.34,3.42,2.58,3.42S932.64,436.49,932.64,433.81Z"/>
                      </g>

                      <g id="Test">
                        <rect className="cls-4" x="825" y="568.19" width="175" height="50"/>
                        <path className="cls-5" d="M900.45,598.38h-2.9v-12h-4.12v-2.15h11.16v2.15h-4.14Z"/>
                        <path className="cls-5" d="M907.67,593.74a2.63,2.63,0,0,0,2.92,2.84,5.16,5.16,0,0,0,3-.92l.76,1.7a5.94,5.94,0,0,1-3.84,1.22c-3.6,0-5.54-2.14-5.54-5.48,0-3.06,1.86-5.5,5.08-5.5s4.62,2.5,4.62,5.28v0c0,.26,0,.52,0,.78v0Zm4.46-1.48v-.1c0-1.68-.74-2.52-2.06-2.52-.9,0-2.24.54-2.38,2.62Z"/>
                        <path className="cls-5" d="M922.67,590.24a7.16,7.16,0,0,0-2.8-.64c-1.12,0-1.58.28-1.62.86s.28.9,1.18,1.22l1.6.56a3.32,3.32,0,0,1,2.58,3,3.25,3.25,0,0,1-3.58,3.34,7.4,7.4,0,0,1-4.36-1l.54-1.8a7.47,7.47,0,0,0,3.48.86c.78,0,1.4-.3,1.4-1.06,0-.6-.22-.82-1-1.12l-1.56-.58c-1.5-.56-2.7-1.32-2.7-3,0-2.16,1.6-3.18,3.84-3.18a6.13,6.13,0,0,1,3.5.84Z"/>
                        <path className="cls-5" d="M928.31,594.08c0,1.76.1,2.32,1.62,2.32l.88-.06.16,2s-1,.12-1.56.12c-3.22,0-3.86-1.54-3.86-4.58v-4.26h-1.8l.16-1.66h1.64l.68-3.78h2.08V588h2.56v1.66h-2.56Z"/>
                      </g>
                      
                      <g id="Arrows">
                        <path d="M233,148.2H209v4h24v6l8-8-8-8Z"/>
                        <path d="M512.77,213.12l-17-17L493,199l17,17-4.24,4.24,11.3,0v-11.3Z"/>
                        <path d="M785.93,202.42l-17,17,2.83,2.83,17-17,4.24,4.25v-11.3l-11.3,0Z"/>
                        <path d="M773.23,78.26l17,17L793,92.42l-17-17,4.24-4.24H769V82.5Z"/>
                        <path d="M647.09,156.27v-24h-4v24h-6l8,8,8-8Z"/>
                        <path d="M914.09,226.28v-24h-4v24h-6l8,8,8-8Z"/>
                        <path d="M914.09,372.28v-24h-4v24h-6l8,8,8-8Z"/>
                        <path d="M914.09,528.28v-24h-4v24h-6l8,8,8-8Z"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-three">
            <div className="outer-container">
              <div 
                className="col"
                data-sal="slide-up"
                data-sal-duration="300"
                data-sal-delay="600"
                data-sal-easing="easeOutQuart"
              >
                <h2>See how I have put UX into practice shaping the end result</h2>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  href="/work"
                >
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}