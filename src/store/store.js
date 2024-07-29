import numberSlice from "../slice/numberSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    numberSlice: numberSlice.reducer,
  },
});

export default store;
