
# React Redux To-Do Application

A feature-rich **To-Do List App** built with **React** and **Redux** for state management.  
This app demonstrates adding, editing, deleting, and marking tasks as completed, while keeping state centralized.

---

##  Features

-  **Initial State**
  
  const initialTodoState = {
    list: [
      { content1: "Content1", completed: false },
      { content2: "Content2", completed: false },
    ]
  }
## Components & State Management

Redux Store

Holds the global to-do list state.

Reducers

ADD_TODO → add new task

EDIT_TODO → edit existing task

DELETE_TODO → remove task

TOGGLE_COMPLETE → mark task completed

React Components

App → Parent component

TodoList → Renders tasks

TodoItem → Single task with buttons (Edit, Delete, Completed)

AddTodo → Input + Add button

InfoPopup → Instructions modal

TodoCounter → Shows number of tasks

 Usage

Type a new task in the input box.

Press Enter or click Add to create the task.

Click Edit to update a task (modal appears with the task pre-filled).

Click Delete to remove a task.

Tick the Completed checkbox → task fades out and becomes uneditable.

Click the  Info Icon for instructions.

Watch the counter update as tasks are added/removed.

## Deployment

To prepare the app for production:

npm run build


## You can deploy to:

GitHub Pages

Netlify

Vercel
