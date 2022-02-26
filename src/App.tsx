import React, { useEffect } from "react";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import Container from "components/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// redux
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import { loadFileList } from "redux/slices/fileList";
import * as selector from "redux/selectors";
import Notification from "components/Notification/Notification";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFileList());
  }, []);

  const datas = useAppSelector((state) => state.fileList);
  const data = useAppSelector(selector.selectAllFiles);
  const file = useAppSelector(selector.fileSelectorById("7725NJHW"));

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
