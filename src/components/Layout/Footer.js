import React from "react";
import logo from "../../img/logo.png";

const Footer = props => {
  return (
    <>
      <footer className="container-fluid">
        <div className="row text-secondary text-center mb-4">
          <div className="col-md-4 footer-1 ">
            <h4 className="font-weight-bolder my-2 text-dark">JAM OPERASIONAL & KONTAK</h4>
            <div className="d-flex flex-column justify-content-around align-items-center h-75 mt-4">
              <p>06:00 - 23:00</p>
              <hr />
              <p>
                Fasilitas Lainnya
                <br />
                06:00 - 22:00
              </p>
              <hr />
              <p className="font-weight-bolder">IKUTI KAMI</p>
              <span>
                <i className="fa fa-facebook-official mr-3"></i>
                <i className="fa fa-instagram"></i>
              </span>
            </div>
          </div>
          <div className="col-md-4 footer-2">
            <img src={logo} alt="logo" />
            <p className="my-4" style={{ lineHeight: "30px", fontSize: "17px" }}>
              Jalan Tanjung Duren
              <br />
              Komplek Greenville Blok Q
              <br />
              Jakarta Barat 11510
            </p>

            <p className="small">
              All Rights Reserved
              <br /> Powered by <b>Ahmad Zaki</b>
            </p>
          </div>
          <div className="col-md-4 footer-1">
            <h4 className="font-weight-bolder my-2 text-dark">RESERVASI</h4>
            <div className="reservasi-box d-flex flex-column justify-content-center align-items-center mt-4">
              <p className="h5">Email: info @ tangkassportscentre.com</p>
              <button className="btn btn-success rounded-0">TEL: 021-5605587</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
