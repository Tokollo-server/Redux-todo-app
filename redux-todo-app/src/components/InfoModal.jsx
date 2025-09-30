import React from "react";
import { Modal, Button } from "react-bootstrap";

function InfoModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title> How To Use</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li> Add a task using the input or Enter key.</li>
          <li> Edit with the "Edit" button (if not completed).</li>
          <li> Use checkboxes to mark tasks complete.</li>
          <li> Use the "Delete" button to remove a task.</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoModal;
