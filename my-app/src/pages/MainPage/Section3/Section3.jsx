import React from "react";
import { Link } from "react-router-dom";
import "./Section3.css";
import galleryImage from "../../../assets/images/gallery.png"; // 질문 이미지 경로



export const Section3 = () => {
  return (
    <div className="pageS3">
        <Link to="/Notice" className="menuS3L">
            <div className="menuS3-top">공지사항</div>
            
                <div className="menuS3L-botContent">
                   <div className="menuS3L-botItem">
                        <div className="text" >센터의 운영 시간, 휴무일, 특별 이벤트 등을 안내합니다.</div>
                   </div>
                   <div className="menuS3L-botItem">
                        <div className="text" >센터의 운영 시간, 휴무일, 특별 이벤트 등을 안내합니다.</div>
                   </div>
                   <div className="menuS3L-botItem">
                        <div className="text" >센터의 운영 시간, 휴무일, 특별 이벤트 등을 안내합니다.</div>
                   </div>
                   <div className="menuS3L-botItem">
                        <div className="text" >센터의 운영 시간, 휴무일, 특별 이벤트 등을 안내합니다.</div>
                   </div>
                   <div className="menuS3L-botItem">
                        <div className="text" >센터의 운영 시간, 휴무일, 특별 이벤트 등을 안내합니다.</div>
                   </div>
               
                </div>
            
        </Link>
        
        <Link to="/gallery" className="menuS3R">
            <div className="menuS3R-bot">
               
            </div>
        </Link>
    </div>
  );
}


