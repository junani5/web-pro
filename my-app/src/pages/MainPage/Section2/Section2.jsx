import React from "react";
import { Link } from "react-router-dom";
import "./Section2.css";
import blogImage from "../../../assets/images/blogS2.png"; // 블로그 이미지 경로
import volunteerImage from "../../../assets/images/volunteerS2.png"; // 봉사 이미지 경로
import exImage from "../../../assets/images/Exterior.png"; // 입소 이미지 경로
import plusImage from "../../../assets/images/Plus.png"; // 더보기 이미지 경로
import faqImage from "../../../assets/images/qna.png"; // 질문 이미지 경로

export const Section2 = () => {
  return (
    <div className="pageS2">
      <header className="titleS2">햇살주간보호센터 바로가기</header>
      <div className="menuS2">
        <div className="menuS2L">
          <Link to="/volunteer" className="menuS2LF">
            <img src={volunteerImage} alt="봉사 이미지" />
            <div className="menuS2LF-top">봉사 안내</div>
            <div className="menuS2LF-bot">여러분의 도움이 세상을 바꿉니다.</div>
            <div className="menu-plus">
            <img src={plusImage} alt="더보기 이미지" />
            </div>
          </Link>
          <Link to="/admission" className="menuS2LS">
            <img src={exImage} alt="입소 이미지" />
            <div className="menuS2LS-top">입소 안내</div>
            <div className="menuS2LS-bot">정성껏 모시겠습니다.</div>
            <div className="menu-plus">
            <img src={plusImage} alt="더보기 이미지" />
            </div>
          </Link>
          <Link to="/Faq" className="menuS2LT">
            <img src={faqImage} alt="질문 이미지" />
            <div className="menuS2LT-top">자주 물어보는 질문</div>
            <div className="menuS2LT-bot">최대한 친절하게 알려드리겠습니다.</div>
            <div className="menu-plus">
            <img src={plusImage} alt="더보기 이미지" />
            </div>
          </Link>
          
        </div>
        <button className="menuS2R" onClick={handleClick}>
          <div className="menuS2R-logo">
            <img src={blogImage} alt="블로그 이미지" />
          </div>
          <div className="menuS2R-top">블로그 방문하기</div>
          <div className="menuS2R-bot">햇살주간보호센터의 다양한 소식을 확인하세요!</div>
          <div className="menu-plus">
            <img src={plusImage} alt="더보기 이미지" />
          </div>
        </button>

      </div>
    </div>
  );
}


const handleClick = () => {
  // TODO: 백엔드 리디렉션 URL로 교체 예정
  window.open("https://blog.naver.com/sunshine9250", "_blank");
};
