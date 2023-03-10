import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyle";
import { dark, light } from "../themes/theme";
import { router } from "./routes";
import { RouterProvider } from "react-router";
import { useSelector } from "react-redux";
import { selectIsDarkThemeOn } from "../components/Header/ThemeSwitch/themeSlice";

function App() {
  const isDarkThemeOn = useSelector(selectIsDarkThemeOn);

  return (
    <ThemeProvider theme={isDarkThemeOn ? dark : light}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
