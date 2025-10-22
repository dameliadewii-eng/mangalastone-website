import React, { useEffect, useState } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

// ====== Images ======
import about from "../src/assets/img/about.png";
import about1 from "../src/assets/img/about1.png";
import about2 from "../src/assets/img/about2.png";
import about3 from "../src/assets/img/about3.png";
import about4 from "H:/mywebSite/frontend/src/assets/img/about4.png";
import about5 from "H:/mywebSite/frontend/src/assets/img/about5.png";
import about6 from "H:/mywebSite/frontend/src/assets/img/about6.png";
import about7 from "H:/mywebSite/frontend/src/assets/img/about7.png";

import logo from "../src/assets/img/logo.png";

const Contact = () => {
  const [language, setLanguage] = useState("en");
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // ====== AOS Animation Init ======
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // ====== Rotating Images Logic ======
  const aboutImages = [about1, about2, about3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ====== Stones Data ======
  const stones = [
    {
      imgs: [about4, about5, about6],
    },
  ];

  // ====== Translations ======
  const translations = {
    en: {
      contact_hero_title: "CONTACT US",
      contact_heading1: "Contact Us",
      contact_heading2: "GET IN TOUCH",
      factory_title: "Factory",
      factory_1:
        "Factory 1: Desa Bobos, Kecamatan Dukupuntang, Kabupaten Cirebon, Jawa Barat, Indonesia",
      factory_2:
        "Factory 2: Desa Lengkong Wetan, Kecamatan Sindangwangi, Kabupaten Majalengka, Jawa Barat, Indonesia",
      phone: "Phone Number: +6285797895798",
      email: "Email: info@mangalastone.com",
      hours: "Office Hours: 08:00am - 04:00pm GMT+7",
      footer_about: "About Mangala Stone",
      footer_products: "Our Products",
    },
    id: {
      contact_hero_title: "HUBUNGI KAMI",
      contact_heading1: "Hubungi Kami",
      contact_heading2: "HUBUNGI KAMI",
      factory_title: "Pabrik",
      factory_1:
        "Pabrik 1: Desa Bobos, Kecamatan Dukupuntang, Kabupaten Cirebon, Jawa Barat, Indonesia",
      factory_2:
        "Pabrik 2: Desa Lengkong Wetan, Kecamatan Sindangwangi, Kabupaten Majalengka, Jawa Barat, Indonesia",
      phone: "Nomor Telepon: +6285797895798",
      email: "Email: info@mangalastone.com",
      hours: "Jam Kantor: 08:00 - 16:00 WIB",
      footer_about: "Tentang Mangala Stone",
      footer_products: "Produk Kami",
    },
  };

  const t = translations[language];

  // ---------- WhatsApp Chat Link ----------
  const whatsappNumber = "6285797895798";
  const whatsappMessage = "Hello! I’d like to know more about Mangala Stone.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="hm-root">
      {/* ------------------------------
          HEADER SECTION
      ------------------------------ */}
      <header className="hm-header" role="banner">
        <div className="hm-container header-inner">
          {/* --- Logo and Brand --- */}
          <div className="logo-area" data-aos="fade-right">
            <img src={logo} alt="Watu Mangala Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
              <span className="brand-sub">
                Natural Stone Manufacturer & Distributor
              </span>
            </div>
          </div>

          {/* --- Navigation Links --- */}
          <nav
            className="nav-area"
            aria-label="Main Navigation"
            data-aos="fade-down"
          >
            <a href="home" className="nav-link">
              Home
            </a>

            {/* Dropdown menu for product categories */}
            <div className="nav-dropdown">
              <button
                className="nav-dropbtn"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products ▾
              </button>
              <div className="nav-dropdown-menu" role="menu">
                <a role="menuitem" href="andesite">
                  Andesite Stone
                </a>
                <a role="menuitem" href="palm-sandstone">
                  Palem Sandstone
                </a>
                <a role="menuitem" href="wall-cladding">
                  Wall Cladding
                </a>
              </div>
            </div>

            <a href="about" className="nav-link">
              About Us
            </a>
            <a href="contact" className="nav-link">
              Contact Us
            </a>
          </nav>

          <div className="header-actions" data-aos="fade-left">
            <select
              aria-label="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="id">Indonesian</option>
            </select>
          </div>
        </div>
      </header>

      {/* ====== HERO SECTION ====== */}
      <section className="hero" style={{ backgroundImage: `url(${about7})` }}>
        <div className="hero-overlay" />
        <div className="hero-inner" data-aos="zoom-in">
          <h1>{t.contact_hero_title}</h1>
        </div>
      </section>

      {/* ===== Introductory Sentence ===== */}
      <section className="andesite-intro-text" data-aos="fade-up">
        <h1>{t.contact_heading1}</h1>
        <h2>{t.contact_heading2}</h2>
      </section>

      {/* ====== FACTORY INFO ====== */}
      <section className="andesite-intro-text" data-aos="fade-up">
        <h1>{t.factory_title}</h1>

        <p>{t.factory_1}</p>
        <p>{t.factory_2}</p>
        <p className="rich-text">{t.phone}</p>
        <p className="rich-text">{t.email}</p>
        <p className="rich-text">{t.hours}</p>
      </section>

      {/* ====== ABOUT CONTENT SECTION ====== */}
      <section className="content-section" data-aos="fade-up">
        <div className="container split reverse-on-mobile">
          <div className="text" data-aos="fade-left"></div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-col">
            <img src={logo} alt="Watu Mangala Logo" className="footer-logo" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
            </div>
          </div>

          <div className="footer-col">
            <h3>CONTACT US</h3>
            <p>info@mangalastone.com</p>
            <p>+62 8579 7895 798</p>
          </div>

          <div className="footer-col">
            <h3>FOLLOW US</h3>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-tiktok" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>ABOUT US</h3>
            <p>{t.footer_about}</p>
            <p>{t.footer_products}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 All rights reserved - Mangala Stone</p>
        </div>
      </footer>

      {/* ✅ WhatsApp Floating Button */}
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

export default Contact;
