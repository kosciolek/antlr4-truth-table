import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import {configureAppStore} from "./store";
import { ThemeProvider } from "styled-components";
import { muiTheme } from "./styles/theme";
import {
  MuiThemeProvider,
  StylesProvider,
  CssBaseline,
} from "@material-ui/core";
import { GlobalStyles } from "./styles/GlobalStyles";
import {MuiOverrides} from "./styles/MuiOverrides";

const store = configureAppStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <MuiOverrides/>
          <GlobalStyles />
          <Provider store={store}>
            <App />
          </Provider>
        </StylesProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
