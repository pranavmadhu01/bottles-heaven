import React from "react";
import "./shop.css";
import Shopsections from "./shopsections/Shopsections";
import { soaps, perfumes, attar, facialbombs, facewash, bathsalts, faceserum, hairmask, lipcare, bodybutter, ubtanpowder } from './shopdata';

function Shop() {
  return (
    <div className="shop-outer-wrapper" id="shop">
      <div className="headline-wrapper">
        <h1>SHOP</h1>
      </div>
      <Shopsections name="SOAPS" idsection="soaps" data={soaps} />
      <Shopsections name="PERFUMES" idsection="perfumes" data={perfumes} />
      <Shopsections name="ATTAR" idsection="attar" data={attar} />
      <Shopsections name="FACIAL BOMBS" idsection="facialbombs" data={facialbombs} />
      <Shopsections name="FACE WASH" idsection="facewash" data={facewash} />
      <Shopsections name="BATH SALTS" idsection="bathsalts" data={bathsalts} />
      <Shopsections name="FACE SERUM" idsection="faceserum" data={faceserum} />
      <Shopsections name="HAIR MASK" idsection="hairmask" data={hairmask} />
      <Shopsections name="LIP CARE" idsection="lipcare" data={lipcare} />
      <Shopsections name="BODY BUTTER" idsection ="bodybutter" data={bodybutter} />
      <Shopsections name="UBTAN POWDER" idsection="ubtanpowder" data={ubtanpowder} />
    </div>
  );
}

export default Shop;
