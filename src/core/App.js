import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../themes/GlobalStyle";
import {light} from "../themes/theme";
import Main from "../components/Main";
import Header from "../components/Header";
import Realtime from "../features/Realtime";
import {useState} from "react";

function App() {
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lon: null
  })

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle/>
      <Header setCoordinates={setCoordinates}/>
      <Main>
        <Realtime coordinates={coordinates}/>
      </Main>
    </ThemeProvider>
  );
}

export default App;
