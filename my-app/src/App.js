import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/main/MainPage";



// 이후 다른 페이지 import 예정

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* 다른 라우트 추가 예정 */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
