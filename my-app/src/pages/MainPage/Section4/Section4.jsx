import React from "react";
import "./Section4.css";
import vsImage from "../../../assets/images/p.jpg"; // 배경 이미지 경로
import plusImage from "../../../assets/images/Plus.png"; // 더보기 이미지 경로

export const Section4 = () => {
  return (
    <div className="page4">
      <div className="imageLeft">
        <img src={vsImage} alt="더보기 이미지" style={{width:'50vw', height:'auto'}}/>
        </div>
      
      <div className="right">
        <div className="title4">
        <div className="title-top4">정겨운 마음 다정한 손길</div>
        <div className="title-bot4">햇살주간보호센터</div> 
      </div>



        <div className="content4">
            <div className="content4-text">전화: 053-644-9250 <br/>팩스: 053-644-9251</div>
            <div className="content4-text">대구광역시 달서구<br/> 조암남로 38 / 601호 (월성동)</div>
            <div className="content4-text">매일<br/> 07:00-19:00</div>
            
        </div> 
        <div className="right-bottom">
                  <div className="line"></div>
        <img src={plusImage} alt="더보기 이미지" style={{width:'2.5vw',height:'2.5vw',objectFit:'cover'}}/>

        </div>
      </div>
      
     </div>

  );
}

