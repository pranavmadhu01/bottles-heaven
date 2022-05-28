import "./header.css";
import logo from "../images/Bottles Hevane Logo .png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
export default function Header() {
  useEffect(() => {
    let hamberger = document.getElementById("hamberger-menu");
    let hambergericon = document.getElementById("hamberger-icon");
    let hambergercloseicon = document.getElementById("hamberger-close-icon");
    let links = document.querySelector(".hamburger-links");
    hambergericon.addEventListener("click", () => {
      hamberger.classList.add("hamburger-nav-bar-active");
      hambergericon.style.cssText = "display:none;";
      hamberger.addEventListener("click", () => {
        hamberger.classList.remove("hamburger-nav-bar-active");
      hambergericon.style.cssText = "display:block;";

      });
    });

    links.addEventListener("click", () => {
      hamberger.classList.remove("hamburger-nav-bar-active");
      hambergericon.style.cssText = "display:block;";

    });
    hambergercloseicon.addEventListener("click", () => {
      hamberger.classList.remove("hamburger-nav-bar-active");
      hambergericon.style.cssText = "display:block;";
    });
  }, []);
  return (
    <header className="header">
      <span className="header-logo-wrapper">
        <img src={logo} alt="logo of bottles heaven" className="logo"></img>
        <h1>
          <span className="letter-color">B</span>OTTLES{" "}
          <span className="letter-color">H</span>EAVEN
        </h1>
      </span>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="#home" class="header-links">
              Home
            </a>
          </li>
          <li>
            <a href="#shop" class="header-links">
              Shop
            </a>
          </li>
          <li>
            <a href="#services" class="header-links">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" class="header-links">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* <ul>
                <li><a href="#" class="header-links">Admin</a></li>
            </ul> */}
      <AiOutlineMenu className="hamburger-menu-icon" id="hamberger-icon" />
      <nav className="hamburger-nav-bar" id="hamberger-menu">
        <AiOutlineClose className="close-menu-icon" id="hamberger-close-icon" />
        <ul>
          <li>
            <a href="#home" class="hamburger-links">
              Home
            </a>
          </li>
          <li>
            <a href="#shop" class="hamburger-links">
              Shop
            </a>
          </li>
          <li>
            <a href="#services" class="hamburger-links">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" class="hamburger-links">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
