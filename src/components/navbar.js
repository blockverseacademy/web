import React, { useEffect } from 'react';

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import LazyLoadImageComp from '../components/LazyLoadImage'
/**
 * @componentName Navbar
 * @description Top Navigation Bar
 */

/// Custom Stylesheet
import './navbar.css'

const NavBar = () => {

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


  const closeNavbar = () => {
    if (window.matchMedia("screen and (max-width: 991px)").matches) {
      document.getElementById("collaspe-btn").click();

    }
  };


  return (
    <>

      <Navbar
        id="navbar"
        bg="light"
        expand="lg"
        className="navbar navbar-expand-md navbar-light"
        collapseOnSelect={true}
        style={{ height: "70px", fontFamily:"Poppins" }}
      >

        <Navbar.Brand className="navbar-brand logo">
          <React.Fragment>
          <Link to="/" className="nav-link">
            <LazyLoadImageComp
              src={defaultArray.MainLogo}
              alt="Logo"
              width={152}
              height={52}
            />

         
          </Link>



          </React.Fragment>
        </Navbar.Brand>

        <Navbar.Brand className="navbar-brand logo-2">
          <React.Fragment>
          <Link to="/" className="nav-link">
            <LazyLoadImageComp
              className="img-fluid"
              src={defaultArray.Logo2}
              width={152}
              height={52}
              alt="Logo"
            />
          </Link>

          </React.Fragment>
        </Navbar.Brand>

        <Navbar.Toggle
          className="navbar-toggler"
          type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="collaspe-btn"
        />
        <Navbar.Collapse id="navbarSupportedContent" style={{ zIndex: "1000000", backgroundColor: "#020D2F", justifyContent: "flex-end" }}>
          <Nav className="navbar-nav ms-auto">
            {defaultArray.pageName === "home" ? (
              <>
              

                <Nav.Item>
                  <Link href="#"
                    activeclass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="#"
                    activeclass=""
                    to="mission"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Mission
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="#"
                    activeclass=""
                    to="whatwedo"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    What We Do
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="#"
                    activeclass=""
                    to="portals"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Portals
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link href="#"
                    activeclass=""
                    to="courses"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Courses
                  </Link>
                </Nav.Item>



                <Nav.Item>
                  <Link href="#"
                    activeclass=""
                    to="business"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Consultancy
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link href="#"
                    activeclass=""
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    FAQs
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link href="#"
                    activeclass=""
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Blog
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link href="#"
                    activeclass=""
                    to="aboutus"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    About Us
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link href="#"
                    activeclass=""
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    className="nav-link"
                    onClick={closeNavbar}
                  >
                    Contact
                  </Link>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <NavLink to="home" className="nav-link active">
                    Home
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink href="#" to="/mission" className="nav-link">
                    Mission
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink href="#" to="/whatwedo" className="nav-link">
                    What We Do
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/portals" className="nav-link">
                    Portals
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink offset={-70} to="/courses" className="nav-link">
                    Courses
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink href="#" to="/business" className="nav-link">
                    Consultancy
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink href="#" to="/advisors" className="nav-link">
                    Advisory Board
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink href="#" to="/faq" className="nav-link">
                    FAQS
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink href="#" to="/blog" className="nav-link">
                    Blog
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink href="#" to="/" className="nav-link">
                    About Us
                  </NavLink>
                </Nav.Item>

                <Nav.Item>
                  <NavLink href="#" to="/" className="nav-link">
                    Contact
                  </NavLink>
                </Nav.Item>
              </>
            )}
       
          </Nav>
        </Navbar.Collapse>



      </Navbar>
    </>
  );

}


export default NavBar;
