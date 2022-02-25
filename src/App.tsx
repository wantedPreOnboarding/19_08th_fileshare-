import React, { useEffect } from "react";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import Container from "components/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { loadFileList } from "redux/slices/fileList";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFileList());
  }, []);

  const data = useAppSelector((state) => state.fileList);

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<LinkPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
