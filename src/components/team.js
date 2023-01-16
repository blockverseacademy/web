import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Icofont from 'react-icofont';
import LazyLoadImageComp from '../components/LazyLoadImage'

/**
 * @componentName Team
 * @description This components will display core team at BlockVerse
 */

/// Custom Stylesheet
import "./team.css"


const Advisors = () => {
  const navigate = useNavigate();
  const SectionbgTitle = "Team";
  const sectionTitle = "Our Team";
  const sectionDescription =
  "50+ YEARS OF EXPERIENCE IN TALENT DEVELOPMENT AMONG THE CO - FOUNDERS - THEY HAVE HELD TOP HR LEADERSHIP POSITIONS IN REPUTED COMPANIES. STRATEGIC ADVISOR AND TECHNOLOGY ARCHITECT OF BLOCKVERSE ACADEMY IS THE CO - OWNER OF A SUCCESSFUL SUPERCOMPUTING COMPANY.";

  //Default Props

  const teamsData = [
    {
        Image: require("../assets/images/skill-img-1.webp"),
        Name: "Gaurav Gupta",
        Profession: "Ex CHRO in Multinational companies ",
        ProfessionMore: "currently based in Amsterdam (Netherlands)",
        facebookLink: "/#0",
        linkedinLink: "https://nl.linkedin.com/in/gaurav5may",
        twitterLink: "/#0",
    },
    {
        Image: require("../assets/images/skill-img-2.webp"),
        Name: "Prashant Parashar",
        Profession: "Ex CHRO global technology product company ",
        ProfessionMore: "currently based in Mumbai (India)",
        facebookLink: "/#0",
        linkedinLink: "https://www.linkedin.com/in/prashant-parashar-9297343/",
        twitterLink: "/#0",
    },
   

]

  const teamdata = () => {
    return (<Fragment>
      <div className="row" style={{display: "flex", justifyContent: "center"}}>
        {teamsData.map((team, index) => (

          <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
            <div className="team-box" key={index}>
                    <LazyLoadImageComp src={team.Image} alt="Description" />
                    <div className="box-content">
                        <div className="box-inner-content">
                            <h3 className="title">{team.Name}</h3>
                            <span className="post">{team.Profession}</span>
                            <span className="post">{team.ProfessionMore}</span>
                            <ul className="icon" >
                                {index == 3 ? <li></li> : <li style={{color:"black"}}><a style={{color:"black"}} href={team.linkedinLink} target="_blank"><Icofont icon="icofont-linkedin" /></a></li>}

                            </ul>
                        </div>
                    </div>
                </div>
          </div>
        ))}
      </div>

    </Fragment>)

  }

  const handleclick = (id) => {
    navigate(`/aboutadvisors/${id}`);
  }

  return (
    <section id="team" className="testimonials-area bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <ScrollAnimation animateIn="fadeInUp">
              <div className="site-heading text-center">
                <h2>{sectionTitle}</h2>
                <p style={{color:"white"}}>{sectionDescription}</p>

              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="row">

          
        {teamdata()}


        </div>
       
      </div>
    </section>
  );
};

export default Advisors;
