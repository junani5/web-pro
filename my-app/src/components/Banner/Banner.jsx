// components/Banner/Banner.jsx
import React from "react";
import "./Banner.css";

export const Banner = ({ imageSrc, title }) => {
  return (
    <div className="banner">
      <div className="banner-image">

      </div>
      <div className="banner-text-box">
        <div className="banner-text-border">
          <div className="banner-text">{title}</div>
        </div>
      </div>
    </div>
  );
};
