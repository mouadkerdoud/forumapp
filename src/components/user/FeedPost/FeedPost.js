import React, { Component } from 'react'
import UserService from "../../../services/user.service"
import { withRouter } from "react-router-dom";

import avatar from "../../../img/avatar.jpg"
import postImage from "../../../img/postImage.jpg"

import "./FeedPost.css"


class FeedPost extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(postId){
        this.props.history.push("/post/"+postId);
    }

    componentDidMount(){
        UserService.findAllPosts()
            .then(result=>{
                this.setState({posts:result.data.reverse()})
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render() {

        const {posts} = this.state
        console.log(posts)
        return (
            <>
                { posts.map( (post,index)=>{
                    return(
                        <div key={index} className="post-container">
                            
                            <div className="head-infos">
                                <img alt="avatar" className="user-avatar" src={avatar} />
                                <div className="head-infos-meta">
                                    <p className="post-author">{post.username}</p>
                                    <p className="post-date">{post.publishDate}</p>
                                </div>
                            </div>
                            
                            <h2 onClick={()=>this.handleClick(post.postId)} className="post-title">{post.postTitle}</h2>
                            <p className="short-desc">{post.postShortDescription}</p>
                            <img alt="postImage" className="post-img" src={postImage} />
                        </div>
                    )
                } ) }

               
            </>
            
        )
    }
}


export default withRouter(FeedPost)
