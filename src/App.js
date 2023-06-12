import "./App.css";
import GetIdForm from "./components/GetIdForm";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MobileLegends from "./pages/Mobile Legends/MobileLegends";
import DetailPembayaran from "./pages/Mobile Legends/DetailPembayaran";

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
      </Routes>
    </Router>
  );
}

export default App;
