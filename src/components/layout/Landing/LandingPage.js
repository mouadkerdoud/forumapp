import React, {Component} from 'react'
import NavBar from "../Navbar/NavBar"
import {Link} from "react-router-dom"
import UserService from "../../../services/user.service"


import "./LandingPage.css"

import {ReactComponent as Logo} from '../../../img/microphone.svg';


class LandingPage extends Component{

    constructor(props){
        super(props)
        if(UserService.currentUserValue){
            switch(UserService.currentUserValue.role){
              case "ADMIN":
                this.props.history.push("/dashboard")
                break
              case "USER":
                this.props.history.push("/home")
                break
              default:
                break
            }
    }
    }

    render(){
        return (
            <>
                <NavBar />
                <div className="landing-page">
                    <div className="inner-landing">
                        <Logo className="mic-logo" />
                        <p className="secondary-headline">4 - 5 February, 2021, Kenitra City</p>
                        <h1 className="main-headline">FORUM ENSAK ENTREPRISE</h1>
                        <Link to="signIn"><button className="landing-btn">Register</button></Link>
                    </div>
                </div>
            </>
        )
    }
}




export default LandingPage
