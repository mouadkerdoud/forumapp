import React, { Component } from 'react'
import FeedPost from "../FeedPost/FeedPost"
import UserService from "../../../services/user.service"
import Navbar from "../../layout/Navbar/NavBar"

import "./HomePage.css"

export class HomePage extends Component {
 
    constructor(props){
        super(props)
          this.state = {
              user: UserService.currentUserValue
          }
    }

    render() {
        const {user} = this.state
        return (
            <>
                <Navbar />
                <div className="homepage-container">
                    <FeedPost  />
                </ div>
            </>
        )
    }
}

export default HomePage
