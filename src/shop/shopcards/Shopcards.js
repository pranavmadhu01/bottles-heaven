import React, { useEffect, useState } from "react";
import "./shopcards.css";
import { FaRupeeSign } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";

function Shopcards({ image, cardname, price, description }) {
  const [clicked, setClicked] = useState(false);
  function descriptionactive(e) {
    setClicked(!clicked);
  }
  if (cardname === undefined) {
    return null;
  } else {
    return (
      <div className="shop-card-wrapper" onClick={descriptionactive}>
        <div
          className={
            "card-description-wrapper" +
            (clicked ? "  card-description-wrapper-active" : "")
          }
        >
          <img src={image} className="card-image" loading="lazy" alt=""></img>
          <p className="description">{description}</p>
          <a
            href="https://wa.me/message/CPSJ4HNG5RPKG1"
            target="_blank"
            rel="noreferrer"
            className="buy-button"
          >
            Buy
          </a>
        </div>
        <img src={image} className="card-image" loading="lazy" alt=""></img>
        <div className="card-content-wrapper">
          <h4>{cardname}</h4>
          <small>
            <FaRupeeSign className="rupees-sign" />
            {price}
            &ensp;
            +
            &ensp;
            <FaShippingFast className="rupees-sign" />
          </small>
          <a
            href="https://wa.me/message/CPSJ4HNG5RPKG1"
            target="_blank"
            rel="noreferrer"
            className="buy-button"
          >
            Buy
          </a>
        </div>
      </div>
    );
  }
}

export default Shopcards;
