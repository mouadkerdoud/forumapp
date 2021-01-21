import React, { Component } from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import AdminService from "../../../services/admin.service"
import UserTable from "../../layout/Table/UserTable"
import {Link} from "react-router-dom"

export class Users extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[],
            errorMessage:"",
            loading:true
        }
    }

    componentDidMount(){
        AdminService.findAllUsers()
        .then(users=>{
            console.log(users)
            this.setState({users:users.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        return (
            <div className="container" >
            <Sidebar />
            <div className="content">
                <h1 className="page-title">Users</h1>
                <Link to="/adduser"><button className="add-new">Add New</button></Link>
                <UserTable
                    tableHeads={["User ID", "First Name", "Last Name", "Username", "Role", "Edit", "Delete"]}
                    users={this.state.users}
                    className="table" 
                 />
            </div >
        </div>
        )
    }
}

export default Users
