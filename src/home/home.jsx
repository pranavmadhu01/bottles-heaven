import'./home.css';
import Welcome from './welcome/welcome'
import About from './about/about'
import Products from './products/products'
import Faq from './faq/faq'
import Homefooter from './homefooter/homefooter'
import Photogallery from './photogallery/photogallery'
import { BsWhatsapp } from 'react-icons/bs'
export default function Home(){
    return(
        <div className="home-outer-wrapper" id="wrapper">
            <a href="https://wa.me/message/CPSJ4HNG5RPKG1" target="_blank" className="fixed-chat-icon"><BsWhatsapp  /></a>
            <Welcome  />
            <Products />
            <About />
            <Photogallery />
            {/* <Faq /> */}
            <Homefooter />
        
        
        
    </div>
    )
}

