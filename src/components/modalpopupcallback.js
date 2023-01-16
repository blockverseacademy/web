/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const ModalPopUpCallBack = props => {
  const navigate = useNavigate();
  const onRequestCallBack = () => {
   
    window.location.replace("/#contactus");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      animation={true}
      dialogClassName="modal-content"
      
    >
      <Modal.Body
        style={{ background: "#1456FF", color: "#fff", position: "relative" }}
      >
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <Button onClick={props.onHide} style={{backgroundColor:"#e24f19",     border: "1px solid #e24f19"}}>Close</Button>
        </div>{" "}
        &nbsp;
        <div>
          <Link   href="#"
                      className="btn btn-primary"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={800}  onClick={props.onHide} style={{backgroundColor:"#e24f19",     border: "1px solid #e24f19"}}>Request a Callback</Link>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPopUpCallBack;
