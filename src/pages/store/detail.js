import React from "react";
// import { useParams } from "react-router-dom";

const Detail = ({ racketItems: data }) => {
  // let { urlId } = useParams();
  let urlId = window.location.pathname.split("/")[2];
  // console.log(urlId);

  return (
    <div className="item">
      <p>item ID : {urlId}</p>
      <div className="item-img">
        <img src={data[urlId].src} alt="" />
      </div>
      <h4>{data[urlId].name}</h4>
      <h5>{data[urlId].priceText}</h5>
      <p>
        {data[urlId].price1} <span>{data[urlId].price2}</span>
      </p>
      <div className="item-color">
        <div className="color-box" style={{ backgroundColor: "#f00" }}></div>
        <div className="color-box" style={{ backgroundColor: "#0f0" }}></div>
        <div className="color-box" style={{ backgroundColor: "#00f" }}></div>
      </div>
    </div>
  );
};

export default Detail;
