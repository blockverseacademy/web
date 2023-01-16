import React from 'react';
import Icofont from 'react-icofont';

import { Accordion, AccordionItem } from "react-sanfona";
import { Link } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

/**
 * @componentName Faq
 * @description Component that hold information about FAQ Details
 */

const defaultArray = {
  SectionbgTitle: "FAQ",
  sectionTitle: "Frequently Asked Questions",
  sectionDescription:
    "Below you’ll find answers to some of the most frequently asked questions. We are constantly adding most frequently asked question to this page",

  ContentTitle: "One More Question?",
  ContentDescription: "If you have more questions, send us a message and we will answer you as soon as possible.",
  ContentLink: "contact",

  faqData: [
    {
      id: 1,
      title: "Why was BlockVerse academy started?",
      content: ` 
                                                <ul>We believe</ul>
            
                                                <li>That the next evolution of the internet is underway and related frontier technologies are being built.</li>
                                                <li>The talent market is not keeping pace with demand and technical 
                                                skilling 
                                                is not at the scale and quality that is required.</li>
                                                <li>There is a lack of diversity in new technology domains</li>
                                                <br />
                                               We started the academy to be the force of change in these opportunity areas and to provide our diverse student group with a unique immersive learning experience .
            
            
                                           
                                       `
    },
    {
      id: 2,
      title: "What is the mission of BlockVerse Technologies?",
      content: ` 
                                                Our mission is “Skilling Diverse Talent For New Age High Growth Technologies."
                                           `
    },
    {
      id: 3,
      title: "  What are the values of the company?",
      content: ` 
                                                <ul
                                                  className="pricing-list"
                                                  style={{ fontSize: "13px" , font}}
                                                >
                                                <li>
                                                  <svg                        xmlns="http://www.w3.org/2000/svg"                        width="24"                        height="24"                        viewBox="0 0 24 24"                        fill="none"                        stroke="currentColor"                        strokeWidth="2"                        strokeLinecap="round"                        strokeLinejoin="round"                        className="feather feather-arrow-right"                      >                        <line x1="5" y1="12" x2="19" y2="12"></line>                        <polyline points="12 5 19 12 12 19"></polyline>                      </svg>We value learning and our obsessed with providing the best possible learning experience for our students.<br />
                                                </li>
            
            <li>
                                                   <svg                        xmlns="http://www.w3.org/2000/svg"                        width="24"                        height="24"                        viewBox="0 0 24 24"                        fill="none"                        stroke="currentColor"                        strokeWidth="2"                        strokeLinecap="round"                        strokeLinejoin="round"                        className="feather feather-arrow-right"                      >                        <line x1="5" y1="12" x2="19" y2="12"></line>                        <polyline points="12 5 19 12 12 19"></polyline>                      </svg>We value diversity and its built into our company mission. We look at diversity not just from background and identity but also experience. We aim to provide our learners with diverse experiences that gets them better prepared for the world they will enter.
                                                </li>
                                                <li>
                                                   <svg                        xmlns="http://www.w3.org/2000/svg"                        width="24"                        height="24"                        viewBox="0 0 24 24"                        fill="none"                        stroke="currentColor"                        strokeWidth="2"                        strokeLinecap="round"                        strokeLinejoin="round"                        className="feather feather-arrow-right"                      >                        <line x1="5" y1="12" x2="19" y2="12"></line>                        <polyline points="12 5 19 12 12 19"></polyline>                      </svg>We value providing world-class outcomes and exception solutions to problems of our client partners
                                                </li>
            <li>
                                                   <svg                        xmlns="http://www.w3.org/2000/svg"                        width="24"                        height="24"                        viewBox="0 0 24 24"                        fill="none"                        stroke="currentColor"                        strokeWidth="2"                        strokeLinecap="round"                        strokeLinejoin="round"                        className="feather feather-arrow-right"                      >                        <line x1="5" y1="12" x2="19" y2="12"></line>                        <polyline points="12 5 19 12 12 19"></polyline>                      </svg>We value being kind and direct with our teams and people who chose to work with us
                                                </li>
            <li>
                                                We value being confrontational and bold in our thinking
            </li>
                                           `
    },
    {
      id: 4,
      title: " Who are the founders of the company?",
      content: `  
                                                Founders of the company are Talent architects who have worked as CHROs with global mandates and have helped their organisations through periods of rapid growth.
                                           `
    },
    {
      title: "How does the business model of BlockVerse work?",
      content: ` 
                                                BlockVerse understands and pulls in resource requirements of its client partner companies in advanced growth technologies. It then sources , screens and skills diverse talent for them. For this it charges fees from its partner companies. BlockVerse also charges a modest fees from its students . Student fees are significantly lesser than any formal skilling courses available in the market.  
                                           `
    },
    {
      id: 5,
      title: " How can I get a job as a BlockVerse academy graduate?",
      content: `
                                                BlockVerse works with client partner companies who need high quality talent in the fields that we operate and teach skills in. We expect them to come and recruit virtually from our academy and offer jobs to our graduates
                                           `
    },
    {
      id: 6,
      title:
        "What kind of a job can I hope to get after graduating from BlockVerse academy?",
      content: `  
                                                You can expect to get a high quality, high paying job after you graduate from BlockVerse academy.The kind of companies can range from Large to Mid Cap companies, Web 3 companies and companies involved in the metaverse.
                                           `
    },
    {
      id: 7,
      title: " Does BlockVerse have a community – how can I get in?",
      content: ` 
                                                Yes BlockVerse will build communities for all its students.You are automatically “in” by taking a course at BlockVerse
                                           `
    },
    {
      id: 8,
      title: " Do you consider applications from across the world?",
      content: ` 
                                                Yes we consider applications from across the world. At this point of time our medium of instruction is primarily English so students proficient in English should only apply
                                           `
    },
    {
      id: 9,
      title: " What kind of teaching happens at BlockVerse?",
      content: ` 
                                                Blockverse believes in synchronous instructor led online teaching. This means you will be taught “live” in a virtual classroom in the metaverse by a world-class faculty member.
            
            
                                           `
    },
    {
      id: 10,
      title: " Why do you have an entrance test?",
      content: ` 
                                                We aim to take in our cohorts a selective set of students and have a high quality of intake into the academy before we invest in them. Our client partners are interested in premium talent that satisfies key criteria and that is why we take the test to filter out from the applicants we receive
                                           `
    },
    {
      id: 11,
      title: " Why are you focused on only advanced growth  technologies?",
      content: `
                                                We are focused on building talent for new technologies – we believe technologies we train on  will form a key part of the next generation of the internet and are focusing on them as part of our mission. We will expand our technology domains from time to time
                                           `
    },
    {
      id: 12,
      title:
        " How did you decide the course fees – what are the charges for each course?",
      content: `  
            
                                                Fees are variable and are charged depending on the course you take. We believe you will be easily able to repay the fees after the salary jump you can hope to see from before to when you finish the course
                                           `
    },
    {
      id: 13,
      title: " What happens to my data once I join in as a student?",
      content: `  
                                                Your data is stored with BlockVerse and never used without your permission or given to any third parties for marketing or related activities. We will check if you are ok to share your data if specific companies are interested in knowing more about you and your skills
                                           `
    },
    {
      id: 14,
      title: " What can I expect the learning experience to be like?",
      content: `  
                                                The learning experience will be quite different from what you may have come across. Ours is a faculty led live experience in a virtual classroom where the pedagogy is focused on solving practical problems and gaining real world experiences. 
                                           `
    }
  ]

};

