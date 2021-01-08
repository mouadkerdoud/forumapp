import React from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"

const Dashboard = () => {
    return (
        <div className="container" >
            <Sidebar />
            <div className="content">
                <h1>THIS IS THE DASHBOARD</h1>
            </div>
        </div>
    )
}

export default Dashboard
