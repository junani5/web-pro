import React from "react";
import { Link } from "react-router-dom";
import "./Section2.css";
import volunteerImage from "../../../assets/images/volunteer.svg"; // 봉사 이미지 경로
import exImage from "../../../assets/images/house.svg"; // 입소 이미지 경로
import plusImage from "../../../assets/images/Plus.png"; // 더보기 이미지 경로
import blogImage from "../../../assets/images/monitor.svg"; // 블로그 이미지 경로

export const Section2 = () => {
  return (
    <div className="pageS2">
      <header className="title">
        <div className="titleS2">햇살주간보호센터 바로가기</div>

      </header>
      <div className="menuS2">
        <div className="menuS2L">

          <Link to="/volunteer" className="menuS2LF">
            <div className="menuS2-t">
              <img src={volunteerImage} alt="봉사 이미지" style={{ width: '2.7vw', height: '2.7vw', objectFit: 'cover' }}/>
              <div className="menuS2LF-top">봉사 안내</div>
              <div className="menuS2LF-bot">여러분의 도움이 세상을 바꿉니다.</div>
            </div>
            <div className="menu-plus">
                <img src={plusImage} alt="더보기 이미지" style={{width:'2.5vw',height:'2.5vw',objectFit:'cover'}}/>
            </div>
          </Link>

          <Link to="/admission" className="menuS2LF">
            <div className="menuS2-t">
              <img src={exImage} alt="입소 이미지" style={{ width: '41px', height: '41px', objectFit: 'cover' }}/>
              <div className="menuS2LF-top">입소 안내</div>
              <div className="menuS2LF-bot">언제나 정성껏 모시겠습니다.</div>
            </div>
            <div className="menu-plus">
              <img src={plusImage} alt="더보기 이미지" style={{width:'2.5vw',height:'2.5vw',objectFit:'cover'}}/>
            </div>
          </Link>

          
        </div>

        <div className="menuS2LF" onClick={handleClick}>
          <div className="menuS2-t">
            <img src={blogImage} alt="블로그 이미지" style={{ width: '2.7vw', height: '2.7vw', objectFit: 'cover' }}/>
            <div className="menuS2LF-top">블로그 방문하기</div>
            <div className="menuS2R-bot">센터의 다양한 소식을 확인하세요!</div>
          </div>
          <div className="menu-plus">
            <img src={plusImage} alt="더보기 이미지" style={{width:'2.5vw',height:'2.5vw',objectFit:'cover'}}/>
          </div>
        </div>

      </div>
    </div>
  );
}


const handleClick = () => {
  // TODO: 백엔드 리디렉션 URL로 교체 예정
  window.open("https://blog.naver.com/sunshine9250", "_blank");
};
