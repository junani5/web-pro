// import { Link } from 'react-router-dom';
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import mainImage from "../../../assets/images/socialImg.png";
import "../social.css";

export const Instagram = () => {
    return(
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="인스타그램 소개" />
        <div className="page-social">
            <div className="social-header">
                <div className="social-header-text1">햇살주간보호센터 어르신들의 따뜻한 순간을 사진으로 전해드립니다.</div>
                <div className="social-header-text2">햇살주간보호센터의 인스타그램은 어르신들의 소소한 일상과 행복한 순간들을 기록하는 공간입니다.</div>
                <div className="social-header-text3">프로그램 활동 사진, 계절마다 펼쳐지는 다양한 행사, 직접 만든 작품, 반가운 웃음이 담긴 한 컷까지 매일의 이야기를 
                <br />사진으로 담아 전해드립니다. 멀리서도 가까이처럼, 사진 한 장으로 어르신들의 삶을 공감할 수 있는 이곳에서 함께해 주세요.
                <br />팔로우와 응원은 어르신들에게 큰 힘이 됩니다. 여러분의 따뜻한 ‘좋아요’와 ‘댓글’이 소통의 다리가 됩니다.</div>
            </div>
            <div className="social-btn">
                <a href="https://www.instagram.com/p/DK1Tyu0RbuP/?igsh=MWF2eHI3ZHhtcG53MQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn-item">
                <div className="social-btn-text">햇살주간보호센터 인스타그램 바로가기</div>
                </a>
            </div>
            <div className="social-main">
                <div className="social-img">
                        <img src={mainImage} alt="상단 이미지" />
                </div>
            </div>
            <div className="social-footer">
                <div className="social-footer-box">
                <div className="social-footer-text">오늘도 어르신들의 웃음으로 하루가 반짝였습니다.
                <br />사진 속 그 미소, 그 따뜻한 눈빛.
                <br />지금 이 순간을 여러분과 나누고 싶어요.</div>
                </div>
            </div>




        </div>
        
        
        <Footer/>
        </>
    );
}


