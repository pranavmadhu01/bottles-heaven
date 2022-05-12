import './products.css'
import{useEffect} from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
export default function Products(){
    useEffect(() =>{
        var scrollselect = document.getElementById("products");
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
        <div className="description-wrapper scroll-select" id="products">
                <div className="headline-wrapper product-headline-wrapper">
                    <h1>PRODUCTS</h1>
                    <p></p>
                </div>
                <div className="products-wrapper">
                    <Productcards 
                        classone = "soap"
                        link ="#soaps"
                        name = "Soaps"
                    />
                    <Productcards 
                        classone = "perfumes"
                        link ="#perfumes"
                        name = "Perfumes"
                    />
                    <Productcards 
                        classone = "skincare"
                        link = "#attar"
                        name = "Attar"
                    />
                    <Productcards 
                        classone = "skincare"
                        link = "#facialbombs"
                        name = "Facial Bombs"
                    />
                    <Productcards 
                        classone= "skincare"
                        link ="#facewash"
                        name = "Face Wash"
                    />
                    <Productcards 
                        classone = "skincare"
                        link = "#bathsalts"
                        name = "Bath Salts"
                    />
                    <Productcards 
                        classone = "skincare"
                        link = "#faceserum"
                        name = "Face Serum"
                    />
                    <Productcards 
                        classone = "skincare"
                        link = "#hairmask"
                        name = "Hair Mask"
                    />
                    <Productcards 
                        classone = "skincare"
                        link = "#lipcare"
                        name = "Lip Care"
                    />
                    <Productcards 
                        classone = "skincare"
                        link = "#bodybutter"
                        name = "Body Butter"
                    />
                    <div className='products'>
                        <a  href="#" className="load-more">
                            <BiLoaderCircle  className="loading-icon" />
                            <h3>LOAD more</h3>
                        </a>

                    </div>   
                
                </div>
            </div>
    )
}
function Productcards({classone, link, name}){
return(
    <div className={`products ${ classone }`}>
        <a  href={link} className="product-mask">
            <h3>{name}</h3>
        </a>
    </div>

)

}