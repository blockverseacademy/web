import React, { useState } from "react";
import ModalPopUp from "./modalpopup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSupport } from "../slices/Support";
import Icofont from 'react-icofont';
import ScrollAnimation from 'react-animate-on-scroll';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * @componentName Contact us
 * @description Component to capture contact details
 */

/// Custom Stylesheet
import './contact.css'


const Contact = () => {
  const initialSupportState = {
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
    optionname: ""
  };

  const [modalShow, setModalShow] = useState(false);
  const [formdata, setFormData] = useState(initialSupportState);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const contactDefault = {
    SectionbgTitle: "Contact",
    sectionTitle: "Our Contact",
    sectionDescription:
      "Please provide the following details to enable us to reach out to you.",
    AddTitle: "Address",
    Address: "BlockVerse Technologies Private Limited, Vleeresteyn 11, ",
    AddressMore: "Oegstgeest, Netherlands 2341BP",
    EmailTitle: "Email",
    Email: "contact@blockverseacademy.com",
    PhoneTitle: "Phone",
    Phone: "+1-325-555-0156"
  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formdata, [name]: value });
  };

  const saveData = (event) => {
    event.preventDefault();
    const { name, email, number, subject, message, optionname } = formdata;
    dispatch(
      createSupport({
        name,
        email,
        number,
        subject,
        message,
        optionname
      })
    )
      .unwrap()
      .then((data) => {

        setFormData({
          name: data.name,
          email: data.email,
          number: data.number,
          subject: data.subject,
          message: data.message,
          optionname: data.optionname
        });
        setModalShow(true);
      })
      .catch((e) => {
        toast.warn(e);
      });
  };

  const handleHidePopup = () => {
    setModalShow(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <section id="contact" className="contact-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <ScrollAnimation animateIn="fadeInUp">
              <div className="section-title">
                <h2>{contactDefault.sectionTitle}</h2>
                <p style={{ color: "black" }}>{contactDefault.sectionDescription}</p>
                <span className="section-title-bg">
                  {contactDefault.SectionbgTitle}
                </span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="modal">
          <ModalPopUp
            heading="Confirmation"
            show={modalShow}
            onHide={handleHidePopup}
          >
            <div className="thankyou">
              <div className="popup-content">
                <h2 className="title">Thank you</h2>
                <p className="text-white text-center thankyou-text">
                  Our team contact you shortly.
                </p>
              </div>
            </div>
          </ModalPopUp>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="address-area">
              <div className="addess">
                <Icofont icon="icofont-google-map" />
                <h4>{contactDefault.AddTitle}</h4>
                <p><strong>{contactDefault.Address}</strong></p>
                <p><strong>{contactDefault.AddressMore}</strong></p>
              </div>
              <div className="email">
                <Icofont icon="icofont-email" />
                <h4>{contactDefault.EmailTitle}</h4>
                <p>{contactDefault.Email}</p>
              </div>

            </div>
          </div>

          <div className="col-lg-7 col-md-7">
            <div className="contact-form">
              <form onSubmit={saveData} action="#" method="post">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      Select Reason type : &nbsp;
                      <select
                        className="custom-select"
                        onChange={handleInputChange}
                        id="optionname"
                        name="optionname"
                        value={formdata.optionname}
                        required
                      >
                        <option value={""}>--Select--</option>
                        <option>Consultancy</option>
                        <option>More about courses</option>
                        <option>Personalized Metaverse session</option>
                        <option>Speak to an expert</option>
                      </select>
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Your Name"
                        id="name"
                        name="name"
                        value={formdata.name || ""}
                        required
                        onChange={handleInputChange}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your Email"
                        id="email"
                        name="email"
                        value={formdata.email || ""}
                        required
                        onChange={handleInputChange}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Your Number"
                        required
                        name="number"
                        id="number"
                        value={formdata.number || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Company Name"
                        id="subject"
                        name="subject"
                        value={formdata.subject || ""}
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Would you like us to know more - Please share"
                        id="message"
                        name="message"
                        value={formdata.message || ""}
                        required
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="center-wrap">
                  <div className="button">


                    <button type="submit">
                      Submit <Icofont icon="icofont-long-arrow-right" />{" "}
                    </button>
                    <div className="mask"></div>
                  </div>
                </div>
                <div className="clearfix" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
