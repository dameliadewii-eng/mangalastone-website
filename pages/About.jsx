// -----------------------------------------
// About.jsx — Fullscreen Image Popup Fixed
// -----------------------------------------
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, Link } from "react-router-dom";

// ---------- Imported Images ----------
import about from "@/assets/img/about.png";
import about1 from "@/assets/img/about1.png";
import about2 from "@/assets/img/about2.png";
import about3 from "@/assets/img/about3.png";
import about4 from "@/assets/img/about4.png";

import heroBg2 from "@/assets/webimg/factory2.png";
import logo from "@/assets/img/logo.png";
import guaranteeBg from "@/assets/webimg/guarantee-bg.png"; 

const About = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null); // For popup
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true, mirror: false });
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const images = [about, heroBg2];
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

  const galleryImages = [about1, about2, about3, about4];

  return (
    <div className="hm-root">
      {/* ---------------- HEADER ---------------- */}
      <header className="hm-header" role="banner">
        <div className="hm-container header-inner">
          <div className="logo-area" data-aos="fade-right">
            <img src={logo} alt="Watu Mangala Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
              <span className="brand-sub">I N D O N E S I A</span>
            </div>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

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
                <option value="id">Indonesian</option>
              </select>
            </div>
          </nav>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section
        id="about"
        className="hm-hero"
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

      {/* ---------------- PHOTO GRID ---------------- */}
      <section className="hm-section stones" id="photos">
        <div className="hm-container">
          <div className="section-head" data-aos="fade-up">
            <h4>Gallery</h4>
            <h2>Our Factory & Production</h2>
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

      {/* ---------------- FULLSCREEN IMAGE POPUP ---------------- */}
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
      )}

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-col">
            <img src={logo} alt="Watu Mangala Logo" className="footer-logo" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
              <span className="brand-sub">I N D O N E S I A</span>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t("footer.contact")}</h3>
            <p>info@mangalastone.com</p>
            <p>+62 8579 7895 798</p>
          </div>

          <div className="footer-col">
            <h3>{t("footer.follow")}</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-tiktok" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t("footer.about")}</h3>
            <p>About Mangala Stone</p>
            <p>Our Products</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 {t("footer.rights")}</p>
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