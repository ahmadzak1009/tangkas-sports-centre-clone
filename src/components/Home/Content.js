import React from "react";
import img from "../../img/content.jpg";

const Content = props => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 text-center" style={{ backgroundColor: "#f7f7f7" }}>
            <div className="content-wrapper">
              <div className="row" style={{ marginTop: "90px" }}>
                <div className="col-md-4">
                  <span className="fa-stack fa-lg icon">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-smile-o fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="font-weight-bolder my-2 mb-3">MEMBUATMU TERSENYUM</h5>
                  <p style={{ color: "#7b838b", fontSize: "18px" }}>
                    Olahraga bisa membuat Anda merasa baik. Ini karena pelepasan endorfin. Ini dapat
                    menyebabkan tingkat depresi, kelelahan, dan stres yang lebih rendah.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-lg icon">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-shield fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="font-weight-bolder my-2 mb-3">HIDUP SEHAT</h5>
                  <p style={{ color: "#7b838b", fontSize: "18px" }}>
                    Olahraga meningkatkan energi Anda. Aktivitas fisik yang teratur dapat
                    meningkatkan kekuatan otot Anda dan meningkatkan daya tahan Anda.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-lg icon">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-child fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="font-weight-bolder my-2 mb-3">AKTIF</h5>
                  <p style={{ color: "#7b838b", fontSize: "18px" }}>
                    Tetap aktif dan positif dapat membawa banyak manfaat dalam hidup Anda. Fokus
                    pada tujuan Anda dan jadilah sehat setiap hari.
                  </p>
                </div>
              </div>
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-md-4">
                  <span className="fa-stack fa-lg icon">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-smile-o fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="font-weight-bolder my-2 mb-3">MENYENANGKAN</h5>
                  <p style={{ color: "#7b838b", fontSize: "18px" }}>
                    Di Tangkas Sport Center kami menyediakan banyak fasilitas berbeda untuk
                    dijelajahi dan selalu menyenangkan untuk berolahraga bersama teman.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-lg icon">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-shield fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="font-weight-bolder my-2 mb-3">MENJADI POSITIF</h5>
                  <p style={{ color: "#7b838b", fontSize: "18px" }}>
                    Pikiran yang sehat dan berolahraga secara teratur adalah kunci untuk membantu
                    Anda tetap dalam kesehatan yang baik di kemudian hari.
                  </p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-lg icon">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-child fa-stack-1x fa-inverse"></i>
                  </span>
                  <h5 className="font-weight-bolder my-2 mb-3">LINGKUNGAN YANG BAIK</h5>
                  <p style={{ color: "#7b838b", fontSize: "18px" }}>
                    Kami menyediakan lingkungan yang bersih dan baik untuk selalu sehat dan aktif di
                    Tangkas Sport Center.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 position-relative"
            style={{ height: "1000px", overflow: "hidden", backgroundColor: "#f7f7f7" }}
            data-aos="fade-left"
          >
            <img src={img} alt="content" style={{ height: "1000px", marginLeft: "-330px" }} />
            <a
              href="https://www.youtube.com/watch?v=UpXc_9NUsM8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success play-button px-4 rounded-0"
            >
              <i className="fa fa-play"></i> Play
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
