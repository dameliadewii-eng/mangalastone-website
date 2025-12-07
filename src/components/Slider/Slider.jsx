import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import andesite from "@/assets/img/team/andesite.png";
import palmSandStone from "@/assets/img/team/palmSandStone.png";
import wallCludding from "@/assets/img/team/wallCludding.png";

import directors from "../../assets/img/team/directors.jpeg";
import unknown from "../../assets/img/testimonials/unknown.jpg";
import gd from "../../assets/img/testimonials/gd.png";
import testimonials5 from "../../assets/img/testimonials/testimonials-5.jpg";
import "swiper/swiper-bundle.min.css";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination, Autoplay]);

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <Container data-aos="zoom-in">
        <Swiper
          className="testimonials-slider"
          data-aos="fade-up"
          data-aos-delay="100"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={400}
        >
          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src={andesite}
                className="testimonial-img rectangular-img"
                alt="Andesite Stone"
              />
              <h3>Andesite Stone</h3>
              <h4>Watu Mangala Stone</h4>
              <p>
                <i><FaQuoteLeft/></i> Andesite stone is an extrusive igneous rock formed from volcanic activity. Its name originates from the Andes Mountains in South America, the longest mountain range in the world. However, Andesite is also widely found in other volcanic regions, including Indonesia. In Indonesia, Andesite stone is classified based on its colour and is available in various surface finishes and textures, making it a versatile choice for different architectural and construction applications
                <i><FaQuoteRight/></i>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src={palmSandStone}
                className="testimonial-img rectangular-img"
                alt="Palm SandStone"
              />
              <h3>Palm SandStone</h3>
              <h4>Watu Mangala Stone</h4>
              <p>
                <i><FaQuoteLeft/></i> 
              Palm Sandstone is a natural sandstone (sand rock) found in the Mountains located in Bobos, Cirebon Regency, Indonesia. This stone features a unique surface texture similar to Palimanan Stone but with a distinct color difference. While Palimanan Stone has a yellowish tone, Palm Sandstone is characterized by its warm brown hues, making it a preferred choice for natural and earthy aesthetics.
                <i><FaQuoteRight/></i>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <img
                src={wallCludding}
                className="testimonial-img rectangular-img"
                alt="Wall Cludding"
              />
              <h3>Wall Cludding</h3>
              <h4>Watu Mangala Stone</h4>
              <p>
                <i><FaQuoteLeft/></i> Mangala’s wall cladding is crafted from high-quality natural stone such as andesite stone, palm stone, and red sandstone which offering a perfect blend of durability, elegance, and timeless beauty. Designed to enhance both interior and exterior spaces, our wall cladding solutions provide a sophisticated and natural aesthetic while ensuring long-lasting protection against weathering and wear.
                <i><FaQuoteRight/></i>
              </p>
            </div>
          </SwiperSlide>

          {/* Keep rest slides unchanged */}
          {/* <SwiperSlide>
            <div className="testimonial-item">
              <img
                src={unknown}
                height="100px"
                className="testimonial-img rectangular-img"
                alt=""
              />
              <h3>Saqib Jutt</h3>
              <h4>Developer</h4>
              <p>
                <i><FaQuoteLeft/></i> Programming is about managing complexity: the
                complexity of the problem, laid upon the complexity of the machine.
                <i><FaQuoteRight/></i>
              </p>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="testimonial-item">
              <img
                src={gd}
                height="100px"
                className="testimonial-img rectangular-img"
                alt=""
              />
              <h3>Shoaib Saeed</h3>
              <h4>Developer</h4>
              <p>
                <i><FaQuoteLeft/></i> There are three responses to a piece of design – 
                yes, no, and WOW! <br/>Wow is the one to aim for.
                <i><FaQuoteRight/></i>
              </p>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="testimonial-item">
              <img
                src={testimonials5}
                height="100px"
                className="testimonial-img rectangular-img"
                alt=""
              />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <p>
                <i><FaQuoteLeft/></i> We must not blame programmers for their bugs. 
                After code is merged, all bugs are ours!
                <i><FaQuoteRight/></i>
              </p>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </Container>

      {/* Add custom CSS to remove circle effect */}
      <style>{`
        .testimonial-img {
          width: 200px;
          height: 140px;
          object-fit: cover;
        }
        .rectangular-img {
          border-radius: 0 !important; /* remove circle */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
