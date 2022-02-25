import React, { useEffect } from "react";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import Container from "components/Container";
import GlobalStyle from "styles/GlobalStyle";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { loadFileList } from "redux/slices/fileList";
import theme from "styles/theme";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFileList());
  }, []);

  const data = useAppSelector((state) => state.fileList);

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
};

export default App;
