import React from "react";

const Fasilitas = props => {
  return (
    <>
      <div className="container-fluid">
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center fasilitas-wrapper mt-5"
          data-aos="zoom-in-down"
        >
          <h5 className="fasilitas-home-title">FASILITAS & AKTIVITAS</h5>
          <p className="col-md-8 fasilitas-home-text text-muted">
            Di Tangkas Sports Centre, kita akan selalu memberikan pelayanan dan fasilitas terbaik
            untuk anda.
          </p>
        </div>
      </div>
      <div className="join-us-wrapper">
        <div className="triangle"></div>
        <h4 className="join-us-tangkas" data-aos="fade-down" data-aos-duration="2000">
          TANGKAS SPORTS CENTRE
        </h4>
        <h1 className="col-md-6 m-auto join-us-text" data-aos="fade-up" data-aos-duration="2000">
          GABUNG MENJADI MEMBER SEKARANG
        </h1>
      </div>
    </>
  );
};

export default Fasilitas;
