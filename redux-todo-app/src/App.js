import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/actions";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Badge,
} from "react-bootstrap";
import TodoItem from "./components/TodoItem";
import EditModal from "./components/EditModal";
import InfoModal from "./components/InfoModal";

function App() {
  const [input, setInput] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const todos = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!input.trim()) return setShowInfo(true);
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">My To-Do App</h1>

      <div className="position-fixed top-0 end-0 m-3">
        <Badge bg="info">To-Dos: {todos.length}</Badge>
      </div>

      <Button variant="link" className="mb-2" onClick={() => setShowInfo(true)}>
        {" "}
        Info
      </Button>

      <InputGroup className="mb-4 w-50 mx-auto">
        <FormControl
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <Button onClick={handleAdd}>Add</Button>
      </InputGroup>

      <div className="d-flex flex-column align-items-center">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <EditModal />
      <InfoModal show={showInfo} onHide={() => setShowInfo(false)} />
    </Container>
  );
}

export default App;
