import {createGlobalStyle} from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    box-sizing: border-box;
    color: ${({theme}) => theme.colors.mainFont};
    background: ${({theme}) => theme.colors.mainBackground};
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
`;