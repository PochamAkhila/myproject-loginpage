import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Delete/styles.css"

const ConfirmModal = (props) => {

  const [show, setShow] = useState(true);
  
  const handleClose = (() => props.onClose(true)); 
  const handleDismiss = (() => props.onClose(false));

  return (
    <>
    <div>
      <Modal show={show} onHide={handleDismiss} className="top">
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDismiss}>
            No
          </Button>
          <Button variant="success" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};

export default ConfirmModal;
