/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const ModalPopUp = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      animation={false}
      dialogClassName="modal-content"
    >
      <Modal.Body
    
      >
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{backgroundColor:"#e24f19",     border: "1px solid #e24f19"}}>Close</Button>
      </Modal.Footer>
    </Modal>

    
  );
};

export default ModalPopUp;
