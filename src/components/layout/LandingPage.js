import React from 'react'
import NavBar from "./NavBar"


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
                    <button className="landing-btn">Register</button>
                </div>
            </div>
        </>
    )
}

export default LandingPage
