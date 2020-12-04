import { createGlobalStyle, css } from "styled-components";

const helper = css`
  .MuiSvgIcon-root {
    display: block;
  }
`;

export const MuiOverrides = createGlobalStyle`${helper}`;
