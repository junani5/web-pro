import React from 'react';
import './intro.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from "../../../components/Banner/Banner";
import topImage from '../../../assets/images/BannerTop.png';
import IntroImg from '../../../assets/images/intro1.png';
import IntroImg2 from '../../../assets/images/intro2.png';

export const Intro = () => {
    return (
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="인사말" />
        
        <div className="intro-page">
            <div className="intro-top">
                <img src={IntroImg} alt="상단이미지" className="intro-top-img" />
                <div className="intro-top-text">
                    <div className="intro-top-text1">햇살주간보호센터는</div>
                    <div className="intro-top-text2">햇살주간보호센터는 노인성 질환으로 인해
                    <br/>일상생활에 불편을 겪으시는 어르신들께 꼭 필요한 맞춤형 케어와
                    <br/>체계적인 교육 시스템을 제공하는
                    <br/>달서구 어르신들의 배움터이자 쉼터입니다.
                    <br/><br/>저희 센터는 단순한 돌봄을 넘어, 어르신 한 분 한 분이
                    <br/>삶의 질을 높이고 활기찬 노년을 보내실 수 있도록
                    <br/>다양한 프로그램을 운영하고 있습니다.
                    </div>
                    <div className="intro-top-text3"><br/>햇살처럼 따사로운 마음으로,
                    <br/>언제나 어르신 곁에서 건강과 행복을 지켜드리겠습니다.</div>
                </div> 
            </div>
            <div className="intro-mid">
                <div className="intro-mid-text">햇살주간보호센터는 달서구 75곳의 주간보호센터 중에서
                <br/>유일하게 <b><b>치매전담실</b></b>을 갖춘 기관으로, 어르신들께 차별화된 프리미엄 서비스를 제공합니다.</div>
            </div>
            <div className="intro-bot">
                <img src={IntroImg2} alt="하단이미지" className="intro-bot-img" />
                <div className="intro-bot-text-back">
                    <div className="intro-bot-text">햇살주간보호센터는 2023년 우수기관으로 평가되었습니다.</div>
                </div>
            </div>
            <div className="intro-final">햇살주간보호센터는 단순히 부모님을 맡기는 곳이 아니라,
            <br/>부모님을 모시는 곳으로써 인지 활동과 센터 내에 있었던 모든 일을 자세히 전달 드립니다.
            <br/>이런 과정들 덕분에 햇살주간보호센터에 오시는 보호자와 어르신 모두 웃으며 걱정 없이 함께 지낼 수 있습니다.
            <br/><br/>홀로 계신 부모님이 걱정 되신다면,
            <br/>언제든 믿고 내 부모님처럼 모실 수 있는 <b><b>햇살주간보호센터</b></b>가 좋은 선택이 될 수 있으니 편하게 문의 주세요.</div>
        </div>
    
        <Footer />
        </>
    );
    }
