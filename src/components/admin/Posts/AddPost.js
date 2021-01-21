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


const AddPost = () => {
    const classes = useStyles();
    return (
        <div className="container" >
            <Sidebar />
            <div className="content">
                <form>
                    <div className="element-form">
                        <h1 className="form-title">Add Post</h1>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label="Post Title"
                            name="title"
                            autoComplete="title"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            multiline={true}
                            rows={3}
                            label="Short Description"
                            name="Short Description"
                            autoComplete="title"
                            autoFocus
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            multiline={true}
                            rows={5}
                            required
                            label="Long Description"
                            name="long-desc"
                            autoComplete="title"
                            autoFocus
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

export default AddPost
