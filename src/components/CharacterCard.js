import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Route, Link} from "react-router-dom"
 
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 300,
  },
});;


const CharacterCard = (props)=> {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hey yo! I have acted in {props.episode.length} episodes of Rick and Morty and I was created in {props.created}. I'm {props.species}, my status for now is "{props.status}". Guess what? I'm {props.gender} I live in {props.location.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button color="primary"variant="contained" href={props.url} className={classes.button}>
        check my API
      </Button>
        
      </CardActions>
    </Card>
  );
}
export default CharacterCard;