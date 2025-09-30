// src/components/TodoItem.jsx
import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

function TodoItem({ todo, onToggle, onEdit, onDelete, onAdd }) {
  // Protect against undefined todo
  if (!todo) return null;

  return (
    <Row
      className={`align-items-center mb-2 p-2 border rounded ${
        todo.completed ? "text-muted opacity-50" : ""
      }`}
    >
      <Col xs={6} className="text-start">
        <Form.Check
          type="checkbox"
          label={todo.content}
          checked={todo.completed}
          onChange={onToggle}
        />
      </Col>
      <Col>
        <Button variant="warning" onClick={onEdit} disabled={todo.completed}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Col>
    </Row>
  );
}

export default TodoItem;
