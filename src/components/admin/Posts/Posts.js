import React from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import Table from "../../layout/Table/Table"

import { Link } from "react-router-dom";

const Posts = () => {
    return (
        <div className="container" >
            <Sidebar />
            <div className="content">
                <h1 className="page-title">Posts</h1>
                <Link to="/addpost"><button className="add-new">Add New</button></Link>
                <Table className="table" />
            </div >
        </div>
    )
}

export default Posts
