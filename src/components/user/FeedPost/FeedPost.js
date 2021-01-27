import React, { Component } from 'react'
import UserService from "../../../services/user.service"

import avatar from "../../../img/avatar.jpg"
import postImage from "../../../img/postImage.jpg"

import "./FeedPost.css"

export default class FeedPost extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        UserService.findAllPosts()
            .then(result=>{
                this.setState({posts:result.data})
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
                                    <p className="post-date">20 min ago</p>
                                </div>
                            </div>
                            
                            <h2 className="post-title">{post.postTitle}</h2>
                            <p className="short-desc">{post.postShortDescription}</p>
                            <img alt="postImage" className="post-img" src={postImage} />
                        </div>
                    )
                } ) }

               
            </>
            
        )
    }
}
