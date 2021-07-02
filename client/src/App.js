import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";



function App() {
  



  return (
    <div>
      <HashRouter > 
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route exact path="/Quiz" component={Quiz} />
      </HashRouter>
    </div>
  );
}

export default App;
