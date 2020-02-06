import React from "react";
import "./home.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Slider from "./Slider";
import Content from "./Content";
import Testimoni from "./Testimoni";
import Fasilitas from "./Fasilitas";

const Home = props => {
  return (
    <>
      <Header />

      <Slider />
      <Content />
      <Testimoni />
      <Fasilitas />

      <Footer />
    </>
  );
};

export default Home;
