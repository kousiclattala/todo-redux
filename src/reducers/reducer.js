import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  //   {
  //     id: "1",
  //     title: "First Todo",
  //   },
  //   {
  //     id: "2",
  //     title: "Second Todo",
  //   },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      // state.filter((state) => state.id !== action.payload);
      state.pop(action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
