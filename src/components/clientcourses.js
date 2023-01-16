import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import LazyLoadImageComp from '../components/LazyLoadImage'

/**
 * @componentName ClientCourses
 * @description This components will display list of active Client Courses
 */

/// Import Slice Component 
import { getCourses } from "../slices/Course";

/// Custom Stylesheet
import "./clientcourses.css"

const ClientCourses = () => {

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [arrState, SetarrState] = useState([]);


  useEffect(() => {

    setIsLoading(true);
    const timeoutID = window.setTimeout(() => {
      if (isLoading === true) {
        dispatch(getCourses())
          .then((data) => {
            if (data.payload.success === 0) {
              toast.warn("No client courses found");
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
        return val.type === "C";
      })
      .map((data, index) => (

        <div className="col-lg-4 col-md-4" key={index}>
          <div className="client-courses-info">
            Cost Includes - Sourcing, Screening, Skilling and Certification
            <h3>*{data.title}


            </h3>
            <LazyLoadImageComp
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
            <p style={{ fontSize: "12px", lineHeight: "1.3" }}><strong>*The price vary as per contract with the client for each Individual courses</strong></p>
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

export default ClientCourses;
