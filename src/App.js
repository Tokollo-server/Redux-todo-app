import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo, editTodo } from "./redux/todoSlice";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { InfoCircle } from "react-bootstrap-icons";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";
import EditModal from "./components/EditModal";
import InfoModal from "./components/InfoModal";

function App() {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [warning, setWarning] = useState("");

  const handleAdd = () => {
    if (!input.trim()) {
      setWarning("Please enter a task.");
      return;
    }

    if (editId !== null) {
      dispatch(editTodo({ id: editId, newContent: input }));
      setEditId(null);
    } else {
      dispatch(addTodo({ id: uuidv4(), content: input, completed: false }));
    }

    setInput("");
    setShowModal(false);
    setWarning("");
  };

  const handleEditClick = (id, content) => {
    setInput(content);
    setEditId(id);
    setShowModal(true);
  };

  return (
    <Container className="text-center p-4">
      <h1 className="mb-4">My To-Do App</h1>

      {/* Info button */}
      <Button variant="info" className="mb-3" onClick={() => setShowInfo(true)}>
        <InfoCircle /> Info
      </Button>

      {/* Add To-Do button */}
      <Button
        variant="primary"
        onClick={() => setShowModal(true)}
        className="mb-3"
      >
        Add To-Do
      </Button>

      {/* Todo counter */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          zIndex: 1000,
        }}
      >
        <Badge bg="secondary">To-Dos: {todos.length}</Badge>
      </div>

      {/* Render TodoItem components */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => dispatch(toggleTodo(todo.id))}
          onEdit={() => handleEditClick(todo.id, todo.content)}
          onDelete={() => dispatch(deleteTodo(todo.id))}
          onAdd={() => setShowModal(true)}
        />
      ))}

      {/* Edit Modal */}
      <EditModal
        show={showModal}
        onHide={() => setShowModal(false)}
        input={input}
        setInput={setInput}
        onSave={handleAdd}
        isEdit={editId !== null}
        warning={warning}
      />

      {/* Info Modal */}
      <InfoModal show={showInfo} onClose={() => setShowInfo(false)} />
    </Container>
  );
}

export default App;
