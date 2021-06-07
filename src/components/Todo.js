import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { removeTodo } from "../reducers/reducer";

const Todo = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <button onClick={() => remove(todo.id)}>remove todo</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
