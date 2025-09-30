const initialState = {
  list: [],
  editingTodo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, { content: action.payload, completed: false }],
      };
    case "DELETE_TODO":
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        list: state.list.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "SET_EDITING_TODO":
      return {
        ...state,
        editingTodo: action.payload,
      };
    case "EDIT_TODO":
      return {
        ...state,
        list: state.list.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, content: action.payload.content }
            : todo
        ),
        editingTodo: null,
      };
    default:
      return state;
  }
};

export default reducer;
