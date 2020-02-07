import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import "./Fasilitas.js/fasilitas.css";

const ComingSoon = props => {
  return (
    <>
      <Header />
      <h1 className="fasilitas-title text-capitalize">{window.location.pathname.slice(1)}</h1>
      <h1 className="text-center mb-5">Coming Soon</h1>
      <Footer />
    </>
  );
};

export default ComingSoon;
