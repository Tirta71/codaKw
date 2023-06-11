// SideNav.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/navbar/navbar.css";
import {
  faTimes,
  faPercent,
  faBookBookmark,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

export default function SideNav({ showSideNav, closeNav }) {
  if (!showSideNav) {
    return null; // Tidak merender apa pun saat showSideNav bernilai false
  }

  const promos = [
    {
      icon: faPercent,
      text: "Jadilah yang pertama mengetahui promo dan penawaran ekslusif!",
    },
    {
      icon: faBookBookmark,
      text: "Akses riwayat pesanan anda dengan mudah",
    },
    {
      icon: faCodeBranch,
      text: "Lebih cepat dan aman",
    },
  ];

  const handleClickClose = () => {
    closeNav(); // Panggil fungsi closeNav untuk menutup SideNav
  };

  return (
    <div>
      <div className="container-sidenav">
        <div className="close">
          <FontAwesomeIcon icon={faTimes} onClick={handleClickClose} />
        </div>

        <div className="font-sideNav">
          <h2>Daftar Codashop sekarang!</h2>
          <div className="promo-sidenav">
            {promos.map((promo, index) => (
              <div className="promo" key={index}>
                <FontAwesomeIcon icon={promo.icon} />
                <p>{promo.text}</p>
              </div>
            ))}
          </div>
          <div className="button-sideNav">
            <button className="daftar-sideNav">Daftar Sekarang, Gratis</button>
            <button className="Masuk">Masuk</button>
          </div>
        </div>
      </div>
    </div>
  );
}
