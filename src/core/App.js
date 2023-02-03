import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../themes/GlobalStyle";
import {light} from "../themes/theme";
import {Section} from "../components/Section";
import Main from "../components/Main";
import Realtime from "../features/Realtime";
import DateComponent from "../components/DateComponent";
import Header from "../components/Header";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Main>
        <Header/>
        <Section>
          <DateComponent/>
          <Realtime/>
        </Section>
      </Main>
    </ThemeProvider>
  );
}

export default App;
