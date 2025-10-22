import React,{useEffect} from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out'
    });
    // setCurrentProjects(projects);
  }, []);
return <>
<div className="container" id="services" data-aos="fade-up">
            <div className="section-title">
            <h3>Our Products</h3>
            <p>Our signature collection features Andesite Stone, Palm Sandstone, and Wall Cladding, each crafted to bring unique character and timeless appeal to every space. Andesite Stone, known for its strength and natural elegance, adds a bold and refined touch to modern designs. Palm Sandstone, with its warm tones and smooth textures, creates a welcoming atmosphere for homes and offices alike. Completing the collection, our Wall Cladding transforms ordinary walls into striking architectural statements, blending durability with artistic beauty. Together, these stones celebrate nature’s finest creations—designed to inspire and built to last.</p>
        </div>
        </div>
</>
}

export default Services;