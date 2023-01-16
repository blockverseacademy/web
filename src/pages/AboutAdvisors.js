import React, { Fragment } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useParams } from "react-router-dom";
import Icofont from "react-icofont";
import { HashLink } from 'react-router-hash-link';

//Import Component
import NavBarOther from "../components/navbarother";
import Footer from "../components/footer";

//CSS
import './aboutadvisors.css'


const AboutAdvisors = () => {
    const { id } = useParams();

    const SectionbgTitle = "Advisors";
    const sectionTitle = "Board of Advisors";
    const sectionDescription =
        "WE ARE PROUD TO HAVE ON OUR ADVISORY BOARD DISTINGUISHED PEOPLE FROM DIFFERENT FIELDS WHO ARE PASSIONATE ABOUT INCREASING DIVERSITY IN TECHNOLOGY. GIVEN THEIR BACKGROUNDS THEY ARE ABLE TO ADVISE US ON VARIOUS FACETS OF RUNNING A BUSINESS THAT WILL WORK TOWARDS ITS INTENDED MISSION AND SCALE RAPIDLY";
    const BtnLink = "/home";
    const BtnName = "Back";
    //Default Props

    const teamsData = [
        {
            id: 1,
            Image: require("../assets/images/Anshul.webp"), 
            Name: "Anshul Asawa",
            Profession:
                "Anshul has spent over 27 years in Unilever working in different capacities across businesses and continents. He is currently the Chief Customer Officer for Unilever’s Home care business globally and also manages the Digital commerce agenda. He is passionate about the role of technology in human progress and is keen to make this a more diverse place than it currently is.",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
            position: "CHIEF CUSTOMER OFFICER"
        },
        {
            id: 2,
            Image: require("../assets/images/Priya.webp"),
            Name: "Priya Goutham",
            Profession:
                "Priya has 20+ years of multifaceted experience in fields ranging from Education services to the IT industry. She has set up new businesses with Start-up to Scale-up expertise in Small, Medium and Large enterprises. She was instrumental in ideating and establishing a large Edu city close to Chennai and now has taken up responsibilities as Strategic consultant Director for education with Virginia Tech India and Chief Marketing Officer (CMO) at 3I Infotech.",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
            position: "CHIEF MARKETING OFFICER"
        },
        {
            id: 3,
            Image: require("../assets/images/Smita.webp"),
            Name: "Smita Puranesh",
            Profession:
                "Smita is a People & Culture Leader with a keen interest to design and scale, high growth and early-stage product organisations, in a sustainable manner. She was Instrumental in building media tech businesses like Netflix, Disney+ and HBO Max, in Asia Pacific over the last decade. Deeply committed to diversity and inclusion she is excited to support the BlockVerse value proposition in upskilling and integrating diverse talent into technology teams.",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
            position: "PEOPLE & CULTURE LEADER"
        },
        {
            id: 4,
            Image: require("../assets/images/Subi.webp"),
            Name: "Subi Sethi",
            Profession:
                "Subi is the Chief Client Officer at Clearwater analytics and has spent considerable time in the world ‘s largest Healthcare Company (UHG) and pioneering services firm -Genpact as a senior business leader. She is passionate about bringing more women in leadership positions and supporting their entry into the dynamic world of information technology. ",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
            position: "CHIEF CLIENT OFFICER"
        },
        {
            id: 5,
            Image: require("../assets/images/Sanjeev.webp"),
            Name: "Sanjeev Somasundaram",
            Profession:
                "Sanjeev is currently the Talent Acquisition Director at Google in Singapore and has been an experienced general management professional, with 20+ years of experience in Sales, Entrepreneurship and Operations  with exposure at multicultural, global organizations, across India, Europe and Asia . The core expertise that he has developed in the past decade or so has been within the jobs & employment ecosystem. He is attracted to BlockVerse by its make model for digital talent challenges. ",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
            position: "Talent Acquisition Director at Google in Singapore"
        },
        {
            id: 6,
            Image: require("../assets/images/mohan.webp"),
            Name: "T S Mohan (Seed Investor)",
            Profession:
              "25+years of Human Resource expertise across Industry segments (Manufacturing, IT, ITES, Telecom, Food Processing & Services). Experiential knowledge in dealing with different situations/cultures. Most of professional life spent on Talent Acquisition, Performance Management, Compensation Management, Industrial Relations, Employeee Retention interventions/Engagement, Re-badging and OD interventions .Experience in diverse practices for different geographies/ cultural expectations. Deeply experienced HR Professional and currently Chief HR Officer of a large digital solutions provider ",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
            position: "CHRO of large digital solutions provider"
          }
    ];

    const teamdata = () => {
        // return (<Fragment>

        //         {teamsData
        //          .filter((val) => {
        //             console.log(val.id);
        //             return val.id === id;
        //           })
        //         .map((team, index) => ( console.log(team) && 

        //             <div className="col-md-12">

        //                 <div className="row item">
        //                     <div className="col-lg-6">
        //                         <img src={team.Image} alt="" />
        //                     </div>
        //                     <div className="col-lg-6">
        //                         <p>
        //                             {team.Profession}
        //                         </p>
        //                         <h4>{team.Name}</h4>
        //                         <span>{team.position}</span>
        //                     </div>
        //                 </div>

        //             </div>

        //         ))};

        // </Fragment>)
        return teamsData
            .filter((val) => {
                return Number(val.id) === Number(id);
            })
            .map((team, index) => (
                <div className="col-md-12">

                    <div className="row item">
                        <div className="col-lg-3">
                            <img src={team.Image} alt="" />
                        </div>
                        <div className="col-lg-9">
                            <p>
                                {team.Profession}
                            </p>
                            <h4>{team.Name}</h4>
                            <span>{team.position}</span>
                            <div className="center-wrap">
                                <HashLink
                                    to="/home#advisors"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} className="btn-a" href="#"
                                >
                                    <div className="button">

                                        <Icofont icon="icofont-long-arrow-left" />
                                        {BtnName}
                                        <div className="mask" />
                                    </div>
                                </HashLink>
                                {/* <Link to="/#advisors" preventScrollReset={false}  className="btn-a" href="#">
                                  
                                </Link> */}
                            </div>
                        </div>
                    </div>

                </div>
            ));
    };
    return (
        <Fragment>
            <NavBarOther />
            <section id="advisors" className="testimonials-area bg-dark">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="site-heading text-center">
                                    <h2>{sectionTitle}</h2>
                                    <p>{sectionDescription}</p>

                                </div>
                            </ScrollAnimation>
                        </div>
                    </div> */}

                    <div className="row">

                        <div className="col-md-12">

                            {teamdata(id)}
                        </div>


                    </div>

                </div>
            </section>
            <Footer />
        </Fragment>
    );
};

export default AboutAdvisors;
