import React from "react";
import { Modal } from "react-bootstrap";

// Reusable InfoModal component
function InfoModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>App Instructions</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-start">
        <ul>
          <li>Add or edit tasks using the input modal.</li>
          <li>Completed tasks are faded and not editable.</li>
          <li>The to-do counter updates as tasks change.</li>
          <li>Use the info button for help anytime.</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}

export default InfoModal;
