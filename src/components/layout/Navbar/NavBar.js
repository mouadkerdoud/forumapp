import React, {Component} from 'react'
import {Link} from "react-router-dom"
import SignedOutLinks from "./SignedOutLinks"
import SignedInLinks from "./SignedInLinks"
import UserService from "../../../services/user.service"

import "./Navbar.css"



export default class NavBar extends Component {
    render() {
        return (
            <header>
                <Link  className="logo">FEE</Link>
                {UserService.currentUserValue ? <SignedInLinks /> : <SignedOutLinks /> }
            </header>
        )
    }
}
