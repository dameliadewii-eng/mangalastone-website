import React, { useEffect, useState } from "react";
import "./AndesiteStone.css";
import AOS from "aos";
import "aos/dist/aos.css";
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

// Images
import header_andesite_stone1 from "@/assets/img/header_andesite_stone1.png";
import logo from "@/assets/img/logo.png";

// Palm Stone Images
import palm1 from "@/assets/Andesite/Palm Stone/palm1.png";
import palm2 from "@/assets/Andesite/Palm Stone/palm2.png";
import palm3 from "@/assets/Andesite/Palm Stone/palm3.png";

// Translations
const translations = {
  en: {
    title: "PALEM STONE",
    introHeading: "Discover the Natural Beauty of Palem SandStone",
    introText:
      "Palem Sandstone is a natural sandstone (sand rock) found in the Mountains located in Bobos, Cirebon Regency, Indonesia. This stone features a unique surface texture similar to Palimanan Stone but with a distinct color difference. While Palimanan Stone has a yellowish tone while Palem Sandstone is characterized by its warm brown hues, making it a preferred choice for natural and earthy aesthetics.",
    palm1:
      "Soft cream and beige hues with subtle mineral streaks. Fine-grained texture evoking natural warmth. Versatile for both contemporary and classic styles.",
    palm2:
      "Cutting Size Available (cm): 10×20, 15×30, 20×20, 20×40, 40×40, 30×60 (Customization Available).",
    palm3:
      "Perfect for exterior wall cladding, facades, pillars, and decorative features. Also ideal for interior flooring and accent walls.",
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About Us",
    navContact: "Contact Us",
    product1: "Andesite Stone",
    product2: "Palem Sandstone",
    product3: "Wall Cladding",
    contact: "CONTACT US",
    follow: "FOLLOW US",
    about: "ABOUT US",
    about1: "About Mangala Stone",
    about2: "Our Products",
    brandSub: "Natural Stone Manufacturer & Distributor",
  },
  id: {
    title: "BATU PALEM",
    introHeading: "Temukan Keindahan Alami Batu Palem Sandstone",
    introText:
      "Batu Palem adalah batu pasir alami (batu pasir) yang ditemukan di Pegunungan Bobos, Kabupaten Cirebon, Indonesia. Batu ini memiliki tekstur unik mirip dengan Batu Palimanan namun berbeda warna. Jika Batu Palimanan berwarna kekuningan, Batu Palem memiliki rona cokelat hangat yang menampilkan kesan alami dan elegan.",
    palm1:
      "Warna krem lembut dan beige dengan guratan mineral halus. Tekstur halus yang memancarkan kehangatan alami. Cocok untuk gaya kontemporer maupun klasik.",
    palm2:
      "Ukuran potongan tersedia (cm): 10×20, 15×30, 20×20, 20×40, 40×40, 30×60 (Dapat disesuaikan).",
    palm3:
      "Sangat cocok untuk dinding luar, fasad, pilar, dan elemen dekoratif. Juga ideal untuk lantai dalam ruangan dan dinding aksen.",
    navHome: "Beranda",
    navProducts: "Produk",
    navAbout: "Tentang Kami",
    navContact: "Hubungi Kami",
    product1: "Batu Andesit",
    product2: "Batu Palem",
    product3: "Dinding Batu Alam",
    contact: "HUBUNGI KAMI",
    follow: "IKUTI KAMI",
    about: "TENTANG KAMI",
    about1: "Tentang Mangala Stone",
    about2: "Produk Kami",
    brandSub: "Produsen & Distributor Batu Alam",
  },
};

const PalemStone = () => {
  const [language, setLanguage] = useState("en");
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const t = translations[language];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stones = [
    { src: palm1, description: t.palm1 },
    { src: palm2, description: t.palm2 },
    { src: palm3, description: t.palm3 },
  ];

  const whatsappNumber = "6285797895798";
  const whatsappMessage = "Hello! I’d like to know more about Mangala Stone.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="hm-root">
      {/* ------------------------------ HEADER ------------------------------ */}
      <header className="hm-header" role="banner">
        <div className="hm-container header-inner">
          <div className="logo-area" data-aos="fade-right">
            <img src={logo} alt="Watu Mangala Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
              <span className="brand-sub">{t.brandSub}</span>
            </div>
          </div>

          <nav className="nav-area" aria-label="Main Navigation" data-aos="fade-down">
            <Link to="home" className="nav-link">{t.navHome}</Link>

            <div className="nav-dropdown">
              <button className="nav-dropbtn">
                {t.navProducts} ▾
              </button>
              <div className="nav-dropdown-menu">
                <Link to="andesite">{t.product1}</Link>
                <Link to="palm-sandstone">{t.product2}</Link>
                <Link to="wall-cladding">{t.product3}</Link>
              </div>
            </div>

            <Link to="about" className="nav-link">{t.navAbout}</Link>
            <Link to="contact" className="nav-link">{t.navContact}</Link>
          </nav>

          <div className="actions-area" data-aos="fade-left">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="lang-select"
            >
              <option value="en">English</option>
              <option value="id">Indonesian</option>
            </select>
          </div>
        </div>
      </header>

      {/* ------------------------------ HERO SECTION ------------------------------ */}
      <section
        className="andesite-hero"
        style={{ backgroundImage: `url(${header_andesite_stone1})` }}
      >
        <div className="overlay"></div>
        <div className="andesite-hero-content" data-aos="zoom-in">
          <h1>{t.title}</h1>
        </div>
      </section>

      {/* ------------------------------ INTRO ------------------------------ */}
      <section className="andesite-intro-text" data-aos="fade-up">
        <h2>{t.introHeading}</h2>
        <p>{t.introText}</p>
      </section>

      {/* ------------------------------ STONE SECTION ------------------------------ */}
      <section className="andesite-stones">
        <div className="andesite-stone-group" data-aos="fade-up">
          <div className="andesite-stone-grid">
            {stones.map((stone, index) => (
              <div
                key={index}
                className="andesite-stone-card"
                onClick={() => setFullscreenImage(stone.src)}
              >
                <img src={stone.src} alt={`stone-${index + 1}`} />
                <p className="andesite-stone-description">{stone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ FULLSCREEN IMAGE ------------------------------ */}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
          <button className="close-btn" onClick={() => setFullscreenImage(null)}>
            ✖
          </button>
        </div>
      )}

      {/* ------------------------------ FOOTER ------------------------------ */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-col">
            <img src={logo} alt="Watu Mangala Logo" className="footer-logo" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t.contact}</h3>
            <p>info@mangalastone.com</p>
            <p>+62 8579 7895 798</p>
          </div>

          <div className="footer-col">
            <h3>{t.follow}</h3>
            <div className="social-icons">
              <Link to="#"><i className="fab fa-facebook-f" /></Link>
              <Link to="#"><i className="fab fa-instagram" /></Link>
              <Link to="#"><i className="fab fa-tiktok" /></Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t.about}</h3>
            <p>{t.about1}</p>
            <p>{t.about2}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 All rights reserved - Mangala Stone</p>
        </div>
      </footer>

      {/* ------------------------------ WHATSAPP BUTTON ------------------------------ */}
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

export default PalemStone;
