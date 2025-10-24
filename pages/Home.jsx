// -----------------------------------------
// Home.jsx — Main Landing Page (Fixed Navigation)
// -----------------------------------------
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, Link } from "react-router-dom";

// ---------- Imported Images ----------
import heroBg from "@/assets/webimg/hero-bg.png";
import heroBg2 from "@/assets/webimg/hero-bg2.png";
import projectTiles from "@/assets/webimg/project-tiles.png";
import stoneAndesite from "@/assets/webimg/stone-andesite.png";
import stoneLimestone from "@/assets/webimg/stone-limestone.png";
import stonePumice from "@/assets/webimg/stone-pumice.png";
import logo from "@/assets/img/logo.png";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true, mirror: false });
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const images = [heroBg, heroBg2];
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

  return (
    <div className="hm-root">
     {/* ---------------- HEADER ---------------- */}
<header className="hm-header" role="banner">
  <div className="hm-container header-inner">
    <div className="logo-area" data-aos="fade-right">
      <img src={logo} alt="Watu Mangala Logo" className="logo-img" />
      <div className="brand-text">
        <span className="brand-title">MANGALA STONE</span>
        <span className="brand-sub">
          Natural Stone Manufacturer & Distributor
        </span>
      </div>
    </div>

    {/* ===== Hamburger for Mobile ===== */}
    <div
      className="hamburger"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation menu"
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>

    {/* ===== Desktop / Mobile Menu ===== */}
    <nav
      className={`nav-area ${menuOpen ? "open" : ""}`}
      aria-label="Main Navigation"
      data-aos="fade-down"
    >
      <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
        {t("nav.home")}
      </Link>

      <div className="nav-dropdown">
        <button className="nav-dropbtn" aria-haspopup="true">
          {t("nav.products")} ▾
        </button>
        <div className="nav-dropdown-menu" role="menu">
          <Link role="menuitem" to="/andesite" onClick={() => setMenuOpen(false)}>
            {t("products.andesite")}
          </Link>
          <Link role="menuitem" to="/palm-sandstone" onClick={() => setMenuOpen(false)}>
            {t("products.palm")}
          </Link>
          <Link role="menuitem" to="/wall-cladding" onClick={() => setMenuOpen(false)}>
            {t("products.cladding")}
          </Link>
        </div>
      </div>

      <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
        {t("nav.about")}
      </Link>
      <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
        {t("nav.contact")}
      </Link>

      <div className="mobile-lang">
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

    <div className="actions-area desktop-only" data-aos="fade-left">
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
  </div>
</header>

      {/* ---------------- HERO ---------------- */}
      <section
        id="home"
        className="hm-hero"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: "background-image 1s ease-in-out",
        }}
        role="region"
        aria-label="Hero"
      >
        <div className="hero-overlay" />
        <div className="hm-container hero-inner" data-aos="zoom-in">
          <h1>{t("hero.title")}</h1>
          <h2>{t("hero.subtitle")}</h2>
          <div className="hero-ctas">
            <a className="btn-primary" href="#contact">
              {t("hero.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- PROJECT INTRO ---------------- */}
      <section className="hm-section project-intro" aria-labelledby="project-heading">
        <div className="hm-container split-grid">
          <div className="media" data-aos="fade-right">
            <img src={projectTiles} alt="Project Tiles" className="media-img" />
          </div>

          <div className="text" data-aos="fade-left">
            <h2>{t("projectIntro.heading")}</h2>
            <p className="rich-text">{t("projectIntro.text1")}</p>
            <p className="rich-text">{t("projectIntro.text2")}</p>
            <p className="rich-text">{t("projectIntro.text3")}</p>
            <p className="rich-text">{t("projectIntro.text4")}</p>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCTS ---------------- */}
      <section className="hm-section stones" id="products" aria-label="Products">
        <div className="hm-container">
          <div className="section-head" data-aos="fade-up">
            <h4>{t("products.heading")}</h4>
            <h2>{t("products.subheading")}</h2>
          </div>

          <div className="stone-grid" data-aos="fade-up" data-aos-delay="120">
            <div
              className="stone-card"
              data-aos="flip-left"
              onClick={() => navigate("/andesite")}
              style={{ cursor: "pointer" }}
            >
              <img src={stoneAndesite} alt="Andesite Stone" />
              <div className="stone-body">
                <h3>{t("products.andesite")}</h3>
              </div>
            </div>

            <div
              className="stone-card"
              data-aos="flip-left"
              data-aos-delay="80"
              onClick={() => navigate("/palm-sandstone")}
              style={{ cursor: "pointer" }}
            >
              <img src={stoneLimestone} alt="Palm Sandstone" />
              <div className="stone-body">
                <h3>{t("products.palm")}</h3>
              </div>
            </div>

            <div
              className="stone-card"
              data-aos="flip-left"
              data-aos-delay="40"
              onClick={() => navigate("/wall-cladding")}
              style={{ cursor: "pointer" }}
            >
              <img src={stonePumice} alt="Wall Cladding" />
              <div className="stone-body">
                <h3>{t("products.cladding")}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-col">
            <img src={logo} alt="Watu Mangala Logo" className="footer-logo" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
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
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default Home;
