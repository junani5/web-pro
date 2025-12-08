import React from "react";
import "./Section1.css";
import bgImage from "../../../assets/images/el.png"; // 배경 이미지 경로

export const Section1 = () => {
  return (
    <>
      <div className="main">
        <div className="titleS1">
          <div className="bot-textS1">집에 계신 우리 부모님<br/> 어디에서 모실지 고민 중이신가요?</div>
          <div className="top-textS1">햇살주간보호센터가 부모님을 햇살처럼 웃게 해드립니다.</div>
        </div>
        <div className="image">
        <img src={bgImage} alt="더보기 이미지" style={{width:'23vw', height:'auto'}}/>
        </div>
     

      </div>
      

    </>
  
  );
}

