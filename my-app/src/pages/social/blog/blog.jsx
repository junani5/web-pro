// import { Link } from 'react-router-dom';
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import "../social.css";

export const Blog = () => {
    return(
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="블로그 소개" />
        <div className="page-social">
            <div className="social-header">
                <div className="social-header-text1">우리 햇살주간보호센터의 소소한 이야기부터<br/>어르신들의 활기찬 일상까지.</div>
                <div className="social-header-text2">이곳은 햇살주간보호센터의 일상을 기록하고,
                따뜻한 순간들을 함께 나누는 공간입니다. <br/>
                프로그램 참여 후기,
                계절별 행사 이야기, 건강 관리 팁, 어르신들의 작품 전시 등<br/>다양한 소식을 블로그를 통해 전해드리고 있어요.
                <br />때로는 웃음 가득한 활동 모습도, 때로는 잔잔한 감동의 이야기들도 담겨 있습니다.<br/>센터에서 어떤 일이 일어나고 있는지,
                <br />어떤 변화를 만들고 있는지를 궁금해하신다면 이 블로그가 그 창이 되어줄 거예요.
                <br />지역 사회와 함께 소통하고 공감하며,<br/>어르신들의 삶이 더 풍요로워질 수 있도록 여러분의 따뜻한 관심과 응원을 기다립니다.</div>
            </div>
            <div className="social-btn">
               <a href="https://blog.naver.com/sunshine9250" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn-item">
                <div className="social-btn-text">햇살주간보호센터 블로그 바로가기</div>
                </a>
            </div>
            
        
        </div>
        <Footer/>
        </>
    );
}


