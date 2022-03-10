import'./home.css';
import Welcome from './welcome/welcome'
import About from './about/about'
import Products from './products/products'
import Faq from './faq/faq'
import Homefooter from './homefooter/homefooter'
import Photogallery from './photogallery/photogallery'
import { BsFillChatLeftFill } from 'react-icons/bs'
import { useEffect } from 'react'
export default function Home(){
    return(
        <div className="home-outer-wrapper" id="wrapper">
            <a href="https://wa.me/c/919321763795" target="_blank"className="fixed-chat-icon"><BsFillChatLeftFill  /></a>
            <Welcome  />
            <About />
            <Products />
            <Faq />
            <Photogallery />
            <Homefooter />
        
        
        
    </div>
    )
}

