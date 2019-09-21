import React from "react";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import LocationsList from "./components/LocationsList.js";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <div>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/CharacterList" component={CharacterList} />
      <Route exact path="/LocationsList" component={LocationsList} />
    </div>
  );
}
