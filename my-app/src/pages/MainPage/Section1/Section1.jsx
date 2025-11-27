import React from "react";
import "./Section1.css";
import bgImage from "../../../assets/images/backgroundS1.png"; // 배경 이미지 경로

export const Section1 = () => {
  return (
     <div className="pageS1" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="titleS1">
      <div className="top-textS1">집에 계신 우리 부모님 어디에서 모실지 고민 중이신가요?</div>
      <div className="bot-textS1">햇살주간보호센터가<br/>부모님을 햇살처럼 웃게 해드립니다.</div>
      </header>
    </div>
  );
}

