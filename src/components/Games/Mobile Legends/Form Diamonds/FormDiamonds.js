import React, { useState } from "react";
import "../../../../css/Form/FormId.css";
import { itemList } from "../../../../data/ListDataDiamond";

import TwPass from "./TwPass";
import WeeklyDiamond from "./WeeklyDiamond";
import Pembayaran from "../Pembayaran/Pembayaran";
import Pembelian from "../Pembelian/Pembelian";
import DiamondItemList from "./DiamondList";
import GetIdForm from "../../../GetIdForm";

export default function FormDiamonds() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedDiamond(null); // Reset selected diamond when category changes
  };

  const handleSelectedDiamond = (diamond) => {
    setSelectedDiamond(diamond);
  };

  const handleGetIdFormSubmit = (idData) => {
    setUserId(idData.userId);
    setServerId(idData.serverId);
  };

  return (
    <div className="container-form-diamond">
      <div className="user-id">
        <GetIdForm setUsername={setUsername} onSubmit={handleGetIdFormSubmit} />
      </div>
      <div className="container-form">
        <div className="form-title">
          <span className="satu">2</span>
          <h2>Pilih Nominal Top Up</h2>
        </div>
        <div className="kategori">
          <span>Pilih kategori</span>
          <div className="item-list-diamond">
            {itemList.map((item, index) => (
              <button
                className={`item-list ${
                  selectedCategory === item.name ? "active-form" : ""
                }`}
                key={index}
                onClick={() => handleCategoryChange(item.name)}
              >
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="pilih-item">
          <h3>Pilih Item</h3>
          {selectedCategory === "Diamond" && (
            <DiamondItemList
              handleSelectedDiamond={handleSelectedDiamond}
              selectedDiamond={selectedDiamond}
            />
          )}
          {selectedCategory === "Twilight Pass" && <TwPass />}
          {selectedCategory === "Weekly Diamond Pass" && <WeeklyDiamond />}
        </div>
      </div>

      {selectedCategory && (
        <div>
          <div className="pembayaran">
            <Pembayaran selectedDiamond={selectedDiamond} />
          </div>

          <div className="Pembelian">
            <Pembelian
              selectedDiamond={selectedDiamond}
              username={username}
              userId={userId}
              serverId={serverId}
            />
          </div>
        </div>
      )}
    </div>
  );
}
