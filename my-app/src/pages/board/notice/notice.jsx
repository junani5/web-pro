// src/pages/board/Notice/Notice.jsx
import React, { useState, useEffect } from 'react';
import './notice.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from "../../../components/Banner/Banner";
import topImage from '../../../assets/images/BannerTop.png';
import PLImage from '../../../assets/images/PolygonL.svg';
import PRImage from '../../../assets/images/PolygonR.svg';

export const Notice = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // 백엔드 API로부터 데이터를 가져옵니다.
                const response = await fetch('http://localhost:3001/posts');
                
                // HTTP 응답이 성공적인지 확인합니다.
                if (!response.ok) {
                    throw new Error('네트워크 응답이 올바르지 않습니다.');
                }

                // JSON 형식으로 응답을 파싱합니다.
                const data = await response.json();
                
                // 데이터 상태를 업데이트합니다.
                setPosts(data);
            } catch (error) {
                console.error('게시물을 불러오는 데 실패했습니다:', error);
            } finally {
                // 로딩 상태를 false로 변경하여 화면에 데이터를 표시합니다.
                setLoading(false);
            }
        };

        fetchPosts();
    }, []); // 빈 배열을 넣어 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

    // 데이터 로딩 중이거나 게시물이 없을 때 표시할 UI
    if (loading) {
        return (
            <>
                <Navbar />
                <Banner imageSrc={topImage} title="공지사항" />
                <div className="notice-container">
                    <div className="notice-loading">
                        <p>게시물을 불러오는 중입니다...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    // 게시물이 없을 때 표시할 UI
    if (posts.length === 0) {
        return (
            <>
                <Navbar />
                <Banner imageSrc={topImage} title="공지사항" />
                <div className="notice-container">
                    <div className="notice-loading">
                        <p>게시물이 없습니다.</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <Banner imageSrc={topImage} title="공지사항" />
            
            <div className="notice-container">
                {/* 제목 */}
                <div className="notice-title">
                    <div className="notice-title-bot">
                        <div className="col no">No</div>
                        <div className="col title">제목</div>
                        <div className="col date">날짜</div>
                        {/* 조회수는 백엔드에서 제공하지 않으므로 임시로 제거 */}
                    </div>
                </div>

                {/* 공지 목록 */}
                <div className="notice-list">
                    {posts.map((post, index) => (
                        <div className="notice-row" key={post._id}>
                            <div className="col no">{posts.length - index}</div>
                            <div className="col title">
                                <Link to={`/notice/${post._id}`} className="notice-link">
                                    {post.title}
                                </Link>
                            </div>
                            <div className="col date">
                                {new Date(post.createdAt).toLocaleDateString()}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 페이지 네비게이션은 실제 데이터와 연동되지 않으므로 이 예시에서는 임시로 제거 */}
                <div className="notice-movebar">
                    <img src={PLImage} alt="이전" className="arrow" />
                    <div className="pages">
                        <span className="page-num active">1</span>
                    </div>
                    <img src={PRImage} alt="다음" className="arrow" />
                </div>

                {/* 검색 & 글쓰기 */}
                <div className="notice-search">
                    <Link to="/adNotice" className="notice-admin">글쓰기</Link>
                    <div className="notice-search-right">
                        <input
                            type="text"
                            className="notice-search-input"
                            placeholder="검색어를 입력"
                        />
                        <button className="notice-search-btn">검색</button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
};
