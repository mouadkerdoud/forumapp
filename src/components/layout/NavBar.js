import React from 'react'
import "./Navbar.css"

const NavBar = () => {
    return (
        <header>
            <div className="logo">ENSAK FORUM</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Speakers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>   
            </nav>
            
            <a className="cta" href="#">Register</a>
        </header>
    )
}

export default NavBar
