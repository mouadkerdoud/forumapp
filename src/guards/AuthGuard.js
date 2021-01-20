import React, { Component } from 'react'
import {Route, Redirect} from "react-router-dom"
import UserService from "../services/user.service"

export class AuthGuard extends Component {

    constructor(props){
        super(props)
    }


    render() {
        const {component: Component, roles} = this.props
        const currentUser = UserService.currentUserValue
        
        if(!currentUser){
            return <Redirect to="/signIn" />
        }
        if(roles && roles.indexOf(currentUser.role) === -1){
            return <Redirect to="401" />
        }
        return (
            <Component />
        )
    }
}

export default AuthGuard
