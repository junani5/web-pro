import React, { useState } from 'react';
import './charge.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from "../../../components/Banner/Banner";
import topImage from '../../../assets/images/BannerTop.png';

export const Charge = () => {
    // 표에 들어갈 데이터를 상태로 관리합니다.
    // 나중에 3등급, 4등급 데이터를 추가하려면 이 배열에 객체만 추가하면 됩니다.
    const [tableData1] = useState([
        {
            id: 1,
            header: "구 분",
            contents: ["월 한도액", "3시간 ~ 6시간", "6시간 ~ 8시간", "8시간 ~ 10시간", "10시간 ~ 13시간"]
        },
        {
            id: 2,
            header: "1등급",
            contents: ["2,512,900", "41,820", "56,060","69,730","76,820"]
        },
        {
            id: 3,
            header: "2등급",
            contents: ["2,331,200", "38,720", "51,930","64,590","71,160"]
        },
        {
            id: 4,
            header: "3등급",
            contents: ["1,528,200", "35,740", "47,940","59,640","65,750"]
        },
        {
            id: 5,
            header: "4등급",
            contents: ["1,409,700", "34,120", "46,300","58,010","64,090"]
        },
        {
            id: 6,
            header: "5등급",
            contents: ["1,208,900", "32,490", "44,650","56,360","62,460"]
        }
    ]);

    const [tableData2] = useState([
        {
            id: 1,
            header: "구 분",
            contents: ["월 한도액", "3시간 ~ 6시간", "6시간 ~ 8시간", "8시간 ~ 10시간", "10시간 ~ 13시간"]
        },
        {
            id: 2,
            header: "1등급",
            contents: ["2,512,900", "0", "0","0","0"]
        },
        {
            id: 3,
            header: "2등급",
            contents: ["2,331,200", "48,700", "65,320","81,270","89,530"]
        },
        {
            id: 4,
            header: "3등급",
            contents: ["1,528,200", "44,960", "60,290","75,010","82,700"]
        },
        {
            id: 5,
            header: "4등급",
            contents: ["1,409,700", "42,910", "58,260","72,980","80,600"]
        },
        {
            id: 6,
            header: "5등급",
            contents: ["1,208,900", "40,850", "56,170","70,890","78,550"]
        }
    ]);

    return (
        <>
            <Navbar />
            <Banner imageSrc={topImage} title="이용 비용" />

            <div className="charge-container">
                <div className="charge-content">
                    <div className="charge-text title">햇살주간보호센터 이용 비용 안내 (2025년 1월 1일 기준)</div>
                    <div className="charge-text subtitle">1. 장기요양 급여 비용</div>
                    <div className="charge-text">
                        장기요양 급여 비용은 매년 노인장기요양위원회(위원장: 보건복지부 차관)가 결정하고 고시하는
                        <br />'장기요양 급여 비용 등에 관한 고시(보건복지부 고시)'에 따릅니다.<br/><br/>
                    </div>
                    <div className="charge-text image-note">① 일반실 이용 시간별 1일 기준 금액</div>
                    
                    <div className="charge-box">
                        <div className="charge-box2">
                            {/* tableData 배열을 순회하며 열(Column)을 생성합니다 */}
                            {tableData1.map((column) => (
                                <div key={column.id} className="charge-column">
                                    {/* 첫 번째 줄 (헤더) */}
                                    <div className="charge-row1">
                                        <div className="charge-text box">{column.header}</div>
                                    </div>
                                    
                                    {/* 나머지 줄 (데이터 내용) */}
                                    {column.contents.map((content, index) => (
                                        <div key={index} className="charge-row2">
                                            <div className="charge-text box">{content}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="charge-text image-note"><br/>② 치매전담실 이용 시간별 1일 기준 금액</div>


                    <div className="charge-box">
                        <div className="charge-box2">
                            {/* tableData 배열을 순회하며 열(Column)을 생성합니다 */}
                            {tableData2.map((column) => (
                                <div key={column.id} className="charge-column">
                                    {/* 첫 번째 줄 (헤더) */}
                                    <div className="charge-row1">
                                        <div className="charge-text box">{column.header}</div>
                                    </div>
                                    
                                    {/* 나머지 줄 (데이터 내용) */}
                                    {column.contents.map((content, index) => (
                                        <div key={index} className="charge-row2">
                                            <div className="charge-text box">{content}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="charge-text subtitle"><br/>2. 본인 부담금 및 감면 혜택</div>
                    <div className="charge-text">-일반 대상자: 장기요양 급여 비용의 15%를 본인이 부담합니다.
                    <br/>-기초생활수급권자: 본인 부담금은 무료입니다.
                    <br/>-의료급여수급권자 및 기타 감경 대상자: 급여 비용의 **6% ~ 9%**를 본인이 부담합니다.</div>
                    <div className="charge-text subtitle"><br/>3. 비급여 항목</div>
                    <div className="charge-text">-식사 재료비: 1일 1식 재료비 (점심: 2,500원 / 저녁: 2,500원 / 간식: 오전/오후 각 500원)
                    <br/>-비급여 항목인 식사 재료비는 전액 본인 부담입니다.</div>
                    <div className="charge-text subtitle"><br/>4. 기타 이용 서비스 (무료 지원)</div>
                    <div className="charge-text">-센터 내 차량을 이용한 송영 서비스 (어르신 댁과 센터 간 이동 지원)
                    <br/>-목욕서비스 주1회
                    </div>
                    

                </div>
            </div>

            <Footer />
        </>
    );
}