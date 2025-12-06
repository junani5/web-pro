import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import mealImage from "../../../assets/images/Meal.png";
import "./meal.css";

export const Meal = () => {
    return(
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="식단표" />
        <div className="page">
        <header className="month">
            <div className="month-text">8월</div>
        </header>
            <div className="top-title-line">
                <img src={mealImage} alt="갤러리 이미지" />
            </div>
        </div>
        <Footer />
        </>
    );
}