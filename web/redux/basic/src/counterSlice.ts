import { createSlice } from "@reduxjs/toolkit";

const sliceCounter = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 0) {
        return;
      }

      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

const sliceCounterReducer = sliceCounter.reducer;
export default sliceCounterReducer;
export const incrementSliceCounterActions = sliceCounter.actions.increment;
export const decrementSliceCounterActions = sliceCounter.actions.decrement;
export const resetSliceCounterActions = sliceCounter.actions.reset;
