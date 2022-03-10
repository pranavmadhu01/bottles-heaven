import './photogallery.css';
import {useEffect} from 'react';
export default function Photogallery(){
    useEffect(() =>{
        var scrollselect = document.getElementById("gallery");
        let wrapper = document.getElementById("wrapper");
        wrapper.addEventListener('scroll',function(){
            let contentPosition = scrollselect.getBoundingClientRect().top;
            let screenPosition = window.innerHeight;
            if(contentPosition<screenPosition){
                scrollselect.classList.add('scroll-active');
            }
            else{
                scrollselect.classList.remove('scroll-active');
            }
        });
},[])
    return(
        <div className="photo-gallery-container scroll-select" id="gallery">
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