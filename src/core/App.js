import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../themes/GlobalStyle";
import {light} from "../themes/theme";
import Main from "../components/Main";
import Realtime from "../features/Realtime";
import Header from "../features/Header";
import Navigation from "../features/Nav";
import {Section} from "../components/Section";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Main>
        <Navigation/>
        <Section>
          <Header/>
          <Realtime/>
        </Section>
      </Main>
    </ThemeProvider>
  );
}

export default App;
