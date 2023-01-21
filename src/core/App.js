import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../themes/GlobalStyle";
import {light} from "../themes/theme";
import Main from "../components/Main";
import Realtime from "../features/Realtime";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Main>
        <Realtime/>
      </Main>
    </ThemeProvider>
  );
}

export default App;
