// -----------------------------------------
// About.jsx — Fullscreen Image Popup Fixed
// -----------------------------------------
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

import { FaPlay } from "react-icons/fa";

import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, Link } from "react-router-dom";


// ---------- Imported Images ----------
import about from "@/assets/img/about.png";
import about1 from "@/assets/img/about1.png";
import about2 from "@/assets/img/about2.png";
import about3 from "@/assets/img/about3.png";
import about4 from "@/assets/img/about4.png";
import about5 from "@/assets/img/about5.png";
import about6 from "@/assets/img/about6.png";

import projectTiles from "@/assets/webimg/project-tiles.png";

// import heroBg2 from "@/assets/webimg/factory2.png";
import logo from "@/assets/img/logo.png";
import guaranteeBg from "@/assets/webimg/guarantee-bg.png"; 

const About = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null); // For popup
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);


  useEffect(() => {
    AOS.init({ duration: 900, once: true, mirror: false });
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const images = [about];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "6285797895798";
  const whatsappMessage = "Hello! I’d like to know more about Mangala Stone.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const galleryImages = [about1, about2, about3, about4,about5, about6];

  return (
    <div className="hm-root">
      {/* ---------------- HEADER ---------------- */}
<header className="hm-header" role="banner">
  <div className="hm-container header-inner">
    {/* Logo */}
    <div className="logo-area" data-aos="fade-right">
      <img src={logo} alt="Watu Mangala Logo" className="logo-img" />
    </div>

    {/* Mobile menu button */}
    <button
      className="mobile-menu-btn"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle menu"
    >
      ☰
    </button>

    {/* Navigation */}
    <nav
      className={`nav-area ${mobileMenuOpen ? "mobile-open" : ""}`}
      aria-label="Main Navigation"
      data-aos="fade-down"
    >
      <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
        {t("nav.home")}
      </Link>

      <div className="nav-dropdown">
        <button className="nav-dropbtn">{t("nav.products")} ▾</button>
        <div className="nav-dropdown-menu">
          <Link to="/andesite" onClick={() => setMobileMenuOpen(false)}>
            {t("products.andesite")}
          </Link>
          <Link to="/palm-sandstone" onClick={() => setMobileMenuOpen(false)}>
            {t("products.palm")}
          </Link>
          <Link to="/wall-cladding" onClick={() => setMobileMenuOpen(false)}>
            {t("products.cladding")}
          </Link>
        </div>
      </div>

      <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
        {t("nav.about")}
      </Link>
      <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
        {t("nav.contact")}
      </Link>

      <div className="actions-area">
        <select
          value={language}
          onChange={handleLanguageChange}
          aria-label="Select language"
          className="lang-select"
        >
          <option value="en">English</option>
          <option value="id">Bahasa Indonesia</option>
        </select>
      </div>
    </nav>
  </div>
</header>


      {/* ---------------- HERO ---------------- */}
      <section
        id="about"
        className="about-hero"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="hero-overlay" />
        <div className="hm-container hero-inner" data-aos="zoom-in">
          <h1>{t("about_hero_title")}</h1>
        </div>
      </section>

      {/* ---------------- About Us Text ---------------- */}
      <section className="hm-section project-intro">
        
        <div className="hm-container split-grid">
                <div className="media2" data-aos="fade-right">
                      <img src={about1} alt="Project Tiles" className="media-img" />
                    </div>
          <div className="text" data-aos="fade-left">
            <h2>{t("about_heading1")}</h2>
            <h1>{t("about_heading2")}</h1>
            <p className="rich-text">{t("about_para1")}</p>
            <p className="rich-text">{t("about_para2")}</p>
            <p className="rich-text">{t("about_para3")}</p>
            <p className="rich-text">{t("about_para4")}</p>
          </div>
        </div>
      </section>
{/* ===== BIG CENTER YOUTUBE VIDEO SECTION ===== */}
<section className="big-video-section" style={{ textAlign: "center", padding: "50px 20px", background: "#f9f9f9" }}>
  <h2 className="video-main-title" style={{ marginBottom: "30px", fontSize: "2rem", color: "#00525E" }}>
   {t("factory.video")}
   
  </h2>

  <div className="big-video-wrapper" style={{ display: "inline-block", maxWidth: "900px", width: "100%" }}>
    <iframe
      width="100%"
      height="500"
      src="https://www.youtube.com/embed/9hhIpeoseXQ?autoplay=0&start=0&rel=0"
      title="Factory Video"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      style={{ borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
    ></iframe>
  </div>
</section>



      {/* ---------------- PHOTO GRID ---------------- */}
      <section className="hm-section stones" id="photos">
        <div className="hm-container">
          <div className="section-head" data-aos="fade-up">
            <h4>
   {t("gallery.title")}

              </h4>
            <h2>
   {t("gallery.subtitle")}
              
            </h2>
          </div>

          <div className="stone-grid">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="stone-card"
                data-aos="fade-up"
                data-aos-delay={index * 80}
                onClick={() => setFullscreenImage(img)}
              >
                <img src={img} alt={`About ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FULLSCREEN IMAGE POPUP ----------------
      {fullscreenImage && (
        <div
          className="fullscreen"
          onClick={() => setFullscreenImage(null)} // Clicking outside closes
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div
            className="fullscreen-inner"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            style={{ position: "relative", maxWidth: "1100px", width: "100%" }}
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              }}
            />
            <button
              className="close"
              onClick={() => setFullscreenImage(null)}
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                background: "#ff6e6e",
                color: "#fff",
                border: "none",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                fontSize: "22px",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )} */}

{/* ---------------- TESTIMONIALS (STATIC, PROFESSIONAL STYLE) ---------------- */}
{/* <section
  id="testimonials"
  className="testimonials hm-section"
  style={{
    backgroundImage: `url(${guaranteeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "100px 0",
    color: "#fff",
  }}
> */}
  {/* <div className="hm-container" data-aos="fade-up">
    <h2
      style={{
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "2.5rem",
        fontWeight: "700",
        letterSpacing: "1px",
        lineHeight: "1.3",
        color: "#fff",
      }}
    >
      Indonesia’s Trusted Source for Premium Natural Stones
    </h2> */}

    {/* <p
      style={{
        textAlign: "center",
        maxWidth: "780px",
        margin: "0 auto 60px auto",
        fontSize: "1.1rem",
        lineHeight: "1.7",
        color: "#e0e0e0",
      }}
    >
      With more than a decade of experience, Mangala Stone delivers Andesite Stone,
      Palem Sandstone, and Wall Cladding that embody enduring quality and natural
      beauty.
    </p> */}

    {/* Optional: Add a small accent line or icon for visual appeal
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <span
        style={{
          display: "inline-block",
          width: "60px",
          height: "3px",
          backgroundColor: "#f2c94c",
          borderRadius: "2px",
        }}
      ></span>
    </div>
  </div>
</section> */}






 {/* ---------------- NEW — WHY CHOOSE MANGALA STONE ---------------- */}
{/* <section className="hm-section why-choose" style={{ padding: "60px 0" }}>
  <div className="hm-container">

    {/* <h4
      style={{
        textAlign: "center",
        color: "#7a8c7a",
        letterSpacing: "5px",
        marginBottom: "10px",
      }}
    >
      PROMISE
    </h4> */}

    {/* <h2
      style={{
        textAlign: "center",
        marginBottom: "50px",
        fontWeight: "600",
      }}
    >
      Why Choose Mangala Stone?
    </h2> */}
{/* 
    <div
      className="why-grid"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "30px",
        flexWrap: "wrap",
      }}
    > */}
      {/* Experienced */}
      {/* <div
        className="why-box"
        data-aos="fade-up"
        style={{
          flex: "1",
          minWidth: "280px",
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          textAlign: "center",
        }}
      > */}
        {/* <div className="why-icon" style={{ marginBottom: "20px" }}>
          <i
            className="fas fa-award"
            style={{
              fontSize: "40px",
              color: "#4CAF50", // green tone
            }}
          ></i>
        </div>
        <h3 style={{ marginBottom: "10px", fontWeight: "600" }}>Experienced</h3>
        <p style={{ color: "#555" }}>
          With over a decade of expertise since 2014, we specialize in
          manufacturing and supplying high-quality natural stone.
        </p>
      </div> */}

      {/* Competitive Price */}
      {/* <div
        className="why-box"
        data-aos="fade-up"
        data-aos-delay="80"
        style={{
          flex: "1",
          minWidth: "280px",
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          textAlign: "center",
        }}
      > */}
        {/* <div className="why-icon" style={{ marginBottom: "20px" }}>
          <i
            className="fas fa-tags"
            style={{
              fontSize: "40px",
              color: "#FF9800", // orange tone
            }}
          ></i>
        </div> */}
        {/* <h3 style={{ marginBottom: "10px", fontWeight: "600" }}>Competitive Price</h3>
        <p style={{ color: "#555" }}>
          As a self-owned manufacturer, we offer the best value with
          competitive prices while maintaining high quality.
        </p>
      </div> */}

      {/* On-Time Delivery */}
      {/* <div
        className="why-box"
        data-aos="fade-up"
        data-aos-delay="160"
        style={{
          flex: "1",
          minWidth: "280px",
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          textAlign: "center",
        }}
      > */}
        {/* <div className="why-icon" style={{ marginBottom: "20px" }}>
          <i
            className="fas fa-truck"
            style={{
              fontSize: "40px",
              color: "#2196F3", // blue tone
            }}
          ></i>
        </div> */}
        {/* <h3 style={{ marginBottom: "10px", fontWeight: "600" }}>On-Time Delivery</h3>
        <p style={{ color: "#555" }}>
          Our streamlined processes ensure your orders are delivered on
          schedule, every time.
        </p>
      </div>
    </div>
  </div> */}
{/* </section>  */}

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-col">
                  <img
        src={logo}
        alt="Mangala Logo"
        className="footer-logo"
        style={{ height: "47px", width: "auto" }} // logo size fixed
      />
            {/* <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
              <span className="brand-sub">I N D O N E S I A</span>
            </div> */}
          </div>

          <div className="footer-col">
            <h3>{t("footer.contact")}</h3>
            <p>info@mangalastone.com</p>
            <p>+62 8579 7895 798</p>
          </div>

<div className="footer-col">
  <h3>FOLLOW US</h3>
  <div className="social-icons">
    <a
      href="https://www.facebook.com/mangalastone.id" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook-f" />
    </a>

    <a
      href="https://www.instagram.com/mangalastone.id/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-instagram" />
    </a>

    <a
      href="https://www.tiktok.com/@mangalastone.id?_r=1&_t=ZS-91yGu9Agos8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-tiktok" />
    </a>
  </div>
</div>

          <div className="footer-col">
            <h3>{t("footer.about")}</h3>
            <p>About Mangala Stone</p>
            <p>Our Products</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 All rights reserved - Mangala Stone Indonesia</p>

          {/* <p>© 2025 {t("footer.rights")}</p> */}
        </div>
      </footer>

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

export default About;