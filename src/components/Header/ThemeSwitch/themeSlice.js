import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkThemeOn: window.matchMedia("(prefers-color-scheme: dark)").matches,
  },
  reducers: {
    toggleDarkTheme: (state) => {
      state.isDarkThemeOn = !state.isDarkThemeOn;
    },
  },
});

export const { toggleDarkTheme } = themeSlice.actions;

export const selectIsDarkThemeOn = (state) => state.theme.isDarkThemeOn;

export default themeSlice.reducer;
