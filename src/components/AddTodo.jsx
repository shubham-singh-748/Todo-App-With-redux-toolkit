import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  // this useState used what for taking user's todos input.
  const [Input, setInput] = useState("");

  // declaring useDispatch()
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    // it stops the web page from refreshing when a form is submitted.
    e.preventDefault();
    // here "dispatch" used to send actions to the redux store.  
    // here action to be performed is "addTodo" which is adding a todo item to the applications state.
    // "Input" in "addTodo(Input)" contains data for "newTodo".
    dispatch(addTodo(Input));

    // after dispatching an action, it resets the "Input field".
    setInput("");
  };

  return (
    
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 text-center">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
