import React from "react";
import "../css/mobile legends/ml.css";

import GetIdForm from "../components/GetIdForm";
import MyNavbar from "../components/navbar/MyNavbar";
import LeftPage from "../components/Games/Mobile Legends/LeftPage";

const MobileLegends = () => {
  return (
    <>
      <MyNavbar />
      <div className="container">
        <div className="container-ml">
          <div className="left-page">
            <LeftPage />
          </div>
          <div className="right-page">
            <GetIdForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLegends;
