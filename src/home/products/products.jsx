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
                    <br></br>
                    <p></p>
                </div>
                <div className="products-wrapper">
                    <div className='products soap'>
                        <a  href="#" className="product-mask">
                            <h3>SOAPS</h3>
                        </a>
                    </div>
                    <div className='products perfumes'>
                        <a  href="#" className="product-mask">
                            <h3>PERFUMES</h3>
                        </a>

                    </div>
                    <div className='products skincare'>
                        <a  href="#" className="product-mask">
                            <h3>SKIN CARE</h3>
                        </a>

                    </div>
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