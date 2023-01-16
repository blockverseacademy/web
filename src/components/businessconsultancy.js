import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";
import LazyLoadImageComp from '../components/LazyLoadImage'

/**
 * @componentName GeneraL Courses
 * @description Component to display courses categorised as General courses
 */

/// Import Slice Component 
import { getCourses } from "../slices/Course";


/// Custom Components 
import ModalPopUpCallBack from "../components/modalpopupcallback";


/// Custom Stylesheet
import "./businesscourses.css"
import "./modal.css";

/// Import Custom Images
import bullet from '../assets/images/bullets.webp'

const BusinessConsultancy = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalShowPartner, setModalShowPartner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [arrState, SetarrState] = useState([]);
  const SectionbgTitle = "Consultancy";
  const sectionTitle = "Business Consultancy";
  const sectionDescription = "Business Consultancy for Metaverse ";
  const [state, setState] = useState({
    ip: "",
    countryName: "",
    countryCode: "",
    city: "",
    timezone: "",
    price: "",
    currency: ""
  });
  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        let price = '0';
        if (data.country_calling_code === "+91") {
          let price = 70000;
          setState({
            ...state,
            ip: data.ip,
            countryName: data.country_name,
            countryCode: data.country_calling_code,
            city: data.city,
            timezone: data.timezone,
            price,
            currency: "Rs. "
          });
        }
        else {
          let price = 860
          setState({
            ...state,
            ip: data.ip,
            countryName: data.country_name,
            countryCode: data.country_calling_code,
            city: data.city,
            timezone: data.timezone,
            price,
            currency: "$"
          });
        }

      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    getGeoInfo();
    setIsLoading(true);
    const timeoutID = window.setTimeout(() => {
      if (isLoading === true) {
        dispatch(getCourses())
          .then((data) => {
            if (data.payload.success === 0) {
              toast.warn("No Open Courses found");
            } else {
              setIsLoading(false);

              SetarrState(JSON.parse(JSON.stringify(data.payload.data)));
            }
          })
          .catch((e) => {

            toast.warn(e);
          });
      } else {
        setIsLoading(false);
      }
    }, 250);
    return () => window.clearTimeout(timeoutID);
  }, []);

  const partnerData = () => {
    return arrState
      .filter((val) => {
        return val.type === "B";
      })
      .map((data, index) => (
        <div className="col-lg-12 col-md-12" key={index}>
          <div className="open-courses-info">

            {/* <h3>{data.title}</h3> */}
            <br />

            <LazyLoadImageComp
              src={`${process.env.REACT_APP_PUBLICURL}/${data.imagepath}`}
              alt=""
              style={{ width: "100%" }}

            />


          </div>
          <div className="btn-part">
            <Link href="#"
              className="readon orange-btn transparent" style={{ cursor: "pointer" }}
              to="contact"
            >
              Reach out to us
            </Link>
            <br />
            <br />

          </div>
        </div>
      ));
  };

  const OpenModal = () => {
    setModalShowPartner(true);
  }

  const hidePopUpPartner = () => {
    setModalShowPartner(false);
  };


  const learningData = [
    { title: " Structure an Intake meeting to help you define your entire roadmap to enter Metaverse " },
    { title: " We will help you close your Idea and plan on what to work on inside Metaverse" },
    { title: " Introduce to the technology, technologists also where Brands & Businesses are investing" },
    { title: " Substance for our consultancy comes from our Global Team & Board of Advisors" },
    // { title: " Customize the entire consultancy as per business needs" },
    // { title: " Substance for our consultancy comes from our Global Team & Board of Advisors" },
  ];
  return (
    <Fragment>
      <section id="business" className="business-courses ptb-100">
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
          <div className="row">
            <div className="rs-cta main-home">
              <div className="partition-bg-wrap">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6"> {partnerData()}</div>
                    <div className="col-md-6 details">
                      <div className="col-lg-12">
                        <div className="bussec-title3">
                          <h2 className="title white-color mb-16">

                            Business Consultancy for Metaverse &nbsp;

                            {/* <span className="price">{state.currency}{state.price}{state.currency==='Rs. '?' INR':''}</span> */}

                          </h2>
                          <div className="desc white-color pr-100 md-pr-0">
                            Blockverse is a strategic consultancy which will guide your business through Metaverse.&nbsp;Our consulting services include :
                            <br />

                            <ul style={{ fontSize: "12px", fontFamily: "poppins",  marginTop: "2%", marginBottom: "2%" }}>
                              {learningData.map((item, index) => (
                                <li key={index}>
                                  <LazyLoadImageComp src={bullet} alt="bullets" width={15} height={17} data={item.title}></LazyLoadImageComp>
                                </li>
                              ))}
                            </ul>

                          </div>

                          <span style={{ color: "#ff5421", fontFamily: "Poppins", fontSize: "16px", marginTop: "3%" }}>
                            <strong>The cost of the consultancy depends on Business type and Transformation stage and will be finalized after our first meeting </strong></span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Fragment>
  );
};

export default BusinessConsultancy;
