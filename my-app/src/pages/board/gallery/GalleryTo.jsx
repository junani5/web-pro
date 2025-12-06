// import { Link } from 'react-router-dom';
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import titleImage from "../../../assets/images/galleryTitleLine.png";
import title2Image from "../../../assets/images/galleryTitleLine2.svg";
import mainImage from "../../../assets/images/galleryPictureEX.png";
import "./GalleryTo.css";

export const GalleryTo = () => {
    return(
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="갤러리" />
        <div className="page">
            <div className="top">
                <div className="top-title">제목</div>
                <div className="top-title-line">
                    <img src={titleImage} alt="갤러리 이미지" />
                </div>
                <div className="top-content">
                <div className="top-content-text">작성자</div>
                <div className="top-content-line">
                    <img src={title2Image} alt="갤러리 이미지" />
                </div>        
                <div className="top-content-text">작성일</div>        
                <div className="top-content-line">
                    <img src={title2Image} alt="갤러리 이미지" />
                </div>                
                <div className="top-content-text">조회수</div>
                </div>
            </div>
            <div className="main">
                <div className="main-item">
                    <img src={mainImage} alt="갤러리 이미지" />
                </div> 
                <div className="main-item">
                    <img src={mainImage} alt="갤러리 이미지" />
                </div> 
            </div>
        </div>
        <Footer />

        </>
    );
}


