import React, { useEffect, useState } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import about from "@/assets/img/about.png";
import about1 from "@/assets/img/about1.png";
import about2 from "@/assets/img/about2.png";
import about3 from "@/assets/img/about3.png";
import about4 from "@/assets/img/about4.png";
import about5 from "@/assets/img/about5.png";
import about6 from "@/assets/img/about6.png";
import logo from "@/assets/img/logo.png";

import en from "@/locales/en.json";
import id from "@/locales/id.json";

const About = () => {
  const [language, setLanguage] = useState("en");
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const t = language === "en" ? en : id;

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const aboutImages = [about1, about2, about3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stones = [{ imgs: [about4, about5, about6] }];
  const whatsappUrl = `https://wa.me/6285797895798?text=${encodeURIComponent(
    "Hello! I’d like to know more about Mangala Stone."
  )}`;

  return (
    <div className="hm-root">
      {/* Header */}
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

          <nav className="nav-area" data-aos="fade-down">
            <Link to="/" className="nav-link">Home</Link>
            <div className="nav-dropdown">
              <button className="nav-dropbtn">Products ▾</button>
              <div className="nav-dropdown-menu">
                <Link to="/andesite">Andesite Stone</Link>
                <Link to="/palm-sandstone">Palem Sandstone</Link>
                <Link to="/wall-cladding">Wall Cladding</Link>
              </div>
            </div>
            <Link to="/about" className="nav-link active">About Us</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </nav>

          <div className="header-actions" data-aos="fade-left">
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="id">Indonesian</option>
            </select>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${about})` }}>
        <div className="hero-overlay" />
        <div className="hero-inner" data-aos="zoom-in">
          <h1>{t.about_hero_title}</h1>
        </div>
      </section>

      {/* About Text */}
      <section className="andesite-intro-text" data-aos="fade-up">
        <h2>{t.about_heading1}</h2>
        <h2>{t.about_heading2}</h2>
      </section>

      {/* Content */}
      <section className="content-section" data-aos="fade-up">
        <div className="container split reverse-on-mobile">
          <div
            className="media"
            style={{
              backgroundImage: `url(${aboutImages[currentImage]})`,
              transition: "background-image 1s ease-in-out",
            }}
          ></div>

          <div className="text" data-aos="fade-left">
            <p>{t.about_para1}</p>
            <p>{t.about_para2}</p>
            <p>{t.about_para3}</p>
            <p>{t.about_para4}</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section" id="gallery" data-aos="fade-up">
        <div className="container">
          <div className="grid">
            {stones[0].imgs.map((img, i) => (
              <div
                className="grid-item"
                key={i}
                onClick={() => setFullscreenImage(img)}
              >
                <img src={img} alt={`Stone ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Image */}
      {fullscreenImage && (
        <div className="fullscreen" onClick={() => setFullscreenImage(null)}>
          <div className="fullscreen-inner" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setFullscreenImage(null)}>✖</button>
            <img src={fullscreenImage} alt="Fullscreen Stone" />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-container">
          <div className="footer-col">
            <img src={logo} alt="Logo" className="footer-logo" />
            <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
            </div>
          </div>
          <div className="footer-col">
            <h3>CONTACT US</h3>
            <p>info@mangalastone.com</p>
            <p>+62 8579 7895 798</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 All rights reserved - Mangala Stone</p>
        </div>
      </footer>

      <a href={whatsappUrl} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default About;
