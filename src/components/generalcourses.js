import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Link } from "react-scroll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

/**
 * @componentName GeneraL Courses
 * @description Component to display courses categorised as General courses
 */

/// Import Slice Component 
import { getCourses } from "../slices/Course";

/// Custom Stylesheet
import "./generalcourses.css"

const GeneralCourses = () => {

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [arrState, SetarrState] = useState([]);
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
          let price = 15000;
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
          let price = 200
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
              toast.warn("No active General course found");
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
        return val.type === "O";
      })
      .map((data, index) => (

        <div className="col-lg-4 col-md-4" key={index}>
          <div className="client-courses-info">

            <h3>*{data.title}

            <span className="price">{state.currency}{state.price}{state.currency==='Rs. '?' INR':''}</span>
            </h3>
            <img
              src={`${process.env.REACT_APP_PUBLICURL}/${data.imagepath}`}
              alt="" style={{ height: "35%", width: "100%" }}
            />
            <p style={{ fontSize: "12px", lineHeight: "1.3" }}>
              {data.description}
            </p>
            <span className="sticky">
              <button> <Link
                activeclass=""
                to="contact"
              >
                Contact Us
              </Link></button>
            </span>

          </div>
        </div>
      ));
  };

  return (


    <div className="row">
      {partnerData()}

    </div>

  );
};

export default GeneralCourses;
