import React, { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import LazyLoadImageComp from '../components/LazyLoadImage'

/**
 * @componentName About
 * @description This components holds information about BlockVerse Technologies
 */

/// Image Imports
import aboutus from "../assets/images/mac-pro.webp";

/// Custom Stylesheet
import "./aboutus.css";


const AboutUs = () => {
  const SectionbgTitle = "BlockVerse";
  const sectionTitle = "Why BlockVerse";
  const sectionDescription =
    "We upskill talent for advanced growth technologies including but not limited to for Blockchain , Web 3.0 and Metaverse related technologies , Data Sciences , Cloud Technology and Artificial Intelligence. Our business involves working closely with enterprises - understanding their talent and skill demands for new age technologies and then partnering with them to source , screen and skill talent from across the world";
  const AboutusArray1 = require("../assets/images/aboutus1.webp");
  const AboutusArray2 = require("../assets/images/aboutus2.webp");
  const AboutusArray3 = require("../assets/images/aboutus3.webp");

  return (
    <Fragment>
      <section className="aboutus ptb-100 cta-bg-img" id="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>{sectionTitle}</h2>
                  <p style={{ color: "black" }}>{sectionDescription}</p>
                  <span className="section-title-bg">{SectionbgTitle}</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-5 col-md-5 col-lg-5">
            <div className="cta-info">
              <h2>For Companies</h2>

              <div className="center-wrap" style={{ padding: "20px" }}>
                <ul className="pricing-list">
                  <li>
                    <i className="icofont-check" /> Opportunity to garner
                    resources for difficult to hire skills
                  </li>
                  <li>
                    <i className="icofont-check" /> Access to "Ready to deploy"
                    talent that is extensively tested
                  </li>
                  <li>
                    <i className="icofont-check" /> Have Diverse people joining
                    their workforce
                  </li>
                  <li>
                    <i className="icofont-check" /> A "finishing school" which
                    works for you . You own the outcome ( talent selection ) but
                    not the work ( sourcing , screening , skilling )
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm- col-md-2 col-lg-2">
            <LazyLoadImageComp className="img-fluid" src={aboutus} alt="About Us" height={300} width={300} />
          </div>

          <div className="col-sm-5 col-md-5 col-lg-5">
            <div className="cta-info">
              <h2>For Individuals</h2>

              <div className="center-wrap" style={{ padding: "20px" }}>
                <ul className="pricing-list">
                  
                  <li>
                    <i className="icofont-check" /> Immersive instructor led
                    training in the metaverse
                  </li>
                  <li>
                    <i className="icofont-check" /> Real world "problem centric"
                    training methodology
                  </li>
                  <li>
                    <i className="icofont-check" /> Courses led by world class
                    faculty who are also practitioners in their fields
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row cta-info">
          <div className="col-lg-4 col-md-12">
            <div className="col-md-12" style={{ textAlign: "center", fontWeight: "800" }}>
              Build Diverse Talent
            </div>
            <div className="col-md-12" style={{ textAlign: "center" }}>
              <LazyLoadImageComp
                src={AboutusArray1}
                alt="Machine Learning"
                className="circle"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="col-md-12" style={{ textAlign: "center", fontWeight: "800" }}>
              In New Age Technologies
            </div>
            <div className="col-md-12" style={{ textAlign: "center" }}>
              <LazyLoadImageComp
                src={AboutusArray2}
                alt="In New Age Technologies"
                className="circle"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="col-md-12" style={{ textAlign: "center", fontWeight: "800" }}>
              By partnering with Companies
            </div>
            <div className="col-md-12" style={{ textAlign: "center" }}>
              <LazyLoadImageComp
                src={AboutusArray3}
                alt="By partnering with Companies"
                className="circle"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
