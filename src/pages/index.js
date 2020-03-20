import React from "react"
import Layout from "../components/layout"
import { Tween } from "react-gsap"
import { Link } from "gatsby"

import "../scss/landing-page-animation.scss"
import "../scss/index.scss"

import logoWhite from "../media/krewe-logo-white.svg";

export default () => {
  
  return (
    <Layout>
      <div id="page-home-page">
        <section className="hero-section">
          <div className="outer-container">
            <div className="logo">
              <img src={logoWhite} alt="" />
            </div>
            <div className="subtitle">
              <p>Take me to……</p>
            </div>
            <div className="links">
              <Link className="btn" to="/about">About</Link>
              <Link className="btn" to="/">Work</Link>
              <Link className="btn" to="/">Process</Link>
              <Link className="btn" to="/">Contact</Link>
            </div>
          </div>
        </section>
        <Tween
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={1}
          delay={3}
        >
          <section className="landing-page-animation">
            <Tween
              from={{ x: 0, y: 0 }}
              to={{ x: -28, y: -69 }}
              duration={1}
              delay={2}
            >
              <div className="landing-page-animation-outer-container">
                <Tween
                  from={{ left: 'calc(53% + 0px)', top: 'calc(64% + 0px)' }}
                  to={{ left: 'calc(50% - 40px)', top: 'calc(50% - 60px)' }}
                  duration={2}
                >
                  <div className="angled-blue-shape">
                    <div className="shape"></div>
                  </div>
                </Tween>
                <Tween
                  from={{ left: 'calc(0% + 27px)', top: 'calc(100% - 135px)' }}
                  to={{ left: 'calc(50% - 80px)', top: 'calc(50% - 60px)' }}
                  duration={2}
                >
                  <div className="two-squares">
                    <div className="square square-1"></div>
                    <div className="square square-2"></div>
                  </div>
                </Tween>
                <Tween
                  from={{ left: 'calc(66% + 0px)', top: 'calc(53% + 0px)' }}
                  to={{ left: 'calc(50% - 80px)', top: 'calc(50% - 60px)' }}
                  duration={2}
                >
                  <div className="horizontal-purple-squares">
                    <div className="square square-1"></div>
                    <div className="square square-2"></div>
                  </div>
                </Tween>
                <Tween
                  from={{ left: 'calc(20% - 0px)', top: 'calc(42% - 0px)' }}
                  to={{ left: 'calc(50% - 80px)', top: 'calc(50% - 20px)' }}
                  duration={2}
                >
                  <div className="orange-square"></div>
                </Tween>
                <Tween
                  from={{ left: 'calc(40% + 0px)', top: 'calc(8% + 0px)' }}
                  to={{ left: 'calc(50% - 20px)', top: 'calc(50% - 20px)' }}
                  duration={2}
                >
                  <div className="horizontal-white-squares">
                    <div className="square square-1"></div>
                    <div className="square square-2"></div>
                  </div>
                </Tween>
                <Tween
                  from={{ left: 'calc(80% - 0px)', top: 'calc(5% + 0px)' }}
                  to={{ left: 'calc(50% + 40px)', top: 'calc(50% - 60px)' }}
                  duration={2}
                >
                  <div className="vertical-purple-squares">
                    <div className="square square-1"></div>
                    <div className="square square-2"></div>
                  </div>
                </Tween>
                <Tween
                  from={{ left: 'calc(80% + 0px)', top: 'calc(27% + 0px)' }}
                  to={{ left: 'calc(50% - 40px)', top: 'calc(50% - 60px)' }}
                  duration={2}
                >
                  <div className="angled-white-shape">
                    <div className="shape"></div>
                  </div>
                </Tween>
              </div>
            </Tween>
          </section>
        </Tween>
      </div>
    </Layout>
  )
}
