import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UIweb from "../../assets/img/uiweb.png";
import { FaPlayCircle } from 'react-icons/fa';
import "glightbox/dist/css/glightbox.min.css";
function HeroSection() {
return (
<section id="" className="align-items-center" style={{ marginBottom: '-80px' }}>
<Container data-aos="zoom-out" data-aos-delay="100">
<Row>
<Col lg={6} md={6} sm={6}>
<h1>MANGALA STONE</h1>
<h2 style={{ marginTop: '30px' }}>Indonesia Stone Company</h2>
<p style={{ textAlign: 'justify' }}>
At MANGALA STONE, we bring the natural beauty of stone into everyday spaces. Specializing in premium stone tiles, we design surfaces that redefine interiors and exteriors with elegance, durability, and timeless style.

From modern offices to warm, welcoming homes and iconic buildings, our stone tiles offer a perfect balance of functionality and artistry. Each piece is carefully crafted to highlight nature’s textures and tones, giving architects, designers, and homeowners the freedom to create spaces that inspire.

With a wide variety of colors, finishes, and patterns, MANGALA STONE delivers more than stone—we deliver character, comfort, and beauty that lasts for generations.

At MANGALA STONE, we don’t just decorate spaces—we transform them into works of art.
</p>
<div className="d-flex" style={{ marginTop: '10px', padding: '10px',justifyContent:'center',alignItems:'center',columnGap:'5px' }}>
<Button href="#contact" className="btn-get-started scrollto">
Get Started
</Button>
<a
href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
className="glightbox btn-watch-video">
<i className="bi bi-play-circle"><FaPlayCircle/></i>
<span>Watch Video</span>
</Link>
</div>
</Col>
<Col lg={6} md={6} sm={6}>
<img src={UIweb} width="50%" style={{ display: 'block', margin: 'auto' }} />
</Col>
</Row>
</Container>
</section>
);
}

export default HeroSection;