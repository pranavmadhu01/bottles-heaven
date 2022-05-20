import React, { useEffect ,useState } from "react";
import "./shopcards.css";
import { FaRupeeSign } from "react-icons/fa";
import image1 from "../../images/attar.jpg";


function Shopcards({ image, cardname, price, description }) {
  console.log(image);
  const [clicked, setClicked] = useState(false);
  function descriptionactive(e){
    setClicked(!clicked);

  }
  if (cardname === undefined) {
    return null;
  } else {
    return (
      <div className="shop-card-wrapper" onClick = { descriptionactive }>
        <div className={ "card-description-wrapper" + (clicked ? "  card-description-wrapper-active":"")} >
          <p className="description">{ description }</p>
          <a
            href="https://wa.me/c/919321763795"
            target="_blank"
            rel="noreferrer"
            className="buy-button"
          >
            Buy
          </a>
        </div>
        <img src={ image } className="card-image" loading="lazy" alt=""></img>
        <div className="card-content-wrapper">
          <h4>{cardname}</h4>
          <span>
            <FaRupeeSign className="rupees-sign" />
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
