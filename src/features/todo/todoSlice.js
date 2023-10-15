// we are importing two things "createState and nanoid" from redux toolkit library.
import { createSlice, nanoid } from "@reduxjs/toolkit";

// "createSlice" is like how to make and modify to-do list. It includes adding, removing and actions we want to perform in to-do list.

// "nanoid" simply generates unique IDs for our todo items.

// setting up "initialState" starting with one todo item saying, "Hello World"
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// "todoSlice" is set of rules for how the to-do list should work.
export const todoSlice = createSlice({
  // giving a name to the rule book, we call it "todo"
  name: "todo",

  // "initialState" defines the to-do list starts, here it starts with one to-do item that says "Hello World"
  initialState,

  // "reducers" like what actions to take with todo list.
  // Here simply taking two actions "addTodo" and "removeTodo".
  reducers: {
    // "STATE" is figuring out where the new todo should be added in the list of todo lists.

    // "ACTION" defines what actions to be performed, here we are adding new todo item in the list using "addTodo()"
    addTodo: (state, action) => {
      const todo = {
        // generates unique IDs.
        id: nanoid(),
        // this takes text you want to add and puts in the new todo.
        text: action.payload,
      };
      // this add new todo item in the list of "todos"
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // It filters "state.todos" array, to exclude the todo item whose "id" matches with "action.payload"
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // logic for to update todo
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },
  },
});
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
