import React from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import UserTable from "../../layout/Table/UserTable"
import {Link} from "react-router-dom"

const Events = () => {
    return (
        <div className="container" >
            <Sidebar />
            <div className="content">
                <h1 className="page-title">Events</h1>
                <Link to="/addevent"><button className="add-new">Add New</button></Link>
                <UserTable className="table" />
            </div >
        </div>
    )
}

export default Events
