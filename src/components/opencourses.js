import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from 'react-scroll'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import LazyLoadImageComp from '../components/LazyLoadImage'

/**
 * @componentName OpenCourses
 * @description This components will display list of active Open Courses
 */

/// Import Slice Component 
import { getCourses } from "../slices/Course";

/// Custom Stylesheet
import "./opencourses.css";
/// Import Custom Images
import bullet from '../assets/images/bullets.webp'


const OpenCourses = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [arrState, SetarrState] = useState([]);
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
        return val.type === "G";
      })
      .map((data, index) => (
        <div className="col-lg-12 col-md-12" key={index}>
          <div className="open-courses-info">

            <h3>{data.title}</h3>

            <img
              src={`${process.env.REACT_APP_PUBLICURL}/${data.imagepath}`}
              alt=""
              style={{ height: "40%", width: "100%" }}

            />


          </div>
        </div>
      ));
  };

  const learningData = [
    { title: " This session is for Business Owners, CEO's , CXO's and anyone who would like to understand Metaverse indept and in a customized session." },

    // { title: " Customize the entire consultancy as per business needs" },
    // { title: " Substance for our consultancy comes from our Global Team & Board of Advisors" },
  ];
  return (
    <Fragment>


      <div className="row">
        <div className="rs-cta main-home">
          <div className="partition-bg-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-6"> {partnerData()}</div>
                <div className="col-md-6 details" style={{ marginTop: "2%" }}>
                  <div className="col-lg-12">
                    <div className="sec-title3">
                      <h2 className="title white-color mb-16">

                        Live Course - Join Today <br />
                        <div className="row">
                          <div className="col-4">
                            <span className="price-strike">{state.currency}{state.price}{state.currency === 'Rs. ' ? ' INR' : ''}

                            </span></div>
                          <div className="col-8">
                            <span className="price-open">{state.currency}{state.discount}{state.currency === 'Rs. ' ? ' INR' : ''} &nbsp;
                              (Early Bird Price)
                            </span>
                          </div>
                        </div>

                      </h2>
                      <div className="desc white-color pr-100 md-pr-0">
                        The Metaverse Orientation Course is designed for
                        people to get an exposure to the concepts, technology
                        and potential business value of the Metaverse.
                      </div>
                    </div>
                    <div className="btn-part">
                      <a
                        className="readon orange-btn transparent" style={{ cursor: "pointer" }}

                        onClick={() => navigate("/orientation")}
                      >
                        ENROLL NOW
                      </a>
                      <br />
                      <br />
                      <span style={{ color: "#ff5421" }}>
                        Our Hyper-Personalized Session for Metaverse Costs <br /><strong>Rs. 50,000 INR</strong></span>
                      &nbsp;&nbsp;
                      <span class="price-contact">
                        <Link
                          style={{ cursor: "pointer" }}

                          to="contact"
                        >Contact Us</Link>

                      </span>
                      <ul style={{ fontSize: "12px", fontFamily: "poppins", color: "black", marginTop: "2%", marginBottom: "2%" }}>
                        {learningData.map((item, index) => (
                          <li key={index}>
                            <LazyLoadImageComp src={bullet} alt="bullets" width={15} height={17} data={item.title}></LazyLoadImageComp>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Fragment>
  );
};

export default OpenCourses;
