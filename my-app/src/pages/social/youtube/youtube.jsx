// import { Link } from 'react-router-dom';
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import logo from "../../../assets/images/youtube.svg";
import "../social.css";

export const Youtube = () => {
    return(
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="유튜브 소개" />
        <div className="page-social">
            <img src={logo} alt="로고 이미지"  style={{width:'10vw'}}></img>
            <div className="social-header">
                <div className="social-header-text1">어르신들의 삶을 영상으로 기록하고, 세상과 나누는 따뜻한 채널입니다.</div>
                <div className="social-header-text2">노인복지센터 유튜브 채널에서는 어르신들의 일상과 웃음, 그리고 소중한 활동의 순간들을 영상으로 담아 전해드립니다.
                    <br/>함께하는 운동 프로그램, 계절 행사, 재능 나눔 공연, 건강 강의까지 다채로운 콘텐츠를 통해
                    <br />어르신들의 활기찬 삶을 가까이에서 느껴보세요.
                    <br />영상을 통해 어르신들의 목소리를 듣고, 그 마음을 함께 나누는 공간이 되기를 바랍니다.
                    <br />구독과 좋아요는 어르신들에게 큰 응원이 됩니다.
                </div>
            </div>
            <div className="social-btn">
                <a href="https://www.youtube.com/@happywood5762" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn-item">
                <div className="social-btn-text">햇살주간보호센터 유튜브 바로가기</div>
                </a>
            </div>

        </div>
        
        
        <Footer/>
        </>
    );
}


