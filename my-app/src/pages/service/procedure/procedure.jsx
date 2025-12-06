import React from 'react';
import './procedure.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from "../../../components/Banner/Banner";
import topImage from '../../../assets/images/BannerTop.png';

export const Procedure = () => {
    return (
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="입소신청" />
        
        <div className="admission-container">
            <h2>입소신청 안내</h2>
            <p>입소신청은 아래의 절차를 따라 진행해 주세요.</p>
            
            <ol>
            <li>신청서를 다운로드하여 작성합니다.</li>
            <li>작성한 신청서를 이메일로 제출합니다.</li>
            <li>제출 후, 담당자가 연락을 드립니다.</li>
            </ol>
    
            <button className="download-button">신청서 다운로드</button>
        </div>
    
        <Footer />
        </>
    );
    }
