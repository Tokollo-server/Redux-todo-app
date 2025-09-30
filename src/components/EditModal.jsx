import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditModal({ show, onHide, input, setInput, onSave, isEdit, warning }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Edit To-Do" : "Add To-Do"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="todoInput">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            name="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSave()}
          />
        </Form.Group>

        {warning && <div className="text-danger mt-2">{warning}</div>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="success" onClick={onSave}>
          {isEdit ? "Save" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
