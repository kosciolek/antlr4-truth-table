import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { muiTheme } from "../src/styles/theme";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { GlobalStyles } from "../src/styles/GlobalStyles";
import { MuiOverrides } from "../src/styles/MuiOverrides";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const globalDecorator = (Story) => (
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <MuiOverrides />
          <GlobalStyles />
          <Story />
        </StylesProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);

export const decorators = [globalDecorator];
