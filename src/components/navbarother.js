import React, { useEffect } from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";

/**
 * @componentName Navbar Other
 * @description Top Navigation Bar for sub components
 */

const NavBarOther = (props) => {
  const defaultArray = {
    MainLogo: require("../assets/images/logo3.png"),
    Logo2: require("../assets/images/logo3.png"),
    mailLink: "mailto:support@blockverseacademy.com",
    mail: "support@blockverseacademy.com",
    numberLink: "callto:+4917640206387",
    Number: "+4917640206387",
    facebookLink: "//facebook.com/envato",
    twitterLink: "//twitter.com/envato",
    instagramLink: "//instagram.com/envato/",
    pageName: "home"
  };

  useEffect(() => {
    let elem = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elem.classList.add("menu-shrink");
        elem.classList.add("fixed-top");
      } else {
        elem.classList.remove("menu-shrink");
        elem.classList.remove("fixed-top");
      }
    });
    window.scrollTo(0, 0);
  }, []);


  return (
    <>


      <Navbar
        id="navbar"
        bg="light"
        expand="lg"
        className="navbar navbar-expand-md navbar-light"
        collapseOnSelect={true}
        style={{ height: "70px" }}
      >

        <Navbar.Brand className="navbar-brand logo">
          <React.Fragment>
            <React.Fragment>
            <Link to="/" className="nav-link">
              <img src={defaultArray.MainLogo} alt="Logo" />
            </Link>

            </React.Fragment>
          </React.Fragment>
        </Navbar.Brand>

        <Navbar.Brand className="navbar-brand logo-2">
          <React.Fragment>
          <Link to="/" className="nav-link">
            <img
              className="img-fluid"
              src={defaultArray.Logo2}
              alt="Logo"
            />
            </Link>
          </React.Fragment>
        </Navbar.Brand>

        <Navbar.Toggle
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="collaspe-btn"
        />
        <Navbar.Collapse id="navbarSupportedContent" style={{  zIndex: "1000000", backgroundColor: "#020D2F",justifyContent: "flex-end" }}>
          <Nav className="navbar-nav ms-auto">

            <>

              <Nav.Item>
                <Link to="/" className="nav-link">
                  Back to Home
                </Link>
              </Nav.Item>
            </>


          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </>
  );
};

export default NavBarOther;
