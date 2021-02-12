import React, { Component } from 'react'
import FeedPost from "../FeedPost/FeedPost"
import Navbar from "../../layout/Navbar/NavBar"

import "./HomePage.css"

export class HomePage extends Component {

    render() {
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
