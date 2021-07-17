import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Quiz from "./pages/Quiz";
import WarzoneBG from "./ARPics/WarzoneBG.jpg";

function App() {
  return (
    <div className="background" style={{ backgroundImage: `url(${WarzoneBG})` }} >
      <HashRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Quiz" component={Quiz} />
      </HashRouter>
    </div>
  );
}

export default App;
