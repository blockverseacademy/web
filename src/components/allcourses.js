import React,{useState} from 'react'
import { Fragment } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ScrollAnimation from "react-animate-on-scroll";

/**
 * @componentName Open Courses
 * @description This components holds information about Open Courses at BlockVerse Technologies
 */


/// Custom Components Imports
import OpenCourses from './opencourses';
import ClientCourses from './clientcourses';
import GeneralCourses from './generalcourses';
import BusinessConsultancy from './businessconsultancy';


const AllCourses = ({activeKey}) => {
 
  const SectionbgTitle = "Courses";
  const sectionTitle = "Courses";
  const sectionDescription = " Live & Bespoke courses we run for our client partner companies";



  return (
    <Fragment>
      <section id="courses" className="client-courses ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>{sectionTitle}</h2>
                  <p>{sectionDescription}</p>
                  <span className="section-title-bg">{SectionbgTitle}</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <Tabs
            defaultActiveKey="live"
            activeKey="live"
          
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="live" title="Live Courses" >
              <OpenCourses />
            </Tab>
            <Tab eventKey="client" title="Client Courses">
              <ClientCourses />
            </Tab>
            <Tab eventKey="other" title="Other Courses" >
              <GeneralCourses />
            </Tab>
            {/* <Tab eventKey="business" title="Business Consultancy for Metaverse" style={{ backgroundColor:"e4edff!important"}} onClick={handleSelect}>   
              <BusinessConsultancy />
            </Tab> */}
          </Tabs>
        </div>
      </section>
    </Fragment>
  )
}

export default AllCourses