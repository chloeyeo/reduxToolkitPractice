import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: {
    age: 0,
  },
  reducers: {
    increment: (state, actions) => {
      state.age += actions.payload;
    },
    decrement: (state, actions) => {
      state.age -= actions.payload;
    },
  },
});

export default numberSlice;
export const { increment, decrement } = numberSlice.actions;
