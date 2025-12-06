import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Footer } from "../../../components/Footer/Footer";
import { Banner } from "../../../components/Banner/Banner";
import topImage from "../../../assets/images/BannerTop.png";
import pictureImage from "../../../assets/images/galleryPicture.png";
import proImage from "../../../assets/images/Prodigy.png";
import PLImage from "../../../assets/images/PolygonL.svg";
import PRImage from "../../../assets/images/PolygonR.svg";
import "../../board/gallery/gallery.css";
import "./adGallery.css";

export  const AdGallery = () => {  // ✅ 대문자 시작
  const [items, setItems] = useState([
    { id: 1, img: pictureImage, avatar: proImage, title: "제목 1", date: "작성자1 · 2025-07-30" },
    { id: 2, img: pictureImage, avatar: proImage, title: "제목 2", date: "작성자2 · 2025-07-29" },
    { id: 3, img: pictureImage, avatar: proImage, title: "제목 3", date: "작성자3 · 2025-07-28" },
    { id: 4, img: pictureImage, avatar: proImage, title: "제목 4", date: "작성자4 · 2025-07-27" },
    { id: 5, img: pictureImage, avatar: proImage, title: "제목 5", date: "작성자5 · 2025-07-26" },
    { id: 6, img: pictureImage, avatar: proImage, title: "제목 6", date: "작성자6 · 2025-07-25" },
  ]);
  const [selected, setSelected] = useState({}); // { [id]: true }

  const pageNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  const allIds = useMemo(() => items.map(i => i.id), [items]);
  const selectedIds = useMemo(() => allIds.filter(id => selected[id]), [allIds, selected]);
  const allChecked = selectedIds.length === allIds.length && allIds.length > 0;
  const anyChecked = selectedIds.length > 0;

  const toggleOne = (id, on) => {
    setSelected(prev => {
      const next = { ...prev };
      if (on) next[id] = true;
      else delete next[id];
      return next;
    });
  };

  const toggleAll = (on) => {
    if (!on) return setSelected({});
    const next = {};
    allIds.forEach(id => (next[id] = true));
    setSelected(next);
  };

  const handleBulkDelete = () => {
    if (!anyChecked) return;
    if (!window.confirm(`${selectedIds.length}개 항목을 삭제할까요?`)) return;
    // TODO: 실제 API 호출
    setItems(prev => prev.filter(i => !selectedIds.includes(i.id)));
    setSelected({});
  };

  return (
    <>
      <Navbar />
      <Banner imageSrc={topImage} title="갤러리 관리" />

      <div className="page-gallery">
        {/* 관리자 상단 툴바 */}
        <div className="admin-toolbar">
          <label className="admin-select-all">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={(e) => toggleAll(e.target.checked)}
            />
            전체 선택
          </label>

          <button className="admin-btn secondary" disabled={!anyChecked} onClick={handleBulkDelete}>
            선택삭제
          </button>

          <Link to="/adGallery/write" className="admin-btn primary">글쓰기</Link>
        </div>

        {/* 카드 그리드 (관리자: 링크 제거) */}
        <div className="gallery-main">
          <div className="gallery-list">
            {items.map(item => (
              <div className="gallery-list-box" key={item.id}>
                <div className="gallery-list-info">
                  <div className="gallery-list-picture">
                    {/* 체크박스 오버레이 */}
                    <label className="card-checkbox" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={!!selected[item.id]}
                        onChange={(e) => toggleOne(item.id, e.target.checked)}
                      />
                    </label>
                    <img src={item.img} alt={`갤러리 ${item.id}`} />
                  </div>
                  <Link to="/adgallery/adGalleryTo" className="gallery-list-info">
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
              </div>
            ))}
          </div>
        </div>

        {/* 페이지 네비/검색은 그대로 */}
        <div className="gallery-movebar">
          <img src={PLImage} alt="이전" className="arrow" />
          <div className="pages">
            {pageNumbers.map(num => (
              <span key={num} className="page-num">{num}</span>
            ))}
          </div>
          <img src={PRImage} alt="다음" className="arrow" />
        </div>

        <div className="gallery-search">
          <input className="gallery-search-input" placeholder="검색어를 입력" />
          <button className="gallery-search-btn">
            <div className="gallery-search-btn-text">검색</div>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
