import React from 'react';
import './vision.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from "../../../components/Banner/Banner";
import topImage from '../../../assets/images/BannerTop.png';
import Image1 from '../../../assets/images/vision1.png';
import Image2 from '../../../assets/images/vision2.png';
import Image3 from '../../../assets/images/vision3.png';
import Image4 from '../../../assets/images/vision4.png';

export const Vision = () => {
  return (
    <>
      <Navbar />
      <Banner imageSrc={topImage} title="비전과 목표" />
      <div className="vision">
        <div className="vision-top">
          <img src={Image1} alt="비전 이미지1" className="vision-top-image" />
          <div className="vision-top-text">
            <div className="vision-top-text1">“사람 손이 약손이다”</div>
            <div className="vision-top-text2">햇산주간보호센터는 사람의 손길이 얼마나 소중한지 늘 기억하며,
              <br/>고령이나 노인성 질환으로 인해 혼자서 일상생활을 하기 어려운 어르신들께
              <br/>신체활동과 가사활동을 지원하는 장기요양 서비스를 제공합니다.</div>
            <div className="vision-top-text3">이를 통해 어르신들의 건강한 노후와 안정된 생활을 돕고,
              <br/>가족들의 돌봄 부담을 덜어드려 더 나은 삶의 질을 함께 만들어가고자 합니다.</div>
          </div>
        </div>
        <div className="vision-middle">
          <img src={Image2} alt="비전 이미지2" className="vision-middle-image" />
          <div className="vision-middle-text">
            <div className="vision-middle-text1">햇살주간보호센터는</div>
            <div className="vision-middle-text2"><br/>1. 환경 중심적입니다.</div>
            <div className="vision-middle-text1">답답한 도심 속에서 좋은 공기를 못 마시는 부모님들을 위해 센터 내 공기 정화 식물과 아로마 테라피를 통해 좋은 환경을 제공합니다.<br/></div>
            <div className="vision-middle-text2"><br/>2. 통합 의료 서비스를 제공합니다.</div>
            <div className="vision-middle-text1">의사와 한의사에게 직접적인 의료 자문을 구해 노화로 발생하는 질병들을 원활하게 케어하는 데 힘쓰고 있습니다.<br/></div>
            <div className="vision-middle-text2"><br/>3. 부모님 특성에 맞는 맞춤케어를 해드립니다.</div>
            <div className="vision-middle-text1">어르신 한분한분의 특성을 잘 파악하여 심리적 안정과 신체적 활동 등 맞춤프로그램을 제공해 드립니다.<br/></div>
          </div>
        </div>
        <div className="vision-bot">
          <div className="vision-bot-left">
            <div className="vision-bot-line"></div>
            <div className="vision-middle-text">
              <div className="vision-bot-text2">전문 요양보호사 비율 업계 최고</div> 
              <div className="vision-bot-text1">햇살주간보호센터는 업계 최고 수준의 전문 요양보호사 비율을 유지하며,
                <br/>어르신들께 세심하고 안전한 돌봄을 제공합니다.</div> 
              <div className="vision-bot-text2">소중한 한 끼, 건강한 식사</div> 
              <div className="vision-bot-text1">어르신의 건강을 위해 직접 장을 보고 정성껏 조리하여
                <br/>따뜻하고 균형 잡힌 식사를 매일 제공합니다.</div> 
              <div className="vision-bot-text2">어르신 맞춤형 서비스</div> 
              <div className="vision-bot-text1">현장 경험이 풍부한 치매 전문 선생님들이 함께하며
                <br/>어르신 한 분 한 분의 상황과 필요에 맞춘 맞춤 돌봄 서비스를 실천합니다.</div> 
              <div className="vision-bot-text2">장기요양등급 무료 신청 지원</div> 
              <div className="vision-bot-text1">장기요양등급 신청이 어려우신 어르신과 가족들을 위해
                <br/>무료로 등급 신청을 도와드리고 있습니다.</div> 
            </div>
          </div>
          <div className="vision-bot-right">
            <img src={Image3} alt="비전 이미지3" className="vision-bot-image1" />
            <img src={Image4} alt="비전 이미지4" className="vision-bot-image2" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};