import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../themes/GlobalStyle";
import {light} from "../themes/theme";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>

    </ThemeProvider>
  );
}

export default App;
