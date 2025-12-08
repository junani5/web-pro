import React from 'react';
import './volunteer.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from "../../../components/Banner/Banner";
import topImage from '../../../assets/images/BannerTop.png';
import Image1 from '../../../assets/images/volImage1.png';
import Image2 from '../../../assets/images/volImage2.png';

export const Volunteer = () => {
    return (
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="봉사 안내" />
        
        <div className="vol-page">
            <div className="vol-contents">
                <div className="vol-top">
                    <div className="vol-text">
                        <div className="vol-top-text1">학생들의 마음, 어르신들의 웃음</div>
                        <div className="vol-top-text2">햇살주간보호센터는 매일 아침, 학생 봉사자들의 
                        <br />맑은 에너지로 하루를 엽니다.<br />
                        <br />수줍게 인사를 건네고 손을 꼭 잡아드리는 그 마음이 
                        <br />어르신들께는 큰 위로가 됩니다.<br />
                        <br />밝은 목소리로 책을 읽어드리고, 체조 시간에 함께 박수를 맞추고, 
                        <br />식사 시간에 살뜰히 보조해 드리는 그 순간마다 
                        <br />어르신들의 웃음이 활짝 피어납니다.
                        </div>
                    </div>
                    <img src={Image1} alt="상단 이미지" className="vol-top-img" style={{width:'25vw',height:'auto'}}/>
                    
                </div>
                <div className="vol-bot">
                    <img src={Image2} alt="하단 이미지" className="vol-bot-img" style={{width:'25vw',height:'auto'}}/>
                    <div className="vol-text">
                        <div className="vol-top-text1">재능이 ‘기쁨’이 되는 곳</div>
                        <div className="vol-top-text2">우리 센터에는 실력과 마음을 겸비한 장구팀, 성악팀 등 
                        <br />많은 재능기부자분들이 찾아와 주십니다.<br />
                        <br />힘찬 장단에 어깨춤이 절로 오르고, 
                        <br />아름다운 목소리에 옛 추억이 깨어납니다.<br />
                        <br />민요·통기타·합창·우쿨렐레·피아노·색소폰 등 어떤 재능이든 환영합니다.<br />
                        <br />공연이 아니어도 좋아요. 손재주로 공예를 가르쳐 주셔도, 
                        <br />사진 촬영으로 추억을 남겨 주셔도, 
                        <br />작은 강의로 삶의 지혜를 나눠 주셔도 됩니다.<br />
                        <br />당신의 재능이 어르신들에게 ‘오늘의 행복’이 됩니다.
                        </div>
                    </div>
                </div>
            </div>
    </div>
    
        <Footer />
        </>
    );
    }
