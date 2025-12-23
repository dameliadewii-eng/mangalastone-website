import React, { useEffect, useState } from "react";
import "./AndesiteStone.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Images
import header_andesite_stone from "@/assets/img/header_andesite_stone.png";
import logo from "@/assets/img/logo.png";
import guaranteeBg from "@/assets/webimg/guarantee-bg.png";

// Andesite Images (1–36)
import and1 from "@/assets/Andesite/Andesite Central Napoli/and1.png";
import and2 from "@/assets/Andesite/Andesite Central Napoli/and2.png";
import and3 from "@/assets/Andesite/Andesite Central Napoli/and3.png";
import and4 from "@/assets/Andesite/Andesite Chess/and4.png";
import and5 from "@/assets/Andesite/Andesite Chess/and5.png";
import and6 from "@/assets/Andesite/Andesite Chess/and6.png";
import and7 from "@/assets/Andesite/Andesite Flamed Plain/and7.png";
import and8 from "@/assets/Andesite/Andesite Flamed Plain/and8.png";
import and9 from "@/assets/Andesite/Andesite Flamed Plain/and9.png";
import and10 from "@/assets/Andesite/Andesite Flamed Spot/and10.png";
import and11 from "@/assets/Andesite/Andesite Flamed Spot/and11.png";
import and12 from "@/assets/Andesite/Andesite Flamed Spot/and12.png";
import and13 from "@/assets/Andesite/Andesite Full Napoli/and13.png";
import and14 from "@/assets/Andesite/Andesite Full Napoli/and14.png";
import and15 from "@/assets/Andesite/Andesite Full Napoli/and15.png";
import and16 from "@/assets/Andesite/Andesite Full Worm/and16.png";
import and17 from "@/assets/Andesite/Andesite Full Worm/and17.png";
import and18 from "@/assets/Andesite/Andesite Full Worm/and18.png";
import and19 from "@/assets/Andesite/Andesite Natural Flat/and19.png";
import and20 from "@/assets/Andesite/Andesite Natural Flat/and20.png";
import and21 from "@/assets/Andesite/Andesite Natural Flat/and21.png";
import and22 from "@/assets/Andesite/Andesite Straight/and22.png";
import and23 from "@/assets/Andesite/Andesite Straight/and23.png";
import and24 from "@/assets/Andesite/Andesite Straight/and24.png";
import and25 from "@/assets/Andesite/Andesite Straight Variation/and25.png";
import and26 from "@/assets/Andesite/Andesite Straight Variation/and26.png";
import and27 from "@/assets/Andesite/Andesite Straight Variation/and27.png";
import and28 from "@/assets/Andesite/Andesite Sun/and28.png";
import and29 from "@/assets/Andesite/Andesite Sun/and29.png";
import and30 from "@/assets/Andesite/Andesite Sun/and30.png";
import and31 from "@/assets/Andesite/Andesite Wave/and31.png";
import and32 from "@/assets/Andesite/Andesite Wave/and32.png";
import and33 from "@/assets/Andesite/Andesite Wave/and33.png";
import and34 from "@/assets/Andesite/Andesite Worm/and34.png";
import and35 from "@/assets/Andesite/Andesite Worm/and35.png";
import and36 from "@/assets/Andesite/Andesite Worm/and36.png";

// translations
import en from "@/locales/en.json";
import id from "@/locales/id.json";

