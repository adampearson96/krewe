import React from "react"
import Layout from "../components/layout"
import { Tween } from "react-gsap"

import "../scss/landing-page-animation.scss"

export default () => {

  // useEffect(() => {
  //   tl
  //     
  //     
  //     .to(horizontalBlackSquares, 0.5, {x: 100})
  //     .to(verticalPurpleSquares, 0.5, {x: 100})
  //     .to(angledBlackShape, 0.5, {x: 100})

  // }, [])
  
  return (
    <Layout>
      <div>Hello world!</div>
        <Tween
          from={{ opacity: 1 }}
          to={{ opacity: 0 }}
          duration={1}
          delay={2}
        >
          <section className="landing-page-animation">
            <div className="landing-page-animation-outer-container">
              <Tween
                from={{ left: 'calc(53% + 0px)', top: 'calc(64% + 0px)' }}
                to={{ left: 'calc(50% - 50px)', top: 'calc(50% - 75px)' }}
                duration={2}
              >
                <div className="angled-blue-shape">
                  <div className="shape"></div>
                </div>
              </Tween>
              <Tween
                from={{ left: 'calc(0% + 27px)', top: 'calc(100% - 135px)' }}
                to={{ left: 'calc(50% - 100px)', top: 'calc(50% - 75px)' }}
                duration={2}
              >
                <div className="three-squares">
                  <div className="square square-1"></div>
                  <div className="square square-2"></div>
                  <div className="square square-3"></div>
                </div>
              </Tween>
              <Tween
                from={{ left: 'calc(66% + 0px)', top: 'calc(53% + 0px)' }}
                to={{ left: 'calc(50% - 100px)', top: 'calc(50% - 75px)' }}
                duration={2}
              >
                <div className="horizontal-purple-squares">
                  <div className="square square-1"></div>
                  <div className="square square-2"></div>
                </div>
              </Tween>
              <Tween
                from={{ left: 'calc(20% - 0px)', top: 'calc(42% - 0px)' }}
                to={{ left: 'calc(50% - 100px)', top: 'calc(50% - 25px)' }}
                duration={2}
              >
                <div className="orange-square"></div>
              </Tween>
              <Tween
                from={{ left: 'calc(40% + 0px)', top: 'calc(8% + 0px)' }}
                to={{ left: 'calc(50% + 0px)', top: 'calc(50% + 25px)' }}
                duration={2}
              >
                <div className="horizontal-black-squares">
                  <div className="square square-1"></div>
                  <div className="square square-2"></div>
                </div>
              </Tween>
              <Tween
                from={{ left: 'calc(80% - 0px)', top: 'calc(5% + 0px)' }}
                to={{ left: 'calc(50% + 50px)', top: 'calc(50% - 75px)' }}
                duration={2}
              >
                <div className="vertical-purple-squares">
                  <div className="square square-1"></div>
                  <div className="square square-2"></div>
                </div>
              </Tween>
              <Tween
                from={{ left: 'calc(80% + 0px)', top: 'calc(27% + 0px)' }}
                to={{ left: 'calc(50% - 50px)', top: 'calc(50% - 75px)' }}
                duration={2}
              >
                <div className="angled-black-shape">
                  <div className="shape"></div>
                </div>
              </Tween>
            </div>
          </section>
        </Tween>
    </Layout>
  )
}
