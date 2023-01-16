import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import LazyLoadImageComp from './LazyLoadImage'

/**
 * @componentName Portal
 * @description This components will display list of features provided by the website
 */

/// Custom Components 
import ModalPopUp from "../components/modalpopup";
import ModalPopUpCallBack from "../components/modalpopupcallback";

/// Custom Stylesheet
import "./modal.css";

/// Import Images
import rectangle from "../assets/images/rectangle_small.webp";

const Portals = () => {
  const navigate = useNavigate();
  const [isloading, SetIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowZone, setModalShowZone] = useState(false);
  const [modaltest, setModalTest] = useState(false);
  const [modalplogin, setModalPLogin] = useState(false);
  const [modalShowPartner, setModalShowPartner] = useState(false);

  const hidePopUp = () => {
    setModalShow(false);
  };

  const hidePopUpZone = () => {
    setModalShowZone(false);
  };

  const hidePopUpText = () => {
    setModalTest(false);
  };
  const SectionbgTitle = "Portals";
  const sectionTitle = "Portals";
  const sectionDescription = "";

  const servicesData = [
    {
      icon: "icofont-automation",
      heading: "Courses",
      description: "See the list of Courses available in our academy",
      link: "courses",
      linkto: 1
    },
    {
      icon: "icofont-bullseye",
      heading: "Partner Company Login",
      description: "Login portal for our client partner companies",
      link: "modalplogin",
      linkto: 2
    },
    {
      icon: "icofont-woman-in-glasses",
      heading: "My Zone",
      description: "Login portal for enrolled BlockVerse Students",
      link: "modalzone",
      linkto: 2
    },
    {
      icon: "icofont-chart-growth",
      heading: "Know more about BlockVerse",
      description: "Know more about what we do and how it helps you",
      link: "aboutus",
      linkto: 1
    },
    {
      icon: "icofont-network-tower",
      heading: "Partner with Us",
      description: "Explore benefits of a mutually rewarding partnership.",
      link: "modalPartner",
      linkto: 2
    },
    {
      icon: "icofont-laptop-alt",
      heading: "Take your test",
      description: "For enrolment to a BlockVerse academy company course.",
      link: "modaltest",
      linkto: 2
    },
    {
      icon: "icofont-users-social",
      heading: "Advisory Board",
      description: "Composition of our Advisory board.",
      link: "advisors",
      linkto: 1
    }
  ];




  const OpenModal = (e) => {

    if (e === "modal") {
      setModalShow(true)
      setModalShowPartner(false);
      setModalShowZone(false);
      setModalTest(false);
      setModalPLogin(false);
    }
    else if (e === "modalPartner") {
      setModalShow(false)
      setModalShowPartner(true);
      setModalShowZone(false);
      setModalTest(false);
      setModalPLogin(false);

    }
    else if (e === "modalzone") {

      setModalShow(false)
      setModalShowPartner(false);
      setModalShowZone(true);
      setModalTest(false);
      setModalPLogin(false);

    }
    else if (e === "modaltest") {

      setModalShow(false)
      setModalShowPartner(false);
      setModalShowZone(false);
      setModalTest(true);
      setModalPLogin(false);

    }
    else if (e === "modalplogin") {

      setModalShow(false)
      setModalShowPartner(false);
      setModalShowZone(false);
      setModalTest(false);
      setModalPLogin(true);

    }


  }

  const hidePopUpPartner = () => {
    setModalShowPartner(false);
  };

  const hidePopUpTextPLogin = () => {
    setModalPLogin(false);
  }

  const servicedata = () => {
    return servicesData.map((service, index) => (
      <div className="col-md-6 col-lg-4" key={index}>
        <div className="service-item">
          <div className="row">
            <span>{service.heading}</span>
            <p>{service.description}</p>
          </div>
          <div className="child">
            <div className="row">
              <div className="col-md-6">

                {service.linkto === 2 && (
                  <a onClick={() => OpenModal(service.link)} href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    Learn More{" "}
                  </a>
                )}
                {service.linkto === 1 && (

                  <Link
                    to={String(service.link)}
                    activeclass=""
                    style={{ cursor: "pointer" }}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    Learn More{" "}
                  </Link>
                )}

              </div>
              <div className="col-md-6">

                <div className="shape">
                  <LazyLoadImageComp src={rectangle} alt={service.heading} height={72} width={84} />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="portals ptb-200" id="portals">
      <div className="container" >
        <div className="row" >
          <div className="col-lg-8 offset-lg-2 text-center" >
            <ScrollAnimation animateIn="fadeInUp" >
              <div className="section-title" >
                <h2>{sectionTitle}</h2>
                <p>{sectionDescription}</p>
                <span className="section-title-bg" >{SectionbgTitle}</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row" >{servicedata()}</div>
      </div>
      <div className="reveal-modal">
        <ModalPopUp
          heading="Under Construction"
          show={modalShow}
          onHide={hidePopUp}
        >
          <div className="thankyou">
            <div className="popup-content">
              <h2 className="title">Under Contruction</h2>
              <p className="text-white text-center thankyou-text">
                We are still working on this.
              </p>
            </div>
          </div>
        </ModalPopUp>

      </div>

      <div className="reveal-modal">
        <ModalPopUp
          heading="My Zone"
          show={modalShowZone}
          onHide={hidePopUpZone}
        >
          <div className="thankyou">
            <div className="popup-content">
              <h2 className="title">My Zone</h2>
              <p className="text-white text-center thankyou-text">
                This page is for students enrolled in our academy. <br /> Students need to be in posession of a login and password which enables them to proceed further.

              </p>
            </div>
          </div>
        </ModalPopUp>

      </div>

      <div className="reveal-modal">
        <ModalPopUp
          heading="Take Test"
          show={modaltest}
          onHide={hidePopUpText}
        >
          <div className="thankyou">
            <div className="popup-content">
              <h2 className="title">Take test</h2>
              <p className="text-white text-center thankyou-text">
                This page is for students who wish to be enrolled in our academy. <br /> Students need to be in posession of a login and password which enables them to proceed further.

              </p>
            </div>
          </div>
        </ModalPopUp>

      </div>


      <div className="reveal-modal">
        <ModalPopUp
          heading="Partner Company Login"
          show={modalplogin}
          onHide={hidePopUpTextPLogin}
        >
          <div className="thankyou">
            <div className="popup-content">
              <h2 className="title">Partner Company Login</h2>
              <p className="text-white text-center thankyou-text">
                This page is for the companies that are partnering with us in our people deployment model. <br />Only participating companies have a login and password which enables them to proceed further.
              </p>
            </div>
          </div>
        </ModalPopUp>

      </div>

      <div className="reveal-modal">
        <ModalPopUpCallBack
          heading="Corporate Partnership"
          show={modalShowPartner}
          onHide={hidePopUpPartner}
          style={{ justifyContent: "center", display: "flex" }}
        >
          <div className="partner">
            <div className="popup-content">
              <h2 className="title">Partnership with BlockVerse</h2>
              <div className="text-white">
                If your company has experienced pain on any one of the following
                pain areas then getting a call from BlockVerse could be the
                start of something good
                <div className="single-pricing-card">
                  <ul className="pricing-list" style={{ margin: "20px" }}>
                    <li>

                      Lack of ready to deploy technical talent to satisfy demand
                      in advanced growth technologies.
                    </li>
                    <li>

                      Skilled technical talent on paper does not turn out to be
                      “ready to deploy” in your organisation.
                    </li>
                    <li>

                      Even when quality resources are available for growth
                      technologies there is not enough diversity in the talent
                      pool.
                    </li>
                  </ul>
                </div>
                <p style={{ marginBottom: "0px", color: "white" }}>
                  What does BlockVerse do?
                </p>
                <p style={{ marginBottom: "0px", color: "white" }}>
                  BlockVerse sources, screens and up-skills entry and junior
                  level talent in advanced growth technologies and certifies
                  them as “ready to deploy” in companies. Advanced growth
                  technologies include but are not limited to Data sciences,
                  Cloud technology , UI / UX design , Blockchains and Artificial
                  Intelligence. <br />
                  BlockVerse also invites client partner companies to play a key
                  role in course and curriculum design and candidate selection
                  toll gates
                </p>
              </div>
            </div>
          </div>
        </ModalPopUpCallBack>
      </div>
    </section>
  );
};

export default Portals
 