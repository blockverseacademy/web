import React from 'react'
import Icofont from "react-icofont";

/**
 * @componentName What We Do
 * @description This components will display What we do and offer
 */

/// Custom Stylesheet
import "./whatwedo.css"
import whatwedo from '../assets/images/whatwedoimg.jpg'

const WhatweDo = () => {
  return (
    <section id="whatwedo">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <div className="img-holder hvr-rectangle-out pull-right">
            <img src={whatwedo} alt="" />
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
          <h2>WHAT WE DO</h2>
          <p>
          We are essentially a skilling provider that trains diverse talent and certifies them as ready to deploy and employable by corporates and institutions . 
          </p>
          <p>We aim to be a global and trusted B2B enterprise recruiting and upskilling partner that sources, screens, skills and certifies diverse talent for advanced, new age high growth technologies, especially those related to </p>
          <div className="list-box clearfix">
            <ul>
              <li>
              <Icofont icon="icofont-long-arrow-right" /> CLOUD
              </li>
              <li>
                  <Icofont icon="icofont-long-arrow-right" /> CYBER SECURITY
              </li>
              <li>
                  <Icofont icon="icofont-long-arrow-right" /> DATA SCIENCE
              </li>
            </ul>
            <ul>
              <li>
                  <Icofont icon="icofont-long-arrow-right" /> WEB3
              </li>
              <li>
                  <Icofont icon="icofont-long-arrow-right" /> BLOCKCHAINS
              </li>
              <li>
                  <Icofont icon="icofont-long-arrow-right" /> METAVERSE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default WhatweDo