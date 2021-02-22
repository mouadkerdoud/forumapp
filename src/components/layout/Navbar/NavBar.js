import React, {Component} from 'react'
import {Link} from "react-router-dom"
import SignedOutLinks from "./SignedOutLinks"
import SignedInLinks from "./SignedInLinks"
import UserService from "../../../services/user.service"

import "./Navbar.css"



export default class NavBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            user : "" 
        }
    }

    componentDidMount(){
        UserService.findUserById(UserService.currentUserValue && UserService.currentUserValue.userId)
            .then(result=>{
                this.setState({
                    user : result.data
                })
            })
    }

    render() {
        const {user} = this.state
        
        return (
            <header>
                <Link  className="logo">FEE</Link>
                {UserService.currentUserValue ? <SignedInLinks user={user}  /> : <SignedOutLinks /> }
            </header>
        )
    }
}
