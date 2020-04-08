import React from "react"
import Layout from "../components/layout"
import BodyClassName from 'react-body-classname'
import Particles from 'react-particles-js'
import Logo from "../components/logo"
import Button from '@material-ui/core/Button'
import { Tween, Timeline } from "react-gsap"
import "../scss/index.scss"

export default () => {
  
  return (
    <Layout pageTitle="Home" pageClass="page-home-page">
      <BodyClassName className="page-home-page">
        <section className="hero-section">
          <div className="outer-container">
            <div className="logo logo-large">
              <Logo />
            </div>
            <Timeline delay={4.5}>
              <Tween
                staggerFrom={{
                  opacity: 0
                }}
                staggerTo={{
                  opacity: 1
                }}
                stagger={0.25}
                duration={1}
                wrapper={
                  <div className="subtitle" />
                }
              >
                <h2>Transforming your digital ideas into reality with expertise in UX, end to end project management including design, build and testing.</h2>
                <p>Take me to…</p>
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
                <Button variant="contained" color="primary" href="/about">
                  About
                </Button>
                <Button variant="contained" color="primary" href="/work">
                  Work
                </Button>
                <Button variant="contained" color="primary" href="/process">
                  Process
                </Button>
                <Button variant="contained" color="primary" href="/contact">
                  Contact
                </Button>
              </Tween>
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                duration={1}
              >
                <Particles
                  className="particles"
                  params={{
                    "particles": {
                      "number": {
                        "value": 80,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": "#ddd"
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        },
                        "polygon": {
                          "nb_sides": 5
                        },
                      },
                      "opacity": {
                        "value": 0.8,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 40,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": {
                          "value": "#ddd",
                        },
                        "opacity": 1,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }} 
                />
              </Tween>
            </Timeline>
          </div>
        </section>
      </BodyClassName>
    </Layout>
  )
}
