import React from "react";
import "./shopcards.css";
import { FaRupeeSign } from "react-icons/fa";
import image1 from "../../images/IMG_20210804_172615.jpg";

function Shopcards({ image, cardname, price }) {
  if (cardname === undefined) {
    return null;
  } else {
    return (
      <div className="shop-card-wrapper">
        <div className="card-description-wrapper">
          <p className="description"></p>
        </div>
        <img src={image1} className="card-image"></img>
        <div className="card-content-wrapper">
          <h4>{cardname}</h4>
          <span>
            <FaRupeeSign className="rupees-sign"/>
            {price}
          </span>
          <a
            href="https://wa.me/c/919321763795"
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
