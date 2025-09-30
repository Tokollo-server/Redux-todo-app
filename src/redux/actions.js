export const addTodo = (content) => ({ type: "ADD_TODO", payload: content });
export const deleteTodo = (id) => ({ type: "DELETE_TODO", payload: id });
export const toggleTodo = (id) => ({ type: "TOGGLE_TODO", payload: id });
export const editTodo = (id, content) => ({
  type: "EDIT_TODO",
  payload: { id, content },
});
export const setEditingTodo = (todo) => ({
  type: "SET_EDITING_TODO",
  payload: todo,
});
