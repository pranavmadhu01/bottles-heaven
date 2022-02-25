import "./header.css"
export default function Header(){
    return(
        <header className="header">
            <span className="header-logo-wrapper">
                <img src="#" alt="logo of bottles heaven"></img>
                <h1>BOTTLES HEAVEN</h1>
            </span>
            <nav className="nav-bar">
                <ul>
                    <li><a href="#home" class="header-links">Home</a></li>
                    <li><a href="#" class="header-links">Shop</a></li>
                    <li><a href="#services" class="header-links">Services</a></li>
                    <li><a href="#contact" class="header-links">Contact</a></li>
                </ul>
                <ul>
                    <li><a href="#" class="header-links">Admin</a></li>
                </ul>
            </nav>
        </header>
    )
}
