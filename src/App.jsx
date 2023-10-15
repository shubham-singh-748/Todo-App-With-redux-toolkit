import { Provider } from "react-redux";
import { store } from "./app/store";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <Provider store={store}>
        <AddTodo />
        <Todos />
    </Provider>
  );
};
export default App;
