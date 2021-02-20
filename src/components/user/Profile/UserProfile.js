import React, { Component } from 'react'
import UserService from "../../../services/user.service"

import Navbar from "../../layout/Navbar/NavBar"


import "./Profile.css"

export default class UserProfile extends Component {

    constructor(props){

        super(props)
        this.state = {
            user: UserService.currentUserValue,
            attendings: [],
            image: ""
        }

        this.findUserAttendings = this.findUserAttendings.bind(this)
    }

    componentDidMount(){
        let {user} = this.state
        UserService.findDocByUserId(user.userId)
            .then(result=>{
                this.setState({
                    image: result.data
                })
            })

        UserService.findAllAttendings()
        .then(result=>{
            this.setState({attendings:result.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    findUserAttendings(){
        const {attendings} = this.state

        const username = this.state.user.username

        const attendedEventsByUser = attendings.filter(attendedEvent=>{
            return attendedEvent.user.username === username
        })

        return attendedEventsByUser
    }

    render() {

        const {user, attendings, image} = this.state
        const userAttendings = this.findUserAttendings()
        
        console.log(userAttendings)

        return (

            <>

                <Navbar />
                <div className="profile-container">
                        <div className="user-infos">    
                            <img src={"data:image/png;base64,"+image.data} className="profile-img"/>

                            <div className="user-cred">
                                <h1 className="profile-name">{user.firstName} {user.lastName}</h1>
                                <p className="profile-username">{user.username}</p>
                            </div>

                            <button className="edit-profile">Edit Profile</button>

                        </div>

                         <div className="profile-user-attendings-section">
                            <h2>Events Attendings</h2>
                                <div className="profile-user-attendings">
                                    {userAttendings && userAttendings.map(attending=>{
                                        return (
                                            <div className="profile-event">
                                                <p className="profile-event-name">{attending.event.eventName}</p>
                                            </div>
                                            
                                        )
                                    })}
                                </div>
                        </div>
                </div>

               
            </>
        )
    }
}
