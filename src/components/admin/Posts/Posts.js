import React, { Component } from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import PostTable from "../../layout/Table/PostTable"
import AdminService from "../../../services/admin.service"

import { Link } from "react-router-dom";

export class Posts extends Component{

    constructor(props){
        super(props)
        this.state={
            posts:[],
            errorMessage:"",
            loading:true
        }
        this.deletePost = this.deletePost.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
    }

    componentDidMount(){
        AdminService.findAllPosts()
        .then(posts=>{
            console.log(posts)
            this.setState({posts:posts.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    
    handleEditClick(postId){
        this.props.history.push("/editpost/"+postId)
    }

    deletePost(postId){
        // let userList=this.state.users
        // let userIndex =  this.state.users.findIndex(user=>user.userId === userId)
        
        // AdminService.deleteUser(userId)
        //     .then(data=>{
        //         userList.splice(userIndex,1)
        //         this.setState({users:userList})
        //     })
        //     .catch(error=>{
        //         console.log(error)
        //     })
    }

    render(){
        return (
            <div className="container" >
                <Sidebar />
                <div className="content">
                    <h1 className="page-title">Posts</h1>
                    <Link to="/addpost"><button className="add-new">Add New</button></Link>
                    <PostTable 
                        tableHeads={["Post ID", "Post Title", "Username", "Edit", "Delete"]}
                        posts={this.state.posts}
                        deletePost={this.deletePost}
                        handleEditClick={this.handleEditClick}
                        className="table" />
                </div >
            </div>
        )
    }

}

export default Posts
