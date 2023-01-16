import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore"
import { db } from '../config/firebase'

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/// Custom Stylesheet
import "./opencourses.css";

const GetCourses = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([])
  const [arrState, SetarrState] = useState([]);
  const navigate = useNavigate();
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
          let price = 20000;
          setState({
            ...state,
            ip: data.ip,
            countryName: data.country_name,
            countryCode: data.country_calling_code,
            city: data.city,
            timezone: data.timezone,
            price,
            currency: "₹"
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
            currency: "$"
          });
        }

      })
      .catch((error) => {
        console.log(error);
      });
  };


  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    getGeoInfo();
    setIsLoading(true);
    const timeoutID = window.setTimeout(() => {
      if (isLoading === true) {
        const q = query(collection(db, 'courses'), where("type","==","G") ,orderBy('createdon', 'desc'))
        onSnapshot(q, (querySnapshot) => {
          SetarrState(querySnapshot.docs.map(doc => ({
              id: doc.data().id,
              data: doc.data()

            })))
        })

      
   
      } else {
        setIsLoading(false);
      }
    }, 250);
    return () => window.clearTimeout(timeoutID);
  }, []);


  const partnerData = () => {


    return arrState
    
      .map((data, index) => (

        <div className="col-lg-12 col-md-12" key={index}>
          <div className="open-courses-info">

            <h3>{data.data.title}</h3>

            <img
              src={`${process.env.REACT_APP_PUBLICURL}/${data.data.imagepath}`}
              alt=""
              style={{ height: "40%", width: "100%" }}

            />


          </div>
        </div>
      ));
  };

  return (

    // <div className='taskManager__tasks'>
    // {tasks.map((task) => (
    //   <Task
    //     id={task.id}
    //     key={task.id}
    //     completed={task.data.completed}
    //     title={task.data.title} 
    //     description={task.data.description}
    //   />
    // ))}
    // </div>

    <div className="row">
      <div className="rs-cta main-home">
        <div className="partition-bg-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6">


              {partnerData()}



              </div>
              <div className="col-md-6 details" style={{ marginTop: "2%" }}>
                <div className="col-lg-10">
                  <div className="sec-title3">
                    <h2 className="title white-color mb-16">

                      Live Course - Join Today &nbsp;
                      <span className="price">{state.currency}{state.price}</span>

                    </h2>
                    <div className="desc white-color pr-100 md-pr-0">
                      The Metaverse Orientation Course is designed for
                      people to get an exposure to the concepts, technology
                      and potential business value of the Metaverse.
                    </div>
                  </div>
                  <div className="btn-part">
                    <a
                      className="readon orange-btn transparent"
                      href="#"
                      onClick={() => navigate("/orientation")}
                    >
                      ENROLL NOW
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default GetCourses;