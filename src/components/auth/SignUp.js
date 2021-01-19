import React, {Component} from 'react'
import  {User} from "../../models/user"
import UserService from "../../services/user.service"
import {Redirect} from "react-router-dom"


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ReactComponent as Logo} from '../../img/microphone.svg';
import {Link as LinkRouter} from "react-router-dom"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        FEE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme  => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#fafafa",
    padding: "5px",
    height:"60px",
    width:"60px"
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends Component {

  constructor(props){
    super(props)

    if(UserService.currentUserValue){
      <Redirect to="/home" />
    }

    this.state={
      user: new User("", ""),
      submitted: false,
      loading: false,
      errorMessage: ""
    }

    
  }

  handleChange(e){
    var {name, value} = e.target
    var user= this.state.user
    user[name] = value
    this.setState({
      user: user
    })
  }

  handleRegister(e){
    e.preventDefault();
    const {user} = this.state
    this.setState({submitted:true})

    if(!(user.username && user.password && user.firstName && user.lastName)){
      return 
    }

    this.setState({loading:true})

    UserService.register(user)
    .then(data=>{
      <Redirect to="/signIn" />
    })
    .catch(error=>{
      if(error.response.status === 409){
          this.setState({
            errorMessage: "Username is already taken",
            loading: false
          })
      }
      else{
        this.setState({
          errorMessage:"Unexpected error ocurred, try later",
          loading:false
        })
      }
    })
  }

  render(){
    const { classes } = this.props;
    const {user, submitted, loading, errorMessage} = this.state

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <LinkRouter to="/">
              <Avatar className={classes.avatar}>
                  <Logo />
              </Avatar>
          </LinkRouter>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={e=>this.handleRegister(e)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange = {e=>this.handleChange(e)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                  onChange = {e=>this.handleChange(e)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange = {e=>this.handleChange(e)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange = {e=>this.handleChange(e)}

                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
  
}

export default withStyles(styles, { withTheme: true })(SignUp);
