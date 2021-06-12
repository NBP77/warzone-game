import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GameStart from "./components/GameStart";

function App() {
  return (
    <div>
      <HashRouter > 
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route exact path="/GameStart" component={GameStart} />
      </HashRouter>
    </div>
  );
}

export default App;
