import React, { useEffect } from "react";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { loadFileList } from "redux/slices/fileList";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFileList());
  }, []);

  const data = useAppSelector((state) => state.fileList);

  return (
    <>
      <GlobalStyle />
      <Container>
        <LinkPage />
        <DetailPage />
      </Container>
    </>
  );
}

export default App;
