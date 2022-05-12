import React from "react";
import "./shop.css";
import Shopcards from "./shopcards/Shopcards";
import Shopsections from "./shopsections/Shopsections";

function Shop() {
  const soaps = [
    { name: "Charcoal", price: "20" },
    { name: "Dove", price: "20" },
    { name: "Lemon & Mint", price: "20" },
    { name: "Aloe Vera", price: "20" },
    { name: "Coffee", price: "20" },
    { name: "Lavender", price: "20" },
    { name: "Chandan", price: "20" },
    { name: "Multani Miti", price: "20" },
    { name: "Neem", price: "20" },
    { name: "Goat Milk Soap", price: "20" },
    { name: "Kesari", price: "20" },
    { name: "Papaya", price: "20" },
    { name: "Red Wine", price: "20" },
    { name: "Ubtan", price: "20" },
    { name: "Honey Milk Soap", price: "20" },
    { name: "Potato Soap", price: "20" },
    { name: "Pink Clay Soap", price: "20" },
    { name: "Rose Petal Soap", price: "20" },
    { name: "Initial Letter Soap", price: "20" },
    { name: "Toy Soap", price: "20" },
    { name: "Cupcake Soap", price: "20" },
    { name: "Donut Soap", price: "20" },
    { name: "Loofah Soap", price: "20" },
    { name: "Skin Tightening Soap", price: "20" },
    { name: "Fairness Soap", price: "20" },
    { name: "Anti Tan Soap", price: "20" },
    { name: "Letter Soap", price: "20" },
    { name: "Monogram Letter Soap", price: "20" },
    { name: "Name Soap", price: "20" },
    { name: "Photo Soap", price: "20" },
    { name: "Green Tea Soap", price: "20" },
  ];
  const perfumes = [
    { name: "Havoc", price: "20" },
    { name: "David off", price: "20" },
    { name: "White musk", price: "20" },
    { name: "Melody", price: "20" },
    { name: "212 VIP", price: "20" },
    { name: "Oudh", price: "20" },
    { name: "CK 1", price: "20" },
    { name: "Prophecy", price: "20" },
    { name: "Keress", price: "20" },
    { name: "Classic Jasmin", price: "20" },
    { name: "Gucci Bamboo", price: "20" },
    { name: "Classic Jaguar", price: "20" },
    { name: "Bad Boy", price: "20" },
    { name: "Green Irish", price: "20" },
    { name: "Fog Black", price: "20" },
    { name: "Ellie Saab", price: "20" },
    { name: "Poison by Dior", price: "20" },
    { name: "Poison by Dior", price: "20" },
    { name: "Blue Wave", price: "20" },
    { name: "Invictus", price: "20" },
    { name: "Figo Black", price: "20" },
    { name: "Nazneen", price: "20" },
    { name: "Dark Temp", price: "20" },
    { name: "Relax", price: "20" },
    { name: "Victoria Secret", price: "20" },
    { name: "Nuti Dissey By Issey Miyake", price: "20" },
    { name: "Brut", price: "20" },
    { name: "Signature", price: "20" },
    { name: "Red-Black", price: "20" },
    { name: "Creations", price: "20" },
    { name: "Madrid", price: "20" },
    { name: "Issimiyaki men", price: "20" },
  ];
  const attar = [
    { name: "Mogra", price: "20" },
    { name: "Chandan", price: "20" },
    { name: "Kesar", price: "20" },
    { name: "Khas", price: "20" },
    { name: "Classic Jasmin", price: "20" },
    { name: "Kasturi", price: "20" },
    { name: "Gulab", price: "20" },
    { name: "Kewda", price: "20" },
  ];
  const facialbombs = [
    { name: "Goat Milk", price: "20" },
    { name: "Charcoal", price: "20" },
    { name: "Red Wine", price: "20" },
    { name: "Neem Tulsi", price: "20" },
    { name: "Multani Miti", price: "20" },
    { name: "Gold", price: "20" },
    { name: "Mix Fruit", price: "20" },
    { name: "Heena", price: "20" },
  ];
  const facewash = [
    { name: "Coffee Walnut", price: "20" },
    { name: "Neem ", price: "20" },
    { name: "Bridal(Sandal wood)", price: "20" },
    { name: "Charcoal", price: "20" },
    { name: "Strawberry", price: "20" },
  ];
  const bathsalts = [
    { name: "Lavender", price: "20" },
    { name: "Rose", price: "20" },
    { name: "Lemon", price: "20" },
    { name: "Rainbow", price: "20" },
  ];
  const faceserum = [
    { name: "24k Gold", price: "20" },
    { name: "Natural", price: "20" },
  ];
  const hairmask = [{ name: "Castor oil Aloevera ", price: "20" }];
  const lipcare = [];
  return (
    <div className="shop-outer-wrapper" id="shop">
      <div className="headline-wrapper">
        <h1>SHOP</h1>
      </div>
      <Shopsections name="SOAPS" idsection="soaps" data={soaps} />
      <Shopsections name="PERFUMES" idsection="perfumes" data={perfumes} />
      <Shopsections name="ATTAR" idsection="attar" data={attar} />
      <Shopsections
        name="FACIAL BOMBS"
        idsection="facialbombs"
        data={facialbombs}
      />
      <Shopsections name="FACE WASH" idsection="facewash" data={facewash} />
      <Shopsections name="BATH SALTS" idsection="bathsalts" data={bathsalts} />
      <Shopsections name="FACE SERUM" idsection="faceserum" data={faceserum} />
      <Shopsections name="HAIR MASK" idsection="hairmask" data={hairmask} />
    </div>
  );
}

export default Shop;
