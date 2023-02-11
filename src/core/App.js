import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyle";
import { light } from "../themes/theme";
import Main from "../components/Main";
import Header from "../components/Header";
import Realtime from "../features/Realtime";
import DateComponent from "../components/DateComponent";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <Main>
        <DateComponent />
        <Realtime />
      </Main>
    </ThemeProvider>
  );
}

export default App;
