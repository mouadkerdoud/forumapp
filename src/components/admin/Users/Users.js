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
        this.deleteUser = this.deleteUser.bind(this)
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

    deleteUser(userId){
        let userList=this.state.users
        let userIndex =  this.state.users.findIndex(user=>user.userId === userId)
        
        AdminService.deleteUser(userId)
            .then(data=>{
                userList.splice(userIndex,1)
                this.setState({users:userList})
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
                    deleteUser={this.deleteUser}
                    className="table" 
                 />
            </div >
        </div>
        )
    }
}

export default Users
