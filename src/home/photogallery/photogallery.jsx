import "./photogallery.css";
import { useEffect } from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageone from "../../images/attar.jpg";
import imagetwo from "../../images/IMG_20210804_173657.jpg";
import imagethree from "../../images/IMG_20210804_173842.jpg";
import imagefour from "../../images/IMG_20211026_212340.jpg";
import imagefive from "../../images/IMG_20211027_023436.jpg";
export default function Photogallery() {
  useEffect(() => {
    var scrollselect = document.getElementById("gallery");
    let wrapper = document.getElementById("wrapper");
    wrapper.addEventListener("scroll", function () {
      let contentPosition = scrollselect.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;
      if (contentPosition < screenPosition) {
        scrollselect.classList.add("scroll-active");
      } else {
        scrollselect.classList.remove("scroll-active");
      }
    });
  }, []);
  return (
    <div className="photo-gallery-container scroll-select" id="gallery">
      <div className="headline-wrapper product-headline-wrapper">
        <h1>GALLERY</h1>
      </div>
      <Carousel 
        id="wrapper"
        autoPlay
        infiniteLoop
        autoFocus
        dynamicHeight={300}
        centerMode={true}
        emulateTouch={true}
        showThumbs ={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
    >
        <img src={imageone}></img>
        <img src={imagetwo}></img>
        <img src={imagethree}></img>
        <img src={imagefour}></img>
        <img src={imagefive}></img>
      </Carousel>
    </div>
  );
}
