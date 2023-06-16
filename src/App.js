import "./App.css";
import GetIdForm from "./components/GetIdForm";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MobileLegends from "./pages/Mobile Legends/MobileLegends";
import DetailPembayaran from "./pages/Mobile Legends/DetailPembayaran";
import AdminCek from "./Admin/AdminCek";
import CekStatusPembayaran from "./components/Games/Cek status Pembayaran/CekStatusPembayaran";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form" element={<GetIdForm />} />
        <Route path="games/mobile-legends" element={<MobileLegends />} />
        <Route
          path="games/mobile-legends/detail-pembayaran"
          element={<DetailPembayaran />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/admin-cek" element={<AdminCek />} />
        <Route path="/cek-status" element={<CekStatusPembayaran />} />
      </Routes>
    </Router>
  );
}

export default App;
