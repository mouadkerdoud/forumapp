import React from 'react'
import Sidebar from "../../layout/Sidebar/Sidebar"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:  "#1a83ff"
    }
  }));


const AddEvent = () => {
    const classes = useStyles();
    return (
        <div className="container" >
            <Sidebar />
            <div className="content">
                <form>
                    <div className="element-form">
                        <h1 className="form-title">Add Event</h1>

                        <div className="input-field">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth="true"
                                required
                                label="Event Title"
                                name="title"
                                autoComplete="title"
                                autoFocus
                            />
                        </div>
                        
                        <div className="input-field">
                            <TextField
                                id="datetime-local"
                                fullWidth="true"
                                label="Date Event"
                                type="datetime-local"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                         </div>

                        <div className="input-field">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth="true"
                                multiline={true}
                                rows={3}
                                label="Short Description"
                                name="Short Description"
                                autoComplete="title"
                                autoFocus
                            />
                        </div>

                        <div className="input-field">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                multiline={true}
                                fullWidth="true"
                                rows={5}
                                required
                                label="Long Description"
                                name="long-desc"
                                autoComplete="title"
                                autoFocus
                            />
                        </div>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add Event
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEvent
