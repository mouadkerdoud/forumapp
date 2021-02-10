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


  class AddPost extends Component  {

    constructor(props){
        super(props)
        this.state={
            postTitle:"",
            postShortDescription:"",
            postLongDescription:"",
            username: UserService.currentUserValue.username
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        var {name, value} = e.target
        this.setState({
          [name]:value
        })
      }

      handleSubmit(e){
        e.preventDefault()
        AdminService.addPost(this.state)
            .then(result=>{
                this.setState({})
                this.props.history.push("/posts")
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render(){
        const classes = this.props;
        return (
            <div className="container" >
                <Sidebar />
                <div className="content">
                    <form onSubmit={e=>this.handleSubmit(e)}>
                        <div className="element-form">
                            <h1 className="form-title">Add Post</h1>
                            <TextField
                                value={this.state.postTitle}
                                variant="outlined"
                                margin="normal"
                                required
                                label="Post Title"
                                name="postTitle"
                                autoComplete="title"
                                autoFocus
                                onChange = {e=>this.handleChange(e)}
                            />
                            <TextField
                                value={this.state.postShortDescription}
                                variant="outlined"
                                margin="normal"
                                multiline={true}
                                rows={3}
                                label="Short Description"
                                name="postShortDescription"
                                autoComplete="title"
                                autoFocus
                                onChange = {e=>this.handleChange(e)}
                            />
    
                            <TextField
                                value={this.state.postLongDescription}
                                variant="outlined"
                                margin="normal"
                                multiline={true}
                                rows={5}
                                required
                                label="Long Description"
                                name="postLongDescription"
                                autoComplete="title"
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
                                Add Post
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
   
}

export default withStyles(styles, { withTheme: true })(withRouter(AddPost));
