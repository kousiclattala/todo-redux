import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addTodo } from "../reducers/reducer";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (title == "") {
      return alert("Input is Empty");
    }

    const todo = {
      title: title,
      id: nanoid(),
    };

    dispatch(addTodo(todo));

    setTitle("");
  };

  return (
    <div>
      <form action="">
        <label htmlFor="todoTitle">Todo Title</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={onSubmit}>Add Todos</button>
      </form>
    </div>
  );
};

export default TodoForm;
