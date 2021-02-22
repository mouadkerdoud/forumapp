import React, { Component } from 'react'
import AdminService from "../../../services/admin.service"

import Sidebar from "../../layout/Sidebar/Sidebar"
import Spinner from "../../layout/Spinner/Spinner"


import Chart from "./Chart/Chart"
import AttendingTable from "../../layout/Table/AttendingTable"

import "./Dashboard.css"

export default class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            usersNumber: "",
            postsNumber: "",
            eventsNumber: "",
            attendingsNumber: "",
            attendings: "",
    }

    this.deleteAttending = this.deleteAttending.bind(this)


}

    componentDidMount(){

        AdminService.numberOfUsers()
        .then(result=>{
            this.setState({
                usersNumber:result.data.response
            })
        })
        .catch(err=>{
            console.log(err)
        })

        AdminService.numberOfPosts()
        .then(result=>{
            this.setState({
                postsNumber:result.data.response
            })
        })
        .catch(err=>{
            console.log(err)
        })

        AdminService.numberOfEvents()
        .then(result=>{
            this.setState({
                eventsNumber:result.data.response
            })
        })
        .catch(err=>{
            console.log(err)
        })

        AdminService.findAllPosts()
            .then(result=>{
                this.setState({
                    posts : result.data
                })
            })
            .catch(error=>{
                console.log(error)
            })

        
        AdminService.numberOfAttendings()
            .then(result=>{
                this.setState({
                    attendingsNumber: result.data.response
                })
            })
            .catch(error=>{
                console.log(error)
            })

        
        AdminService.findAllAttendings()
            .then(result=>{
                this.setState({
                    attendings: result.data.reverse()
                })
            })
            .catch(error=>{
                console.log(error)
            })
        
    
    }


    deleteAttending(attendingId){
        const {attendings} = this.state
        const newAttendingList = attendings.filter(attending => attending.attendingId !== attendingId)
        AdminService.deleteAttending(attendingId)
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



    render() {

        const {eventsNumber, usersNumber, postsNumber, attendingsNumber, attendings} = this.state

        if(eventsNumber && usersNumber && postsNumber && attendingsNumber && attendings){
            return (
                <div className="container">
                    <Sidebar />
    
                    <div className="dashboard-content">
                        <h1 className="dashboard-title">Dashboard Admin</h1>
                        <div className="bar">FEE Overview</div>
    
                        <div className="stat-overview">
    
                            <div className="overview">
                                <div className="top-elements">
                                    <span className="number users">{usersNumber}</span>
                                    <i className="fas fa-users dashboard-icon "></i>
                                </div>
                                <p className="stat-title">Total Users</p>
                            </div>
    
                            <div className="overview">
                                <div className="top-elements">
                                    <span className="number posts">{postsNumber}</span>
                                    <i className="fas fa-clipboard dashboard-icon "></i>
                                </div>
                                <p className="stat-title">Total Posts</p>
                            </div>
    
                            <div className="overview">
                                <div className="top-elements">
                                    <span className="number events">{eventsNumber}</span>
                                    <i class="fas fa-calendar-day dashboard-icon "></i>
                                </div>
                                <p className="stat-title">Total Events</p>
                            </div>
    
    
    
                        </div>
    
                        <div className="bar">Statistics</div>
    
                        <Chart
                            eventsNumber={eventsNumber}
                            postsNumber={postsNumber}
                            usersNumber={usersNumber}
                            attendingsNumber={attendingsNumber}
                        />
    
                    <div className="bar">Events Attendings</div>
                    
                    <AttendingTable
                        tableHeads={["Attending ID", "Event Name", "User", "Delete"]}
                        attendings={attendings}
                        deleteAttending={this.deleteAttending}
                     />
    
                    </div>
                </div>
    
            )
        }

        else{
            return (
                <div className="container">
                    <Sidebar />
                    <div className="dashboard-content">
                        <Spinner />
                    </div>
                </div>
            )
        }

        
    }
}
