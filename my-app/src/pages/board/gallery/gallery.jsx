import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import pictureImage from "../../../assets/images/galleryPicture.png";
import proImage from "../../../assets/images/Prodigy.png";
import PLImage from '../../../assets/images/PolygonL.svg';
import PRImage from '../../../assets/images/PolygonR.svg';

import "./gallery.css";

export const Gallery = () => {
  const [items] = useState([
    { id: 1, img: pictureImage, avatar: proImage, title: '제목 1', date: '작성자1 · 2025-07-30' },
    { id: 2, img: pictureImage, avatar: proImage, title: '제목 2', date: '작성자2 · 2025-07-29' },
    { id: 3, img: pictureImage, avatar: proImage, title: '제목 3', date: '작성자3 · 2025-07-28' },
    { id: 4, img: pictureImage, avatar: proImage, title: '제목 4', date: '작성자4 · 2025-07-27' },
    { id: 5, img: pictureImage, avatar: proImage, title: '제목 5', date: '작성자5 · 2025-07-26' },
    { id: 6, img: pictureImage, avatar: proImage, title: '제목 6', date: '작성자6 · 2025-07-25' },
    // …더 추가…
  ]);
  const pageNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <Navbar />
      <Banner imageSrc={topImage} title="갤러리" />
      <div className="page-gallery">

        

        {/* 2. 카드 그리드 */}
        <div className="gallery-main">
          <div className="gallery-list">
            {items.map(item => (
              <div className="gallery-list-box" key={item.id}>
                <Link to="GalleryTo" className="gallery-list-info">
                  <div className="gallery-list-picture">
                    <img src={item.img} alt={`갤러리 ${item.id}`} />
                  </div>
                  <div className="gallery-list-content">
                    <div className="gallery-list-pro">
                      <img src={item.avatar} alt={`프로필 ${item.id}`} />
                    </div>
                    <div className="gallery-list-text">
                      <div className="gallery-list-title">{item.title}</div>
                      <div className="gallery-list-date">{item.date}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 페이지 네비 */}
        <div className="gallery-movebar">
          <img src={PLImage} alt="이전" className="arrow" />
          <div className="pages">
            {pageNumbers.map(num => (
              <span key={num} className="page-num">{num}</span>
            ))}
          </div>
          <img src={PRImage} alt="다음" className="arrow" />
        </div>

        {/* 4. 검색창 */}
        <div className="gallery-search">
          <input
            type="text"
            className="gallery-search-input"
            placeholder="검색어를 입력"
          />
          <button className="gallery-search-btn">
            <div className="gallery-search-btn-text">검색</div>
          </button>
        </div>

      </div>

      <Footer />
    </>
  );
};
