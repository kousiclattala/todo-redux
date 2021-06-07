import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div>
      <Fragment>
        <Todo />
        <TodoForm />
      </Fragment>
    </div>
  );
}

export default App;
