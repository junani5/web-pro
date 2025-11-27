import React from "react";
import "./Section4.css";

export const Section4 = () => {
  return (
    <div className="page4">
      <div className="title4">
        <div className="title-top4">정겨운 마음 다정한 손길</div>
        <div className="title-bot4">햇살주간보호센터</div> 
      </div>

      <img src={require('../../../assets/images/wave_line.png')} alt="점선" className="divider-wave" />

        <div className="content4">
            <div className="content4-box">전화: 053-644-9250 <br/>팩스: 053-644-9251</div>
            <div className="content4-box">대구광역시 달서구<br/> 조암남로 38 / 601호 (월성동)</div>
            <div className="content4-box">매일<br/> 07:00-19:00</div>
        </div> 
     </div>

  );
}

