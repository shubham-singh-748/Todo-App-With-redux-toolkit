// "configureStore" function used to create a Redux store with various pre-confgured settings which makes easy to use Redux.
import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";

// Here passing an empty object "{}" means we are using default configuration provided by redux toolkit.
export const store = configureStore({
    reducer:todoReducer
});