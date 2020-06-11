import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Button from '@material-ui/core/Button'


import scary from "../media/scary.gif"
import diy from "../media/diy.gif"
import icecream from "../media/icecream.gif"

import iconOne from "../media/icon-box-one.svg"
import iconTwo from "../media/icon-box-two.svg"

import "../scss/about.scss"

export default ({ data }) => {
  
  return (
    <Layout pageTitle="About" pageClass="page-about-page">
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
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 378.8 382.4">
                    <path className="fill" d="M237,0l8.8,9.4L206,48.9c8.4,12.4,11.4,25.6,7.4,40c-2.7,10.5-9.3,19.6-18.3,25.6
                      c-20.9,14.3-49.5,8.9-63.7-12C120,85.8,120.8,63.7,133.4,48c12.7-16.1,39.1-24.8,63.8-8c2.3-2.4,4.6-5,7-7.5
                      c10.7-10.8,21.3-21.6,32-32.4L237,0z M202,76.3c-0.3-18-15.2-32.4-33.2-32c-17.6,0.3-31.7,14.5-32,32c-0.3,18,14,32.9,32,33.2
                      c18,0.3,32.9-14,33.2-32C202,77.1,202,76.7,202,76.3z"/>
                    <path className="fill" d="M247.5,115.8v156.3l-116.9-51.9c-1.3,11.9-7.6,18.7-20,19.7c0,5.9,0,11.7,0,17.5c0,10-5,15-14.9,15H84.6v32.5
                      H45.4v-65.1c-6.9-0.3-13.1-2.4-16-8.4c-2.6-5.2-3.3-11.4-5-17.8H0v-39.1h25.9c0-2.9,0-5.4,0-7.8c0.1-10.1,8.3-18.3,18.4-18.4
                      c22.5-0.1,44.9-0.1,67.3,0c9.6-0.1,17.6,7.2,18.5,16.7c0.1,0.7,0.2,1.5,0.4,2.8L247.5,115.8z"/>
                    <path className="fill" d="M234.4,331L183,382.4l-71.5-71.5c0.2-0.3,1-1.2,1.9-2c11.4-11.4,22.7-22.8,34.2-34.1c1.5-1.4,3.4-2.2,5.4-2.3
                      c6.9-0.3,13.7-0.2,20.6,0c1.4,0,2.8,0.6,3.9,1.5c18.9,18.7,37.7,37.5,56.4,56.3C234.1,330.5,234.2,330.7,234.4,331z M154.1,328.4
                      l25.3-25.3l-7.8-8.6l-25.8,25.7L154.1,328.4z M173.5,347.7c8.8-8.6,17.4-17,26-25.4l-8-8.3l-25.7,25.7L173.5,347.7z"/>
                    <path className="fill" d="M332.2,5.2l46,46c-1.9,1.8-4.2,3.7-6.3,5.8c-14.5,14.4-28.9,28.9-43.4,43.3c-1.5,1.4-3.4,2.2-5.4,2.3
                      c-13,0.2-25.9,0.1-38.9,0.1h-3.6V79.1c0-6.6-0.1-13.2,0.1-19.8c0-1.3,0.4-2.6,1.3-3.6C298.5,38.8,315.4,22,332.2,5.2
                      C332.3,5.1,332.5,5.1,332.2,5.2z M310,63.5c-5.4-0.1-9.9,4.1-10,9.5c0,0,0,0,0,0.1c0,5.4,4.2,9.8,9.6,10c5.4,0.1,9.8-4.2,9.9-9.5
                      c0,0,0,0,0-0.1c0.2-5.3-3.9-9.7-9.1-9.9C310.2,63.5,310.1,63.5,310,63.5z"/>
                    <path className="fill" d="M268.5,305.2l45.8-45.7l64.5,64.6l-46.2,45.1L268.5,305.2z M321.7,278.2l-12.6,1c-0.1,0.3-0.2,0.7-0.3,1
                      c1,13.3,1.9,26.6,3,39.9c0.1,3,2.5,5.5,5.6,5.6c3.8,0.4,7.7,0.7,11.5,1c9.9,0.8,19.8,1.5,30.2,2.3c0.3-4.4,0.6-8.5,0.9-13
                      c-10.4-0.8-20.4-1.7-30.5-2.4c-5.4-0.4-5.4-0.3-5.8-5.9C323.2,298.1,322.5,288.4,321.7,278.2L321.7,278.2z"/>
                    <path className="fill" d="M313,197.6c0.5-1.4,0.8-2.6,1.2-3.7c2.6-7.5,9.6-12.7,17.6-12.9c4.9-0.2,9.7-0.2,14.6,0
                      c10.1,0.2,18.3,8.2,18.7,18.3c0.3,11.1,0.1,22.1,0.1,33.5h-51.9v-12.6h-38.7c0-8.5-0.8-16.8,0.2-24.8s9.2-13.9,17.5-14.3
                      c8.9-0.4,16.6,4.6,19.5,12.7C312.3,194.9,312.6,196.1,313,197.6z"/>
                    <path className="fill" d="M339.1,135.3c10.8-0.1,19.6,8.6,19.7,19.3c0,10.8-8.7,19.6-19.5,19.7c-10.8,0-19.6-8.7-19.7-19.5l0,0
                      C319.6,144,328.3,135.3,339.1,135.3z"/>
                    <path className="fill" d="M280.5,161.4c0-7.2,5.8-13.1,13-13.1c7.2,0,13.1,5.8,13.1,13c0,7.2-5.8,13.1-13,13.1
                      C286.4,174.4,280.5,168.6,280.5,161.4z"/>
                  </svg>
                  <p><strong>Bridging the gap</strong> between human and digital experience</p>
                </div>
              </div>
              <div className="col">
                <div className="wrapper">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 371.4 371.5">
                    <path className="fill" d="M289.1,196c-0.7-3.4-2.5-4.3-5.7-4.3c-19.8,0.1-39.7,0.1-59.5,0.1c-6.4,0-8.2,1.9-8.2,8.2
                      c0,27.6,0,55.2,0,82.7c-0.1,2.2,0.8,4.3,2.6,5.7c15.1,13.8,19.7,35.8,11.3,54.5c-8.3,18.6-27.3,30-47.6,28.4
                      c-23.6-1.9-42.8-21.5-44-44.9c-1.4-24.2,15.5-45.6,39.3-50l2.3-0.4V95.7l-11.8-3v4.1c0,46.6-0.3,93.1,0.1,139.6
                      c0.1,14.2-9.8,22.5-21.2,21.2c-0.8-0.1-1.7,0-2.8,0v11.7H0.3c-0.1-0.8-0.2-1.6-0.2-2.4c0-10.5-0.1-21,0-31.4
                      c-0.1-14.3,10-26.6,24-29.5c6.2-1.3,12.5-2.5,18.7-3.8c1.7-0.3,3.4-0.8,5-1.5c4.5-2.3,4.3-3.6,1.7-7.7c-3.1-4.8-6.7-7.3-12.6-8.3
                      c-8.9-1.6-14-11.4-12.4-20.3c0.2-1.8-0.1-3.6-1-5.1c-6.6-11.1-7.4-22.5-1.3-33.8s16.2-17.3,29.3-17.6c8.1-0.2,16.2,0.1,24.3,0
                      c1.3,0,2.6-0.4,3.8-1.1c13.9-8.4,30.4-5.8,39.9,6.5c9.7,12.4,8.3,28.7-3.3,40.3c-0.4,0.4-0.8,0.9-1.3,1.4
                      c4.2,5.1,6.1,10.6,4.4,17.1c-1.9,7.7-8.6,13.1-16.5,13.4c-2.6,0.1-3.9,1-5.1,3.2c-1.5,2.7-3.7,5-5.7,7.6c1.8,3.4,4.9,5,8.6,5.7
                      c6.3,1.3,12.7,2.5,19,3.8c14.4,3,24.1,14.9,24.2,29.6c0,3.2,0,6.4,0,10.1c2.2,0,4.2,0.1,6.1,0c3.5-0.3,5.4-2.3,5.8-5.7
                      c0.1-1.1,0.1-2.2,0.1-3.4c0-49.1,0-98.1,0-147.1c0.2-2.5-0.8-4.8-2.6-6.5c-16.3-15.1-20.1-39.5-9.3-58.2
                      C155.2,4.9,177.8-4.4,199.2,2c21.5,6.3,35.8,26.8,34.2,49.1c-1.4,21.2-16.8,40.4-41.5,44.4v180.3l11.7,3v-78.4
                      c0-13.6,7-20.6,20.4-20.6H280c-3.4-5.9-6.7-11.1-9.6-16.6c-9.5-17.8-9.5-35.7,0.6-53.2c12.4-21.4,38.3-31.1,62.6-23.8
                      c28.1,8.5,44,38.2,35.5,66.4c-1.3,4.3-3.1,8.3-5.4,12.1c-5.4,9.1-10.7,18.3-16,27.4c-0.7,1.2-1.3,2.4-2,3.8
                      c7.6,2.8,14.8,6.1,20.1,12.2c7.4,8.3,7.6,18.8,0.1,27.1c-2.3,2.5-4.8,4.7-7.7,6.5c-9.9,6.4-21.1,8.8-32.6,9.7
                      c-15.8,1.2-31.2-0.3-45.5-7.8c-4.4-2.4-8.3-5.5-11.6-9.1c-6.8-7.4-6.5-17.4-0.2-25.3c4.3-5.3,10-8.6,16.1-11.2
                      C285.9,197.2,287.4,196.6,289.1,196z M49.5,213c-8.1,1.7-16.3,3.1-24.4,5.1c-6.5,1.6-11.6,6.1-12.3,12.7
                      c-0.9,8.8-0.2,17.8-0.2,26.6h119.1c0-8,0.2-15.7-0.1-23.4c-0.4-7.6-5.7-14.1-13.1-16c-8.1-1.9-16.3-3.4-24.4-5.1
                      C84.7,232.2,59.7,232.9,49.5,213z M317.5,95.9c-32.4,0-52.3,33.7-36.3,61.9c10.3,18.2,21,36.2,31.6,54.3c2.8,4.7,6.5,4.7,9.3,0
                      c10.5-18.1,21.2-36.1,31.6-54.3C369.7,129.6,349.9,95.9,317.5,95.9L317.5,95.9z M185.6,287.6c-19.8,0-35.9,16.2-35.9,36
                      s16.2,35.9,36,35.9c19.8,0,35.9-16.2,35.9-36c0,0,0,0,0-0.1C221.5,303.6,205.4,287.6,185.6,287.6z M185.8,12
                      c-19.8,0-36,16-36,35.9c0,19.8,16,36,35.9,36c19.8,0,36-16,36-35.9c0,0,0,0,0,0C221.6,28.2,205.6,12.1,185.8,12z M68,119.9
                      c-6.3,0-12.5-0.4-18.7,0.1c-8,0.7-14,5-17.3,12.4c-3,6.1-2.6,13.3,1,19c3.8-0.6,7.1-1,10.3-1.7c2-0.3,3.9-1,5.6-2
                      c4.2-2.7,8.7-5.5,13.5-3.2c11.1,5.3,22.8,5.8,34.7,5.2c7.3-0.4,12.6-4.4,15.4-11.2s1.5-13.1-3.3-18.5s-11.1-7.5-18.3-5.4
                      c-8.4,2.4-12.4,8.6-13.3,17H65.6L68,119.9z M339.6,205.9c-2.8,4.7-5,8.6-7.3,12.4c-7.5,12.6-22.3,12.5-29.8-0.1
                      c-2.3-3.8-4.5-7.7-6.8-11.6c-6.3,1.9-12.1,4.2-16.7,8.5c-4.5,4.2-4.8,8.9-0.1,12.9c3.6,3,7.7,5.4,12.1,7.1
                      c13.1,5,26.7,5.6,40.5,3.4c8.2-1.3,16.1-3.6,22.8-8.7s6.9-11.2-0.2-16.1C349.8,210.7,344.7,208.6,339.6,205.9L339.6,205.9z
                        M89.8,162.6c-0.3-0.3-0.4-0.6-0.6-0.6c-1.2-0.1-2.5-0.1-3.7-0.1c-8.1,0-16.2-1.6-23.7-4.6c-4.8-1.9-7.7-0.1-7.8,5.1
                      c-0.1,4-0.1,8,0,12c0.3,9.9,8.6,17.7,18.5,17.4c9.4-0.3,17-7.8,17.4-17.3C90,170.4,89.8,166.4,89.8,162.6z M71.8,215.7
                      c4.8,0,9.6-3,10.9-7.5c0.3-1.6,0-3.2-0.9-4.6c-0.4-0.7-2.2-0.7-3.4-0.7c-4.4-0.1-8.8-0.1-13.3,0c-1.2,0-3,0-3.4,0.7
                      c-0.9,1.3-1.3,3-1,4.6C62.3,212.6,67.1,215.7,71.8,215.7L71.8,215.7z M41.8,161.7c-3.7,0.7-5.8,2.7-5.7,6.1s2,5.4,5.7,5.8V161.7z
                        M102,173.5c3.9-0.7,6.1-2.8,5.8-6c-0.3-3.4-2.2-5.3-5.8-5.7V173.5z"/>
                    <path className="fill" d="M24.1,293.3v-11.5h83.5v11.5H24.1z"/>
                    <path className="fill" d="M107.7,305.8v11.5H24.3v-11.5H107.7z"/>
                    <path className="fill" d="M24.2,329.7h11.5v11.5H24.2V329.7z"/>
                    <path className="fill" d="M48.2,329.6h11.4v11.6H48.2V329.6z"/>
                    <path className="fill" d="M72.2,329.7h11.5v11.6H72.2V329.7z"/>
                    <path className="fill" d="M107.7,329.8v11.5H96.1v-11.5H107.7z"/>
                    <path className="fill" d="M347.4,138c-0.1,16.5-13.6,29.8-30.1,29.7c-16.5-0.1-29.8-13.6-29.7-30.1c0.1-16.5,13.6-29.8,30-29.7
                      C334.1,107.9,347.5,121.4,347.4,138z M317.6,155.8c9.9,0,18-8.1,17.9-18.1c0-9.9-8.1-18-18.1-17.9c-9.9,0-17.9,8.1-17.9,18
                      C299.5,147.7,307.6,155.8,317.6,155.8L317.6,155.8L317.6,155.8z"/>
                    <path className="fill" d="M173.7,349l-15.6-15.6l8.4-8l6.2,8.2l32.2-32.6l8.3,8.7L173.7,349z"/>
                    <path className="fill" d="M173.1,74c-4.5-4.6-9.2-9.3-13.9-14.1c-0.5-0.5-0.9-1.1-1.5-1.8l8.7-8.3l6.4,8.4l32.1-32.8l8.1,8.9L173.1,74z
                      "/>
                  </svg>

                  <p><strong>Simplifying the user journey</strong> to the end goal</p>
                </div>
              </div>
              {/* <div className="col">
                <div className="wrapper">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 383.3 383.3">
                    <path className="fill" d="M383.3,367.5c-2.4,7.8-6.9,13.5-15.3,15.2c-1.8,0.3-3.7,0.5-5.6,0.5c-24.4,0-48.9,0-73.3,0
                      c-12.8,0-20.8-7.9-20.8-20.7c-0.1-11.9-0.1-23.7,0-35.5c0.2-18.4,12.8-32.1,30.3-33c2-0.1,3.9,0.3,5.7,1.1
                      c14.3,6.2,28.4,6.1,42.8,0.2c3.5-1.2,7.3-1.4,10.8-0.5c13.1,2.9,21.2,11.3,24.5,24.4c0.2,0.7,0.5,1.3,0.7,2L383.3,367.5z
                        M325.6,370.5c12.5,0,24.9,0,37.4,0c4.8,0,7.5-2.4,7.5-6.9c0.1-12.9,0.2-25.7,0-38.5c-0.1-8-5.4-15-13.1-17.3
                      c-2.5-0.7-5.1-0.6-7.5,0.2c-15.6,6.2-33,6.1-48.5-0.1c-2.1-0.7-4.3-0.9-6.4-0.3c-8.6,2.3-13.7,9.4-13.9,19c-0.1,12-0.1,24,0,35.9
                      c0,5.9,2.3,8,8.2,8.1C301.4,370.5,313.5,370.5,325.6,370.5L325.6,370.5z"/>
                    <path className="fill" d="M196.9,0c1.4,0.4,2.8,0.9,4.2,1.2c18.8,4.9,31,22.8,28.6,41.7c-2.6,21-21.7,36-42.7,33.4s-36-21.7-33.4-42.7
                      c2-16.4,14.2-29.6,30.4-32.9c0.8-0.2,1.6-0.5,2.4-0.8H196.9z M191.7,63.8c14.1,0,25.5-11.5,25.5-25.6s-11.5-25.5-25.6-25.5
                      s-25.5,11.5-25.5,25.6c0,0.1,0,0.1,0,0.2c0,14,11.3,25.3,25.3,25.3C191.6,63.8,191.7,63.8,191.7,63.8L191.7,63.8z"/>
                    <path className="fill" d="M57.5,383.2c-12.3,0-24.7,0-37,0s-20.4-8.1-20.4-20.4s-0.1-25,0-37.4c0.1-16.9,13.5-30.8,30.4-31.4
                      c2.1,0,4.2,0.4,6.1,1.3c13.4,5.7,26.9,6.3,40.3,0.5c5.5-2.4,10.6-2.1,15.9-0.4c13.4,4.3,22,16,22.2,30.9c0.2,12.3,0.2,24.7,0,37
                      c-0.2,12.1-8.3,19.9-20.5,19.9S69.8,383.2,57.5,383.2z M57.3,370.5c12.5,0,24.9,0,37.4,0c4.7,0,7.4-2.1,7.5-6.5
                      c0.1-13.3,0.2-26.7-0.2-40c-0.2-7.2-4.4-12.3-10.8-15.5c-3.2-1.7-7-1.9-10.3-0.4c-14.8,6.1-31.5,6.2-46.3,0.1
                      c-4.8-1.9-8.7-1.1-12.7,1.3c-6.1,3.8-9.1,9.5-9.1,16.6c-0.1,12.1,0,24.2,0,36.3c0,5.9,2.3,8.1,8.2,8.1
                      C33.1,370.5,45.2,370.5,57.3,370.5z"/>
                    <path className="fill" d="M191.7,172.4c-12.3,0-24.7,0-37,0c-12.6-0.1-20.5-7.9-20.6-20.6c0-12.2-0.1-24.4,0-36.6
                      c0.2-17.7,14-31.8,30.9-32.1c1.6,0,3.2,0.3,4.6,1c14.6,6.6,29,6.4,43.8,0.2c3.4-1.4,8.1-0.9,11.9,0c13.7,3.4,23.4,15.5,23.6,29.6
                      c0.4,13.2,0.3,26.4,0,39.6c-0.2,10.8-8.3,18.6-19.3,18.8C217.2,172.5,204.4,172.4,191.7,172.4z M191.4,159.6c12.5,0,25,0,37.4,0
                      c5.1,0,7.6-2.3,7.6-7.1c0.1-12.6,0.2-25.2,0-37.8c-0.2-7.7-4-13.5-11-17c-3.2-1.7-7-1.9-10.3-0.5c-15.3,6.1-30.9,6.3-46.3,0.2
                      c-4.8-1.9-8.7-1.2-12.7,1.3c-6.2,3.9-9.2,9.7-9.2,16.9c-0.1,12,0,23.9,0,35.9c0,5.9,2.2,8.1,8.2,8.1
                      C167.2,159.6,179.3,159.6,191.4,159.6L191.4,159.6z"/>
                    <path className="fill" d="M119,56.5c-4.4-2-8.2-3.7-12.1-5.6c-4-1.9-5.4-5.4-3.8-8.8s5.1-4.5,8.9-2.8c8.1,3.6,16.1,7.2,24.1,11
                      c4.3,2,5.4,5.2,3.4,9.6c-4,8.6-8.1,17.1-12.3,25.6c-1.8,3.6-5.5,4.9-8.8,3.2s-4.2-5-2.6-8.7c1.2-2.7,2.5-5.4,4.2-9
                      c-1.8,1-2.9,1.5-3.9,2.2c-41.2,27.5-62.7,66-65,115.4c0,0.6,0,1.2,0,1.9c-0.2,4.8-2.5,7.6-6.4,7.5s-6.4-3-6.3-7.7
                      c0.5-29.9,8.7-57.5,25-82.5c13.3-20.5,31.4-37.4,52.7-49.4C116.9,57.9,117.7,57.3,119,56.5z"/>
                    <path className="fill" d="M331,174.1c-1.9-15.4-6.3-30.4-13.2-44.3c-15.1-30.3-38-52.4-68.8-66.4c-0.9-0.4-1.9-0.8-2.7-1.3
                      c-3.2-1.8-4.4-5.2-2.9-8.3c1.3-3.1,4.9-4.6,8.1-3.2c0,0,0.1,0,0.1,0.1c5.4,2.3,10.6,4.9,15.7,7.8c44,26.1,69.5,64.5,76.4,115.2
                      c0.1,0.8,0.3,1.7,0.5,2.5l1.1,0.9c2.3-2.7,4.5-5.5,7-8.1c3.3-3.4,7.1-3.7,9.8-0.9s2.5,6.6-0.8,9.9c-5.8,5.9-11.6,11.7-17.5,17.5
                      c-3.6,3.6-7,3.6-10.7-0.1c-5.9-5.8-11.7-11.6-17.5-17.5c-3.3-3.3-3.5-6.8-0.9-9.6s6.5-2.7,9.9,0.6c1.8,1.7,3.6,3.5,5.4,5.2
                      C330.2,174,330.3,174,331,174.1z"/>
                    <path className="fill" d="M19.3,249c0.1-21.1,17.3-38.2,38.5-38.1s38.2,17.3,38.1,38.5c-0.1,21.1-17.3,38.2-38.5,38.1
                      c-21,0-38.1-17-38.1-38C19.3,249.3,19.3,249.1,19.3,249z M32.1,249.1c0,14.1,11.4,25.5,25.5,25.6s25.5-11.4,25.6-25.5
                      c0-14.1-11.4-25.5-25.5-25.6c-0.1,0-0.1,0-0.2,0C43.4,223.7,32.1,235.1,32.1,249.1L32.1,249.1z"/>
                    <path className="fill" d="M325.9,210.9c21.1,0,38.2,17.2,38.2,38.4s-17.2,38.2-38.4,38.2c-21.1,0-38.2-17.2-38.2-38.4c0,0,0,0,0,0
                      c-0.1-21,17-38.1,38-38.2C325.6,210.9,325.7,210.9,325.9,210.9z M351.3,249c-0.4-14.1-12.1-25.2-26.2-24.8
                      c-13.5,0.4-24.4,11.3-24.8,24.8c-0.4,14.1,10.7,25.8,24.8,26.2s25.8-10.7,26.2-24.8C351.3,250,351.3,249.5,351.3,249z"/>
                    <path className="fill" d="M157.1,327c28.5,7.8,58.8,6.1,86.3-4.7c1.2-0.5,2.3-0.9,3.5-1.3c3.5-1.1,6.8,0.3,8.1,3.4
                      c1.4,3.1,0,6.8-3.1,8.2c-0.1,0.1-0.3,0.1-0.4,0.2c-6.6,2.7-13.3,5-20.1,6.9c-26.2,7.1-53.9,7.1-80.1-0.1c-0.9-0.2-1.9-0.4-3.5-0.7
                      c1.7,3.3,3.1,6,4.4,8.7c1.9,4,1,7.6-2.3,9.3s-6.9,0.5-9-3.4c-4-7.5-7.9-15-11.8-22.5c-2.7-5.3-1.1-8.9,4.5-10.6
                      c7.8-2.3,15.5-4.6,23.3-6.8c4.5-1.3,7.8,0.4,8.9,4.2c1,3.6-1,6.5-5.4,8C159.4,326.2,158.2,326.6,157.1,327z"/>
                  </svg>

                  <p><strong>Join the dots</strong> for a better experience</p>
                </div>
              </div> */}
              <div className="col">
                <div className="wrapper">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 383.3 307.3">
                    <path className="fill" d="M383.3,241.2c-1.6,3.2-2.7,6.7-4.8,9.6c-4.3,5.8-10.5,8.2-17.6,8.3c-1.6,0-3.2,0-5.3,0v4.2
                      c0,10.1,0,20.2,0,30.3c0,5.2,0.2,10.5-5.8,12.9c-5.8,2.4-9.3-1.4-12.9-5c-13-13.1-26.1-26.1-39.1-39.2c-2-2.2-4.8-3.4-7.8-3.3
                      c-35.2,0.1-70.4,0.1-105.5,0.1c-15.7,0-24.3-8.7-24.3-24.3c0-33.6,0-67.1,0-100.7c0-14.5,8.7-23.5,23.2-23.5
                      c58.9-0.1,117.8-0.1,176.6,0c12.3,0,19.7,6.3,23.3,17.6L383.3,241.2z M337.5,276.2c0-9.1,0-17.3,0-25.5c0-6.2,3.2-9.5,9.3-9.8
                      c4.1-0.2,8.2,0,12.3-0.1c5.3,0,6.1-0.8,6.1-6.1v-99.9c0-5.6-0.6-6.2-6.2-6.2H184.7c-6,0-6.4,0.5-6.4,6.3v98.8
                      c0,6.6,0.4,7.1,6.9,7.1c36.7,0,73.3,0,110-0.1c4.4-0.2,8.6,1.6,11.6,4.8c9,9.3,18.3,18.4,27.5,27.6
                      C335,274.1,336,274.8,337.5,276.2L337.5,276.2z"/>
                    <path className="fill" d="M58,233.2c0.6-1.2,1-2.7,1.9-3.6c15.2-15.3,30.5-30.5,45.7-45.9c3-3.1,6.3-4.6,10.6-4.4s8.7,0,13.1,0.1
                      c6,0.1,9.9,3.7,10,8.9c0.1,5.5-3.8,9.7-10,9c-8.9-1-14.7,2.6-20.6,8.8C91.1,224.3,73,242,55,259.8c-1.7,1.8-3.8,3.1-6.2,3.8
                      c-5.9,1.3-10.5-3.2-10.6-9.9c0-17.2,0-34.4,0-51.7v-4.7c-5.5,0-10.8,0.1-16.2,0c-11.3-0.2-19.7-7.1-21.7-17.9
                      C0.1,177.8,0,176,0,174.3C0,123.9,0,73.5,0,23C0,9.1,8.9,0,22.9,0c84.8,0,169.7,0,254.5,0c14,0,22.9,9,22.9,23c0,19,0,37.9,0,56.9
                      c0,7.3-6.4,11.9-12.6,9.1c-4-1.8-5.5-5.1-5.4-9.4c0.1-18.2,0-36.4,0-54.7c0-6.4-0.4-6.8-6.7-6.8H24.8c-6.3,0-6.7,0.4-6.7,6.9
                      c0,49.3,0,98.6,0,147.9c0,5.9,0.5,6.5,6.3,6.5c7.1,0,14.2,0,21.3,0s10.5,3.4,10.5,10.6c0,12.8,0,25.7,0,38.6
                      c0,1.2,0.1,2.4,0.2,3.6L58,233.2z"/>
                    <path className="fill" d="M150.1,59.8c26.9,0,53.9,0,80.8,0c6.2,0,9.9,2.8,10.4,7.9c0.6,4.4-2.1,8.6-6.4,9.7c-1.1,0.3-2.2,0.5-3.3,0.5
                      c-54.2,0-108.5,0-162.7,0c-6.3,0-10.2-4-9.9-9.6c0.2-4.3,3.5-7.8,7.7-8.2c1.5-0.1,3-0.2,4.5-0.2L150.1,59.8z"/>
                    <path className="fill" d="M99.2,119.5h29.9c4.4,0,7.8,1.5,9.5,5.8c1.8,4.5-0.3,9.7-4.8,11.5c-0.3,0.1-0.7,0.2-1,0.3
                      c-1.5,0.3-2.9,0.5-4.4,0.5c-19.6,0-39.2,0-58.7,0c-6.2,0-10-2.9-10.6-7.8c-0.7-6,3.2-10.2,9.9-10.3c9.2-0.1,18.4,0,27.7,0
                      L99.2,119.5z"/>
                    <path className="fill" d="M220.8,184.8c-0.1-4.9,3.8-8.9,8.7-9c0.1,0,0.2,0,0.3,0c4.9,0,8.8,3.9,8.9,8.8c0,5-3.9,9.1-8.9,9.2
                      C224.8,193.8,220.8,189.8,220.8,184.8C220.8,184.8,220.8,184.8,220.8,184.8z"/>
                    <path className="fill" d="M280.7,184.6c0.1,5-3.8,9.1-8.8,9.2s-9.1-3.8-9.2-8.8s3.8-9.1,8.8-9.2S280.6,179.6,280.7,184.6z"/>
                    <path className="fill" d="M313.9,175.9c4.9,0,8.8,3.9,8.9,8.8c0,0.1,0,0.1,0,0.2c0,5-4.1,9-9.1,8.9c0,0,0,0,0,0c-5-0.1-8.9-4.2-8.9-9.1
                      C304.8,179.7,308.9,175.8,313.9,175.9C313.8,175.9,313.8,175.9,313.9,175.9z"/>
                  </svg>
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
                    href="/team-krewe"
                  >
                    Meet Team KREWE
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
                  <p>I have worked in integrated agencies for over 10 years, managing and delivering projects on and offline. Working in a digital department has allowed me to deliver bespoke websites, micro-sites and ideas to support clients with their annual strategies. Implementing UX across all websites creates the building blocks for design, successful build and flow to user experience.</p>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    href="/portfolio"
                    className="btn"
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