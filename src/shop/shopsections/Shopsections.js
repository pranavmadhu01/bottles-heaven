import React from "react";
import "./shopsections.css";
import Shopcards from "../shopcards/Shopcards";
import Shop from "../Shop";

function Shopsections({ name, idsection, data }) {
  return (
    <div className="shop-section-wrapper" id={idsection}>
      <h3 className="shop-section-title">{name}</h3>
      <div className="shop-section-cards-wrapper">
        {data.map((product) => (
          <Shopcards cardname={ product.name } price={ product.price } description = { product.description } image = {product.image }/>
        ))}
      </div>
    </div>
  );
}

export default Shopsections;
