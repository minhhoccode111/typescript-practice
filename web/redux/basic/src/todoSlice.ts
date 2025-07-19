import { createSlice } from "@reduxjs/toolkit";
import type { Todo } from "./todoModel";
import { nanoid } from "nanoid";

const initValue: Todo[] = [
  { id: nanoid(), title: "tai vi sao", done: false },
  { id: nanoid(), title: "la tai ai", done: true },
];

const sliceTodo = createSlice({
  name: "todo",
  initialState: { value: initValue },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload.todo);
    },
    delete: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    toggle: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        const currentDoneState = state.value[index].done;
        state.value[index].done = !currentDoneState;
      }
    },
    update: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.value[index] = action.payload.todo;
      }
    },
  },
});

const sliceTodoReducer = sliceTodo.reducer;
export default sliceTodoReducer;
export const addSliceTodoActions = sliceTodo.actions.add;
export const deleteSliceTodoActions = sliceTodo.actions.delete;
export const toggleSliceTodoActions = sliceTodo.actions.toggle;
export const updateSliceTodoActions = sliceTodo.actions.update;
