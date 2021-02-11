import React, { Component } from 'react'
import EventCard from "./EventCard"
import UserService from "../../../services/user.service"
import Navbar from "../../layout/Navbar/NavBar"

import "./FeedEvents.css"

export default class FeedEvents extends Component {

    constructor(props){
        super(props)
        this.state = {
            events:[]
        }
    }

    componentDidMount(){
        UserService.findAllEvents()
            .then(result=>{
                this.setState({events:result.data.reverse()})
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render() {
        console.log(this.state)
        const {events} = this.state
        return (

            <>
            <Navbar />
            <div className="events-container">
                {events.map((event,index)=>{
                    return <EventCard key={index} event={event} />

                })}
             </div>
             </>
        )
    }
}
