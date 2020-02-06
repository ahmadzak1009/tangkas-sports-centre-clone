import React from "react";
import "./about.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const About = props => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <div className="container bg-about">
        <h1 className="about-title">ABOUT US</h1>
        <p className="about-text col-md-8 text-muted">
          Tangkas Sports Center adalah tempat yang tepat untuk keluarga yang memberikan kenyamanan
          dan kelengkapan fasilitas olahraga modern dan lengkap untuk para anggota. Pusat olahraga
          Tangkas adalah fasilitas olahraga terluas di Jakarta Barat, didukung oleh gedung yang
          megah dan layanan yang sangat baik. Pusat olahraga Tangkas sangat layak dipilih oleh
          keluarga untuk menjadikan gaya hidup sehat dan berkelas. Tangkas memiliki kolam renang
          dewasa, kolam renang anak-anak, waterboom, 9 lapangan bulu tangkis, pusat kebugaran, tenis
          meja, lapangan futsal, lapangan basket, 4 lapangan tenis outdoor, dan sebuah kafe yang
          menawarkan banyak pilihan menu sehat, berbagai jenis keanggotaan hingga sesuai dengan
          kebutuhan Anda, ruang pertemuan / pesta / pertemuan, dan tempat yang tepat untuk menjalin
          hubungan sosial dan bisnis di antara anggota.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
