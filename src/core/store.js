import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import currentReducer from "../features/Current/currentSlice";
import themeReducer from "../components/Header/ThemeSwitch/themeSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    current: currentReducer,
    theme: themeReducer,
  },
});

export default store;
