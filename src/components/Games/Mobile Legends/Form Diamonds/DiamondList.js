import React, { useState } from "react";
import { DiamondList as DataDiamondList } from "../../../../data/DiamondsList";

export default function DiamondItemList() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="diamond-list">
      {DataDiamondList.map((item, index) => (
        <div
          className={`container-diamond ${
            selectedItem === index ? "active-form" : ""
          }`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <img src={item.image} alt="" />
          <div className="font-diamond">
            <p>{item.jumlah} Diamond</p>
            <span>
              Dari
              <br />
              Rp. {item.price.toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
