import { createGlobalStyle, css } from "styled-components";

const helper = css`
  body {
    font-family: "Roboto", sans-serif;
  }
`;

export const GlobalStyles = createGlobalStyle`${helper}`;
