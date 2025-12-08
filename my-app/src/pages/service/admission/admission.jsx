import React from 'react';
import './admission.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from "../../../components/Banner/Banner";
import topImage from '../../../assets/images/BannerTop.png';
import People from '../../../assets/images/users-round.svg';

export const Admission = () => {
    return (
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="이용 대상" />
        
        <div className="admission-container">
            <div className="admission">
                <img src={People} alt="갤러리 이미지"  style={{width:'10vw'}}></img>
                <div className="admission-title">햇살주간보호센터 이용 대상 안내</div>
                <div className="admission-text">
                <b><strong>이용 대상 기준</strong></b><br />
                만 60세 이상 어르신 (일부 센터는 만 65세 이상 기준을 적용하기도 합니다)<br /><br />

                <b><strong>장기요양 등급 기준:</strong></b><br />
                노인장기요양보험 등급(1등급부터 5등급까지)을 받은 어르신<br /><br />

                <b><strong>돌봄 필요성 기준:</strong></b><br />
                치매, 중풍 등의 노인성 질병으로 인해 일상생활에서 돌봄이 필요하신 어르신,<br />
                독거노인 또는 가족의 사정 등으로 인해 낮 시간 동안 보호가 필요한 상황에 처한 어르신
                </div>
            </div>
        </div>
    
        <Footer />
        </>
    );
    }
