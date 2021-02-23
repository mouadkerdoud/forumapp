import React, {Component} from 'react'
import UserService from "../../../services/user.service"

import {withRouter} from "react-router-dom"

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';

import { withStyles } from '@material-ui/core/styles';

import Navbar from "../../layout/Navbar/NavBar"
import avatarProfile from "../../../img/user.png"



const styles = theme => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:  "#1a83ff"
    }
  })


class UpdateProfile extends Component {

    constructor(props){
        super(props)
        this.state={
            userId: this.props.match.params.id,
            firstName:"",
            lastName:"",
            username:"",
            password:"",
            role:"",
            image: "",
            file:null,
        }

        if(!UserService.currentUserValue){
            this.props.history.push("/signIn")
            return
        }
        if(UserService.currentUserValue.role !== "USER"){
            this.props.history.push("/401")
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onFileChange = this.onFileChange.bind(this)

    }

    componentDidMount(){

        let userID = this.state.userId
        UserService.findUserById(userID)
            .then(result=>{
                this.setState({ firstName: result.data.firstName,
                lastName: result.data.lastName,
                username: result.data.username,
                password: result.data.password,
                role: result.data.role
              })
            })
            .catch(error=>{
                console.log(error)
            })


            UserService.findDocByUserId(UserService.currentUserValue.userId)
            .then(result=>{
                this.setState({
                    image: result.data
                })
            })
    }

    handleChange(e){
        var {name, value} = e.target
        this.setState({
          [name]:value
        })
      }

      
    onFileChange(e){
        this.setState({
            file: e.target.files[0]
        })
    }

    handleSubmit(e){
        e.preventDefault()
        let {file, userId, image} = this.state
        let user = this.state
        
        delete user["file"]
        delete user["image"]
        delete user["isNewUser"]


        UserService.updateUser(user)
            .then(result=>{

                if(file){

                    if(image){
                        UserService.updateUserFile(file, userId)
                        .then(result=>{
                            this.props.history.push("/profile")
                        })
                        .catch(error=>{
                            console.log(error)
                        })
                    }else{
                        UserService.uploadUserFiles(file, userId)
                        .then(result=>{
                            this.props.history.push("/profile")
                        })
                        .catch(error=>{
                            console.log(error)
                        })
                    }
                    
                }
                else this.props.history.push("/profile")
                
            })
            .catch(error=>{
                console.log(error)
            })
    }

 

    render(){

        const { classes } = this.props
        const {image} = this.state
        const fileInput = React.createRef(null)

        const profileImage = image ? <img alt="" src={"data:image/png;base64,"+image.data} className="edit-profile-img"/> : <img alt="" src={avatarProfile} className="decoil-img" />
        return (
            <>
            <Navbar />
            <div className="container update-profile-container" >
                <div style={{marginTop:"40px"}} className="content">
                    <form onSubmit={e=>this.handleSubmit(e)} >
                        <div className="element-form">
                            <h1 className="form-title">Update Profile</h1>

                            {profileImage}
                            
                            
                            <CreateIcon
                                onClick={()=>fileInput.current.click()}
                                className="change-img" 
                            />


                            <input 
                                ref={fileInput} 
                                type="file" 
                                onChange={this.onFileChange} 
                                style={{display:"none"}}
                            />

                            <TextField
                                value={this.state.firstName}
                                variant="outlined"
                                margin="normal"
                                required
                                label="First Name"
                                name="firstName"
                                autoComplete="firstName"
                                autoFocus
                                onChange = {e=>this.handleChange(e)}
                            />
                            <TextField
                                variant="outlined"
                                value={this.state.lastName}
                                margin="normal"
                                multiline={true}
                                label="Last Name"
                                name="lastName"
                                autoComplete="lastName"
                                autoFocus
                                onChange = {e=>this.handleChange(e)}
                                required
                            />
    
                            <TextField
                                variant="outlined"
                                value={this.state.username}
                                margin="normal"
                                multiline={true}
                                required
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange = {e=>this.handleChange(e)}
                            />
    
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Update Profile
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    }
    
}

export default withStyles(styles, { withTheme: true })(withRouter(UpdateProfile));
