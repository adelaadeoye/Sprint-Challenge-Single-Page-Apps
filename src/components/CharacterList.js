import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import {  Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://adeoyeadela.com/">
        Adeoye Adela
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function buttonclick(){
  var buttonValue = document.getElementById('butt').value
  alert(buttonValue)

}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const classes = useStyles();

  const [characters, setCharacters]=useState([])
const [choice,setChoice]=useState("")
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const  characterData= response.data.results
      setCharacters(characterData);
      console.log(characterData)
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <section className="character-list">
       <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
          Rick &amp; Morty Character Page          </Typography>
        </Toolbar>
      </AppBar>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Rick &amp; Morty
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Your best Tv Series so far. Season 4 Coming Soon.....
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                
              </Grid>
            </div>
          </Container>
        </div>
      <div className="grid-view">
      {characters.map(character=><CharacterCard key={character.id}  {...character}/>)}
      </div>
            {/* Footer */}
            <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        Rick &amp; Morty
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Have Fun!!!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>

    </section>
  );
}
