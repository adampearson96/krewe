import React from "react"
import Layout from "../components/layout"
import BodyClassName from 'react-body-classname'
import { graphql } from "gatsby"
import Button from '@material-ui/core/Button'


import scary from "../media/scary.gif"
import diy from "../media/diy.gif"
import icecream from "../media/icecream.gif"

import iconOne from "../media/icon-box-one.svg"
import iconTwo from "../media/icon-box-two.svg"
import iconBridgeTheGap from "../media/icon-bridge-the-gap.svg"
import iconCommunication from "../media/icon-communication.svg"
import iconJoinTheDots from "../media/icon-join-the-dots.svg"
import iconUserJourney from "../media/icon-user-journey.svg"

import "../scss/about.scss"

export default ({ data }) => {
  
  return (
    <Layout pageTitle="About">
      <BodyClassName className="page-about-page">
        <div>
          <section className="page-title">
            <div className="outer-container">
              <h1>About</h1>
            </div>
          </section>
          <section className="content-container">
            <div className="row row-one">
              <div className="outer-container">
                <div className="col">
                  <div className="content">
                    <h2>Hi there, welcome to <span>KREWE</span>.</h2>
                    <p>
                      Who is KREWE you may ask?
                      <br />
                      Quite simply, I am a freelancer integrating many different ideas, disciplines and skills to create one meaningful and relevant experience for users. 
                    </p>
                    <p>I believe a product, a service and an experience are more successful when each discipline works in harmony - one unit, one interaction, one connection - one KREWE.</p>
                    <p>KREWE joins the dots, joining different stages through product creation, service and experience, making them all work together seamlessly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-two">
              <div className="outer-container">
                <div className="col">
                  <div className="wrapper">
                    <img src={iconBridgeTheGap} alt="" />
                    <p><strong>Bridging the gap</strong> between human and digital experience</p>
                  </div>
                </div>
                <div className="col">
                  <div className="wrapper">
                    <img src={iconUserJourney} alt="" />
                    <p><strong>Simplifying the user journey</strong> to the end goal</p>
                  </div>
                </div>
                {/* <div className="col">
                  <div className="wrapper">
                    <img src={iconJoinTheDots} alt="" />
                    <p><strong>Join the dots</strong> for a better experience</p>
                  </div>
                </div> */}
                <div className="col">
                  <div className="wrapper">
                    <img src={iconCommunication} alt="" />
                    <p><strong>Communicating information</strong> for an engaging interaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-three">
              <div className="outer-container">
                <div 
                  className="col-full"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart"
                >
                  <h2>How can <span>KREWE</span> work for you?</h2>
                </div>
                <div className="col">
                  <div 
                    className="icon"
                    data-sal="slide-up"
                    data-sal-duration="300"
                    data-sal-delay="600"
                    data-sal-easing="easeOutQuart"
                  >
                    <img src={iconOne} alt="" />
                    <div className="content">
                      <h3>Part of your KREWE</h3>
                      <p>Working as part of your team to deliver a project, product or service.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div 
                    className="content"
                    data-sal="slide-up"
                    data-sal-duration="300"
                    data-sal-delay="600"
                    data-sal-easing="easeOutQuart"
                  >
                    <img src={iconTwo} alt="" />
                    <div className="content">
                      <h3>Use my KREWE</h3>
                      <p>Have a product in mind? With expertise in UX, design, build and testing, KREWE can deliver for you.</p>
                    </div>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      href="/process"
                    >
                      View UX process
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-four">
              <div className="outer-container">
                <div className="col">
                  <div 
                    className="content"
                    data-sal="slide-up"
                    data-sal-duration="300"
                    data-sal-delay="600"
                    data-sal-easing="easeOutQuart"
                  >
                    <h2>Background and skills</h2>
                    <p>I have worked in integrated agencies for over 10 years, managing and delivering projects on and offline. In the last two years, working in a digital department has allowed me to deliver bespoke websites, micro-sites and ideas to support clients with their annual strategies. Implementing UX across all websites creates the building blocks for design, successful build and flow to user experience.</p>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      href="/portfolio"
                    >
                      View my portfolio
                    </Button>
                  </div>
                </div>
                <div className="col">
                  <div 
                    className="content"
                    data-sal="slide-up"
                    data-sal-duration="300"
                    data-sal-delay="600"
                    data-sal-easing="easeOutQuart"
                  >
                    <ul>
                      <li>Sketch</li>
                      <li>InVision</li>
                      <li>Balsamiq</li>
                      <li>Vectorworks</li>
                      <li>ScreenFlow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-five">
              <div className="outer-container">
                <div 
                  className="col"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart"
                >
                  <h2>Who knew I liked…</h2>
                </div>
              </div>
            </div>
            <div className="row row-six">
              <div className="outer-container">
                <div 
                  className="col"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart"
                >
                  <div className="content">
                    <h3>I love a good</h3>
                    <p>Scary Movie</p>
                  </div>
                  <img src={scary} alt="" />
                </div>
                <div 
                  className="col"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart"
                >
                  <div className="content">
                    <h3>I'm a dab hand at</h3>
                    <p>DIY</p>
                  </div>
                  <img src={diy} alt="" />
                </div>
                <div className="col"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart"
                >
                  <div className="content">
                    <h3>I don't want to be right, if this is wrong…</h3>
                    <p>Chips &amp; Ice Cream!</p>
                  </div>
                  <img src={icecream} alt="" />
                </div>
                <div 
                  className="col button"
                  data-sal="slide-up"
                  data-sal-duration="300"
                  data-sal-delay="600"
                  data-sal-easing="easeOutQuart"
                >
                  <div className="content">
                    <h3>Want to know more about my work experience?</h3>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      href={data.cv.publicURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </BodyClassName>
    </Layout>
  )
}

export const query = graphql`
  query {
    cv: file(extension: {eq: "pdf"}, name: {eq: "cv"}) {
      publicURL
    }
  }
`