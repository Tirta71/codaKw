import React from "react";

const DetailPembayaranItem = ({ label, value }) => {
  return (
    <p>
      {label} <strong>{value}</strong>
    </p>
  );
};

export default DetailPembayaranItem;
