import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Chip from '@material-ui/core/Chip';

import avatar from "../../../img/avatar.jpg"
import postImage from "../../../img/postImage.jpg"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  icon: {
      fontSize: "25px"
  },

  chip:{
      width: "400px",
      fontSize:"18px",
      padding: "10px"
  },

  text:{
      color: "#333"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img alt="avatar" className="user-avatar" src={avatar} />
          </Avatar>
        }
        title="September 14, 2016"
        subheader="Shrimp and Chorizo Paella"
        subheaderTypographyProps={{color:"#333"}}
      />
      <CardMedia
        className={classes.media}
        image={postImage}
      />
      <CardContent>
        <Typography className={classes.text} variant="body2"  component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
            <Chip 
                className={classes.chip} 
                clickable 
                icon={ <StarBorderIcon  className={classes.icon}/>} 
                label="Attend"  
            />
      </CardActions>
      
    </Card>
  );
}
