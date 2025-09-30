import { createSlice } from "@reduxjs/toolkit";

// Initial state for the todo list
const initialState = {
  list: [
    { id: "1", content: "Content1", completed: false },
    { id: "2", content: "Content2", completed: false },
  ],
};

// Create a slice for todos with actions and reducers
// This will handle adding, deleting, toggling, and editing todos
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    editTodo: (state, action) => {
      const { id, newContent } = action.payload;
      const todo = state.list.find((todo) => todo.id === id);
      if (todo) todo.content = newContent;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
