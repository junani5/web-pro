import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./adLogin.css";
import LoginImage from "../../../assets/images/logoLogin.png";
import idImage from "../../../assets/images/Customer.svg";
import lockImage from "../../../assets/images/Lock.svg";
import blindImage from "../../../assets/images/Blind.png";
import visibleImage from "../../../assets/images/Visible.png"; // 👁 이미지 추가 필요

export const AdLogin = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 상태 추가

  // 로그인 요청
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
           username: id,
           password: password 
          }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("로그인 성공!");
        navigate(from, { replace: true });
      } else {
        alert(data.message || "로그인 실패");
      }
    } catch (error) {
      console.error(error);
      alert("서버 오류 발생");
    }
  };

  return (
    <div className="pageLogin">
      <div className="logoLogin">
        <img src={LoginImage} alt="로고" />
      </div>
      <div className="menu">
        <div className="menu-top">
          <div className="menu-top-id">
            <div className="menu-top-image">
              <img src={idImage} alt="아이디 아이콘" />
            </div>
            <input
              type="text"
              placeholder="아이디를 입력해주세요."
              className="menu-input"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="menu-top-passwd">
            <div className="menu-top-passwd-box">
              <div className="menu-top-image">
                <img src={lockImage} alt="비밀번호 아이콘" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요."
                className="menu-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              className="menu-top-passwd-image"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={showPassword ? visibleImage : blindImage}
                alt="비밀번호 보기 토글"
              />
            </div>
          </div>
        </div>

        <div className="menu-bot">
          <div className="menu-bot-login">
            <div className="menu-bot-textL"onClick={handleLogin}>로그인</div>
          </div>
        </div>
      </div>
    </div>
  );
};
