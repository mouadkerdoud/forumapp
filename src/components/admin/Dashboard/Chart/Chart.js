import React, { Component } from 'react'
import {Bar, defaults} from "react-chartjs-2"
import "./Chart.css"

defaults.global.legend.position = "bottom"

export default class Chart extends Component {
    render() {
        const {eventsNumber, usersNumber, postsNumber, attendingsNumber} = this.props
        return (
            <div  className="myChart">

                <Bar 
                    height={300}
                    width={500}
                    data={{
                        labels: ["Number Of Event Attendings", "Number Of Users", "Number Of Posts", "Number Of Events"],
                        datasets : [
                            {
                                label: "General stats",
                                data: [attendingsNumber, usersNumber, postsNumber, eventsNumber],
                                backgroundColor: [
                                    '#4426ff',
                                    '#FF9E06',
                                    '#1A82FF',
                                    '#FF6B06',
                                ]
                            }
                        ]
                    }}

                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }   
                            ]
                        }
                    }}

                />
                
            </div>
        )
    }
}

