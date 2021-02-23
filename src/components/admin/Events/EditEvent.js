import React, {Component} from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from "react-router-dom"
import AdminService from "../../../services/admin.service"
import UserService from "../../../services/user.service"



const styles = theme => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:  "#1a83ff"
    }
  });

  class EditEvent extends Component {
    constructor(props){
        super(props)
        this.state={
            eventId: this.props.match.params.id,
            eventName:"",
            eventDescription:"",
            startDate: "",
            finishDate: ""
        }

        
        if(!UserService.currentUserValue){
            this.props.history.push("/signIn")
            return
        }
        if(UserService.currentUserValue.role !== "ADMIN"){
            this.props.history.push("/401")
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){

        let eventId = this.state.eventId
        AdminService.findEventById(eventId)
            .then(result=>{
                this.setState({ 
                eventName: result.data.eventName,
                eventDescription: result.data.eventDescription,
                startDate: result.data.startDate,
                finishDate: result.data.finishDate,
              })
            })
            .catch(error=>{
                console.log(error)
            })
    }


    handleChange(e){
        var {name, value} = e.target
        this.setState({
          [name]:value
        })
      }

      handleSubmit(e){
        e.preventDefault()
        AdminService.updateEvent(this.state)
            .then(result=>{
                this.setState({})
                this.props.history.push("/events")
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render(){
        const {classes} = this.props;
        return (
            <div className="container" >
                <Sidebar />
                <div className="content add-content">
                    <form onSubmit={e=>this.handleSubmit(e)}>
                        <div className="element-form">
                            <h1 className="form-title">Edit Event</h1>
    
                            <div className="input-field">
                                <TextField
                                    value={this.state.eventName}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth={true}
                                    required
                                    label="Event Title"
                                    name="eventName"
                                    autoComplete="title"
                                    autoFocus
                                    onChange = {e=>this.handleChange(e)}
                                />
                            </div>
                            
                            <div className="input-field">
                                <TextField
                                    value={this.state.startDate}
                                    name="startDate"
                                    id="datetime-local"
                                    fullWidth={true}
                                    label="Starting Date"
                                    type="datetime-local"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    required
                                    onChange = {e=>this.handleChange(e)}
                                />
                             </div>
    
                             <div className="input-field">
                                <TextField
                                    value={this.state.finishDate}
                                    name="finishDate"
                                    id="datetime-local"
                                    fullWidth={true}
                                    label="Ending Date"
                                    type="datetime-local"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    required
                                    onChange = {e=>this.handleChange(e)}
                                />
                             </div>

    
                            <div className="input-field">
                                <TextField
                                    value={this.state.eventDescription}
                                    variant="outlined"
                                    margin="normal"
                                    multiline={true}
                                    fullWidth={true}
                                    rows={5}
                                    required
                                    label="Event Description"
                                    name="eventDescription"
                                    autoComplete="title"
                                    autoFocus
                                    onChange = {e=>this.handleChange(e)}
                                />
                            </div>
    
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Edit Event
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default withStyles(styles, { withTheme: true })(withRouter(EditEvent));
