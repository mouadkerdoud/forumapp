import React, { Component } from 'react'
import {Link, withRouter} from "react-router-dom"
import UserService from "../../../services/user.service"


class SignedInLinks extends Component {

    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(){
        UserService.logOut()
            .then(data=>{
                this.props.history.push("/")
            })
            .catch(error=>{
                console.log(error)
            })
    }   
    
    render() {
        return (
            <>
                <nav>
                <ul className="nav-links">
                    <li><a href="#">Feed</a></li>
                    <li><a href="#">Something</a></li>
                    <li><a href="#">Something</a></li>
                </ul>   
                </nav>
                
                <Link onClick={()=>this.logout()}  className="cta" >Log Out</Link>
            </>
        )
    }
}

export default withRouter(SignedInLinks)
