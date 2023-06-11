import React, { useState } from "react";

export default function Pembayaran({ selectedDiamond }) {
  const metodePembayaran = [
    {
      nama: "DOKU ATM",
      logo: "https://cdn1.codashop.com/S/content/common/images/mno/DOKU_ATM_ID_CHNL_LOGO.png",
    },
    {
      nama: "DANA",
      logo: "https://cdn1.codashop.com/S/content/common/images/mno/DANA_CHNL_LOGO.png",
    },
  ];

  const [metodeAktif, setMetodeAktif] = useState("");

  const handleMetodePembayaran = (nama) => {
    setMetodeAktif(nama);
  };

  return (
    <div className="container-pembayaran">
      <div className="container-form">
        <div className="form-title">
          <span className="satu">3</span>
          <h2>Pembayaran</h2>
        </div>
        <div className="container-pay">
          {metodePembayaran.map((metode) => (
            <div
              className={`pay ${
                metodeAktif === metode.nama ? "active-form" : ""
              }`}
              key={metode.nama}
              onClick={() => handleMetodePembayaran(metode.nama)}
            >
              <img src={metode.logo} alt={metode.nama} />
              <div className="harga-pay">
                <span>Harga</span>
                <strong>
                  Rp.{" "}
                  {selectedDiamond ? selectedDiamond.price.toLocaleString() : 0}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
