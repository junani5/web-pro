import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import mealImage from "../../../assets/images/lak.png";
import "./recreation.css";

export const Recreation = () => {
    return(
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="레크레이션 일정표" />
        <div className="page">
       
            <div className="top-title-line">
                <img src={mealImage} alt="갤러리 이미지" />
            </div>
        </div>
        <Footer />
        </>
    );
}