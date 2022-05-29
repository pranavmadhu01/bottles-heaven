import React from "react";
import "./shopsections.css";
import Shopcards from "../shopcards/Shopcards";
import { Carousel } from "react-responsive-carousel";

function Shopsections({ name, idsection, data }) {
  if (name === "GIFT HAMPERS") {
    return (
      <div className="shop-section-wrapper" id={idsection}>
        <h3 className="shop-section-title">{name}</h3>
        <div className="shop-section-cards-wrapper">
          <Carousel autoPlay={true}>
            {data.map((product) => (
              <img src={product.image}></img>
            ))}
          </Carousel>
          <p className="hamper-content" style={{padding:"20px"}}>
            Gift Hampers: Bottles Heaven is well known for customizing homemade
            skincare and bathing range products! We also customize GIFT HAMPER
            starting at Rs.500/- <br></br>We also deal with bulk gift hampers
            for:
            <br></br>
            <ul>
              <li>Wedding gifting</li>
              <li>Birthday gifting</li>
              <li>Team Bride & Team Groom gifting</li>
              <li>Corporate gifting etc...</li>
            </ul>
          </p>
          <div>
            <a
              href="https://wa.me/message/CPSJ4HNG5RPKG1"
              target="_blank"
              rel="noreferrer"
              className="buy-button"
            >
              click here to know more
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="shop-section-wrapper" id={idsection}>
        <h3 className="shop-section-title">{name}</h3>
        <div className="shop-section-cards-wrapper">
          {data.map((product) => (
            <Shopcards
              cardname={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Shopsections;
