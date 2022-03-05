import "./header.css"
import logo  from '../images/Bottles Hevane Logo .png'
export default function Header(){
    return(
        <header className="header">
            <span className="header-logo-wrapper">
                <img src={ logo } alt="logo of bottles heaven" className="logo"></img>
                <h1><span className = "letter-color">B</span>OTTLES <span className = "letter-color">H</span>EAVEN</h1>
            </span>
            <nav className="nav-bar">
                <ul>
                    <li><a href="#home" class="header-links">Home</a></li>
                    <li><a href="#" class="header-links">Shop</a></li>
                    <li><a href="#services" class="header-links">Services</a></li>
                    <li><a href="#contact" class="header-links">Contact</a></li>
                </ul>
                
            </nav>
            <ul>
                <li><a href="#" class="header-links">Admin</a></li>
            </ul>
        </header>
    )
}
