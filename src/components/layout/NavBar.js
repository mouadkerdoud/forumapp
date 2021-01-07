import React from 'react'
import {Link} from "react-router-dom"

import "./Navbar.css"

const NavBar = () => {
    return (
        <header>
            <Link to="/" className="logo">ENSAK FORUM</Link>
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
