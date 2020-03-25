import React from "react"
import Layout from "../components/layout"
import BodyClassName from 'react-body-classname';
import Logo from "../components/logo"
import { Link } from "gatsby"
import { Tween, Timeline } from "react-gsap"

import "../scss/index.scss"

export default () => {
  
  return (
    <Layout>
      <BodyClassName className="page-home-page">
        <section className="hero-section">
          <div className="outer-container">
            <div className="logo logo-large">
              <Logo />
            </div>
            <Timeline delay={4.5}>
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                duration={1}
              >
                <div className="subtitle">
                  <p>Take me to…</p>
                </div>
              </Tween>
              <Tween
                staggerFrom={{
                  opacity: 0
                }}
                staggerTo={{
                  opacity: 1
                }}
                stagger={0.15}
                duration={1}
                wrapper={
                  <div className="links" />
                }
              >
                <Link className="btn" to="/about">About</Link>
                <Link className="btn" to="/work">Work</Link>
                <Link className="btn" to="/process">Process</Link>
                <Link className="btn" to="/contact">Contact</Link>
              </Tween>
            </Timeline>
          </div>
        </section>
      </BodyClassName>
    </Layout>
  )
}
