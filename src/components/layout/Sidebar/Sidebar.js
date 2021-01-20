import React from 'react'
import {SidebarData} from "./SidebarData"
import {Link} from "react-router-dom"
import UserService from "../../../services/user.service"
import {Redirect} from "react-router-dom"

import "./Sidebar.css"

const Sidebar = () => {


    const logout = ()=>{
        UserService.logOut()
            .then(data=>{
                <Redirect to="/" />
            })
            .catch(error=>{
                console.log(error)
            })
    }   

    return (
        <div className="sidebar">
            <div className="sidebar-list-container">
                {
                    SidebarData.map( (element,key) => {
                        return (
                            <Link onClick={element.link === logout && logout} key={key} to={element.link} id={window.location.pathname === element.link ? "active":"'"} className="list-row">
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

export default Sidebar
