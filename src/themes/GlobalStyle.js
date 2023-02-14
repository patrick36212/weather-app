import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    word-wrap: anywhere;
    min-height: 100vh;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.mainFont};
    background: linear-gradient(67.1deg, ${({ theme }) =>
      theme.colors.mainColor} 0%, ${({ theme }) =>
  theme.colors.additionalColor} 100%);
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
`;
