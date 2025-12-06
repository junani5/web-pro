import React, { useState } from 'react';
import '../notice/notice.css';
import { Link } from 'react-router-dom';
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import PLImage from "../../../assets/images/PolygonL.svg";
import PRImage from "../../../assets/images/PolygonR.svg";

export const Faq = () => {
  const [noticeList] = useState([
    { id: 1, title: '!!중요질문!!', date: '2025.07.21', views: 3 },
    { id: 2, title: '정기 프로그램 일정 안내', date: '2025.07.20', views: 5 },
    { id: 3, title: '데이케어센터 휴무일 공지', date: '2025.07.19', views: 8 },
    { id: 3, title: '데이케어센터 휴무일 공지', date: '2025.07.19', views: 8 },
    { id: 3, title: '데이케어센터 휴무일 공지', date: '2025.07.19', views: 8 },
    { id: 3, title: '데이케어센터 휴무일 공지', date: '2025.07.19', views: 8 },
    { id: 3, title: '데이케어센터 휴무일 공지', date: '2025.07.19', views: 8 },
    { id: 3, title: '데이케어센터 휴무일 공지', date: '2025.07.19', views: 8 },
    { id: 3, title: '데이케어센터 휴무일 공지', date: '2025.07.19', views: 8 },
    { id: 3, title: '데이케어센터 휴무일 공지', date: '2025.07.19', views: 8 },
    { id: 3, title: '데이케어센터 휴무일 공지', date: '2025.07.19', views: 8 },
    // ... 이하 생략
  ]);
  const pageNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <Navbar />
      <Banner imageSrc={topImage} title="자주 물어보는 질문" />
    
      <div className="notice-container">
        {/* 제목 */}
        <div className="notice-title">
          <div className="notice-title-bot">
            <div className="col no">No</div>
            <div className="col title">제목</div>
            <div className="col date">날짜</div>
            <div className="col views">조회수</div>
          </div>
        </div>

        {/* 공지 목록 */}
        <div className="notice-list">
          {noticeList.map((item) => (
            <div className="notice-row" key={item.id}>
              <div className="col no">{item.id}</div>
              <div className="col title">{item.title}</div>
              <div className="col date">{item.date}</div>
              <div className="col views">{item.views}</div>
            </div>
          ))}
        </div>

        {/* 페이지 네비 */}
        <div className="notice-movebar">
          <img src={PLImage} alt="이전" className="arrow" />
          <div className="pages">
            {pageNumbers.map((num) => (
              <span key={num} className="page-num">{num}</span>
            ))}
          </div>
          <img src={PRImage} alt="다음" className="arrow" />
        </div>

        {/* 검색 & 글쓰기 */}
       <div className="notice-search">
          <Link to="/adNotice" className="notice-admin">글쓰기</Link>
          <div className="notice-search-right">
              <div className="notice-search-box">
              <span className="placeholder">검색어를 입력해 주세요.</span>
          </div>
            <button className="notice-search-btn">검색</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


