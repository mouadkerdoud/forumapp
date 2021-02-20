import React, { Component } from 'react'
import UserService from "../../../services/user.service"
import CloseIcon from '@material-ui/icons/Close';
import Navbar from "../../layout/Navbar/NavBar"
import {withRouter} from "react-router-dom"

import "./Profile.css"

class UserProfile extends Component {

    constructor(props){

        super(props)
        this.state = {
            user: "",
            attendings: [],
            image: ""
        }

        this.findUserAttendings = this.findUserAttendings.bind(this)
        this.deleteAttending = this.deleteAttending.bind(this)
        this.handleEditProfileClick= this.handleEditProfileClick.bind(this)
    }

    componentDidMount(){
        UserService.findUserById(UserService.currentUserValue.userId)
            .then(result=>{
                this.setState({
                    user: result.data
                })
            })

        UserService.findDocByUserId(UserService.currentUserValue.userId)
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

    deleteAttending(eventId){
        const {attendings, user} = this.state;
        const attendingId = attendings.filter(attending => attending.event.eventId === eventId && attending.user.userId === user.userId)[0].attendingId
        const newAttendingList = attendings.filter(attending => attending.attendingId !== attendingId)
        UserService.deleteAttending(attendingId)
            .then(result=>{
                console.log("Deleted")
                this.setState({
                    attendings: newAttendingList
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }


    handleEditProfileClick(){
        this.props.history.push("/update-profile/"+this.state.user.userId)
    }

    
    render() {

        const {user, image} = this.state
        const userAttendings = this.findUserAttendings()
        
        console.log(userAttendings)

        return (

            <>

                <Navbar />
                <div className="profile-container">
                        <div className="user-infos">    
                            <img alt="" src={"data:image/png;base64,"+image.data} className="profile-img"/>

                            
                            <div className="user-cred">
                                <h1 className="profile-name">{user.firstName} {user.lastName}</h1>
                                <p className="profile-username">{user.username}</p>
                            </div>

                            <button
                              onClick={this.handleEditProfileClick}
                              className="edit-profile"
                             >
                                 Edit Profile
                            </button>

                        </div>

                         <div className="profile-user-attendings-section">
                            <h2>Events Attendings</h2>
                                <div className="profile-user-attendings">
                                    {userAttendings && userAttendings.map(attending=>{
                                        return (
                                            <div className="profile-event">
                                                <p className="profile-event-name">{attending.event.eventName}</p>
                                                <CloseIcon
                                                    onClick={()=>this.deleteAttending(attending.event.eventId)}
                                                    className="profile-icon"
                                                  />
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

export default withRouter(UserProfile)