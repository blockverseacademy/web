import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/**
 * @componentName Mission
 * @description Display Company Mission details
 */

/// Custom Stylesheet
import "./mission.css";


const Mission = () => {

  const backImage = require("../assets/images/women-in-business3.webp")

  return (
    <section id="mission" className="single-slider-item_mission mission ptb-300" style={{ backgroundImage: `url(${backImage})` }}>
      <div className="container" >
        <div className="row" >
          <div className="col-lg-8 offset-lg-2 text-center" >

            <div className="section-title" >
              <h2 style={{ color: "#fff" }}>Mission</h2>

              <span className="section-title-bg" >Mission</span>
            </div>

          </div>
        </div>

      </div>
      <div className="col-lg-5 frost" >

        <div className="col-lg-12">
          <section className="unbeatable-one">


            <div className="unbeatable-one__inner">
              <div className="unbeatable-one__content">


                <h3 className="unbeatable-one__title text-center">
                  <strong style={{ color: 'black', color: 'black', WebkitTextFillColor: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black'}}> Skilling </strong>

                  <strong style={{color: 'black', color: 'black', WebkitTextFillColor: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black'}} className="stroke"> Diverse Talent

                  </strong>
                  <br />
                  <br />


                  <strong style={{ color: "#fff", paddingTop: "20px", textShadow: " 2px 2px #605555" }}>
                    For New Age </strong>
                  <br />
                  <strong style={{ color: "#fff", paddingTop: "20px", textShadow: " 2px 2px #605555" }}>
                    High Growth Technologies
                  </strong>
                </h3>

              </div>
            </div>

          </section>




        </div>
      </div>


    </section>
  );
};

export default Mission;
