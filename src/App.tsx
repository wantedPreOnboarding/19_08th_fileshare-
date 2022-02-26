import React, { useEffect } from "react";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import Container from "components/Container";
// router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// redux
import { useAppDispatch } from "hooks/useStore";
import { loadFileList } from "redux/slices/fileList";
import Notification from "components/Notification/Notification";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFileList());
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Notification />
        <Routes>
          <Route path="/" element={<LinkPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
