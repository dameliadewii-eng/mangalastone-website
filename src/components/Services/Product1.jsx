import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import andesite from "../../assets/img/team/andesite.png"; // ✅ Andesite
import palmSandStone from "../../assets/img/team/palmSandStone.png"; // ✅ Palm SandStone
import wallCludding from "../../assets/img/team/wallCludding.png"; // ✅ Wall Cludding

import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Lightbox imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";

const Product1 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
  }, []);

  // ✅ Directors / Products array with 3 pics
  const directors = [
    {
      name: "Andesite",
      title: "Stone Tile",
      image: andesite,
    },
    {
      name: "Palm SandStone",
      title: "Stone Tile",
      image: palmSandStone,
    },
    {
      name: "Wall Cludding",
      title: "Stone Tile",
      image: wallCludding,
    },
  ];

  // Lightbox state
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="team section-bg" data-aos="fade-up" id="team">
      <Container>
        <div className="section-title text-center mb-4">
          <h3></h3>
        </div>

        {/* Horizontal scroll slider */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "20px",
            padding: "10px",
          }}
        >
          {directors.map((director, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                textAlign: "center",
                minWidth: "220px",
                cursor: "pointer",
              }}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <Image
                src={director.image}
                width="200"
                height="200"
                className="rounded mx-auto d-block"
                alt={director.name}
                style={{ margin: "10px" }}
              />
              <h4>{director.name}</h4>
              <p>{director.title}</p>
            </div>
          ))}
        </div>

        {/* ✅ Fullscreen Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={directors.map((d) => ({
            src: d.image,
            description: `${d.name} - ${d.title}`, // caption text
          }))}
          plugins={[Captions]}
        />
      </Container>
    </section>
  );
};

export default Product1;
