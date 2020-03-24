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
            <Tween
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              duration={1}
              delay={4}
            >
              <div className="subtitle">
                <p>Take me to……</p>
              </div>
            </Tween>
            <div className="links">
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                duration={.5}
                delay={5}
              >
                <Link className="btn" to="/about">About</Link>
              </Tween>
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                duration={.5}
                delay={5.25}
              >
                <Link className="btn" to="/work">Work</Link>
              </Tween>
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                duration={.5}
                delay={5.5}
              >
                <Link className="btn" to="/process">Process</Link>
              </Tween>
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                duration={.5}
                delay={5.75}
              >
                <Link className="btn" to="/contact">Contact</Link>
              </Tween>
            </div>
          </div>
        </section>
      </BodyClassName>
    </Layout>
  )
}
