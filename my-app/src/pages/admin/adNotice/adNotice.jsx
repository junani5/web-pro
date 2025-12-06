// src/pages/board/Notice/AdNotice.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate
import './adNotice.css';
import { Banner } from '../../../components/Banner/Banner';
import topImage from '../../../assets/images/BannerTop.png';
import { Footer } from '../../../components/Footer/Footer';
import { Navbar } from '../../../components/Navbar/Navbar';

// alert 대신 사용할 간단한 모달 컴포넌트
const Modal = ({ message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onClose} className="modal-close-btn">확인</button>
            </div>
        </div>
    );
};

export const AdNotice = () => {
    // 상태 변수 정의
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); // 페이지 이동 훅 사용

    // 모달을 닫는 함수
    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    // 게시물 작성 및 서버로 전송하는 비동기 함수
    const createPost = async () => {
        // 필수 입력 필드 확인
        if (!title.trim() || !content.trim()) {
            setModalMessage('제목과 내용을 모두 입력해 주세요.');
            setShowModal(true);
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            setModalMessage('로그인 먼저 해주세요.');
            setShowModal(true);
            return;
        }

        try {
            const res = await fetch('http://localhost:3001/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ title, content }),
            });

            const data = await res.json();
            if (res.ok) {
                setModalMessage('게시물이 성공적으로 작성되었습니다.');
                setShowModal(true);
                // 1.5초 후 공지사항 목록 페이지로 이동
                setTimeout(() => {
                    navigate('/notice');
                }, 1500);
            } else {
                setModalMessage(data.message || '게시물 작성에 실패했습니다.');
                setShowModal(true);
            }
        } catch (err) {
            console.error(err);
            setModalMessage('서버와 통신 중 오류가 발생했습니다.');
            setShowModal(true);
        }
    };

    return (
        <>
            <Navbar />
            <Banner imageSrc={topImage} title="공지사항" />

            <div className="adNotice-container">

                <input
                    className="adNotice-input"
                    type="text"
                    placeholder="제목을 입력해 주세요."
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <textarea
                    className="adNotice-textarea"
                    placeholder="내용을 입력하세요."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />

                <div className="adNotice-btn-wrap">
                    <button
                        className="adNotice-btn"
                        onClick={createPost} // 수정된 부분: onClick에 함수 이름을 바로 전달
                    >
                        등록
                    </button>
                </div>
            </div>

            <Footer />
            {showModal && <Modal message={modalMessage} onClose={closeModal} />}
        </>
    );
};
