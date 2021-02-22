import React, { Component } from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import EventTable from "../../layout/Table/EventTable"
import AdminService from "../../../services/admin.service"
import {Link, withRouter} from "react-router-dom"
import Spinner from "../../layout/Spinner/Spinner"

export class Events extends Component{

    constructor(props){
        super(props)
        this.state={
            events:null,
            errorMessage:"",
        }
        this.deleteEvent = this.deleteEvent.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
    }

    componentDidMount(){
        AdminService.findAllEvents()
        .then(events=>{
            this.setState({events:events.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    
    handleEditClick(eventId){
        this.props.history.push("/editevent/"+eventId)
    }

    deleteEvent(eventId){
        let eventList=this.state.events
        let eventIndex =  this.state.events.findIndex(event=>event.eventId === eventId)
        
        AdminService.deleteEvent(eventId)
            .then(data=>{
                eventList.splice(eventIndex,1)
                this.setState({events:eventList})
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render(){
        const {events} = this.state

        if(events){
            return (
                <div className="container" >
                    <Sidebar />
                    <div className="content">
                        <h1 className="page-title">Events</h1>
                        <Link to="/addevent"><button className="add-new">Add New</button></Link>
                        <EventTable 
                            tableHeads={["Event ID", "Event Title", "Start Date", "Finish Date", "Edit", "Delete"]}
                            events={this.state.events}
                            deleteEvent={this.deleteEvent}
                            handleEditClick={this.handleEditClick}
                            className="table" />
                    </div >
                </div>
            )
        }
        else{
            return (
                <div className="container" >
                    <Sidebar />
                    <div className="content">
                        <Spinner />
                    </div>
                </div>
            )
        }

    }

}

export default withRouter(Events)
