import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import ModalPopUp from "../components/modalpopup";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Accordion, AccordionItem } from "react-sanfona";
import { FaPlayCircle, FaGraduationCap, FaAtom } from 'react-icons/fa';
import { BiGroup, BiTime, BiTachometer, BiBuilding, BiHeadphone, BiCertification, BiLockAlt, BiCalendar, BiBlanket } from "react-icons/bi";

//Import Component
import NavBarOther from "../components/navbarother";
import Footer from "../components/footer";

///Custom Stylesheet
import "./metacourse.css"

/// Import Images
import courseimage from '../assets/images/courseimage.webp';

const batch = 1;

function AboutTabContent({ title }) {
    return (
        <>


            <p style={{ paddingTop: "10px", height: "1450px" }}>
                The Metaverse Orientation Course is designed for people to get an
                exposure to the concepts, technology and potential business value of the
                Metaverse. As part of the course, we will explore the Metaverse and with
                a cohort of learners and explore its vast network of persistent,
                real-time generated 3D worlds and simulations that enable identity,
                objects, history, payments, and entitlements experiencing it
                simultaneously each with their feeling of presence. If you didn't
                understand what any of this meant but were intrigued by how it sounded
                like - you should give this course a try !! This orientation course is
                your fist step to demystifying the world of the Metaverse and gaining
                better understanding of its ecosystem. We will discuss as part of our
                lessons economic functioning of the metaverse and how it leverages
                blockchain technology. We will go deeper into blockchains and check out
                its uses in digital assets management. We will also touch upon the
                basics of immersive technology (VR/MR/XR) and how it can be sued for
                creating a rich and seamless user experience in a parallel universe (aka
                digital world). During the course, we will explore live demos, quiz
                sessions and hands-on activity to create an engaging and fulfilling
                value-add experience for all. Additionally, there will be daily
                exercises to complete and towards the end of the course, you can even
                walk out with your Metaverse proposal (if you so desire). Additionally,
                by the end of this course, you will be able to comprehend the various
                Metaverse experiences and appreciate the integration with other
                technologies such as AI, Robotics and IoT. Our course will run for 10
                hours and will be 2 hours a week for 5 weeks. The days and times are
                fixed given that we believe in having a live instructor interact with
                you synchronously and hand hold you through the various concepts.
            </p>
        </>
    );
}

const learningData = [
    { title: " Metaverse Introduction & Technology" },
    { title: " Blockchain Introduction & Technology - a deep dive" },
    { title: " Immersive Technologies - a basic primer" },
    { title: " Business in the Metaverse" },
    { title: " Investment in the Metaverse" },
    { title: " Charting your own plan for the Metaverse (optional)" }
];

const bannerone = [
    {

        MetaTopTitle: "DEMYSTIFYING",
        MetaTitle: "THE METAVERSE ",
        MetaContent1: "Rouse your curiosity, explore key concepts,",
        MetaContent2: "learn from our expert trainer and practice in",
        MetaContent3: "the real world so that you can",
        MetaContentmore1: "STEP CONFIDENTLY INTO",
        MetaContentmore2: "THE VIRTUAL ONE"
    }
];

