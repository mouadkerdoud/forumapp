import React from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import Table from "../../layout/Table/Table"

const Posts = () => {
    return (
        <div className="container" >
            <Sidebar />
            <div className="content">
                <h1 className="page-title">Posts</h1>
                <button className="add-new">Add New</button>
                <Table className="table" />
            </div >
        </div>
    )
}

export default Posts
