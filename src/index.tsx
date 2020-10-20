import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import { muiTheme } from "./styles/theme";
import { MuiThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
