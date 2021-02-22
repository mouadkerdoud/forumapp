import React, {Component} from 'react'
import {User} from "../../models/user"
import UserService from "../../services/user.service"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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


const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: "#fafafa",
    padding: "5px",
    height:"60px",
    width:"60px"
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class SignIn extends Component {

  constructor(props){
    super(props)

    if(UserService.currentUserValue){
      switch(UserService.currentUserValue.role){
        case "ADMIN":
          this.props.history.push("/dashboard")
          break
        case "USER":
          this.props.history.push("/home")
          break
        default:
          break
      }
    }


    this.state={
      user: new User("", ""),
      submitted: false,
      errorMessage: null
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

  handleLogin(e){
    e.preventDefault();
    const {user} = this.state
    this.setState({submitted:true})

    if(!(user.username && user.password)){
      return 
    }


    UserService.login(user)
    .then(data=>{
      UserService.currentUserValue && UserService.currentUserValue.role === "USER" ? this.props.history.push("/home") : this.props.history.push("/dashboard")
    })
    .catch(error=>{
      console.log(error)
      this.setState({
        errorMessage: "Username or password is not valid"
            })
    })
  }

  render(){
    const { classes } = this.props;
    const {user, submitted, errorMessage} = this.state

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
            Sign in to FEE
          </Typography>

          <div className={errorMessage && "error-message"}>
              {errorMessage} 
          </div>
          <form className={classes.form} noValidate onSubmit={e=>this.handleLogin(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={user.username}
              onChange = {e=>this.handleChange(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange = {e=>this.handleChange(e)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>

              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );

  }

 
}

export default withStyles(styles, { withTheme: true })(SignIn);

