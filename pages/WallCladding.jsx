import React, { useEffect, useState } from "react";
import "./AndesiteStone.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

<nav
  className="nav-area"
  aria-label="Main Navigation"
  data-aos="fade-down"
>
  <Link to="/home" className="nav-link">
    Home
  </Link>

  <div className="nav-dropdown">
    <button className="nav-dropbtn" aria-haspopup="true">
      Products ▾
    </button>
    <div className="nav-dropdown-menu" role="menu">
      <Link role="menuitem" to="/andesite">
        Andesite Stone
      </Link>
      <Link role="menuitem" to="/palm-sandstone">
        Palem Sandstone
      </Link>
      <Link role="menuitem" to="/wall-cladding">
        Wall Cladding
      </Link>
    </div>
  </div>

  <Link to="/about" className="nav-link">
    About Us
  </Link>

  <Link to="/contact" className="nav-link">
    Contact Us
  </Link>
</nav>

// ===== Images =====
import header_andesite_stone2 from "@/assets/img/header_andesite_stone2.png";
import logo from "@/assets/img/logo.png";

// ===== Andesite Wall Stone Images =====
import wall1 from "@/assets/Andesite/Wall Stone/wall1.png";
import wall2 from "@/assets/Andesite/Wall Stone/wall2.png";
import wall3 from "@/assets/Andesite/Wall Stone/wall3.png";
import wall4 from "@/assets/Andesite/Wall Stone/wall4.png";
import wall5 from "@/assets/Andesite/Wall Stone/wall5.png";
import wall6 from "@/assets/Andesite/Wall Stone/wall6.png";
import wall7 from "@/assets/Andesite/Wall Stone/wall7.png";
import wall8 from "@/assets/Andesite/Wall Stone/wall8.png";
import wall9 from "@/assets/Andesite/Wall Stone/wall9.png";
import wall10 from "@/assets/Andesite/Wall Stone/wall10.png";
import wall11 from "@/assets/Andesite/Wall Stone/wall11.png";
import wall12 from "@/assets/Andesite/Wall Stone/wall12.png";
import wall13 from "@/assets/Andesite/Wall Stone/wall13.png";
import wall14 from "@/assets/Andesite/Wall Stone/wall14.png";
import wall15 from "@/assets/Andesite/Wall Stone/wall15.png";
import wall16 from "@/assets/Andesite/Wall Stone/wall16.png";
import wall17 from "@/assets/Andesite/Wall Stone/wall17.png";
import wall18 from "@/assets/Andesite/Wall Stone/wall18.png";
import wall19 from "@/assets/Andesite/Wall Stone/wall19.png";
import wall20 from "@/assets/Andesite/Wall Stone/wall20.png";
import wall21 from "@/assets/Andesite/Wall Stone/wall21.png";

const WallCladdingStone = () => {
  const { t, i18n } = useTranslation();
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const stones = [
    {
      title: t("wall1_title"),
      imgs: [
        { src: wall1, description: t("wall1_desc1") },
        { src: wall2, description: t("wall1_desc2") },
        { src: wall3, description: t("wall1_desc3") },
      ],
    },
    {
      title: t("wall2_title"),
      imgs: [
        { src: wall4, description: t("wall2_desc1") },
        { src: wall5, description: t("wall2_desc2") },
        { src: wall6, description: t("wall2_desc3") },
      ],
    },
    {
      title: t("wall3_title"),
      imgs: [
        { src: wall7, description: t("wall3_desc1") },
        { src: wall8, description: t("wall3_desc2") },
        { src: wall9, description: t("wall3_desc3") },
      ],
    },
    {
      title: t("wall4_title"),
      imgs: [
        { src: wall10, description: t("wall4_desc1") },
        { src: wall11, description: t("wall4_desc2") },
        { src: wall12, description: t("wall4_desc3") },
      ],
    },
    {
      title: t("wall5_title"),
      imgs: [
        { src: wall13, description: t("wall5_desc1") },
        { src: wall14, description: t("wall5_desc2") },
        { src: wall15, description: t("wall5_desc3") },
      ],
    },
    {
      title: t("wall6_title"),
      imgs: [
        { src: wall16, description: t("wall6_desc1") },
        { src: wall17, description: t("wall6_desc2") },
        { src: wall18, description: t("wall6_desc3") },
      ],
    },
    {
      title: t("wall7_title"),
      imgs: [
        { src: wall19, description: t("wall7_desc1") },
        { src: wall20, description: t("wall7_desc2") },
        { src: wall21, description: t("wall7_desc3") },
      ],
    },
  ];

  const whatsappNumber = "6285797895798";
  const whatsappMessage = "Hello! I’d like to know more about Mangala Stone.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="hm-root">
      {/* ===== HEADER ===== */}
      <header className="hm-header">
        <div className="hm-container header-inner">
          <div className="logo-area" data-aos="fade-right">
            <img src={logo} alt="Watu Mangala Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
              <span className="brand-sub">{t("header_subtitle")}</span>
            </div>
          </div>

          <nav className="nav-area" data-aos="fade-down">
            <a href="home" className="nav-link">{t("nav_home")}</a>
            <div className="nav-dropdown">
              <button className="nav-dropbtn">Products ▾</button>
              <div className="nav-dropdown-menu">
                <a href="andesite">{t("nav_andesite")}</a>
                <a href="palm-sandstone">{t("nav_palem")}</a>
                <a href="wall-cladding">{t("nav_wall")}</a>
              </div>
            </div>
            <a href="about" className="nav-link">{t("nav_about")}</a>
            <a href="contact" className="nav-link">{t("nav_contact")}</a>
          </nav>

          <div className="actions-area">
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className="lang-select"
            >
              <option value="en">English</option>
              <option value="id">Indonesian</option>
            </select>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        className="andesite-hero"
        style={{ backgroundImage: `url(${header_andesite_stone2})` }}
      >
        <div className="overlay"></div>
        <div className="andesite-hero-content" data-aos="zoom-in">
          <h1>{t("hero_title")}</h1>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="andesite-intro-text" data-aos="fade-up">
        <h2>{t("intro_heading")}</h2>
        <p>{t("intro_text")}</p>
      </section>

      {/* ===== STONE GALLERY ===== */}
      <section className="andesite-stones">
        {stones.map((group, idx) => (
          <div key={idx} className="andesite-stone-group" data-aos="fade-up">
            <h2 className="andesite-stone-group-title">{group.title}</h2>
            <div className="andesite-stone-grid">
              {group.imgs.map((imgObj, i) => (
                <div
                  key={i}
                  className="andesite-stone-card"
                  onClick={() => setFullscreenImage(imgObj.src)}
                >
                  <img src={imgObj.src} alt={group.title} />
                  <p className="andesite-stone-description">
                    {imgObj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ===== FULLSCREEN IMAGE ===== */}
      {fullscreenImage && (
        <div
          className="fullscreen-overlay"
          onClick={() => setFullscreenImage(null)}
        >
          <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
          <button className="close-btn" onClick={() => setFullscreenImage(null)}>
            ✖
          </button>
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <img src={logo} alt="Watu Mangala Logo" className="footer-logo" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t("footer_contact")}</h3>
            <p>info@mangalastone.com</p>
            <p>+62 8579 7895 798</p>
          </div>

          <div className="footer-col">
            <h3>{t("footer_follow")}</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-tiktok" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t("footer_about")}</h3>
            <p>{t("footer_about_text1")}</p>
            <p>{t("footer_about_text2")}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 All rights reserved - Mangala Stone</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default WallCladdingStone;
