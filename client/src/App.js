import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GameBox from "./components/GameBox";
import AudioClipsTest from "./components/AudioClipsTest";
import Quiz from "./components/Quiz";


function App() {
  
  return (
    <div>
      <HashRouter > 
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route exact path="/GameBox" component={GameBox} />
      <Route exact path="/AudioClipsTest" component={AudioClipsTest} />
      <Route exact path="/Quiz" component={Quiz} />
      </HashRouter>
    </div>
  );
}

export default App;
