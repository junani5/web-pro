import React from 'react';
import './procedure.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from "../../../components/Banner/Banner";
import topImage from '../../../assets/images/BannerTop.png';
import List from '../../../assets/images/scroll-text.svg';

export const Procedure = () => {
    return (
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="이용 절차" />
        
        <div className="pro-container">
            <img src={List} alt="갤러리 이미지"  style={{width:'10vw'}}></img>
            <div className="pro-content">
                 <div className="pro-text-title">햇살주간보호센터 이용 절차 안내</div>
                    <div className="pro-text-subtitle">햇살주간보호센터를 이용하시고자 하는 어르신과 보호자분들을 위해
                        <br/>저희 센터의 이용 절차를 안내해 드립니다. 
                    <br/>총 4단계로 간결하게 진행되오니 참고하시어 이용에 불편함이 없으시길 바랍니다.<br/><br/></div>
       
                <div className="pro-text">
                    <b><b>1단계. 이용 신청 (전화 및 방문 상담)</b></b>
                    <br/>센터 이용을 원하시면 먼저 전화 또는 방문을 통해 상담을 받아주세요.<br/>상담을 통해 어르신의 상태와 필요하신 서비스를 확인하고, 
                    센터 이용 가능 여부를 안내해 드립니다.<br/>

                    <br/>신청 시 구비 서류
                    <br/>상담 후 이용을 신청하실 때 다음 서류를 준비해 주시면 됩니다.
                    <br/>-이용 신청서: 센터 양식 1부
                    <br/>-장기요양 인정서: 개인별 장기요양 이용계획서 각 1부
                    <br/>-건강진단서: 1부 (결핵, B형 간염, 매독 검사 결과 포함)<br/><br/><br/><br/>

                    <b><b>2단계. 이용 대기</b></b><br/>
                    신청서와 구비 서류가 접수되면 이용 순번에 따라 대기자 명단에 등록됩니다.
                    <br/>센터 정원 상황에 따라 대기 기간이 발생할 수 있으며, 입소 가능 시기가 되면 개별적으로 연락드립니다.<br/><br/><br/><br/>

                    <b><b>3단계. 이용 계약</b></b><br/>
                    입소 순서가 되었을 때, 센터와 보호자 간에 주야간보호 서비스 제공 및 이용에 관한 계약을 체결합니다.
                    <br/>이 과정에서 서비스 내용, 이용 시간, 비용 등을 최종적으로 확인합니다.<br/><br/><br/><br/>

                    <b><b>4단계. 등록 및 이용 개시</b></b><br/>
                    이용 계약이 완료되면, 어르신은 센터에 최종 등록되어 정식으로 햇살주간보호센터의 다양한 서비스를 이용하실 수 있게 됩니다.
                </div>                
            </div>
        </div>
    
        <Footer />
        </>
    );
    }
