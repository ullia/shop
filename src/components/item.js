import React from "react";

const item = ({ data, src, index }) => {
  return (
    <div className="item">
      <div className="item-img">
        <img src={data.src} alt="" />
      </div>
      <h4>{data.name}</h4>
      <h5>{data.priceText}</h5>
      <p>
        {data.price1} <span>{data.price2}</span>
      </p>
      <div className="item-color">
        <div className="color-box" style={{ backgroundColor: "#f00" }}></div>
        <div className="color-box" style={{ backgroundColor: "#0f0" }}></div>
        <div className="color-box" style={{ backgroundColor: "#00f" }}></div>
      </div>
    </div>
  );
};

export default item;
