import React from "react";
import "./LoadingAnimation.css";

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Menunggu Pembayaran...</p>
    </div>
  );
};

export default LoadingAnimation;
