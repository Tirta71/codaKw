// Pembayaran.js
import React, { useState } from "react";

export default function Pembayaran({
  selectedDiamond,
  onMetodePembayaranChange,
}) {
  const metodePembayaran = [
    {
      nama: "Bank Transfer",
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
    onMetodePembayaranChange(nama); // Mengirim data metode pembayaran aktif ke komponen Pembelian
  };

  return (
    <div className="container-pembayaran">
      <div className="container-form">
        <div className="form-title">
          <span className="satu">3</span>
          <h2>Pembayaran</h2>
        </div>
        {metodePembayaran.map((metode) => (
          <div className="container-pay">
            <div className="border-pay"></div>
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

              <div className="nama-bank">
                {metodeAktif === metode.nama && <strong>{metode.nama}</strong>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
