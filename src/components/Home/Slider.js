import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = props => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/slide1.jpeg")}
            alt="First slide"
            height="700"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/slide2.jpeg")}
            alt="Third slide"
            height="700"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/slide3.jpg")}
            alt="Third slide"
            height="700"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/slide4.jpeg")}
            alt="Fourth slide"
            height="700"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../img/slide5.jpeg")}
            alt="Fifth slide"
            height="700"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
