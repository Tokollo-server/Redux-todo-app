import React, { useState, useEffect } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, setEditingTodo } from "../redux/actions";

function EditModal() {
  const editingTodo = useSelector((state) => state.editingTodo);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingTodo) setInput(editingTodo.content);
  }, [editingTodo]);

  const handleSave = () => {
    if (!input.trim()) return;
    dispatch(editTodo(editingTodo.id, input));
  };

  return (
    <Modal
      show={!!editingTodo}
      onHide={() => dispatch(setEditingTodo(null))}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit To-Do</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl value={input} onChange={(e) => setInput(e.target.value)} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch(setEditingTodo(null))}
        >
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
