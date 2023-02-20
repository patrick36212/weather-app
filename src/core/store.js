import { configureStore } from "@reduxjs/toolkit";
import currentReducer from "../features/Current/currentSlice";

const store = configureStore({
  reducer: {
    current: currentReducer,
  },
});

export default store;
