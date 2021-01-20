import React, {Component} from 'react'
import {SidebarData} from "./SidebarData"
import {Link, withRouter, Redirect} from "react-router-dom"
import UserService from "../../../services/user.service"

import "./Sidebar.css"

class Sidebar extends Component {


     logout(){
        UserService.logOut()
            .then(data=>{
                this.props.history.push("/")
            })
            .catch(error=>{
                console.log(error)
            })
    }   

    render(){
        return (
            <div className="sidebar">
                <div className="sidebar-list-container">
                    {
                        SidebarData.map( (element,key) => {
                            return (
                                <Link onClick={element.link === "/logout" ? ()=>this.logout() : ()=>{return}}  key={key} to={element.link} id={window.location.pathname === element.link ? "active":"'"} className="list-row">
                                    <div id="icon">{element.icon}</div>
                                    <div id="title">{element.title}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
 
}

export default withRouter(Sidebar)
