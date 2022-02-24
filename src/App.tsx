import React from "react";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import Container from "components/Container";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <LinkPage />
          <DetailPage />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
