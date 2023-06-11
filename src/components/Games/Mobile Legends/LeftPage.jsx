import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeadphones } from "@fortawesome/free-solid-svg-icons";

export default function LeftPage() {
  const [showDeskripsi, setShowDeskripsi] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const verifyItems = [
    {
      icon: faStar,
      text: "Pembayaran yang Aman",
    },
    {
      icon: faHeadphones,
      text: "Layanan Pelanggan 24/7",
    },
  ];

  const handleDeskripsi = () => {
    setShowDeskripsi(!showDeskripsi);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="left-image">
        <img
          src="https://cdn1.codashop.com/S/content/common/images/mno/mlbb_halloween640x241%20(1).jpeg"
          alt=""
        />
      </div>
      <div className="title-ml">
        <h2>Mobile Legends: Bang Bang</h2>
      </div>
      <div className="verify-ml">
        {verifyItems.map((item, index) => (
          <div className="container-verify" key={index}>
            <FontAwesomeIcon icon={item.icon} style={{ paddingRight: "5px" }} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="deskripsi-ml">
        <p>
          Codashop telah bekerja sama dengan Moonton untuk menawarkan top up
          Mobile Legends dengan mudah, aman, dan nyaman.
        </p>
        <br />

        {(!isMobile || showDeskripsi) && (
          <>
            <p>
              Top up ML Diamond, Twilight Pass, dan Weekly Pass hanya dalam
              hitungan detik! Cukup masukkan User ID dan Zone ID MLBB Anda,
              pilih jumlah Diamond yang Anda inginkan, selesaikan pembayaran,
              dan Diamond akan secara langsung ditambahkan ke akun Mobile
              Legends Anda.
            </p>
            <br />
            <p>
              Bayarlah menggunakan Codacash, GoPay, ShopeePay, Dana, OVO,
              LinkAja, Telkomsel, Indosat, Tri, XL, Bank Transfer, QRIS,
              Indomaret, Alfamart, Kredivo, Kartu Kredit, dan Doku Wallet.
            </p>
            <br />
            <p>
              Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi
              menggunakan Telkomsel akan dikenakan biaya tambahan pajak.
            </p>

            <div className="deskripsi-peringatan">
              <span>PERINGATAN</span>
              <ul>
                <li>
                  Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi
                  menggunakan Telkomsel akan dikenakan biaya tambahan pajak.
                </li>
                <li>
                  Metode pembayaran ShopeePay hanya tersedia untuk Pengguna
                  Seluler (Mobile). Harap pastikan bahwa aplikasi Shopee Anda
                  telah diperbarui dan memiliki saldo ShopeePay yang mencukupi
                  sebelum melakukan top up.
                </li>
              </ul>
            </div>
          </>
        )}

        {isMobile && (
          <button onClick={handleDeskripsi} className="btn-deskripsi">
            {showDeskripsi ? "Sembunyikan" : "Baca Lebih Lanjut"}
          </button>
        )}
      </div>
    </div>
  );
}