const AndesiteStone = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const translations = { en, id };
  const t = translations[language].andesitePage;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLanguageChange = (e) => setLanguage(e.target.value);

  const stones = [
    { key: "flamedPlain", title: "Andesite Plain", imgs: [and7, and8, and9] },
    { key: "flamedSpot", title: "Andesite Flamed Spot", imgs: [and10, and11, and12] },
    { key: "naturalFlat", title: "Andesite Natural Flat", imgs: [and19, and20, and21] },
    { key: "centralNapoli", title: "Andesite Central Napoli", imgs: [and1, and2, and3] },
    { key: "fullNapoli", title: "Andesite Full Napoli", imgs: [and13, and14, and15] },
    { key: "chess", title: "Andesite Chess", imgs: [and4, and5, and6] },
    { key: "worm", title: "Andesite Worm", imgs: [and34, and35, and36] },
    { key: "fullWorm", title: "Andesite Full Worm", imgs: [and16, and17, and18] },
    { key: "wave", title: "Andesite Wave", imgs: [and31, and32, and33] },
    { key: "straight", title: "Andesite Straight", imgs: [and22, and23, and24] },
    { key: "straightVariation", title: "Andesite Straight Variation", imgs: [and25, and26, and27] },
    { key: "sun", title: "Andesite Sun", imgs: [and28, and29, and30] },
  ];

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
            <Link to="/Home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.home}
            </Link>

            {/* ✅ PRODUCTS DROPDOWN (FIXED) */}
            <div className="nav-dropdown">
              <button
                className={`nav-dropbtn ${productsOpen ? "active" : ""}`}
                onClick={() => setProductsOpen(!productsOpen)}
                aria-haspopup="true"
                aria-expanded={productsOpen}
              >
                {t.nav.products} ▾
              </button>

              <div className={`nav-dropdown-menu ${productsOpen ? "show" : ""}`} role="menu">
                <Link to="/andesite" onClick={() => { setProductsOpen(false); setMobileMenuOpen(false); }}>
                  {t.nav.andesite}
                </Link>
                <Link to="/palm-sandstone" onClick={() => { setProductsOpen(false); setMobileMenuOpen(false); }}>
                  {t.nav.palm}
                </Link>
                <Link to="/wall-cladding" onClick={() => { setProductsOpen(false); setMobileMenuOpen(false); }}>
                  {t.nav.cladding}
                </Link>
              </div>
            </div>

            <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.about}
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.contact}
            </Link>
          </nav>

          <div className="actions-area" data-aos="fade-left">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="lang-select"
            >
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
            </select>
          </div>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="andesite-hero" id="andesite" style={{ backgroundImage: `url(${header_andesite_stone})` }}>
        <div className="overlay"></div>
        <div className="andesite-hero-content" data-aos="zoom-in">
          <h1>{t.heroTitle}</h1>
        </div>
      </section>

      {/* ===== Introductory Sentence ===== */}
      <section className="andesite-intro-text" data-aos="fade-up">
        <h2>{t.introHeading}</h2>
        <p>{t.introText}</p>
      </section>

      {/* ===== Stone Sections (images + descriptions) ===== */}
      <section className="andesite-stones">
        {stones.map((group, idx) => {
          // fetch translations for this group (fallback to original title if missing)
          const groupTrans = (t.stones && t.stones[group.key]) || null;
          const groupTitle = groupTrans && groupTrans.title ? groupTrans.title : group.title;
          const groupDescriptions = groupTrans && groupTrans.descriptions ? groupTrans.descriptions : [];

          return (
            <div key={idx} className="andesite-stone-group" data-aos="fade-up">
              <h2 className="andesite-stone-group-title">{groupTitle}</h2>
              <div className="andesite-stone-grid">
                {group.imgs.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="andesite-stone-card"
                    onClick={() => setFullscreenImage(imgSrc)}
                  >
                    <img src={imgSrc} alt={`${groupTitle}-${i + 1}`} />
                    {/* description from translations (three lines per image) */}
                    <p className="andesite-stone-description">
                      {/* if description available for this image index, show it; else blank */}
                      {groupDescriptions[i] ? groupDescriptions[i] : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ===== Fullscreen Image Popup ===== */}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
          <button className="close-btn" onClick={() => setFullscreenImage(null)}>✖</button>
        </div>
      )}

      {/* ===== Footer ===== */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-col">
                  <img
        src={logo}
        alt="Mangala Logo"
        className="footer-logo"
        style={{ height: "47px", width: "auto" }} // logo size fixed
      />
            <div className="brand-text">
              {/* <span className="brand-title">MANGALA STONE</span> */}
            </div>
          </div>

          <div className="footer-col">
            <h3>{t.footer.contact}</h3>
            <p>info@mangalastone.com</p>
            <p>+62 8579 7895 798</p>
          </div>
<div className="footer-col">
  <h3>FOLLOW US</h3>
  <div className="social-icons">
    <a
      href="https://web.facebook.com/profile.php?id=61585420912331" 
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
  <h3>{t.footer.about}</h3>

  <p>
    <Link to="/about" className="footer-link">
      About Mangala Stone
    </Link>
  </p>

  <p>
    <Link to="/Home" className="footer-link">
      Our Products
    </Link>
  </p>
</div>
          {/* <div className="footer-col">
            <h3>{t.footer.about}</h3>
            <p>About Mangala Stone</p>
            <p>Our Products</p>
          </div> */}
        </div>

        <div className="footer-bottom">
                    <p>© 2025 All rights reserved - Mangala Stone Indonesia</p>

        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href={whatsappUrl} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default AndesiteStone;



