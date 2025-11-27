import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logoF.png"; // 로고 이미지 경로

export const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-inner">
          <Link to="/" className="logoF"><img src={logoImage} alt="로고"/></Link>
          <div className="text-footer">상호 : 햇살주간보호센터 | 대구광역시 달서구 조암남로 38 / 601호(월성동)
            <br/>전화번호 : 053-644-9250 | 팩스번호 : 053-644-9251 
            <br/>이메일 : sunshine9250@naver.com
          </div>
      </div>
    </div>
  );
}


