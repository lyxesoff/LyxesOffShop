// src/Pages/HomePage.jsx
import React from 'react';
import './HomePage.css'; 

const HomePage = ({ setSlide, downloads }) => {
  return (
    <section className="home-section" id="home">
      <div className="top-info">
        <div className="info-badge">
          STATUS: <span className="status-green">UNDETECTED</span>
        </div>
        <div className="info-badge">
          VERSION: <span className="text-red">2.0.4</span>
        </div>
        <div className="info-badge">
          DOWNLOADS: <span className="text-red">{downloads}+</span>
        </div>
      </div>
      
      <h1 className="hero-title">
        LYXESOFF <span>SOFTWARE</span>
      </h1>
      
      <p className="hero-description">
        Приватный софт для RustMe с мощным функционалом и обходом античита.
      </p>

      <div className="btn-group">
        <button className="btn-main" onClick={() => setSlide(1)}>ПОДРОБНЕЕ</button>
        <button className="btn-outline">ЛОАДЕР</button>
      </div>
    </section>
  );
};

export default HomePage;