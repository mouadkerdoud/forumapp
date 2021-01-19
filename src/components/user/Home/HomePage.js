import React, { Component } from 'react'
import UserService from "../../../services/user.service"
import {Redirect} from "react-router-dom"

export class HomePage extends Component {
 
    constructor(props){
        super(props)

        if(!UserService.currentUserValue){
            <Redirect to="/signIn" />
            return;
          }

          this.state = {
              user: UserService.currentUserValue
          }
    }

    render() {
        const {user} = this.state
        return (
            <div>
                <h1>HELLO {user.firstName} {user.lastName} {user.username} {user.role} {user.userId} </h1>
            </div>
        )
    }
}

export default HomePage
