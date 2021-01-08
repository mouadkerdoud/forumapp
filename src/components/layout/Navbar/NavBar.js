import React from 'react'
import {Link} from "react-router-dom"

import SignedOutLinks from "./SignedOutLinks"
import "./Navbar.css"

const NavBar = () => {
    return (
        <header>
            <Link to="/" className="logo">FEE</Link>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Speakers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>   
            </nav>
            
            <SignedOutLinks />
        </header>
    )
}

export default NavBar
