import React, { Component } from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import PostTable from "../../layout/Table/PostTable"
import AdminService from "../../../services/admin.service"

import { Link, withRouter } from "react-router-dom";

class Posts extends Component{

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
        let postList=this.state.posts
        let postIndex =  this.state.posts.findIndex(post=>post.postId === postId)
        
        AdminService.deletePost(postId)
            .then(data=>{
                postList.splice(postIndex,1)
                this.setState({posts:postList})
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render(){
        console.log(this.state.attendings)
        return (
            <div className="container" >
                <Sidebar />
                <div className="content">
                    <h1 className="page-title">Posts</h1>
                    <Link to="/addpost"><button className="add-new">Add New</button></Link>
                    <PostTable 
                        tableHeads={["Post ID", "Post Title", "Author", "Publish Date", "Edit", "Delete"]}
                        posts={this.state.posts}
                        deletePost={this.deletePost}
                        handleEditClick={this.handleEditClick}
                        className="table" />
                </div >
            </div>
        )
    }

}

export default withRouter(Posts)
