import React, { useState } from "react";
import "../../../../css/Form/FormId.css";
import { itemList } from "../../../../data/ListDataDiamond";
import DiamondList from "./DiamondList";
import TwPass from "./TwPass";
import WeeklyDiamond from "./WeeklyDiamond";

export default function FormDiamonds() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category, e) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div className="container-form-diamond">
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
                onClick={(e) => handleCategoryChange(item.name, e)}
              >
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="pilih-item">
          <h3>Pilih Item</h3>
          {selectedCategory === "Diamond" && <DiamondList />}
          {selectedCategory === "Twilight Pass" && <TwPass />}
          {selectedCategory === "Weekly Diamond Pass" && <WeeklyDiamond />}
        </div>
      </div>
    </div>
  );
}
