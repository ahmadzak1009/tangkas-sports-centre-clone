import React from "react";

const Testimoni = props => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md bg-abu m-2 my-3 p-5 text-center" data-aos="fade-right">
            <img src={require("../../img/testi1.jpeg")} width="140" alt="testi1" />
            <p className="testi-text mt-4">
              Di Tangkas Sport Centre kami latihan dengan semangat karena di-support dengan pelatih
              dan fasilitas yang menunjang. Saya berharap bisa berjuang lebih baik dan bisa lebih
              berprestasi lagi.
              <br />
              <br />
              <b>Joshua David Wardana</b>
            </p>
          </div>
          <div className="col-md bg-abu m-2 my-3 p-5 text-center" data-aos="fade-right">
            <img src={require("../../img/testi2.jpeg")} width="140" alt="testi1" />
            <p className="testi-text mt-4">
              Saya sangat bersyukur bisa mendapatkan kesempatan lahir dan berkembang bersama PB
              Tangkas Intiland. Semoga tangkas bisa terus mencetak bibit-bibit bulutangkis masa
              depan.
              <br />
              <br />
              <b>Jonathan Christie</b>
            </p>
          </div>
          <div className="col-md bg-abu m-2 my-3 p-5 text-center" data-aos="fade-right">
            <img src={require("../../img/testi3.jpeg")} width="140" alt="testi1" />
            <p className="testi-text mt-4">
              Selama saya di PB Tangkas latihannya menyenangkan dan saya bisa mendapatkan progress
              yang meningkat dan para pelatihnya berkualitas. Saya berharap kedepannya PB Tangkas
              dapat menghasilkan para juara.
              <br />
              <br />
              <b>Bryan Sydney Elohim</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
