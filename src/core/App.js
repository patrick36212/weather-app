import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyle";
import { dark, light } from "../themes/theme";
import { router } from "./routes";
import { RouterProvider } from "react-router";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
