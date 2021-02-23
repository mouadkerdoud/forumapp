import React, { Component } from 'react'
import UserService from "../../../services/user.service"
import {withRouter} from "react-router-dom"
import postImage from "../../../img/postImage.jpg"
import Navbar from "../../layout/Navbar/NavBar"


import "./PostDetails.css"

class PostDetail extends Component {

    constructor(props){
        
        super(props);
        
        this.state={
            postId:this.props.match.params.id,
            postTitle:"",
            postShortDescription:"",
            postLongDescription:"",
            publishDate: "",
            username: ""
        }

        if(!UserService.currentUserValue){
            this.props.history.push("/signIn")
            return
        }
        if(UserService.currentUserValue.role !== "USER"){
            this.props.history.push("/401")
        }
    }

    componentDidMount(){
        let postId = this.state.postId
        UserService.findPostById(postId)
            .then(result=>{
                this.setState({ 
                postTitle: result.data.postTitle,
                postShortDescription: result.data.postShortDescription,
                postLongDescription: result.data.postLongDescription,
                publishDate: result.data.publishDate,
                username: result.data.user.username,
              })
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {
        console.log(this.state)
        const {postTitle, postShortDescription, postLongDescription, publishDate, username} = this.state
        return (
            <>
                <Navbar />
                <div  className="post-details-container">
                    <div className="post-details-content">
                        <h1 className="details-title">{postTitle}</h1>
                        <p className="details-meta"><em>{publishDate}</em> - <b>{username}</b></p>
                        <img alt="postImage" className="details-img" src={postImage} />
                        <p className="details-desc">{postLongDescription}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(PostDetail)