const Faq = () => {
  const nodeRef = React.useRef(null);
  return (
    <section className="faq ptb-100" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <ScrollAnimation animateIn="fadeInUp" nodeRef={nodeRef}>
              <div className="section-title">
                <h2>{defaultArray.sectionTitle}</h2>
                <p style={{ color: "black" }}>{defaultArray.sectionDescription}</p>
                <span className="section-title-bg">{defaultArray.SectionbgTitle}</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="faq-content">
          <div className="row ">
            <div className="col-lg-4">
              <Link to="contact" smooth={true}

                duration={800} offset={-70} href="#">
                <div className="content-box color-effect-1">
                  <h3>{defaultArray.ContentTitle}</h3>

                  <div className="box-icon-wrap box-icon-effect-1 box-icon-effect-1a">
                    <div className="box-icon"><Icofont icon="icofont-share-alt" /></div>
                  </div>

                  <p>{defaultArray.ContentDescription}</p>
                </div>
              </Link>
            </div>

            <div className="col-lg-8">
              <Accordion
                rootTag="div"
                className="panel-group"

              >
                {defaultArray.faqData.map((item, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      title={item.title}
                      expanded={true}
                      expandedClassName=""
                      className="panel-title panel panel-default"
                      titleTag="a"
                      titleClassName=""
                      nodeRef={nodeRef}
                    >
                      <div key={index}>
                        <div className="panel-body" key={index}>

                          <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                      </div>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Faq;