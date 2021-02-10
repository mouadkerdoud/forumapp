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
                    <li><Link to="/home">Feed</Link></li>
                    <li><Link to="/home">Something</Link></li>
                    <li><Link to="/home">Something</Link></li>
                </ul>   
                </nav>
                
                <Link onClick={()=>this.logout()}  className="cta" >Log Out</Link>
            </>
        )
    }
}

export default withRouter(SignedInLinks)
