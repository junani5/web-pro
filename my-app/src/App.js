import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/main/MainPage";
import { Gallery } from "./pages/board/gallery/gallery";
import { GalleryTo } from "./pages/board/gallery/GalleryTo";
import { Instagram } from "./pages/social/instagram/instagram.jsx";
import { Blog } from "./pages/social/blog/blog.jsx"; // ✅ 블로그 페이지 추가
import { Youtube } from "./pages/social/youtube/youtube.jsx"; // ✅ 유튜브 페이지 추가
import { Meal } from "./pages/service/meal/meal";
import { Recreation } from "./pages/service/recreation/recreation"; // ✅ 레크레이션 일정표 페이지 추가
import { Admission } from "./pages/service/admission/admission";
import { Procedure } from "./pages/service/procedure/procedure";
import { Volunteer } from "./pages/service/volunteer/volunteer"; // ✅ 봉사신청 페이지 추가
import { Intro} from "./pages/center/intro/intro"; // ✅ 센터 소개 페이지 추가
import { Map } from "./pages/center/map/map";// ✅ 오시는 길 페이지 추가
import { Vision} from "./pages/center/vision/vision"; //사업신념 페이지 추가



// 이후 다른 페이지 import 예정

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* 다른 라우트 추가 예정 */}
        <Route path="/gallery" element={<Gallery />} /> {/* ✅ 갤러리 페이지 라우트 추가 */}
        <Route path="/Instagram" element={<Instagram />} /> 
        <Route path="/meal" element={<Meal />} /> 
        <Route path="/admission" element={<Admission />} /> 
        <Route path="/volunteer" element={<Volunteer />} /> {/* ✅ 봉사신청 페이지 라우트 추가 */}
        <Route path="/intro" element={<Intro />} /> {/* ✅ 센터 소개 페이지 라우트 추가 */}
        <Route path="/blog" element={<Blog />} /> {/* ✅ 블로그 페이지 라우트 추가 */}
        <Route path="/gallery/GalleryTo" element={<GalleryTo />} /> 
        <Route path="/youtube" element={<Youtube />} /> {/* ✅ 유튜브 페이지 라우트 추가 */}
        <Route path="/recreation" element={<Recreation />} /> {/* ✅ 레크레이션 일정표 페이지 라우트 추가 */}
        <Route path="/map" element={<Map />} /> {/* ✅ 오시는 길 페이지 라우트 추가 */}
        <Route path="/vision" element={<Vision />} /> {/* 사업신념 페이지 추가 */}
        <Route path="/procedure" element={<Procedure />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
