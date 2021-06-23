import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AudioClipsTest from "./components/AudioClipsTest";
import Quiz from "./pages/Quiz";



function App() {
  
  return (
    <div>
      <HashRouter > 
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route exact path="/AudioClipsTest" component={AudioClipsTest} />
      <Route exact path="/Quiz" component={Quiz} />
      </HashRouter>
    </div>
  );
}

export default App;
