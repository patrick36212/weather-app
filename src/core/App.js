import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../themes/GlobalStyle";
import {light} from "../themes/theme";
import Main from "../components/Main";
import Realtime from "../features/Realtime";
import Aside from "../features/Aside";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Main>
        <Aside/>
        <Realtime/>
      </Main>
    </ThemeProvider>
  );
}

export default App;
