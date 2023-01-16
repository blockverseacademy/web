import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import LazyLoadImageComp from '../components/LazyLoadImage'

/**
 * @componentName Advisors
 * @description This components holds information about advisors at BlockVerse Technologies
 */
/// Image Imports
import Anshul from "../assets/images/Anshul.webp";
import Priya from "../assets/images/Priya.webp";
import Smita from "../assets/images/Smita.webp";
import Subi from "../assets/images/Subi.webp";
import Sanjeev from "../assets/images/Sanjeev.webp";
import Mohan from "../assets/images/mohan.webp";


/// Custom Stylesheet
import "./advisors.css"


const Advisors = () => {
  const navigate = useNavigate();
  const SectionbgTitle = "Advisors";
  const sectionTitle = "Board of Advisors";
  const sectionDescription =
    "WE ARE PROUD TO HAVE ON OUR ADVISORY BOARD DISTINGUISHED PEOPLE FROM DIFFERENT FIELDS WHO ARE PASSIONATE ABOUT INCREASING DIVERSITY IN TECHNOLOGY. GIVEN THEIR BACKGROUNDS THEY ARE ABLE TO ADVISE US ON VARIOUS FACETS OF RUNNING A BUSINESS THAT WILL WORK TOWARDS ITS INTENDED MISSION AND SCALE RAPIDLY";

  const handleclick = (id) => {
    navigate(`/aboutadvisors/${id}`);
  }

  return (
    <section id="advisors" className="testimonials-area bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <ScrollAnimation animateIn="fadeInUp">
              <div className="site-heading text-center">
                <h2>{sectionTitle}</h2>
                <p>{sectionDescription}</p>

              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="row">

          <div className="col-md-6 col-lg-6" onClick={() => handleclick(1)} style={{ cursor: "pointer" }}>

            <div className="row item">
              <div className="col-lg-6" onClick={() => handleclick(1)} style={{ cursor: "pointer" }}>
                <LazyLoadImageComp src={Anshul} alt="" />
              </div>
              <div className="col-lg-6" onClick={() => handleclick(1)} style={{ cursor: "pointer" }}>
                <p>
                  Anshul has spent over 27 years in Unilever working in different capacities across businesses and continents. He is currently the Chief Customer Officer for Unilever’s Home care business globally and also manages the Digital commerce agenda.....
                </p>
                <h4 onClick={() => handleclick(1)} style={{ cursor: "pointer" }}>Anshul Asawa</h4>
                <span onClick={() => handleclick(1)} style={{ cursor: "pointer" }}>Chief Customer Officer</span>
              </div>
            </div>

          </div>

          <div className="col-md-6 col-lg-6" onClick={() => handleclick(5)} style={{ cursor: "pointer" }}>

            <div className="row item">
              <div className="col-lg-6" onClick={() => handleclick(5)} style={{ cursor: "pointer" }}>
                <LazyLoadImageComp src={Sanjeev} alt="" />
              </div>
              <div className="col-lg-6" onClick={() => handleclick(5)} style={{ cursor: "pointer" }}>
                <p>
                  Sanjeev is currently the Talent Acquisition Director at Google in Singapore and has been an experienced general management professional, with 20+ years of experience in Sales, Entrepreneurship and Operations...
                </p>
                <h4 onClick={() => handleclick(5)} style={{ cursor: "pointer" }}>Sanjeev Somasundaram </h4>
                <span onClick={() => handleclick(5)} style={{ cursor: "pointer" }}> Talent Acquisition Director</span>
              </div>
            </div>

          </div>



        </div>
        <div className="row">

          <div className="col-md-6 col-lg-6" onClick={() => handleclick(3)} style={{ cursor: "pointer" }}>

            <div className="row item">
              <div className="col-lg-6" onClick={() => handleclick(3)} style={{ cursor: "pointer" }}>
                <LazyLoadImageComp src={Smita} alt="" />
              </div>
              <div className="col-lg-6" onClick={() => handleclick(3)} style={{ cursor: "pointer" }}>
                <p>
                  Smita is a People & Culture Leader with a keen interest to design and scale, high growth and early-stage product organisations, in a sustainable manner. Was Instrumental in building media tech businesses like Netflix, Disney+ ...
                </p>
                <h4 onClick={() => handleclick(3)} style={{ cursor: "pointer" }}>Smita Puranesh</h4>
                <span onClick={() => handleclick(3)} style={{ cursor: "pointer" }}>People & Culture Leader</span>
              </div>
            </div>

          </div>

          <div className="col-md-6 col-lg-6" onClick={() => handleclick(4)} style={{ cursor: "pointer" }}>

            <div className="row item">
              <div className="col-lg-6" onClick={() => handleclick(4)} style={{ cursor: "pointer" }}>
                <LazyLoadImageComp src={Subi} alt="" />
              </div>
              <div className="col-lg-6" onClick={() => handleclick(4)} style={{ cursor: "pointer" }}>
                <p>
                  Subi is the Chief Client Officer at Clearwater analytics and has spent considerable time in the world ‘s largest Healthcare Company (UHG) and pioneering services firm -Genpact as a senior business leader....
                </p>

                <h4 onClick={() => handleclick(4)} style={{ cursor: "pointer" }}>Subi Sethi</h4>
                <span onClick={() => handleclick(4)} style={{ cursor: "pointer" }}>Chief client officer</span>
              </div>
            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-md-6 col-lg-6" onClick={() => handleclick(2)} style={{ cursor: "pointer" }}>

            <div className="row item">
              <div className="col-lg-6" onClick={() => handleclick(2)} style={{ cursor: "pointer" }}>
                <LazyLoadImageComp src={Priya} alt="" />
              </div>
              <div className="col-lg-6" onClick={() => handleclick(2)} style={{ cursor: "pointer" }}>
                <p>
                  Priya has 20+ years of multifaceted experience in fields ranging from Education services to the IT industry. She has set up new businesses with Start-up to Scale-up expertise in Small, Medium and Large enterprises.
                </p>

                <h4 onClick={() => handleclick(2)} style={{ cursor: "pointer" }}>Priya Goutham</h4>
                <span onClick={() => handleclick(2)} style={{ cursor: "pointer" }}>Chief Marketing Officer</span>
              </div>
            </div>

          </div>
          <div className="col-md-6 col-lg-6" onClick={() => handleclick(6)} style={{ cursor: "pointer" }}>

            <div className="row itemSeed">

              <div className="col-lg-6" onClick={() => handleclick(6)} style={{ cursor: "pointer" }}>
                <LazyLoadImageComp src={Mohan} alt="" />
              </div>
              <div className="col-lg-6" onClick={() => handleclick(6)} style={{ cursor: "pointer" }}>
                <p>
                  25+years of Human Resource expertise across Industry segments (Manufacturing, IT, ITES, Telecom, Food Processing & Services). Experiential knowledge in dealing with different situations/cultures.
                  <br />
                </p>

                <h4 onClick={() => handleclick(6)} style={{ cursor: "pointer" }}>T S Mohan (Seed Investor)</h4>
                <span onClick={() => handleclick(6)} style={{ cursor: "pointer" }}>Chief HR Officer</span>
              </div>
            </div>

          </div>

        </div>
        <hr />



      </div>
    </section>
  );
};

export default Advisors;
