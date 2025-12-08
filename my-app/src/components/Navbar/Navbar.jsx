import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../assets/images/logoN.png";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Link to="/" className="logoN" aria-label="홈으로">
          <img src={logoImage} alt="로고" style={{width:'3vw', height:'auto'}}/>
        </Link>

        <div className="menu-nav" role="menubar">
          {/* 센터소개 */}
          <div className="menu-item-with-sub" role="none">
            <Link to="/intro" className="menu-nav-item" role="menuitem">센터 소개</Link>
            <div className="submenu" role="menu">
              <Link to="/intro" role="menuitem">인사말</Link>
              <Link to="/map" role="menuitem">오시는 길</Link>
              <Link to="/vision" role="menuitem">센터만의 비전/목표(사업 신념)</Link>
            </div>
          </div>

          {/* 입소안내 */}
          <div className="menu-item-with-sub" role="none">
            <Link to="/charge" className="menu-nav-item" role="menuitem">이용 안내</Link>
            <div className="submenu" role="menu">
              <Link to="/admission" role="menuitem">이용 대상</Link>
              <Link to="/procedure" role="menuitem">이용 절차</Link>
              <Link to="/charge" role="menuitem">이용 비용</Link>
            </div>
          </div>

          {/* 봉사안내 */}
          <div className="menu-item-with-sub" role="none">
            <Link to="/volunteer" className="menu-nav-item" role="menuitem">봉사 안내</Link>
            <div className="submenu" role="menu">
              <Link to="/volunteer" role="menuitem">봉사 안내</Link>
            </div>
          </div>

          {/* 활동안내 */}
          <div className="menu-item-with-sub" role="none">
            <Link to="/recreation" className="menu-nav-item" role="menuitem">활동 안내</Link>
            <div className="submenu" role="menu">
              <Link to="/recreation" role="menuitem">레크레이션 일정표</Link>
            </div>
          </div>

          {/* SNS안내 */}
          <div className="menu-item-with-sub" role="none">
            <Link to="/blog" className="menu-nav-item" role="menuitem">SNS 안내</Link>
            <div className="submenu" role="menu">
              <Link to="/blog" role="menuitem">블로그</Link>
              <Link to="/Instagram" role="menuitem">인스타그램</Link>
              <Link to="/youtube" role="menuitem">유튜브</Link>
            </div>
          </div>

          {/* 게시판 (오른쪽 끝: overflow 방지 정렬) */}
        </div>

      </div>
    </div>
  );
};
