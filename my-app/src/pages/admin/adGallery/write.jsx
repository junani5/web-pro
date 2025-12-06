// import { Link } from 'react-router-dom';
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import mainImage from "../../../assets/images/galleryWrite.png";
import X from "../../../assets/images/galleryWriteX.png";
import "./write.css";
import { useState } from "react";

export const Write = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return(
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="갤러리" />
        <div className="page">
            <div className="top">
                <div className="top1">
                    <div className="top2">
                        <input
                            className="top-input"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="제목을 입력해 주세요."
                            aria-label="갤러리 제목 입력"
                        />
                    </div>
                </div>
            </div>
            <div className="mid">
                <div className="mid1">
                    <div className="mid2">
                        <div className="mid-text">이미지 추가</div>
                    </div>
                </div>
            </div>
            <div className="bot">
                <div className="bot-main">
                    <textarea
                        className="bot-input"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="내용을 입력하세요."
                        aria-label="갤러리 내용 입력"
                        rows={6}
                    />
                    <div className="bot-frame">
                        <img src={mainImage} alt="큰 이미지" className="main-image"/>
                        <img src={X} alt="엑스 표시" className="remove-icon"/>
                    </div>
                </div>
            </div>
            <div className="admin">
                <div className="admin-box">
                    <div className="admin-text">등록</div>
                </div>
            </div>
        </div>

        <Footer />

        </>
    );
}


