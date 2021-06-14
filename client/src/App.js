import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GameBox from "./components/GameBox";
import AudioClipsTest from "./components/AudioClipsTest";


function App() {
  return (
    <div>
      <HashRouter > 
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route exact path="/GameBox" component={GameBox} />
      <Route exact path="/AudioClipsTest" component={AudioClipsTest} />
      </HashRouter>
    </div>
  );
}

export default App;
