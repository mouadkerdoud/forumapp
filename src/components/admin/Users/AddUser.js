import React from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:  "#1a83ff"
    },
  }));


const AddUser = () => {
    const classes = useStyles();
    return (
        <div className="container" >
            <Sidebar />
            <div className="content">
                <form>
                    <div className="element-form">
                        <h1 className="form-title">Add User</h1>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label="First Name"
                            name="firstName"
                            autoComplete="firstName"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            multiline={true}
                            label="Last Name"
                            name="lastName"
                            autoComplete="lastName"
                            autoFocus
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            multiline={true}
                            required
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />

                        <TextField
                                
                                variant="outlined"
                                margin="normal"
                                id="standard-password-input"
                                required
                                label="Password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                autoFocus
                         />

                    <FormControl id="select" variant="outlined" >
                        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                        <Select 
                            required
                            margin="normal"
                            label="Role"
                            name="role"
                        >
                            <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                            <MenuItem value={"USER"}>USER</MenuItem>
                        </Select>
                        </FormControl>


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add User
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser
