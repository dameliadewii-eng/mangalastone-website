import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; // ✅ use Link for navigation
import Map from "@/components/Map/Map";
// ====== Images ======
import about from "@/assets/img/about.png";
import about1 from "@/assets/img/about1.png";
import about2 from "@/assets/img/about2.png";
import about3 from "@/assets/img/about3.png";
import about4 from "@/assets/img/about4.png";
import about5 from "@/assets/img/about5.png";
import about6 from "@/assets/img/about6.png";
import about7 from "@/assets/img/about7.png";
import logo from "@/assets/img/logo.png";

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [productsOpen, setProductsOpen] = useState(false);

  const [language, setLanguage] = useState("en");
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

  // ====== Translations ======
  const translations = {
    en: {
      contact_hero_title: "CONTACT US",
      contact_heading1: "Contact Us",
      contact_heading2: "GET IN TOUCH",
      factory_title: "Factory",
      factory_1:
        "Jalan Raya Imam Bonjol, Sindangwangi, Kabupaten Majalengka, West Java, Indonesia",
      factory_2:
        "Factory 2: Desa Lengkong Wetan, Kecamatan Sindangwangi, Kabupaten Majalengka, Jawa Barat, Indonesia",
      phone: "Phone Number: +6285797895798",
      email: "Email: info@mangalastone.com",
      hours: "Office Hours: 08:00am - 04:00pm GMT+7",
      footer_about: "About Mangala Stone",
      footer_products: "Our Products",
      chooseMangala: "Why Choose Mangala Stone?",
    subtitle1:"Experienced",

experienced:"With over a decade of expertise since 2014, we specialize in manufacturing and supplying high-quality natural stone.",

subtitle2:"Competitive Price",
competitive:"As a self-owned manufacturer, we offer the best value with competitive prices while maintaining high quality.",
subtitle3:"On-Time Delivery",
delivery:"Our streamlined processes ensure your orders are delivered on schedule, every time."
 
    },
    id: {
subtitle1:"Berpengalaman",

      contact_hero_title: "HUBUNGI KAMI",
      contact_heading1: "Hubungi Kami",
      contact_heading2: "HUBUNGI KAMI",
      factory_title: "Pabrik",
      factory_1:
        "Jalan Raya Imam Bonjol, Sindangwangi, Kabupaten Majalengka, Jawa Barat, Indonesia",
      factory_2:
        "Pabrik 2: Desa Lengkong Wetan, Kecamatan Sindangwangi, Kabupaten Majalengka, Jawa Barat, Indonesia",
      phone: "Nomor Telepon: +6285797895798",
      email: "Email: info@mangalastone.com",
      hours: "Jam Kantor: 08:00 - 16:00 WIB",
      footer_about: "Tentang Mangala Stone",
      footer_products: "Produk Kami",
      chooseMangala: "Mengapa Memilih Mangala Stone?",
      experienced:"Dengan pengalaman lebih dari 10 tahun sejak 2014, kami fokus pada produksi dan penyediaan batu alam berkualitas tinggi.",
      subtitle2:"Harga Kompetitif",
competitive:"Sebagai produsen, kami menawarkan harga terbaik dengan kualitas tetap terjaga.",
subtitle3:"Pengiriman Tepat Waktu",
delivery:"Dengan proses produksi dan logistik yang efisien, kami memastikan pesanan Anda tiba sesuai jadwal."

    },
  };

  const t = translations[language];

  // WhatsApp Chat Link
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
    {/* --- Logo --- */}
    <div className="logo-area" data-aos="fade-right">
      <img src={logo} alt="Watu Mangala Logo" className="logo-img" />
    </div>

    {/* --- Hamburger Button for Mobile --- */}
    <button
      className="mobile-menu-btn"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle menu"
    >
      ☰
    </button>

    {/* --- Navigation --- */}
    <nav
      className={`nav-area ${mobileMenuOpen ? "mobile-open" : ""}`}
      aria-label="Main Navigation"
      data-aos="fade-down"
    >
      <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
        Home
      </Link>

      <div className="nav-dropdown">
        <button
          className={`nav-dropbtn ${productsOpen ? "active" : ""}`}
          onClick={() => setProductsOpen(!productsOpen)}
        >
          Products ▾
        </button>
        <div className={`nav-dropdown-menu ${productsOpen ? "open" : ""}`}>
          <Link to="/andesite" onClick={() => setMobileMenuOpen(false)}>
            Andesite Stone
          </Link>
          <Link to="/palm-sandstone" onClick={() => setMobileMenuOpen(false)}>
            Palem Sandstone
          </Link>
          <Link to="/wall-cladding" onClick={() => setMobileMenuOpen(false)}>
            Wall Cladding
          </Link>
        </div>
      </div>

      <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
        About Us
      </Link>
      <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
        Contact Us
      </Link>
    </nav>

    {/* --- Language Selector --- */}
    <div className="header-actions" data-aos="fade-left">
      <select
        aria-label="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="id">Bahasa Indonesia</option>
      </select>
    </div>
  </div>
</header>


      {/* ====== HERO SECTION ====== */}
      <section 
        id="contact"
      
      className="contact-hero" style={{ backgroundImage: `url(${about7})` }}>
       
        <div className="contact-hero-inner" data-aos="zoom-in">
          <h2>{t.contact_hero_title}</h2>
        </div>
      </section>

      {/* ===== Introductory Sentence ===== */}
      <section className="andesite-intro-text" data-aos="fade-up">
        <h1>{t.contact_heading1}</h1>
        <h2>{t.contact_heading2}</h2>
      </section>



{/* ===== FACTORY INFO + MAP ROW ===== */}
<section className="factory-map-row" data-aos="fade-up">

  {/* ===== LEFT INFO COLUMN ===== */}
  <div className="factory-left">

    <h4 className="factory-label">MANGALA STONE INDONESIA</h4>
    <p className="factory-text">{t.factory_1}</p>

    <h4 className="factory-label">CONTACT DETAILS</h4>

    {/* ✅ PHONE */}
    <div className="factory-icon-row">
      <FaPhoneAlt className="factory-icon" />
      <span>{t.phone}</span>
    </div>

    {/* ✅ EMAIL */}
    <div className="factory-icon-row">
      <FaEnvelope className="factory-icon" />
      <span>{t.email}</span>
    </div>

    {/* ✅ OFFICE HOURS */}
    <div className="factory-icon-row">
      <FaClock className="factory-icon" />
      <span>{t.hours}</span>
    </div>

  </div>

  {/* ===== RIGHT MAP COLUMN ===== */}
  <div className="factory-right">
    <Map />
  </div>

</section>




 {/* ---------------- NEW — WHY CHOOSE MANGALA STONE ---------------- */}
<section className="hm-section why-choose" style={{ padding: "60px 0" }}>
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

    <h2
      style={{
        textAlign: "center",
        marginBottom: "50px",
        fontWeight: "600",
      }}
    >
      <span>{t.chooseMangala}</span>

      {/* Why Choose Mangala Stone? */}
    </h2>

    <div
      className="why-grid"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "30px",
        flexWrap: "wrap",
      }}
    >
      {/* Experienced */}
      <div
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
      >
        <div className="why-icon" style={{ marginBottom: "20px" }}>
          <i
            className="fas fa-award"
            style={{
              fontSize: "40px",
              color: "#4CAF50", // green tone
            }}
          ></i>
        </div>
        <h3 style={{ marginBottom: "10px", fontWeight: "600" }}>
          
          
          {/* Experienced */}
          
      <span>{t.subtitle1}</span>
          
          
          
          </h3>
        <p style={{ color: "#555" }}>
          <span>{t.experienced}</span>
          
        </p>
      </div>

      {/* Competitive Price */}
      <div
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
      >
        <div className="why-icon" style={{ marginBottom: "20px" }}>
          <i
            className="fas fa-tags"
            style={{
              fontSize: "40px",
              color: "#4CAF50", // orange tone
            }}
          ></i>
        </div>
        <h3 style={{ marginBottom: "10px", fontWeight: "600" }}>
          <span>{t.subtitle2}</span>
          
          
          {/* Competitive Price */}
          </h3>
        <p style={{ color: "#555" }}>
          <span>{t.competitive}</span>

          {/* As a self-owned manufacturer, we offer the best value with
          competitive prices while maintaining high quality. */}
        </p>
      </div>

      {/* On-Time Delivery */}
      <div
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
      >
        <div className="why-icon" style={{ marginBottom: "20px" }}>
          <i
            className="fas fa-truck"
            style={{
              fontSize: "40px",
              color: "#4CAF50", // blue tone
            }}
          ></i>
        </div>
        <h3 style={{ marginBottom: "10px", fontWeight: "600" }}>
          <span>{t.subtitle3}</span>
          
          {/* On-Time Delivery */}
          
          
          </h3>
        <p style={{ color: "#555" }}>
          <span>{t.delivery}</span>

          {/* Our streamlined processes ensure your orders are delivered on
          schedule, every time. */}
        </p>
      </div>
    </div>
  </div>
</section>

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
            {/* <div className="brand-text">
              <span className="brand-title">MANGALA STONE</span>
            </div> */}
          </div>

          <div className="footer-col">
            <h3>CONTACT US</h3>
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
  <h3>ABOUT US</h3>

  <p>
    <Link
      to="/about"
      className="contactnav-link"
      onClick={() => setMobileMenuOpen(false)}
    >
      {t.footer_about}
    </Link>
  </p>

  <p>
    <Link
      to="/"
      className="contactnav-link"
      onClick={() => setMobileMenuOpen(false)}
    >
      {t.footer_products}
    </Link>
  </p>
</div>
          {/* <div className="footer-col">
            <h3>ABOUT US</h3>
            <p>{t.footer_about}</p>
            <p>{t.footer_products}</p>
          </div> */}
        </div>

        <div className="footer-bottom">
          <p>© 2025 All rights reserved - Mangala Stone Indonesia</p>
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
