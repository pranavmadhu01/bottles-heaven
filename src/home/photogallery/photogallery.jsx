import './photogallery.css';
export default function Photogallery(){
    return(
        <div className="photo-gallery-container">
            <div className="headline-wrapper product-headline-wrapper">
                <h1>GALLERY</h1>
            </div>
            <div className="photo-gallery">
                <div className=" photo photo-one"></div>
                <div className=" photo photo-two"></div>
                <div className=" photo photo-three"></div>
                <div className=" photo photo-four"></div>
                <div className=" photo photo-five"></div>
            </div>

        </div>
    )
}