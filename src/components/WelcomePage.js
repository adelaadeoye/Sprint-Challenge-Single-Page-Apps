import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";
import Header from "./Header.js";


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function WelcomePage() {
  const classes = useStyles();
  return (
    <main>
    <Header />
    <section className="welcome-page">
      <header>
        <div className="centered">
          <div className="transbox">
            <p>
              Rick and Morty is an American adult animated science fiction
              sitcom created by Justin Roiland and Dan Harmon for Cartoon
              Network's late-night programming block Adult Swim. The series
              follows the misadventures of cynical mad scientist Rick Sanchez
              and his good-hearted but fretful grandson Morty Smith, who split
              their time between domestic life and interdimensional adventures.
              <br></br>
              As of October 1, 2017, 31 episodes of Rick and Morty have aired,
              concluding the third season. The series has been picked up for an
              additional seventy episodes over an unspecified number of seasons.
              The fourth season is scheduled to premiere in November 2019 and
              will once again consist of ten episodes.
            </p>
          </div>
          <Link to="/LocationsList">
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.margin}
            >
              Location
            </Button>
          </Link>
          <Link to="/CharacterList">
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.margin}
            >
              Character
            </Button>
          </Link>
          
        </div>
      </header>
    </section>
    </main>

  );
}
