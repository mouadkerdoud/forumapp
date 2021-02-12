import React, { Component } from 'react'
import EventCard from "./EventCard"
import UserService from "../../../services/user.service"
import Navbar from "../../layout/Navbar/NavBar"

import {User} from "../../../models/user"
import {Attending} from "../../../models/attending"

import "./FeedEvents.css"

export default class FeedEvents extends Component {

    constructor(props){
        super(props)
        this.state = {
            events:[],
            attendings: [],
            errorMessage: "",
            currentUser: new User()
        }

        this.attendEvent = this.attendEvent.bind(this)
        this.deleteAttending = this.deleteAttending.bind(this)
        this.isAttended = this.isAttended.bind(this)
    }

    componentDidMount(){

        UserService.currentUser.subscribe(data=>{
            this.setState({
                currentUser: data
            })
        })

        UserService.findAllEvents()
            .then(result=>{
                this.setState({events:result.data.reverse()})
            })
            .catch(err=>{
                console.log(err)
            })

        UserService.findAllAttendings()
            .then(result=>{
                this.setState({attendings:result.data})
            })
            .catch(err=>{
                console.log(err)
            })
    }


    deleteAttending(eventId){
        const {attendings, currentUser} = this.state;
        const attendingId = attendings.filter(attending => attending.event.eventId === eventId && attending.user.userId === currentUser.userId)[0].attendingId
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

    attendEvent(eventId){
        const attendingsList = this.state.attendings
        const {events} = this.state
        let chosenEvent={}
        events.forEach(event=>{
            if(event.eventId === eventId) chosenEvent = event 
        })
        let attending = new Attending(this.state.currentUser, chosenEvent)

        UserService.attendEvent(attending)
            .then(data=>{
                attendingsList.push(attending)
                this.setState({attendings: attendingsList })
                console.log("Success!")
            })
            .catch(error=>{
                console.log(error)
            })
    }

    isAttended(eventId){
        const attendedEvents = this.state.attendings

        const attendedEventsByUser = attendedEvents.filter(attendedEvent=>{
            return attendedEvent.user.username === UserService.currentUserValue.username
        })

       return attendedEventsByUser.some(attendedEventByUser => {
           return attendedEventByUser.event.eventId === eventId
       })
    }

    render() {
        const {events} = this.state
        console.log(this.state.attendings)
        if(events){
            return (

                <>
                <Navbar />
                <div className="events-container">
                    { events.map((event,index)=>{
                        return (
                                <EventCard 
                                    key={index} 
                                    event={event} 
                                    attendEvent={this.attendEvent} 
                                    deleteAttending={this.deleteAttending}
                                    isAttended={this.isAttended(event.eventId)} 
                                />
                            )
                    })}
                 </div>
                 </>
            )
        }

        else{
            return(<h1>Loading ...</h1>)
        }

    }
}
