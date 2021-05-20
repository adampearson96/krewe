import React from "react"
import { Tween, Timeline } from "react-gsap"

export default () => {
  return (
    <Timeline
      wrapper={
        <svg viewBox="0 0 575 395"xmlns="http://www.w3.org/2000/svg" id="logo" />
      }
    >

      <Tween 
        staggerFrom={{
          opacity: 0
        }}
        staggerTo={{
          opacity: 1
        }}
        stagger={0.1}
        duration={2}
      >
        <rect fill="#FFFFFF" x="0" y="0" width="575" height="395"></rect>
        <rect id="Rectangle" stroke="#F8F6F0" fill="#F8F6F0" x="-19.5" y="0.5" width="594" height="394"></rect>
        <rect id="Rectangle" stroke="#99D9DA" fill="#99D9DA" x="346.5" y="0.5" width="146" height="139"></rect>
        <rect id="Rectangle" stroke="#F4367D" fill="#F4367D" x="91.5" y="70.5" width="322" height="172"></rect>
        <rect id="Rectangle" stroke="#F09212" fill-opacity="0.9" fill="#F09212" x="142.5" y="0.5" width="135" height="172"></rect>
        <rect id="Rectangle" stroke="#F09212" fill-opacity="0.9" fill="#F09212" x="346.5" y="277.5" width="203" height="117"></rect>
        <rect id="Rectangle" stroke="#F4367D" fill="#F4367D" x="278.5" y="243.5" width="135" height="127"></rect>
        <rect id="Rectangle" stroke="#AB50D1" fill-opacity="0.9" fill="#AB50D1" x="222.5" y="173.5" width="270" height="103"></rect>
        <rect id="Rectangle" stroke="#AB50D1" fill="#AB50D1" x="47.5" y="231.5" width="135" height="103"></rect>
      </Tween>
      <Tween
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        duration={1}
        delay={-.25}
      >
        <text id="EMMA-MARSH-FREELANCE" font-family="Montserrat-ExtraBold, Montserrat" font-size="48" font-weight="600" fill="#000000">
            <tspan x="1" y="173">EMMA MARSH</tspan>
            <tspan x="1" y="231">FREELANCE</tspan>
        </text>
        <line x1="9.5" y1="257.5" x2="142.5" y2="257.5" id="Line" stroke="#000000" stroke-width="12" stroke-linecap="square"></line>
      </Tween>
    </Timeline>   
  )
}