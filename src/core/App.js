import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyle";
import { dark, light } from "../themes/theme";
import Main from "../components/Main";
import Header from "../components/Header";
import DateComponent from "../components/DateComponent";
import Current from "../features/Current";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <GlobalStyle />
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Main>
        <DateComponent />
        <Current />
      </Main>
    </ThemeProvider>
  );
}

export default App;
