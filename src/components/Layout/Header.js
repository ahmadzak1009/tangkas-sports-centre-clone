import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "./layout.css";

const Header = props => {
  return (
    <>
      <header id="header" className="shadow-sm fixed-top">
        <Link to="/">
          <img src={logo} width="75" height="75" alt="logo" className="logo" />
        </Link>

        {/* BURGER BUTTON */}
        <input type="checkbox" id="burger" />
        <label htmlFor="burger" className="burger-btn">
          <i className="fa fa-bars"></i>
        </label>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/tentang" className="nav-link">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/fasilitas" className="nav-link">
              Fasilitas
            </Link>
          </li>
          <li>
            <Link to="/berita-dan-promosi" className="nav-link">
              Berita & Promosi
            </Link>
          </li>
          <li>
            <Link to="/kontak" className="nav-link">
              Kontak
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
