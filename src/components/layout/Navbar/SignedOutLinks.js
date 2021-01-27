import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class SignedOutLinks extends Component {
  render() {
    return (
      <>
        <nav>
            <ul className="nav-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>   
        </nav>
        
        <Link to="signIn" className="cta" >Register</Link>
      </>
    )
  }
}
