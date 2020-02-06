import React, { useState } from "react";
import "./fasilitas.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const images = [
  { url: "gal1.jpg", name: "badminton" },
  { url: "gal2.jpg", name: "futsal" },
  { url: "gal3.jpg", name: "basket ball" },
  { url: "gal4.jpg", name: "swimming pool" },
  { url: "gal5.jpg", name: "gym" },
  { url: "gal6.jpg", name: "tennis" },
  { url: "gal7.jpg", name: "aerobik" },
  { url: "gal8.jpg", name: "ping pong" },
  { url: "gal9.jpg", name: "water boom" }
];

const Fasilitas = props => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <h1 className="fasilitas-title">Fasilitas</h1>
      <div className="d-flex flex-wrap">
        {images.map(image => (
          <Image key={image.name} image={image} />
        ))}
      </div>
      <Footer />
    </>
  );
};

const Image = props => {
  const [showName, setShowName] = useState(false);
  const { name, url } = props.image;
  return (
    <>
      <div
        className="col-md-4 p-0"
        onMouseOver={() => setShowName(true)}
        onMouseOut={() => setShowName(false)}
      >
        <img
          src={require("../../img/galery/" + url)}
          alt={name}
          className="img-gal"
          data-aos="flip-left"
        />
        {showName && (
          <p className="img-name" onMouseOver={() => setShowName(true)}>
            {name}
          </p>
        )}
      </div>
    </>
  );
};

export default Fasilitas;
