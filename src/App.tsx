import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from "components/Container";
import LinkPage from 'pages/LinkPage';
import DetailPage from 'pages/DetailPage';

const App = () => {
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
}

export default App;