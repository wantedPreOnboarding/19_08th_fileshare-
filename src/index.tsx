import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";
import App from "./App";


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
