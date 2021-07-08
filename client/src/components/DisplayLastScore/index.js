import React from "react";
import "./style.css";

function DisplayLastScore() {
  const lastScore = localStorage.getItem("LastScore");

  return (
      <div className="lastScore-box">
        <div className="lastScore-text">Last score: {lastScore}</div>
      </div>
  );
}

export default DisplayLastScore;
