import React from 'react'
import NavBar from "./NavBar"
import {Link} from "react-router-dom"

import "./LandingPage.css"

import {ReactComponent as Logo} from '../../img/microphone.svg';


const LandingPage = () => {
    return (
        <>
            <NavBar />
            <div className="landing-page">
                <div className="inner-landing">
                    <Logo className="mic-logo" />
                    <p className="secondary-headline">4 - 5 February, 2019, Kenitra City</p>
                    <h1 className="main-headline">FORUM ENSAK ENTREPRISE</h1>
                    <Link to="signIn"><button className="landing-btn">Register</button></Link>
                </div>
            </div>
        </>
    )
}

export default LandingPage
