// MyNavbar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import "../../css/navbar/navbar.css";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  const [showInput, setShowInput] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const handleClickHamburger = () => {
    setShowSideNav(!showSideNav);
  };

  const handleClickInput = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <div
        className={`container-navbar-luar ${showInput ? "active-search" : ""}`}
      >
        <div className="container-navbar">
          <div className="logo">
            <div className="hamburger-menu" onClick={handleClickHamburger}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <Link to="/">
              <div className="gambar-logo">
                <img
                  src="https://cdn1.codashop.com/S/content/mobile/images/codashop-logo-new-3a.png"
                  alt=""
                />
              </div>
            </Link>
            <div className="font-logo">
              <p>Website top-up terbesar, tercepat dan terpercaya</p>
            </div>
          </div>
          <div className="kanan">
            <div className="search-container">
              <div
                className={`iconSearch ${showInput ? "icon" : ""}`}
                onClick={handleClickInput}
              >
                <FontAwesomeIcon icon={faSearch} />
              </div>
              {showInput && (
                <div className="search show active-search">
                  <input type="text" placeholder="Search" />
                </div>
              )}
            </div>
            <Link to="/cek-status" style={{ color: "white" }}>
              <div className="notification">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </Link>
            <div className="button-daftar">
              <button>Daftar</button>
            </div>
          </div>
        </div>
      </div>
      <SideNav
        showSideNav={showSideNav}
        closeNav={() => setShowSideNav(false)}
      />
    </>
  );
}
