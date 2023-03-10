import { configureStore } from "@reduxjs/toolkit";
import currentReducer from "../features/Current/currentSlice";
import themeReducer from "../components/Header/ThemeSwitch/themeSlice";

const store = configureStore({
  reducer: {
    current: currentReducer,
    theme: themeReducer,
  },
});

export default store;
