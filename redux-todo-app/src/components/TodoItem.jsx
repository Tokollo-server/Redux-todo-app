import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, setEditingTodo } from "../redux/actions"; // ✅ fixed path
import { Button, FormCheck } from "react-bootstrap";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    dispatch(setEditingTodo(todo));
  };

  return (
    <div
      className={`w-75 d-flex align-items-center justify-content-between p-2 mb-2 border rounded ${
        todo.completed ? "opacity-50" : ""
      }`}
    >
      <FormCheck
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />

      <span className="mx-3 flex-grow-1 text-start">{todo.content}</span>
      <div>
        <Button
          variant="warning"
          size="sm"
          disabled={todo.completed}
          onClick={handleEdit}
        >
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
