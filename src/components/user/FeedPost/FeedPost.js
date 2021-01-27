import React, { Component } from 'react'

import avatar from "../../../img/avatar.jpg"
import postImage from "../../../img/postImage.jpg"

import "./FeedPost.css"

export default class FeedPost extends Component {


    render() {
        return (

            <>

                <div className="post-container">
                    
                    <div className="head-infos">
                        <img alt="avatar" className="user-avatar" src={avatar} />
                        <div className="head-infos-meta">
                            <p className="post-author">Mouad Kerdoud</p>
                            <p className="post-date">20 min ago</p>
                        </div>
                    </div>
                    
                    <h2 className="post-title">Post Title</h2>
                    <p className="short-desc">This is a post descriptionThis is a post descriptionThis is a post descriptionThis is a post descriptionThis is a post description</p>
                    <img alt="postImage" className="post-img" src={postImage} />
                </div>


                <div className="post-container">
                    
                    <div className="head-infos">
                        <img alt="avatar" className="user-avatar" src={avatar} />
                        <div className="head-infos-meta">
                            <p className="post-author">Mouad Kerdoud</p>
                            <p className="post-date">20 min ago</p>
                        </div>
                    </div>
                    
                    <h2 className="post-title">Post Title</h2>
                    <p className="short-desc">This is a post descriptionThis is a post descriptionThis is a post descriptionThis is a post descriptionThis is a post description</p>
                    <img alt="postImage" className="post-img" src={postImage} />
                </div>



            </>
            
        )
    }
}