const MetaCourse = () => {
    const [isOpen, setOpen] = useState(false);
    const [activeDefault, setActiveDefault] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [state, setState] = useState({
        ip: "",
        countryName: "",
        countryCode: "",
        city: "",
        timezone: "",
        price: "",
        currency: "",
        discount: 0
    });
    const coursetitle = "Demystifying Metaverse Course";


    const handleClick = (e) => {

        if (state.countryCode === "+91") {
            //popupWindow("https://rzp.io/l/DRtCuTm3", "Payment", window, 500, 500);
            popupWindow("https://rzp.io/l/Uarvplq", "Payment", window, 500, 500);
            return true;
        }
        else {
            console.log('hi')
        }
        //popupWindow("https://rzp.io/l/sBiqEdsG", "Payment", window, 500, 500);
        popupWindow("https://rzp.io/l/4EU2yGK1k", "Payment", window, 500, 500);
        return true;
    };



    function popupWindow(url, windowName, win, w, h) {
        const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
        const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
        console.log(url)
        return win.open(
            url,
            windowName,
            `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`
        );
    }

    const nodeRef = React.useRef(null);

    const sections = [
        {
            id: 1,
            title: "Module 1",
            content: "Would be about discussing the concept of the metaverse - while there is no agreed definition and it is an evolving concept - we will explore the basic questions - what it is , why its relevant , who is building it and how they are going about it "

        },

        {
            id: 2,
            title: "Module 2 & Module 3",
            content: "Would be about the basics of Immersive technologies like  <strong>Augmented reality and Virtual reality </strong> . We will also take a much deeper dive into blockchain technology and explain it in significant detail and will also cover the new buzzword - <strong>NFT - non fungible tokens </strong> - what they are and how they can be useful . Lastly we will check out some Software tools and game engines being used to build the metaverse "

        },
        {
            id: 3,
            title: "Module 4",
            content: "Would be about Metaverse and relating it to business and job opportunities that could possibly open up , We will also discuss what other companies are doing and how they are  benefitting from doing business in the metaverse  "

        },
        {
            id: 4,
            title: "Module 5",
            content: "We will discuss what you can do to invest in virtual land in the metaverse or in companies that are building it - Opportunity sizes and numbers shall be shared scoping each market segment . "

        },
        {
            id: 5,
            title: "Module 6",
            content: "Lastly we will cover challenges and risks to the entire idea of the metaverse."

        },

    ];

    const defaultArray = (title, content) => {
        return (


            <ul>
                <li className="d-flex justify-content-between align-items-center">

                    <span className="courses-name"> <div dangerouslySetInnerHTML={{ __html: content }} /></span>

                    <BiLockAlt />



                </li>

            </ul>


        )
    }


    // const getGeoInfo = () => {
    //     axios
    //         .get("https://ipapi.co/json/")
    //         .then((response) => {
    //             let data = response.data;
    //             setState({
    //                 ...state,
    //                 ip: data.ip,
    //                 countryName: data.country_name,
    //                 countryCode: data.country_calling_code,
    //                 city: data.city,
    //                 timezone: data.timezone
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                let price = '0';
                let discount = 0
                if (data.country_calling_code === "+91") {
                    let price = 20000;
                    setState({
                        ...state,
                        ip: data.ip,
                        countryName: data.country_name,
                        countryCode: data.country_calling_code,
                        city: data.city,
                        timezone: data.timezone,
                        price,
                        currency: "Rs. ",
                        discount: Number(price) - (Number(price) * 30) / 100
                    });
                }
                else {
                    let price = 300
                    setState({
                        ...state,
                        ip: data.ip,
                        countryName: data.country_name,
                        countryCode: data.country_calling_code,
                        city: data.city,
                        timezone: data.timezone,
                        price,
                        currency: "$",
                        discount: Number(price) - (Number(price) * 30) / 100
                    });
                }

            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);


    return (<Fragment>
        <NavBarOther />
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">

                    <h2>Demystify the Metaverse course</h2>

                </div>
            </div>

        </div>

        <div className="courses-details-area pb-100">
            <div className="courses-details-image">
                <div className="diplay-table">
                    <div className="display-table-cell1">
                        <div className="row" style={{ paddingLeft: "40px", marginTop: "3%" }}>



                            <div className="col-lg-7" style={{ padding: "10px" }}>
                                <span
                                    className={

                                        "hero-text8 animated fadeInDown slow opacityOne"

                                    }
                                >
                                    {bannerone[0].MetaTopTitle}
                                </span>

                                <h1
                                    className={

                                        "hero-text8 animated fadeInDown slow opacityOne"

                                    }
                                >
                                    {bannerone[0].MetaTitle}
                                </h1>
                                <hr style={{ width: "21%", borderTop: "4px solid" }} />
                                <p
                                    className={
                                        "hero-text4 animated fadeInDown slow opacityOne"

                                    }
                                >
                                    {bannerone[0].MetaContent1}

                                </p>
                                <p
                                    className={
                                        "hero-text4 animated fadeInDown slow opacityOne"

                                    }
                                >
                                    {bannerone[0].MetaContent2}

                                </p>
                                <p
                                    className={
                                        "hero-text4 animated fadeInDown slow opacityOne"

                                    }
                                >
                                    {bannerone[0].MetaContent3}

                                </p>
                                <p
                                    className={
                                        "hero-text5 animated fadeInDown slow opacityOne"

                                    }
                                >
                                    {bannerone[0].MetaContentmore1} <br />
                                    {bannerone[0].MetaContentmore2}

                                </p>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">

                        <div className="col-lg-12">
                            <div className="courses-meta">
                                <ul>
                                    <li>
                                        <BiTime />
                                        <span>Duration</span>10 hours{" "}
                                    </li>

                                    <li>
                                        <BiCalendar />
                                        <span>Batch 1</span>Full{" "}
                                    </li>
                                    <li>
                                        <BiCalendar />
                                        <span>Batch 2</span>1-Mar-2023{" "}
                                    </li>

                                </ul>
                            </div>
                            <br />
                            <div className="row">
                                <p />
                                <p>
                                    The objective of this course is to skill you in
                                    understanding the basics and the terminology of the
                                    Metaverse ecosystem. As part of this course you will
                                    be exposed to real life solutions and hands-on
                                    activities to chart your Metaverse journey
                                </p>
                                <p />
                            </div>

                        </div>

                        <div className="courses-details-desc">

                            <Tabs
                                defaultActiveKey="live"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="live" title="Overview" >
                                    <AboutTabContent title="Overview" />
                                </Tab>
                                <Tab eventKey="client" title="What you will learn" >
                                    <ul style={{ marginTop: "15px", marginLeft: "15px", height: "580px" }}>
                                        {learningData.map((item, index) => (
                                            <li key={index}>
                                                <svg
                                                    width="16"
                                                    height="17"
                                                    viewBox="0 0 16 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1082_8)">
                                                        <path
                                                            d="M8 0.5C6.41775 0.5 4.87104 0.969192 3.55544 1.84824C2.23985 2.72729 1.21447 3.97672 0.608967 5.43853C0.00346629 6.90034 -0.15496 8.50887 0.153721 10.0607C0.462403 11.6126 1.22433 13.038 2.34315 14.1569C3.46197 15.2757 4.88743 16.0376 6.43928 16.3463C7.99113 16.655 9.59966 16.4965 11.0615 15.891C12.5233 15.2855 13.7727 14.2602 14.6518 12.9446C15.5308 11.629 16 10.0822 16 8.5C16 6.37827 15.1571 4.34344 13.6569 2.84315C12.1566 1.34285 10.1217 0.5 8 0.5V0.5ZM12.5467 6.57L7.52667 12.2633C7.44566 12.3546 7.34742 12.429 7.23759 12.4822C7.12776 12.5354 7.00851 12.5663 6.88667 12.5733H6.82667C6.59929 12.5747 6.3795 12.4916 6.21 12.34L3.52334 9.95667C3.33857 9.79267 3.22652 9.562 3.21182 9.31539C3.19713 9.06878 3.28101 8.82643 3.445 8.64167C3.609 8.4569 3.83967 8.34484 4.08628 8.33015C4.33289 8.31546 4.57524 8.39934 4.76 8.56333L6.76 10.3267L11.1633 5.32667C11.3269 5.14146 11.5573 5.0288 11.8039 5.01349C12.0505 4.99817 12.2931 5.08145 12.4783 5.245C12.6635 5.40855 12.7762 5.63898 12.7915 5.88559C12.8068 6.1322 12.7236 6.37479 12.56 6.56L12.5467 6.57Z"
                                                            fill="#4CBC9A"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip00_1082_8">
                                                            <rect
                                                                width="16"
                                                                height="16"
                                                                fill="white"
                                                                transform="translate(0 0.5)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </Tab>
                                <Tab eventKey="Curriculum" title="Curriculum" >
                                    <div className="courses-curriculum" style={{ height: "1000px" }} >
                                        <Accordion
                                            rootTag="div"
                                            className="panel-group"

                                        >
                                            {sections.map((item, index) => {
                                                return (
                                                    <AccordionItem
                                                        key={index}
                                                        title={item.title}
                                                        expanded={true}
                                                        expandedClassName=""
                                                        className="panel-title panel panel-default"
                                                        titleTag="a"
                                                        nodeRef={nodeRef}
                                                    >
                                                        <div key={index}>
                                                            <div className="panel-body" key={index}>
                                                                {/* <p>{item.content}</p> */}
                                                                {defaultArray(item.title, item.content)}
                                                            </div>
                                                        </div>
                                                    </AccordionItem>
                                                );
                                            })}
                                        </Accordion>
                                        <span style={{ fontWeight: "bold" }}>
                                            Within each module there will be discussion points where you can interact with our expert trainer and your peers in the class to debate ideas and points of view. At the end of each module there would be fun exercises for you to do and assignments to complete .
                                        </span>
                                    </div>

                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="courses-details-info">
                            <div className="image">
                                <img
                                    src={courseimage}
                                    alt="rientation - Demystify the Metaverse course"
                                />
                                {/* <div className="link-btn flaticon-play" /> */}
                                <div className="link-btn popup-youtube">

                                </div>
                                <div className="content">

                                    {/* <FaPlayCircle /> */}
                                    {/* <span>Course Preview</span> */}
                                </div>
                            </div>
                            <div className="courses-sidebar-information">
                                <ul>
                                    <li>
                                        <span>
                                            <BiGroup /> Students per batch:
                                        </span>
                                        25{" "}
                                    </li>
                                    <li>
                                        <span>
                                            <BiTime /> Duration:
                                        </span>
                                        10 hours{" "}
                                    </li>
                                    <li>
                                        <span>
                                            <BiTachometer />
                                            Effort:
                                        </span>
                                        2 hours per week{" "} - Total 5 Weeks
                                    </li>
                                    <li>
                                        <span>
                                            <BiBuilding />
                                            Institution:
                                        </span>
                                        BlockVerse Academy{" "}
                                    </li>
                                    <li>
                                        <span>
                                            <FaGraduationCap /> Subject:
                                        </span>
                                        Demystify the Metaverse{" "}
                                    </li>
                                    <li>
                                        <span>
                                            <FaAtom /> Quizzes:
                                        </span>
                                        Yes{" "}
                                    </li>
                                    <li>
                                        <span>
                                            <BiHeadphone /> Language:
                                        </span>
                                        English{" "}
                                    </li>

                                    <li>
                                        <span>
                                            <BiCertification /> Certificate:
                                        </span>
                                        Yes{" "}
                                    </li>
                                    <li>
                                        <span>
                                            <BiBlanket /> Batch:
                                        </span>

                                        {batch}

                                    </li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <button className="default-btn" onClick={handleClick}>
                                    Click to Enroll <span />
                                </button>

                                <br />

                                <span className="price-strike-meta">{state.currency}{state.price}{state.currency === 'Rs. ' ? ' INR' : ''}&nbsp;
                                (Normal Price)
                                </span>&nbsp;<br /><br />
                                <span className="price-open-meta">{state.currency}{state.discount}{state.currency === 'Rs. ' ? ' INR' : ''} &nbsp;
                                    (Early Bird Price)
                                </span>
                                <br /><br />
                                <span style={{ color: "#ff5421" }}>
                                    Our Hyper-Personalized Session for Metaverse Costs <strong>Rs. 50,000 INR</strong></span>
                            </div>
                            {/* <div className="btn-box">
                                <button className="default-btn">
                                    Coming Soon <span />
                                </button>
                            </div> */}


                        </div>

                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </Fragment>

    )
}

export default MetaCourse